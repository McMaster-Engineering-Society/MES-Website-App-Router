import { WithId } from 'mongodb';

import {
  createBatchBookingDb,
  createBookingDb,
  deleteBatchBookingDb,
  deleteBookingByIdDb,
  getBookingsByEmailDb,
  getBookingsInDateRangeAndEmailDb,
  getBookingsInDateRangeForOneRoomDb,
  updateBookingByIdDb,
} from '@/lib/db/bookingDb';
import { getDisabledRoomsService } from '@/lib/services/roomServices';
import { TBatchBookingResponse, TBooking } from '@/lib/types';

import { TBookingDb } from '@/app/api/types';

const availableRooms = ['H201', 'H203', 'H204A', 'H204B', 'H205'];

function adaptTBookingToTBookingDb(booking: TBooking): TBookingDb {
  if (booking.email == null) {
    throw new Error('Email must be passed in to create a booking.');
  }

  // Adapt the type of booking.
  const adaptedBooking: TBookingDb = {
    ...booking,
    email: booking.email,
    startTime: new Date(booking.startTime),
    endTime: new Date(booking.endTime),
  };
  return adaptedBooking;
}

function adaptTBookingDbToTBooking(booking: TBookingDb): TBooking {
  // Adapt the type of booking.
  const adaptedBooking: TBooking = {
    ...booking,
  };
  return adaptedBooking;
}

export const createBookingService = async (
  newBooking: TBooking,
): Promise<TBooking | null> => {
  try {
    // Adapt booking type.
    const adaptedBooking = adaptTBookingToTBookingDb(newBooking);

    const disabledRooms = await getDisabledRoomsService();
    if (disabledRooms === null) {
      throw new Error('Error in fetching disabled rooms');
    } else {
      const booking = await createBookingDb(
        adaptedBooking,
        disabledRooms.disabledRooms,
      );
      return adaptTBookingDbToTBooking(booking);
    }
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in booking services:', error);
    return null;
  }
};
export const deleteBatchBookingService = async (
  bookingIDsToDelete: string[],
): Promise<(WithId<TBooking> | null)[] | null> => {
  try {
    const bookings = await deleteBatchBookingDb(bookingIDsToDelete);
    return bookings;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in booking services:', error);
    return null;
  }
};
export const createBatchBookingService = async (
  newBookings: TBooking[],
): Promise<TBatchBookingResponse | null> => {
  try {
    // Adapt booking type.
    const adaptedBookings = newBookings.map(adaptTBookingToTBookingDb);

    const disabledRooms = await getDisabledRoomsService();
    if (disabledRooms === null) {
      throw new Error('Error in fetching disabled rooms');
    } else {
      const bookings = await createBatchBookingDb(
        adaptedBookings,
        disabledRooms.disabledRooms,
      );
      return bookings;
    }
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

export const getBookingsInDateRangeAndEmailService = async (
  startDate: Date,
  endDate: Date,
  email: string,
) => {
  try {
    const allBookingsList = await getBookingsInDateRangeAndEmailDb(
      startDate,
      endDate,
      email,
    );
    return allBookingsList;
  } catch (e) {
    return null;
  }
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
  booking: TBooking,
): Promise<TBooking | null> => {
  try {
    const adaptedBooking = adaptTBookingToTBookingDb(booking);

    const returnBooking = await updateBookingByIdDb(bookingId, adaptedBooking);

    if (!returnBooking) {
      throw new Error('Could not update booking by id');
    }

    const adaptedReturnBooking = adaptTBookingDbToTBooking(returnBooking);

    return adaptedReturnBooking;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in booking services:', error);
    return null;
  }
};

export const getBookingsByUserEmailService = async (
  userEmail: string,
): Promise<TBooking[] | null> => {
  try {
    const bookings = await getBookingsByEmailDb(userEmail);

    const adaptedBookings = bookings.map(adaptTBookingToTBookingDb);

    return adaptedBookings;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in get booking by userEmail services:', error);
    return null;
  }
};

/**
 * Approach: A db function exists to get all bookings for a given room. Loop through all rooms to get all bookings.
 * @param startDate
 * @param endDate
 * @returns
 */
export const getAllBookingsInDateRangeService = async (
  startDate: Date,
  endDate: Date,
): Promise<TBooking[]> => {
  // Go through all rooms and add their bookings to a list of all bookings.
  const allBookings: TBookingDb[] = [];
  for (const room of availableRooms) {
    const bookingsForRoom = await getBookingsInDateRangeForOneRoomDb(
      startDate,
      endDate,
      room,
    );
    allBookings.push(...bookingsForRoom);
  }

  // Return all bookings as TBooking.
  return allBookings.map(adaptTBookingDbToTBooking);
};
