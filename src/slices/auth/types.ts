import { ObjectId } from 'mongodb';

export type TRole =
  | 'hatch-admin'
  | 'clubs-admin'
  | 'hatch-user'
  | 'club'
  | 'super-admin';

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
