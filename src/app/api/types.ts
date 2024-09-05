import { ObjectId } from 'mongodb';

export type TUserDb = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  hatchNumber: string;
};

export type TBookingDb = {
  _id?: ObjectId | string;
  userId: string;
  room: string;
  email: string;
  startTime: Date;
  endTime: Date;
  hasConfirmed: boolean;
  createdDate?: Date;
};

export type TMessageResponse = {
  message: string;
};

export type TApiResponse<T> = {
  data: T | null;
  message?: string;
};
