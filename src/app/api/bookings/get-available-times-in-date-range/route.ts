import { NextRequest, NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { getAvailabilityInDateRangeService } from '@/slices/hatch/booking-page/services/bookingServices';

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
 * GET /api/bookings/get-available-times-in-date-range

 * Example of a query:
 * http://localhost:3000/api/bookings/get-available-times-in-date-range?startdate=2014-10-13t00%3a00%3a00.000%2b00%3a00&enddate=2014-10-13t15%3a00%3a00.000%2b00%3a00
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

  const allAvailabilityList = await getAvailabilityInDateRangeService(
    startDate,
    endDate,
  );

  if (!allAvailabilityList)
    return NextResponse.json<TMessageResponse>({
      message: 'List of all bookings not found',
    });
  return NextResponse.json<TApiResponse<Record<string, Date[]>>>({
    data: allAvailabilityList,
  });
}
