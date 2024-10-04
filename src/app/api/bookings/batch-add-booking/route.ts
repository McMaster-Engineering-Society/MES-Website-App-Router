import { NextResponse } from 'next/server';

import {
  TApiResponse,
  TBatchBookingRequest,
  TBatchBookingResponse,
} from '@/app/api/types';
import { TMessageResponse } from '@/app/api/types';
import { createBatchBookingService } from '@/slices/hatch/booking-page/services/bookingServices';

export async function POST(req: Request) {
  const reqObject: TBatchBookingRequest = await req.json();

  const bookingList = reqObject.bookingList;
  if (!bookingList) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Booking information is required' },
      { status: 400 },
    );
  }

  try {
    const newBooking = await createBatchBookingService(bookingList);
    if (!newBooking) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Batch booking failed' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TBatchBookingResponse>>(
      {
        data: newBooking,
        message:
          'No errors encountered, check data response to see if booking succeeded.',
      },
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
