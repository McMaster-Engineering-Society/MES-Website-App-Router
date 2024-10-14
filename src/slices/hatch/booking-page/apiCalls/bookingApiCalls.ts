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

  if (!response.ok && response.status !== 409) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

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
