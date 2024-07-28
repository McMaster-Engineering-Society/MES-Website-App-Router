import { WithId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

import { getBookingsInDateRangeDb } from '@/lib/db/bookingDb';
import { TApiResponse, TBooking, TMessageResponse } from '@/lib/types';

/**
 * Guide to querying this route:
 * All dates should be formatted as date time string format (ISO string) as per
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 *
 * Include the query params 'startdate' and 'enddate'
 *
 * You can use https://querystring.io/ to test queries.
 * Example of a date: 2014-10-13T00:00:00.000+00:00
 *
 *
 * * GET /api/bookings/get-bookings-in-date-range
 * Format we'll use for query date input is ISO (append Z at the end)
 * 2011-04-11T10:20:30Z
 * see: https://stackoverflow.com/questions/5619202/parsing-a-string-to-a-date-in-javascript
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

  const allBookingsList = await getBookingsInDateRangeDb(startDate, endDate);

  if (!allBookingsList)
    return NextResponse.json<TMessageResponse>({
      message: 'List of all bookings not found',
    });
  return NextResponse.json<TApiResponse<WithId<TBooking>[]>>({
    data: allBookingsList,
  });
}
