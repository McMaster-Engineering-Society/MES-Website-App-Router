import { NextResponse } from 'next/server';

import { deleteBookingByIdService } from '@/lib/services/bookingServices';
import { TApiResponse, TBooking } from '@/lib/types';

import { TMessageResponse } from '@/app/api/types';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const bookingId: string = params.id;

  if (!bookingId) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Booking ID is required' },
      { status: 400 },
    );
  }

  try {
    const booking = await deleteBookingByIdService(bookingId);
    if (!booking) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Booking not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TBooking>>(
      { data: booking, message: 'Successfully deleted booking' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to delete booking' },
      { status: 500 },
    );
  }
}
