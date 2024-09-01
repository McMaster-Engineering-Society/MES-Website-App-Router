import React, { createContext } from 'react';

import { useFetchClubProfile } from '@/lib/hooks/clubProfileHooks';

import { SocialMedia, TClubProfile } from '@/types/clubProfile';

export type TClubProfileContext = {
  profileData: TClubProfile;
  setProfileData: React.Dispatch<React.SetStateAction<TClubProfile>>;
  handleChange: (field: string, value: string) => void;
  handleSocialChange: (name: SocialMedia, value: string) => void;
  handleSocialDelete: (name: SocialMedia) => void;
};
type Props = {
  children: React.ReactNode;
};
export const ClubProfileContext = createContext<
  TClubProfileContext | undefined
>(undefined);

export const ClubProfileProvider = ({ children }: Props) => {
  const [clubId, _setClubId] = React.useState<string>('1');
  const { data: currentProfile } = useFetchClubProfile(clubId);
  const [profileData, setProfileData] = React.useState<TClubProfile>(
    currentProfile || {
      _id: '',
      name: '',
      clubId: '',
      profilePicture: '',
      email: '',
      description: '',
      socials: {} as Record<SocialMedia, string>,
    },
  );

  const handleChange = (field: string, value: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSocialChange = (name: SocialMedia, value: string) => {
    const updatedSocialMedia = profileData.socials;
    updatedSocialMedia[name] = value;
    setProfileData((prevData) => ({
      ...prevData,
      socials: updatedSocialMedia,
    }));
  };

  const handleSocialDelete = (name: SocialMedia) => {
    const updatedSocialMedia = profileData.socials;
    delete updatedSocialMedia[name];
    setProfileData((prevData) => ({
      ...prevData,
      socials: updatedSocialMedia,
    }));
  };

  return (
    <ClubProfileContext.Provider
      value={{
        profileData,
        setProfileData,
        handleChange,
        handleSocialChange,
        handleSocialDelete,
      }}
    >
      {children}
    </ClubProfileContext.Provider>
  );
};
