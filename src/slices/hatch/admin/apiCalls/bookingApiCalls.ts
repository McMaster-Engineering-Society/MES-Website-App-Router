import { WithId } from 'mongodb';

import { TBatchBookingResponse } from '@/app/api/types';
import { getUserEmail } from '@/slices/auth/utils';
import { TBooking } from '@/slices/hatch/booking-page/types';

export async function fetchBatchAddBooking(
  newBookings: TBooking[],
): Promise<TBatchBookingResponse> {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  for (const newBooking of newBookings) {
    // Checks if an email was passed in. If not, uses the email of the currently signed in user.
    const email = newBooking.email ?? (await getUserEmail());
    if (email == null) {
      throw new Error(
        'No emailO was passed in for a new booking, nor is the user signed in to retrieve one from the current session.',
      );
    }
    newBooking.email = email;
  }

  const body = {
    bookingList: newBookings,
  };

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + '/api/bookings/batch-add-booking',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  return result.data;
}

export async function fetchBatchDeleteBooking(
  bookingIdsToDelete: string[],
): Promise<(WithId<TBooking> | null)[]> {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  const body = {
    bookingIdList: bookingIdsToDelete,
  };

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL + '/api/bookings/batch-delete-booking/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
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
