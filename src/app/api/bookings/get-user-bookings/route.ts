import { NextRequest, NextResponse } from 'next/server';

import { getBookingsByUserIdService } from '@/lib/services/bookingServices';
import { TBooking } from '@/lib/types';

import { TApiResponse, TMessageResponse } from '@/app/api/types';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json<TMessageResponse>({
      message: 'Invalid query params, missing either start date or end date.',
    });
  }

  const userBookingsWithinTimeframeList =
    await getBookingsByUserIdService(userId);

  if (!userBookingsWithinTimeframeList)
    return NextResponse.json<TMessageResponse>({
      message: 'List of all bookings from this user not found',
    });
  return NextResponse.json<TApiResponse<TBooking[]>>({
    data: userBookingsWithinTimeframeList,
  });
}
