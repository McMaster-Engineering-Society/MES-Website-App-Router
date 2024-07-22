import { NextResponse } from 'next/server';

import { createBookingService } from '@/lib/services/bookingServices';
import { TApiResponse, TBooking } from '@/lib/types';

import { TMessageResponse } from '@/app/api/types';

export async function POST(req: Request) {
  const booking = await req.json();

  if (!booking) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Booking information is required' },
      { status: 400 },
    );
  }

  try {
    const newBooking = await createBookingService(booking);
    if (!newBooking) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Booking not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TBooking>>(
      { data: newBooking, message: 'Successfully created booking' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to create booking' },
      { status: 500 },
    );
  }
}
