import { NextResponse } from 'next/server';

import { TApiResponse } from '@/app/api/types';
import { TMessageResponse } from '@/app/api/types';
import { updateBookingByIdService } from '@/slices/hatch/booking-page/services/bookingServices';
import { TBooking } from '@/slices/hatch/booking-page/types';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const bookingId: string = params.id;
  const booking: TBooking = await req.json();

  if (!bookingId) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Booking id is required' },
      { status: 400 },
    );
  }

  if (!booking) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Booking information is required' },
      { status: 400 },
    );
  }

  try {
    const newBooking = await updateBookingByIdService(bookingId, booking);
    if (!newBooking) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Booking not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TBooking>>(
      { data: newBooking, message: 'Successfully updated booking' },
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
