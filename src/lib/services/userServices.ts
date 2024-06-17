import { getAllUsersDb, getUserByIdDb } from '@/lib/db/userDb';
import { TUser } from '@/lib/types';

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

export { getAllUsersService, getUserByIdService };
