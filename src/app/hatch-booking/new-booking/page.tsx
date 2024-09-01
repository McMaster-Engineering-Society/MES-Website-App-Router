'use client';

import React from 'react';

import AvailableRooms from '@/components/bookings/AvailableRooms';
import RoomToggles from '@/components/bookings/RoomToggles';
import TimePicker from '@/components/bookings/TimePicker';
import TimePickerChanger from '@/components/bookings/TimePickerChanger';
import { useScreenSize } from '@/components/bookings/useScreenSize';

export default function BookingPage() {
  const screenSize = useScreenSize();

  return (
    <div className='mb-8 flex w-full flex-col gap-8'>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-none md:gap-8'>
        <div className='col-span-2'>
          <TimePickerChanger />
        </div>
        <div className='md:h-[600px] md:max-h-[600px]'>
          <TimePicker
            numDaysToShow={
              screenSize === 'lg' ? 7 : screenSize === 'md' ? 3 : 1
            }
          />
        </div>
        <div className='md:h-[600px] md:max-h-[600px]'>
          <AvailableRooms />
        </div>
      </div>
      <RoomToggles />
    </div>
  );
}
