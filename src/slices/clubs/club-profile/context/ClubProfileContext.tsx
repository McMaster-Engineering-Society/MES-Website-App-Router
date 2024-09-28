import React, { createContext, useContext, useEffect } from 'react';

import {
  useFetchClubProfile,
  useUpdateClubProfile,
} from '@/slices/clubs/club-profile/hooks/clubProfileHooks';
import {
  SocialMedia,
  TClubProfile,
} from '@/slices/clubs/club-profile/types/clubProfile';

export type TClubProfileContext = {
  profileData: TClubProfile;
  clubId: string;
  setProfileData: React.Dispatch<React.SetStateAction<TClubProfile>>;
  handleChange: (fields: Partial<TClubProfile>) => void;
  handleSave: () => Promise<string>;
  hasChanges: boolean;
  isLoading: boolean;
  isError: boolean;
};
type Props = {
  children: React.ReactNode;
};
export const ClubProfileContext = createContext<
  TClubProfileContext | undefined
>(undefined);

export const ClubProfileProvider = ({ children }: Props) => {
  const clubId = '1';
  const {
    data: persistedProfile,
    isLoading: queryLoading,
    isError,
  } = useFetchClubProfile(clubId);
  const [profileData, setProfileData] = React.useState<TClubProfile>({
    _id: '',
    name: '',
    clubId: '',
    profilePicture: '',
    email: '',
    description: '',
    socials: {} as Record<SocialMedia, string>,
  });
  const [isLoading, setIsLoading] = React.useState(true);
  const [profileUpdates, setProfileUpdates] = React.useState<
    Partial<TClubProfile>
  >({});
  const updateProfile = useUpdateClubProfile();
  const hasChanges = Object.keys(profileUpdates).length > 0;

  useEffect(() => {
    if (persistedProfile && !queryLoading) {
      setProfileData(persistedProfile);
      setIsLoading(false);
    }
  }, [persistedProfile, queryLoading]);

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
        setProfileData,
        handleChange,
        handleSave,
        hasChanges,
        isLoading,
        isError,
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