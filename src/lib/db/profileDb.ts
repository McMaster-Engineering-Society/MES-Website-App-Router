import { InsertOneResult, ObjectId, WithId } from 'mongodb';

import clientPromise from '@/lib/db';
import { TProfile } from '@/lib/types';

const getProfileCollection = async () => {
  const client = await clientPromise;

  const db = client.db();
  const profileCollection = db.collection<TProfile>('profiles');
  return profileCollection;
};

export const getAllProfilesDb = async (): Promise<TProfile[]> => {
  try {
    const profileCollection = await getProfileCollection();
    const profileList: WithId<TProfile>[] = await profileCollection
      .find({})
      .toArray();

    return profileList;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error fetching users from database:', error);
    throw new Error('Database error'); // Rethrow a generic error or the original error
  }
};

export const getProfileByIdDb = async (
  profileId: string,
): Promise<TProfile | null> => {
  try {
    const profileCollection = await getProfileCollection();
    const profileObjectId = new ObjectId(profileId);
    const user: WithId<TProfile> | null = await profileCollection.findOne({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: ObjectId type mismatch
      _id: profileObjectId,
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error fetching user by id from database:', error);
    throw new Error('Database error');
  }
};

export const getProfileByEmailDb = async (
  email: string,
): Promise<TProfile | null> => {
  try {
    const profileCollection = await getProfileCollection();
    const user: WithId<TProfile> | null = await profileCollection.findOne({
      email,
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error fetching user by email from database:', error);
    throw new Error('Database error');
  }
};

export const deleteProfileByIdDb = async (
  userId: string,
): Promise<TProfile | null> => {
  try {
    const usersCollection = await getProfileCollection();
    const userObjectId = new ObjectId(userId);
    const user: WithId<TProfile> | null =
      await usersCollection.findOneAndDelete({
        _id: userObjectId,
      });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error deleting user by id from database:', error);
    throw new Error('Database error');
  }
};

export const createProfileDb = async (
  newProfile: TProfile,
): Promise<TProfile | null> => {
  try {
    const usersCollection = await getProfileCollection();
    const result: InsertOneResult = await usersCollection.insertOne(newProfile);

    if (!result.acknowledged) {
      throw new Error('Failed to insert user');
    }

    const createdUser: TProfile = {
      ...newProfile,
      _id: result.insertedId.toString(),
    };

    return createdUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Database error');
  }
};
