import { ObjectId } from 'mongodb';

export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type TBooking = {
  _id: ObjectId;
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
