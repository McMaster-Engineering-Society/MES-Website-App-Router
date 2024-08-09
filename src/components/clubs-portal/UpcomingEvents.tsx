import { Divider } from '@nextui-org/react';
import React from 'react';

import Button from '@/components/buttons/Button';
import ClubEvent from '@/components/clubs-portal/ClubEvent';

import { Booking } from '@/types/booking';

const UpcomingEvents = () => {
  const bookings = [
    {
      id: 1,
      name: 'Movie Night',
      clubId: 15,
      day: 30,
      month: 3,
      year: 2024,
      startTime: '12:00',
      endTime: '14:00',
      building: 'JHE',
      room: '311',
      status: 'approved' as Booking['status'],
    },
    {
      id: 2,
      name: 'Presentation',
      clubId: 1,
      day: 21,
      month: 1,
      year: 2024,
      startTime: '12:00',
      endTime: '14:00',
      building: 'MDCL',
      room: '112',
      status: 'rejected' as Booking['status'],
    },
    {
      id: 3,
      name: 'Social Event',
      clubId: 1,
      day: 7,
      month: 1,
      year: 2024,
      startTime: '12:00',
      endTime: '14:00',
      building: 'BSB',
      room: '107',
      status: 'pending' as Booking['status'],
    },
    {
      id: 4,
      name: 'Workshop',
      clubId: 1,
      day: 30,
      month: 5,
      year: 2024,
      startTime: '15:00',
      endTime: '17:00',
      building: 'PGCLL',
      room: '127',
      status: 'approved' as Booking['status'],
    },
    {
      id: 5,
      name: 'Presentation',
      clubId: 1,
      day: 30,
      month: 5,
      year: 2024,
      startTime: '15:00',
      endTime: '17:00',
      building: 'PGCLL',
      room: '127',
      status: 'approved' as Booking['status'],
    },
    {
      id: 6,
      name: 'Movie Night',
      clubId: 15,
      day: 30,
      month: 5,
      year: 2024,
      startTime: '12:00',
      endTime: '14:00',
      building: 'JHE',
      room: '311',
      status: 'approved' as Booking['status'],
    },
    {
      id: 7,
      name: 'Presentation',
      clubId: 1,
      day: 21,
      month: 5,
      year: 2024,
      startTime: '12:00',
      endTime: '14:00',
      building: 'MDCL',
      room: '112',
      status: 'rejected' as Booking['status'],
    },
    {
      id: 8,
      name: 'Social Event',
      clubId: 1,
      day: 7,
      month: 5,
      year: 2024,
      startTime: '12:00',
      endTime: '14:00',
      building: 'BSB',
      room: '107',
      status: 'pending' as Booking['status'],
    },
    {
      id: 9,
      name: 'Workshop',
      clubId: 1,
      day: 30,
      month: 5,
      year: 2024,
      startTime: '15:00',
      endTime: '17:00',
      building: 'PGCLL',
      room: '127',
      status: 'approved' as Booking['status'],
    },
    {
      id: 10,
      name: 'Presentation',
      clubId: 1,
      day: 7,
      month: 1,
      year: 2025,
      startTime: '15:00',
      endTime: '17:00',
      building: 'PGCLL',
      room: '127',
      status: 'approved' as Booking['status'],
    },
  ];

  const groups = monthGroups(bookings);

  return (
    <div className='flex flex-col w-full h-full '>
      <h3 className='mb-4'>Upcoming Bookings and Events</h3>
      <div className='w-full h-full overflow-y-scroll pr-2'>
        {Object.entries(groups).map(([key, bookings]) => {
          const date = new Date(parseInt(key));
          return (
            <div key={key}>
              <div className='flex flex-row w-full items-center gap-3 mb-3'>
                <h3 className='font-normal shrink-0'>
                  {date.toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </h3>
                <Divider className='shrink bg-black' />
              </div>

              {bookings.map((booking) => (
                <ClubEvent key={booking.id} booking={booking} />
              ))}
            </div>
          );
        }, [])}
      </div>
      <Button size='base' className='ml-auto mt-5'>
        <span className='font-normal not-italic'>
          Add Event to MES Calendar
        </span>
      </Button>
    </div>
  );
};

function monthGroups(bookings: Booking[]): Record<string, Booking[]> {
  const sortedBookings = sortBookings(bookings);
  return sortedBookings.reduce(
    (acc, booking) => {
      const key = new Date(booking.year, booking.month - 1).valueOf();
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(booking);
      return acc;
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

export default UpcomingEvents;
