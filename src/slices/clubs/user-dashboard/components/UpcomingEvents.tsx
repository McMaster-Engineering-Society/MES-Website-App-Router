import { Divider } from '@nextui-org/react';
import React from 'react';

import Button from '@/components/buttons/Button';

import ClubEvent from '@/slices/clubs/user-dashboard/components/ClubEvent';

import { Booking, sampleBookings } from '@/types/booking';

const UpcomingEvents = () => {
  const bookings = getBookings();
  const bookingsGroupedByMonth = groupByMonth(bookings);

  return (
    <div className='flex flex-col w-full h-full'>
      <h3 className='mb-4'>Upcoming Bookings and Events</h3>
      <div className='w-full h-full overflow-y-scroll pr-2 relative'>
        {Object.entries(bookingsGroupedByMonth).map(([month, bookings]) => {
          const date = new Date(parseInt(month));
          return (
            <div key={month}>
              <div className='flex flex-row w-full items-center gap-3 mb-3 sticky top-0 bg-white z-10 shadow-sm'>
                <h3 className='font-normal shrink-0'>
                  {date.toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </h3>
                <Divider className='shrink bg-black' />
              </div>
              <div>
                {bookings.map((booking) => (
                  <ClubEvent key={booking.id} booking={booking} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <Button size='base' className='ml-auto mt-5'>
        <span className='font-normal not-italic'>
          Add Event to MES Calendar
        </span>
      </Button>
    </div>
  );
};

export default UpcomingEvents;

function getBookings(): Booking[] {
  return sampleBookings;
}

function groupByMonth(bookings: Booking[]): Record<string, Booking[]> {
  const sortedBookings = sortBookings(bookings);
  return sortedBookings.reduce(
    (groups, booking) => {
      // month is represented as epoch time to distinguish between the same month in different years (e.g. January 2023 vs January 2024)
      const month = new Date(booking.year, booking.month - 1).valueOf();
      if (!groups[month]) {
        groups[month] = [];
      }
      groups[month].push(booking);
      return groups;
    },
    {} as Record<string, Booking[]>,
  );
}

function sortBookings(bookings: Booking[]) {
  return bookings.sort((a, b) => {
    const aStartHourAsInt = parseInt(a.startTime.split(':')[0]);
    const dateA = new Date(a.year, a.month - 1, a.day, aStartHourAsInt);

    const bStartHourAsInt = parseInt(b.startTime.split(':')[0]);
    const dateB = new Date(b.year, b.month - 1, b.day, bStartHourAsInt);
    return dateA.valueOf() - dateB.valueOf();
  });
}
