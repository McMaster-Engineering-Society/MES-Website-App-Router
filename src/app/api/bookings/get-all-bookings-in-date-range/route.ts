import { NextRequest, NextResponse } from 'next/server';

import { getAllBookingsInDateRangeService } from '@/lib/services/bookingServices';
import { TBooking } from '@/lib/types';

import { TApiResponse, TMessageResponse } from '@/app/api/types';

/**
 * Guide to querying this route:
 * All dates should be formatted as date time string format (ISO string) as per
 * https:export {}//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 *
 * Include the query params 'startdate' and 'enddate'
 *
 * You can use https://querystring.io/ to test queries.
 * Example of a date: 2014-10-13T00:00:00.000+00:00
 *
 */
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const startDateParam = searchParams.get('startdate');
  const endDateParam = searchParams.get('enddate');

  let startDate;
  let endDate;
  if (startDateParam && endDateParam) {
    startDate = new Date(startDateParam);
    endDate = new Date(endDateParam);
  } else {
    return NextResponse.json<TMessageResponse>({
      message: 'Invalid query params, missing either start date or end date.',
    });
  }

  const allBookingsList = await getAllBookingsInDateRangeService(
    startDate,
    endDate,
  );

  if (!allBookingsList)
    return NextResponse.json<TMessageResponse>({
      message: 'List of all bookings not found',
    });
  return NextResponse.json<TApiResponse<TBooking[]>>({
    data: allBookingsList,
  });
}
