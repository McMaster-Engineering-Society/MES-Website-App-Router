import {
  createProfileDb,
  deleteProfileByIdDb,
  getAllProfilesDb,
  getProfileByEmailDb,
  getProfileByIdDb,
  updateProfileByIdDb,
} from '@slices/auth/db/profileDb';
import { TProfile } from '@slices/auth/types';
import { ObjectId } from 'mongodb';

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

export const getProfileByEmailAndCreateIfNullService = async (
  email: string,
): Promise<TProfile | null> => {
  try {
    const profile = await getProfileByEmailDb(email);

    if (!profile) {
      const newProfile = await createProfileDb({
        _id: new ObjectId(),
        email,
        roles: ['hatch-user'],
      });

      return newProfile;
    }

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

export const updateProfileByIdService = async (
  profileId: string,
  profileInfo: TProfile,
): Promise<TProfile | null> => {
  try {
    const profile = await updateProfileByIdDb(profileId, profileInfo);
    return profile;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in profile services:', error);
    return null;
  }
};
