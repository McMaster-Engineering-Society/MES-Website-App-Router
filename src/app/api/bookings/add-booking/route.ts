import { TBooking } from '@slices/hatch/booking-page/types';
import { NextResponse } from 'next/server';

import { TApiResponse } from '@/app/api/types';
import { TMessageResponse } from '@/app/api/types';
import { createBookingService } from '@/slices/hatch/booking-page/services/bookingServices';

export async function POST(req: Request) {
  const booking: TBooking = await req.json();

  if (!booking) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Booking information is required.' },
      { status: 400 },
    );
  }

  const adaptedBooking: TBooking = {
    ...booking,
    startTime: new Date(booking.startTime),
    endTime: new Date(booking.endTime),
  };

  try {
    const { booking: newBooking, message } =
      await createBookingService(adaptedBooking);
    if (!newBooking && message) {
      return NextResponse.json<TMessageResponse>(
        { message: message },
        { status: 409 },
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
