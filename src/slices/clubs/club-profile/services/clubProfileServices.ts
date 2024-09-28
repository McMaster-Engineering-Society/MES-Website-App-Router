import {
  getProfileByClubIdDb,
  updateProfileByClubIdDb,
} from '@/slices/clubs/club-profile/db/clubProfileDb';
import { TClubProfile } from '@/slices/clubs/club-profile/types/clubProfile';

export const getProfileByClubIdService = async (clubId: string) => {
  try {
    const profile = await getProfileByClubIdDb(clubId);
    return profile;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in club profile services:', error);
    return null;
  }
};

export const updateProfileByClubIdService = async (
  clubId: string,
  profileUpdates: Partial<TClubProfile>,
) => {
  try {
    const result = await updateProfileByClubIdDb(clubId, profileUpdates);
    return result;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in club profile services:', error);
    return null;
  }
};