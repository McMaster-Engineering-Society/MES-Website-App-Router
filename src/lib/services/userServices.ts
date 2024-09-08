import {
  createUserDb,
  deleteUserByIdDb,
  getAllUsersDb,
  getUserByEmailDb,
  getUserByIdDb,
} from '@/lib/db/userDb';
import { TUser } from '@/lib/types';

import { TUserDb } from '@/app/api/types';

function adaptTUserToTUserDb(user: TUser): TUserDb {
  // Adapt the type of booking.
  const adaptedUser: TUserDb = {
    ...user,
    roles: ['hatch-user'],
  };
  return adaptedUser;
}

function adaptTUserDbToTUser(user: TUserDb): TUser {
  // Adapt the type of booking.
  const adaptedUser: TUser = {
    ...user,
  };
  return adaptedUser;
}

const getAllUsersService = async (): Promise<TUser[]> => {
  try {
    const userList: TUser[] = await getAllUsersDb();
    return userList;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in user services:', error);
    return [];
  }
};

const getUserByIdService = async (userId: string): Promise<TUser | null> => {
  try {
    const user = await getUserByIdDb(userId);
    return user;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in user services:', error);
    return null;
  }
};

const getUserByEmailService = async (
  userEmail: string,
): Promise<TUser | null> => {
  try {
    const user = await getUserByEmailDb(userEmail);

    if (!user) {
      return null;
    }

    const adapatedUser = adaptTUserDbToTUser(user);

    return adapatedUser;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in user services:', error);
    return null;
  }
};

const deleteUserByIdService = async (userId: string): Promise<TUser | null> => {
  try {
    const user = await deleteUserByIdDb(userId);
    return user;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in user services:', error);
    return null;
  }
};

const createUserService = async (newUser: TUser): Promise<TUser | null> => {
  try {
    const adaptedUser = adaptTUserToTUserDb(newUser);

    const returnUser = await createUserDb(adaptedUser);
    if (!returnUser) {
      return null;
    }

    const adaptedReturnUser = await adaptTUserDbToTUser(returnUser);
    return adaptedReturnUser;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in user services:', error);
    return null;
  }
};

export {
  createUserService,
  deleteUserByIdService,
  getAllUsersService,
  getUserByEmailService,
  getUserByIdService,
};
