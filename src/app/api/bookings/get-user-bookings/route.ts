import { NextRequest, NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { getBookingsByUserEmailService } from '@/slices/hatch/booking-page/services/bookingServices';
import { TBooking } from '@/slices/hatch/booking-page/types';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json<TMessageResponse>({
      message: 'Invalid query params, missing user email',
    });
  }

  const userBookingsWithinTimeframeList =
    await getBookingsByUserEmailService(email);

  if (!userBookingsWithinTimeframeList)
    return NextResponse.json<TMessageResponse>({
      message: 'List of all bookings from this user by email not found',
    });
  return NextResponse.json<TApiResponse<TBooking[]>>({
    data: userBookingsWithinTimeframeList,
  });
}
