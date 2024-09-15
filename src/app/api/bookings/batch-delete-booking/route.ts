import { TBooking } from '@slices/hatch/booking-page/types';
import { WithId } from 'mongodb';
import { NextResponse } from 'next/server';

import { TApiResponse, TBatchDeleteBookingRequest } from '@/app/api/types';
import { TMessageResponse } from '@/app/api/types';
import { deleteBatchBookingService } from '@/slices/hatch/booking-page/services/bookingServices';

export async function POST(req: Request) {
  const reqObject: TBatchDeleteBookingRequest = await req.json();

  const bookingIdList = reqObject.bookingIdList;
  if (!bookingIdList) {
    return NextResponse.json<TMessageResponse>(
      {
        message:
          'Booking id list to delete is required, ensure to include parameter bookingIdList in request.',
      },
      { status: 400 },
    );
  }

  try {
    const newBooking = await deleteBatchBookingService(bookingIdList);
    if (!newBooking) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Batch delete booking failed' },
        { status: 404 },
      );
    }

    if (newBooking.includes(null)) {
      return NextResponse.json<TApiResponse<(WithId<TBooking> | null)[]>>(
        {
          data: newBooking,
          message:
            'Some deletions may have failed, check list to see bookings that were deleted',
        },
        { status: 200 },
      );
    }
    return NextResponse.json<TApiResponse<(WithId<TBooking> | null)[]>>(
      { data: newBooking, message: 'Successfully deleted bookings' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to delete bookings' },
      { status: 500 },
    );
  }
}
