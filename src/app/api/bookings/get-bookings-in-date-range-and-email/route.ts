import { TBooking } from '@slices/hatch/booking-page/types';
import { WithId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { getBookingsInDateRangeAndEmailService } from '@/slices/hatch/booking-page/services/bookingServices';

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
  const email = searchParams.get('email');
  const limit = Number(searchParams.get('limit'));
  const offset = Number(searchParams.get('offset'));

  let startDate;
  let endDate;
  if (startDateParam && endDateParam && email) {
    startDate = new Date(startDateParam);
    endDate = new Date(endDateParam);
  } else {
    return NextResponse.json<TMessageResponse>({
      message:
        'Invalid query params, missing either start date or end date or email.',
    });
  }

  const result = await getBookingsInDateRangeAndEmailService(
    startDate,
    endDate,
    email,
    limit,
    offset,
  );

  if (!result || !result.bookings) {
    return NextResponse.json<TMessageResponse>({
      message: 'List of all bookings not found',
    });
  }

  const { bookings, totalCount } = result;

  if (!bookings)
    return NextResponse.json<TMessageResponse>({
      message: 'List of all bookings not found',
    });
  return NextResponse.json<
    TApiResponse<{ bookings: WithId<TBooking>[]; totalCount: number }>
  >({
    data: { bookings, totalCount },
  });
}
