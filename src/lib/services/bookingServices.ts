import {
  createBookingDb,
  deleteBookingByIdDb,
  updateBookingByIdDb,
} from '@/lib/db/bookingDb';
import { TBooking } from '@/lib/types';

const createBookingService = async (
  newBooking: TBooking,
): Promise<TBooking | null> => {
  try {
    const booking = await createBookingDb(newBooking);
    return booking;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in booking services:', error);
    return null;
  }
};

const deleteBookingByIdService = async (
  bookingId: string,
): Promise<TBooking | null> => {
  try {
    const booking = await deleteBookingByIdDb(bookingId);
    return booking;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in booking services:', error);
    return null;
  }
};

const updateBookingByIdService = async (
  bookingId: string,
  bookingInfo: TBooking,
): Promise<TBooking | null> => {
  try {
    const booking = await updateBookingByIdDb(bookingId, bookingInfo);
    return booking;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in booking services:', error);
    return null;
  }
};

export {
  createBookingService,
  deleteBookingByIdService,
  updateBookingByIdService,
};
