import { TBookingDb } from '@/app/api/types';
import { getDisabledRoomsService } from '@/slices/hatch/admin/services/roomServices';
import { getBookingsInDateRangeForOneRoomDb } from '@/slices/hatch/booking-page/db/bookingDb';
import { getBookingsInDateRangeAndEmailService } from '@/slices/hatch/booking-page/services/bookingServices';
import {
  getESTDayBoundaries,
  getNumberOf30MinuteSlots,
  getWeekRangeInEST,
} from '@/slices/hatch/booking-page/utils';

const disabledRoomCheckService = async (
  newBooking: TBookingDb,
): Promise<{ valid: boolean; message: string | null }> => {
  const disabledRooms = await getDisabledRoomsService();
  if (disabledRooms === null) {
    throw new Error('Error in fetching disabled rooms');
  }

  const roomEnabled = !disabledRooms.disabledRooms.includes(newBooking.room);

  return {
    valid: roomEnabled,
    message: roomEnabled
      ? null
      : 'Invalid booking: Bookings for the room requested has been disabled',
  };
};

const threeHourRoomsCheckService = async (
  newBooking: TBookingDb,
): Promise<{ valid: boolean; message: string | null }> => {
  const { startOfDay, endOfDay } = getESTDayBoundaries(
    newBooking.startTime,
    newBooking.endTime,
  );

  const userBookingsResult = await getBookingsInDateRangeAndEmailService(
    startOfDay,
    endOfDay,
    newBooking.email,
  );

  if (userBookingsResult === null) {
    throw new Error(
      "Error in fetching user's rooms while checking if they are within 3 hours of bookings this day.",
    );
  }

  const { bookings: userBookingsOnDay } = userBookingsResult;

  const userNumberOfSlotsOnDay =
    getNumberOf30MinuteSlots(newBooking.startTime, newBooking.endTime) +
    userBookingsOnDay.reduce(
      (accumulator, currentValue) =>
        accumulator +
        getNumberOf30MinuteSlots(currentValue.startTime, currentValue.endTime),
      0,
    );

  const userBookingsWithin3Hours = userNumberOfSlotsOnDay <= 6;

  return {
    valid: userBookingsWithin3Hours,
    message: userBookingsWithin3Hours
      ? null
      : 'Invalid booking: Bookings can only be made to a maximum of 3 hours per day.',
  };
};

const availableRoomsCheckService = async (
  newBooking: TBookingDb,
): Promise<{ valid: boolean; message: string | null }> => {
  const roomBookings = await getBookingsInDateRangeForOneRoomDb(
    newBooking.startTime,
    newBooking.endTime,
    newBooking.room,
  );
  if (roomBookings === null) {
    throw new Error('Error in fetching available rooms');
  }

  return {
    valid: roomBookings.length === 0,
    message:
      roomBookings.length === 0
        ? null
        : 'Invalid booking: Someone already booked this room before you! :P',
  };
};

const tenHourWeeklyRoomsCheckService = async (
  newBooking: TBookingDb,
): Promise<{ valid: boolean; message: string | null }> => {
  // Get times for the start and end of the week.
  const { startOfWeekUTC, endOfWeekUTC } = getWeekRangeInEST(
    newBooking.startTime,
  );

  // Find all the user's bookings in this week.
  const userBookingsResult = await getBookingsInDateRangeAndEmailService(
    startOfWeekUTC,
    endOfWeekUTC,
    newBooking.email,
  );
  if (userBookingsResult === null) {
    throw new Error(
      "Error in fetching user's rooms while checking if they are within 10 hours of bookings this week.",
    );
  }
  const { bookings: userBookingsinWeek } = userBookingsResult;

  const userNumberOfSlotsInWeek =
    getNumberOf30MinuteSlots(newBooking.startTime, newBooking.endTime) +
    userBookingsinWeek.reduce(
      (accumulator, currentValue) =>
        accumulator +
        getNumberOf30MinuteSlots(currentValue.startTime, currentValue.endTime),
      0,
    );

  const userWithinBookingLimit10Hours = userNumberOfSlotsInWeek <= 2 * 10; // Can have 10 hours, which is 20 slots (slots are 30 minutes).

  return {
    valid: userWithinBookingLimit10Hours,
    message: userWithinBookingLimit10Hours
      ? null
      : 'Invalid booking: Bookings can only be made to a maximum of 10 hours per week (Sunday to Saturday).',
  };
};

export const bookingValidationMethods = [
  disabledRoomCheckService,
  availableRoomsCheckService,
  threeHourRoomsCheckService,
  tenHourWeeklyRoomsCheckService,
];
