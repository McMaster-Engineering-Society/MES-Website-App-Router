import { WithId } from 'mongodb';
import { NextResponse } from 'next/server';

import { deleteBatchBookingService } from '@/lib/services/bookingServices';
import {
  TApiResponse,
  TBatchDeleteBookingRequest,
  TBooking,
} from '@/lib/types';

import { TMessageResponse } from '@/app/api/types';

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
