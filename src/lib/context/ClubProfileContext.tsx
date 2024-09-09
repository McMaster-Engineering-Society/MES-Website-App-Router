import React, { createContext, useContext, useEffect } from 'react';

import {
  useFetchClubProfile,
  useUpdateClubProfile,
} from '@/lib/hooks/clubProfileHooks';

import { SocialMedia, TClubProfile } from '@/types/clubProfile';

export type TClubProfileContext = {
  profileData: TClubProfile;
  clubId: string;
  setClubId: React.Dispatch<React.SetStateAction<string>>;
  setProfileData: React.Dispatch<React.SetStateAction<TClubProfile>>;
  handleChange: (fields: Partial<TClubProfile>) => void;
  handleSave: () => Promise<string>;
  hasChanges: boolean;
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
  const { data: persistedProfile, status } = useFetchClubProfile(clubId);
  const [profileData, setProfileData] = React.useState<TClubProfile>({
    _id: '',
    name: '',
    clubId: '',
    profilePicture: '',
    email: '',
    description: '',
    socials: {} as Record<SocialMedia, string>,
  });
  const [profileUpdates, setProfileUpdates] = React.useState<
    Partial<TClubProfile>
  >({});
  const updateProfile = useUpdateClubProfile();
  const hasChanges = Object.keys(profileUpdates).length > 0;

  useEffect(() => {
    if (persistedProfile) {
      setProfileData(persistedProfile);
    }
  }, [persistedProfile]);

  const handleChange = (fields: Partial<TClubProfile>) => {
    setProfileData((prevData) => ({
      ...prevData,
      ...fields,
    }));

    setProfileUpdates((prevUpdates) => ({
      ...prevUpdates,
      ...fields,
    }));
  };

  const handleSave = (): Promise<string> => {
    const updates = { ...profileUpdates, clubId: clubId };
    return new Promise((resolve) => {
      updateProfile.mutate(updates, {
        onSuccess: () => {
          setProfileUpdates({});
          resolve('Profile updated successfully');
        },
        onError: () => {
          resolve('Error updating profile');
        },
      });
    });
  };

  return (
    <ClubProfileContext.Provider
      value={{
        profileData,
        clubId,
        setClubId,
        setProfileData,
        handleChange,
        handleSave,
        hasChanges,
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
