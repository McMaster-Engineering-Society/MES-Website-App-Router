import { ObjectId } from 'mongodb';

export type TRoleDb =
  | 'hatch-admin'
  | 'clubs-admin'
  | 'hatch-user'
  | 'club'
  | 'super-admin';

export type TUserDb = {
  _id: string;
  firstName?: string;
  lastName?: string;
  // primary key email
  email: string;
  phoneNumber?: string;
  hatchNumber?: string;
  roles?: TRoleDb[];
  program?: string;
  year?: number;
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

export type TRoomEnableRequest = {
  enabled: boolean;
  room: string;
};

export type TAvailabilityResponse = {
  [room: string]: Date[];
};

export type TBatchBookingRequest = { bookingList: TBookingDb[] };
export type TBatchDeleteBookingRequest = { bookingIdList: string[] };

export type TBatchBookingResponse = {
  bookingsAdded: TBookingDb[];
  conflictExists: boolean;
  conflictingBookings: {
    booking: TBookingDb;
    conflicts: TBookingDb[];
  }[];
};
