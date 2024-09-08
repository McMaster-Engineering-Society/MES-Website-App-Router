import { ObjectId } from 'mongodb';

export type TUser = {
  _id: string;
  firstName?: string;
  lastName?: string;
  // primary key email
  email: string;
  phoneNumber?: string;
  hatchNumber?: string;
  roles?: TRole[];
  program?: string;
  year?: number;
};

export type TBooking = {
  _id?: ObjectId | string;
  userId: string;
  room: string;
  email: string;
  startTime: Date;
  endTime: Date;
  hasConfirmed: boolean;
  createdDate?: Date;
};

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

export type TBatchBookingRequest = { bookingList: TBooking[] };
export type TBatchDeleteBookingRequest = { bookingIdList: string[] };

export type TBatchBookingResponse = {
  bookingsAdded: TBooking[];
  conflictExists: boolean;
  conflictingBookings: {
    booking: TBooking;
    conflicts: TBooking[];
  }[];
};

export type TRoomEnableRequest = {
  enabled: boolean;
  room: string;
};
export type TMessageResponse = {
  message: string;
};

export type TApiResponse<T> = {
  data: T | null;
  message?: string;
};

export type TAvailabilityResponse = {
  [room: string]: Date[];
};
