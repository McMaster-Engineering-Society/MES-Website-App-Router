import { TUserList } from '@/app/api/types';

const getAllUsersService = (): TUserList => {
  const userList: TUserList = {
    users: [
      {
        id: '0000',
        firstName: 'John',
        lastName: 'Smith',
        email: 'johnsmith@gmail.com',
      },
    ],
  };

  return userList;
};

export { getAllUsersService };
