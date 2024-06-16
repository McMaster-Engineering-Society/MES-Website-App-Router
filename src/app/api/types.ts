export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type TUserList = {
  users: TUser[];
};

export type TMessageResponse = {
  message: string;
};
