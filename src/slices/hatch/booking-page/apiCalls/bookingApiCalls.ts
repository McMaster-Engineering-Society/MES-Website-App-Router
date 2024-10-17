'use server';

import { getUserEmail } from '@slices/auth/utils';
import { TBooking } from '@slices/hatch/booking-page/types';

import { RoomAvailabilities } from '@/slices/hatch/booking-page/components/TimePicker';

export async function fetchAvailabilities(
  pickerStartDate: Date,
  pickerEndDate: Date,
): Promise<RoomAvailabilities> {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  const pickerStartDateISO = pickerStartDate
    .toISOString()
    .replace('.000Z', '+00:00');
  const pickerEndDateISO = pickerEndDate
    .toISOString()
    .replace('.000Z', '+00:00');

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL +
      '/api/bookings/get-available-times-in-date-range?startdate=' +
      encodeURIComponent(pickerStartDateISO) +
      '&enddate=' +
      encodeURIComponent(pickerEndDateISO),
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  return result.data;
}

export async function fetchAddBooking(newBooking: TBooking): Promise<TBooking> {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  // Checks if an email was passed in. If not, uses the email of the currently signed in user.
  const email = newBooking.email ?? (await getUserEmail());
  if (email == null) {
    throw new Error(
      'No email was passed in for a new booking, nor is the user signed in to retrieve one from the current session.',
    );
  }
  newBooking.email = email;

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + '/api/bookings/add-booking',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    },
  );

  // Want to handle all errors but 409 here because 409 means there was a state issue where a booking couldn't be added (eg. already booked at that timeslot) which needs a different error message.
  if (!response.ok && response.status !== 409) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  // Handle 409 errors here so they display the message we want to send back to the frontend properly.
  if (response.status === 409) {
    throw new Error(`${result.message}`);
  }

  return result.data;
}

export async function fetchUserBookings(
  userEmail: string,
): Promise<TBooking[]> {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL +
      '/api/bookings/get-user-bookings?email=' +
      userEmail,
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  return result.data;
}

export async function fetchDeleteBooking(bookingId: string): Promise<TBooking> {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + '/api/bookings/delete-booking/' + bookingId,
    {
      method: 'DELETE',
    },
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  const data = result.data;

  if (!data) {
    throw new Error('Booking not found');
  }

  return data;
}

export async function fetchAllBookings(
  pickerStartDate: Date,
  pickerEndDate: Date,
): Promise<TBooking[]> {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  const pickerStartDateISO = pickerStartDate
    .toISOString()
    .replace('.000Z', '+00:00');
  const pickerEndDateISO = pickerEndDate
    .toISOString()
    .replace('.000Z', '+00:00');

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL +
      '/api/bookings/get-all-bookings-in-date-range?startdate=' +
      encodeURIComponent(pickerStartDateISO) +
      '&enddate=' +
      encodeURIComponent(pickerEndDateISO),
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  return result.data;
}

export const fetchPastBookingsByEmail = async (
  email: string,
  page = 1,
  limit = 10,
) => {
  // To get the past bookings, use the range where start date is a year before today's date and end date is today
  const startDate = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1),
  );
  const endDate = new Date();

  const startDateISO = startDate.toISOString().slice(0, -1);
  const endDateISO = endDate.toISOString().slice(0, -1);

  // Calculate offset
  const offset = (page - 1) * limit;

  // Modify API call to include offset and limit
  const response = await fetch(
    process.env.NEXT_PUBLIC_URL +
      `/api/bookings/get-bookings-in-date-range-and-email?startdate=${startDateISO}&enddate=${endDateISO}&email=${email}&offset=${offset}&limit=${limit}`,
    {
      method: 'GET',
    },
  );

  const jsonResponse = await response.json();

  const newPastBookings: TBooking[] = jsonResponse.data.bookings.map(
    (booking: TBooking) => ({
      _id: booking._id,
      userId: booking.userId,
      room: booking.room,
      email: booking.email,
      startTime: booking.startTime,
      endTime: booking.endTime,
      hasConfirmed: booking.hasConfirmed,
      createdDate: booking.createdDate,
    }),
  );

  const totalCount = Math.ceil(jsonResponse.data.totalCount / limit);

  return { newPastBookings, totalCount };
};

export const fetchNextBookingsByEmail = async (
  email: string,
  page = 1,
  limit = 10,
) => {
  // To get the upcoming bookings, use the range where start date is today and end date is a year from now
  const startDate = new Date();
  const endDate = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1),
  );

  const startDateISO = startDate.toISOString().slice(0, -1);
  const endDateISO = endDate.toISOString().slice(0, -1);

  // Calculate offset
  const offset = limit > 1 ? (page - 1) * limit + 1 : 0;

  // Modify API call to include offset and limit
  const response = await fetch(
    process.env.NEXT_PUBLIC_URL +
      `/api/bookings/get-bookings-in-date-range-and-email?startdate=${startDateISO}&enddate=${endDateISO}&email=${email}&offset=${offset}&limit=${limit}`,
    {
      method: 'GET',
    },
  );

  const jsonResponse = await response.json();

  const newBookings: TBooking[] = jsonResponse.data.bookings.map(
    (booking: TBooking) => ({
      _id: booking._id,
      userId: booking.userId,
      room: booking.room,
      email: booking.email,
      startTime: booking.startTime,
      endTime: booking.endTime,
      hasConfirmed: booking.hasConfirmed,
      createdDate: booking.createdDate,
    }),
  );

  const totalCount = Math.ceil(jsonResponse.data.totalCount / limit);

  return { newBookings, totalCount };
};
