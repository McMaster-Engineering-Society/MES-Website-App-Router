import {
  createBookingDb,
  deleteBookingByIdDb,
  getBookingsInDateRangeForOneRoomDb,
  updateBookingByIdDb,
} from '@/lib/db/bookingDb';
import { TBooking } from '@/lib/types';

const availableRooms = ['H201', 'H203', 'H204', 'H205'];

export const createBookingService = async (
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

export const deleteBookingByIdService = async (
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

function removeStringFromStringArray(arr: string[], value: string) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export const getAvailabilityInDateRangeService = async (
  startDate: Date,
  endDate: Date,
) => {
  const availabilityList: {
    [room: string]: Date[];
  } = {};
  for (const room of availableRooms) {
    const availabilityForRoom =
      await getAvailabilityInDateRangeForOneRoomService(
        startDate,
        endDate,
        room,
      );
    if (availabilityForRoom !== null) {
      availabilityList[room] = availabilityForRoom;
    } else {
      availabilityList[room] = [];
    }
  }
  return availabilityList;
};

/**
 * Approach:
 * Adds all times in the range as available
 * Remove all the unavailable ones from the list
 * @param startDate Start Date
 * @param endDate End Date
 * @param room Room
 * @returns Availability for one room as a date array
 */
export const getAvailabilityInDateRangeForOneRoomService = async (
  startDate: Date,
  endDate: Date,
  room: string,
): Promise<Date[] | null> => {
  const bookings = await getBookingsInDateRangeForOneRoomDb(
    startDate,
    endDate,
    room,
  );

  let date = startDate;
  const availableDates: string[] = [];

  // Add all the possible 30 minute dates within the range.
  while (date <= endDate) {
    const dateToAdd = date.toISOString();
    availableDates.push(dateToAdd);

    // Increase the date by thirty minutes
    date = new Date(date.getTime() + 30 * 60000);
  }

  // Take away the unavailable ones
  for (const booking of bookings) {
    const startDate = booking.startTime;
    const endDate = booking.endTime;
    let date = startDate;

    // Add all the possible 30 minute dates within the range.
    while (date <= endDate) {
      const unavailableDate = date.toISOString();

      // Remove the date from the list of available dates (since its unavailable)
      removeStringFromStringArray(availableDates, unavailableDate);

      // Increase the date by thirty minutes
      date = new Date(date.getTime() + 30 * 60000);
    }
  }

  const availableDatesAsDateObject = availableDates.map((date: string) => {
    return new Date(date);
  });

  return availableDatesAsDateObject;
};

export const updateBookingByIdService = async (
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
