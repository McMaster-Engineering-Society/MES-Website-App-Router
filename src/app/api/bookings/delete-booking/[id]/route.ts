import { NextResponse } from 'next/server';

import { TApiResponse } from '@/app/api/types';
import { TMessageResponse } from '@/app/api/types';
import { deleteBookingByIdService } from '@/slices/hatch/booking-page/services/bookingServices';
import { TBooking } from '@/slices/hatch/booking-page/types';

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
