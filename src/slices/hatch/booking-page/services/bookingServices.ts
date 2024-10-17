import { getProfileByEmailAndCreateIfNullService } from '@slices/auth/services/profileServices';
import { TBooking } from '@slices/hatch/booking-page/types';
import { WithId } from 'mongodb';

import {
  generateSuccessfulBookingEmailHtml,
  generateSuccessfulBookingEmailText,
} from '@/lib/emailHelper';

import { TBatchBookingResponse } from '@/app/api/types';
import { TBookingDb } from '@/app/api/types';
import { sendEmailService } from '@/slices/email/services/emailServices';
import { getDisabledRoomsService } from '@/slices/hatch/admin/services/roomServices';
import {
  createBatchBookingDb,
  createBookingDb,
  deleteBatchBookingDb,
  deleteBookingByIdDb,
  getBookingsByEmailDb,
  getBookingsInDateRangeAndEmailDb,
  getBookingsInDateRangeDb,
  getBookingsInDateRangeForOneRoomDb,
  updateBookingByIdDb,
} from '@/slices/hatch/booking-page/db/bookingDb';
import { bookingValidationMethods } from '@/slices/hatch/booking-page/services/addBookingValidators';

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
): Promise<{ booking: TBooking | null; message: string | null }> => {
  try {
    const adaptedBooking = adaptTBookingToTBookingDb(newBooking);

    const isAdmin = await getProfileByEmailAndCreateIfNullService(
      adaptedBooking.email,
    ).then((profile) => profile?.roles.includes('hatch-admin'));

    if (!isAdmin) {
      const checkResults = await Promise.all(
        bookingValidationMethods.map(async (check) => await check(newBooking)),
      );

      const invalidCheck = checkResults.find((result) => !result.valid);

      if (invalidCheck) {
        return {
          booking: null,
          message: invalidCheck.message,
        };
      }
    }

    const booking = await createBookingDb(adaptedBooking);
    sendBookingConfirmationEmailService(booking);
    return { booking: adaptTBookingDbToTBooking(booking), message: null };
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in booking services:', error);
    return { booking: null, message: null };
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
  limit = 10,
  offset = 0,
) => {
  try {
    const { bookings, totalCount } = await getBookingsInDateRangeAndEmailDb(
      startDate,
      endDate,
      email,
      limit,
      offset,
    );
    return { bookings, totalCount };
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

export const sendBookingConfirmationEmailService = async (
  createdBooking: TBookingDb,
) => {
  const userProfile = await getProfileByEmailAndCreateIfNullService(
    createdBooking.email,
  );

  const emailSubject = 'Hatch Booking Confirmation';
  const emailTo = createdBooking.email;
  const emailName = userProfile?.firstName || '';

  const emailHtml = generateSuccessfulBookingEmailHtml(
    emailName,
    createdBooking,
  );
  const emailText = generateSuccessfulBookingEmailText(
    emailName,
    createdBooking,
  );

  // Send the email
  await sendEmailService(emailTo, emailSubject, emailText, emailHtml);
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
  limit = 10,
  offset = 0,
): Promise<TBooking[]> => {
  // Go through all rooms and add their bookings to a list of all bookings.
  const bookings = await getBookingsInDateRangeDb(
    startDate,
    endDate,
    limit,
    offset,
  );
  return bookings.map(adaptTBookingDbToTBooking);
};
