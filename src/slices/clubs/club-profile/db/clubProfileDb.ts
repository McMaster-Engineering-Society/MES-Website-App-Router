import { WithId } from 'mongodb';

import clientPromise from '@/lib/db';

import { TClubProfile } from '@/slices/clubs/club-profile/types/clubProfile';

const getClubProfileCollection = async () => {
  try {
    const client = await clientPromise;

    const db = client.db();
    const profileCollection = db.collection<TClubProfile>('club_profiles');

    return profileCollection;
  } catch (error) {
    throw new Error('Database connection error');
  }
};

export const getProfileByClubIdDb = async (
  clubId: string,
): Promise<TClubProfile | null> => {
  try {
    const profileCollection = await getClubProfileCollection();

    const profile: WithId<TClubProfile> | null =
      await profileCollection.findOne({
        clubId: clubId,
      });

    if (!profile) {
      return null;
    }

    return profile;
  } catch (error) {
    throw new Error('Database error');
  }
};

export const updateProfileByClubIdDb = async (
  clubId: string,
  profileUpdates: Partial<TClubProfile>,
): Promise<TClubProfile | null> => {
  try {
    const profileCollection = await getClubProfileCollection();

    const result = await profileCollection.findOneAndUpdate(
      { clubId: clubId },
      { $set: profileUpdates },
      { returnDocument: 'after' },
    );

    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    throw new Error('Database error: ' + error);
  }
};
