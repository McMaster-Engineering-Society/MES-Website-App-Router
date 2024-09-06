import {
  createProfileDb,
  deleteProfileByIdDb,
  getAllProfilesDb,
  getProfileByEmailDb,
  getProfileByIdDb,
} from '@/lib/db/profileDb';
import { TProfile } from '@/lib/types';

export const getAllProfilesService = async (): Promise<TProfile[]> => {
  try {
    const profileList: TProfile[] = await getAllProfilesDb();
    return profileList;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in profile services:', error);
    return [];
  }
};

export const getProfileByIdService = async (
  profileId: string,
): Promise<TProfile | null> => {
  try {
    const profile = await getProfileByIdDb(profileId);
    return profile;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in profile services:', error);
    return null;
  }
};

export const getProfileByEmailService = async (
  email: string,
): Promise<TProfile | null> => {
  try {
    const profile = await getProfileByEmailDb(email);
    return profile;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in profile services:', error);
    return null;
  }
};

export const deleteProfileByIdService = async (
  profileId: string,
): Promise<TProfile | null> => {
  try {
    const profile = await deleteProfileByIdDb(profileId);
    return profile;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in profile services:', error);
    return null;
  }
};

export const createProfileService = async (
  newProfile: TProfile,
): Promise<TProfile | null> => {
  try {
    const profile = await createProfileDb(newProfile);
    return profile;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in profile services:', error);
    return null;
  }
};
