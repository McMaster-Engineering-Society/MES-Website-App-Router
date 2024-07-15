import { InsertOneResult, ObjectId, WithId } from 'mongodb';

import clientPromise from '@/lib/db';

import { TUser } from '@/app/api/types';

const getUsersCollection = async () => {
  const client = await clientPromise;

  const db = client.db();
  const usersCollection = db.collection<TUser>('users');
  return usersCollection;
};

const getAllUsersDb = async (): Promise<TUser[]> => {
  try {
    const usersCollection = await getUsersCollection();
    const userList: WithId<TUser>[] = await usersCollection.find({}).toArray();

    return userList;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error fetching users from database:', error);
    throw new Error('Database error'); // Rethrow a generic error or the original error
  }
};

const getUserByIdDb = async (userId: string): Promise<TUser | null> => {
  try {
    const usersCollection = await getUsersCollection();
    const userObjectId = new ObjectId(userId);
    const user: WithId<TUser> | null = await usersCollection.findOne({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: ObjectId type mismatch
      _id: userObjectId,
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

const deleteUserByIdDb = async (userId: string): Promise<TUser | null> => {
  try {
    const usersCollection = await getUsersCollection();
    const userObjectId = new ObjectId(userId);
    const user: WithId<TUser> | null = await usersCollection.findOneAndDelete({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: ObjectId type mismatch
      _id: userObjectId,
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

const createUserDb = async (newUser: TUser): Promise<TUser | null> => {
  try {
    const usersCollection = await getUsersCollection();
    const result: InsertOneResult = await usersCollection.insertOne(newUser);

    if (!result.acknowledged) {
      throw new Error('Failed to insert user');
    }

    const createdUser: TUser = {
      ...newUser,
      _id: result.insertedId.toString(),
    };

    return createdUser;
  } catch (error) {
    console.error('Error fetching user by id from database:', error);
    throw new Error('Database error');
  }
};

export { createUserDb, deleteUserByIdDb, getAllUsersDb, getUserByIdDb };
