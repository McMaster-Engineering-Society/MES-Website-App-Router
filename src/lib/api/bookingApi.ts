'use server';

import { TBooking } from '@/lib/types';

import { RoomAvailabilities } from '@/components/bookings/TimePicker';

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

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  return result.data;
}

export async function fetchUserBookings(userId: string): Promise<TBooking[]> {
  if (process.env.NEXT_PUBLIC_URL === undefined) {
    throw new Error('NEXT_PUBLIC_URL is not defined');
  }

  const response = await fetch(
    process.env.NEXT_PUBLIC_URL +
      '/api/bookings/get-user-bookings?userId=' +
      userId,
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const result = await response.json();

  return result.data;
}
