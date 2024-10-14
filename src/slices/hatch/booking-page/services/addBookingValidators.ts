import { TBookingDb } from '@/app/api/types';
import { getDisabledRoomsService } from '@/slices/hatch/admin/services/roomServices';
import { getBookingsInDateRangeForOneRoomDb } from '@/slices/hatch/booking-page/db/bookingDb';
import { getBookingsInDateRangeAndEmailService } from '@/slices/hatch/booking-page/services/bookingServices';
import {
  getESTDayBoundaries,
  getNumberOf30MinuteSlots,
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

  const userBookingsOnDay = await getBookingsInDateRangeAndEmailService(
    startOfDay,
    endOfDay,
    newBooking.email,
  );

  if (userBookingsOnDay === null) {
    throw new Error("Error in fetching user's rooms");
  }

  const userNumberOfSlotsOnDay =
    getNumberOf30MinuteSlots(newBooking.startTime, newBooking.endTime) +
    userBookingsOnDay.reduce(
      (accumulator, currentValue) =>
        accumulator +
        getNumberOf30MinuteSlots(currentValue.startTime, currentValue.endTime),
      0,
    );

  return {
    valid: userNumberOfSlotsOnDay <= 6,
    message:
      userNumberOfSlotsOnDay <= 6
        ? null
        : 'Invalid booking: Bookings can only be made to a maximum of 3 hours',
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

export const bookingValidationMethods = [
  disabledRoomCheckService,
  availableRoomsCheckService,
  threeHourRoomsCheckService,
];
