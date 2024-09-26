import { ObjectId } from 'mongodb';

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

export type TDocument = {
  _id?: string | ObjectId;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: Record<string, any>;
};
export type UHSForm = {
  _id: string | ObjectId;
  clubId: string;
  formInfo: string;
  formStatus: 'pending' | 'approved' | 'rejected';
};
