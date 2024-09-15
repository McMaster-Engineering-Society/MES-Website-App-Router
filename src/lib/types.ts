import { ObjectId } from 'mongodb';

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
