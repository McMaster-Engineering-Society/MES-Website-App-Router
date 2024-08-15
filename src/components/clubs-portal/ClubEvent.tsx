import React from 'react';

import StatusBadge from '@/components/clubs-portal/StatusBadge';

import { Booking } from '@/types/booking';

type ClubEventProps = {
  booking: Booking;
};
const ClubEvent = ({ booking }: ClubEventProps) => {
  const date = new Date(booking.year, booking.month - 1, booking.day);
  const time = booking.startTime + ' - ' + booking.endTime;

  return (
    <div
      key={booking.id}
      className='flex flex-row items-center justify-between pr-4 p-1 border-3 border-gray-200 rounded-lg mb-3 gap-7 text-center'
    >
      <StatusBadge status={booking.status} />
      <span className='basis-full'>{booking.name}</span>
      <span className='basis-1/4'>
        {booking.building + ' #' + booking.room}
      </span>
      <span className='basis-full'>
        {date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }) +
          ' @ ' +
          time}
      </span>
      <span className='basis-1/4'>{booking.id}</span>
    </div>
  );
};

export default ClubEvent;
