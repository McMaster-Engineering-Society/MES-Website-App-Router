'use client';

import React from 'react';

import AvailableRooms from '@/components/bookings/AvailableRooms';
import TimePicker from '@/components/bookings/TimePicker';
import TimePickerChanger from '@/components/bookings/TimePickerChanger';
import { useScreenSize } from '@/components/bookings/useScreenSize';

export default function BookingPage() {
  const screenSize = useScreenSize();

  return (
    <div className='mb-8 flex w-full flex-col gap-8'>
      <div className='flex flex-col gap-4 md:hidden'>
        <TimePickerChanger />
        <div className='grid h-[600px] grid-cols-2 gap-4'>
          <TimePicker
            numDaysToShow={
              screenSize === 'lg' ? 7 : screenSize === 'md' ? 3 : 1
            }
          />
          <AvailableRooms />
        </div>
      </div>

      <div className='hidden gap-4 md:flex'>
        <div className='flex flex-col gap-2'>
          <TimePickerChanger />
          <TimePicker
            numDaysToShow={
              screenSize === 'lg' ? 7 : screenSize === 'md' ? 3 : 1
            }
            className='h-full'
          />
        </div>
        <AvailableRooms className='h-[600px]' />
      </div>
    </div>
  );
}
