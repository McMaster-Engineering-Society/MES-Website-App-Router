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
      <span className='w-32'>{booking.name}</span>
      <span className='w-44'>{booking.building + ' #' + booking.room}</span>
      <span className='w-72'>
        {date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }) +
          ' @ ' +
          time}
      </span>
      <span className='w-72'>{booking.id}</span>
    </div>
  );
};

export default ClubEvent;
