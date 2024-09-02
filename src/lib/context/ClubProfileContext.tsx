import React, { createContext, useContext, useEffect } from 'react';

import { useFetchClubProfile } from '@/lib/hooks/clubProfileHooks';

import { SocialMedia, TClubProfile } from '@/types/clubProfile';

export type TClubProfileContext = {
  profileData: TClubProfile;
  clubId: string;
  setClubId: React.Dispatch<React.SetStateAction<string>>;
  setProfileData: React.Dispatch<React.SetStateAction<TClubProfile>>;
  handleChange: (field: string, value: string) => void;
  handleSocialChange: (name: SocialMedia, value: string) => void;
  handleSocialDelete: (name: SocialMedia) => void;
  handleSave: () => void;
  status: string;
};
type Props = {
  children: React.ReactNode;
};
export const ClubProfileContext = createContext<
  TClubProfileContext | undefined
>(undefined);

export const ClubProfileProvider = ({ children }: Props) => {
  const [clubId, setClubId] = React.useState<string>('1');
  const { data: currentProfile, status } = useFetchClubProfile(clubId);
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

  useEffect(() => {
    if (currentProfile) {
      setProfileData(currentProfile);
    }
  }, [currentProfile]);

  const handleChange = (field: string, value: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSocialChange = (name: SocialMedia, value: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      socials: {
        ...prevData.socials,
        [name]: value,
      },
    }));
  };

  const handleSocialDelete = (name: SocialMedia) => {
    setProfileData((prevData) => {
      const updatedSocialMedia = { ...prevData.socials };
      delete updatedSocialMedia[name];
      return {
        ...prevData,
        socials: updatedSocialMedia,
      };
    });
  };

  const handleSave = () => {
    return true;
  };

  return (
    <ClubProfileContext.Provider
      value={{
        profileData,
        clubId,
        setClubId: setClubId,
        setProfileData,
        handleChange,
        handleSocialChange,
        handleSocialDelete,
        handleSave,
        status,
      }}
    >
      {children}
    </ClubProfileContext.Provider>
  );
};

export const useClubProfileContext = () => {
  const context = useContext(ClubProfileContext);
  if (context === undefined) {
    throw new Error(
      'useClubProfileContext must be used within a ClubProfileProvider',
    );
  }
  return context;
};
