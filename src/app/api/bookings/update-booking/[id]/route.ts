import { NextResponse } from 'next/server';

import { updateBookingByIdService } from '@/lib/services/bookingServices';
import { TApiResponse, TBooking } from '@/lib/types';

import { TMessageResponse } from '@/app/api/types';

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
