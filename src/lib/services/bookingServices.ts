import { createBookingDb, deleteBookingByIdDb } from '@/lib/db/bookingDb';
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

export { createBookingService, deleteBookingByIdService };