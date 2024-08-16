import { ObjectId } from 'mongodb';

// unused original example for endpoints, databases and services
export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type TMessageResponse = {
  message: string;
};

export type TApiResponse<T> = {
  data: T | null;
  message?: string;
};

export type UHSForm = {
  _id: string | ObjectId;
  clubId: string;
  formInfo: string;
  formStatus: 'pending' | 'approved' | 'rejected';
};

export type TRole = 'admin' | 'hatch-user' | 'club' | 'super-admin';

export type TProfile = {
  _id: string | ObjectId;
  // primary key email
  email: string;
  roles: TRole[];
  firstName?: string;
  lastName?: string;
  program?: string;
  year?: string;
  hatchNumber?: string;
  phoneNumber?: string;
};
