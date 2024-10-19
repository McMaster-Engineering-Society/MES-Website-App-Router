'use client';

import Alert from '@mui/material/Alert';
import React from 'react';

import { useScreenSize } from '@/components/hooks/useScreenSize';

import AvailableRooms from '@/slices/hatch/booking-page/components/AvailableRooms';
import TimePicker from '@/slices/hatch/booking-page/components/TimePicker';
import TimePickerChanger from '@/slices/hatch/booking-page/components/TimePickerChanger';

export default function BookingPage() {
  const screenSize = useScreenSize();

  return (
    <>
      <Alert className='h-[70px] sm:h-[50px]' severity='info'>
        Welcome to the new booking system! Please click
        <a href='https://forms.gle/fMPTNg1EdLBfthXW7'> here</a> to leave your
        feedback.
      </Alert>
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
      <Alert className='h-[70px] sm:h-[50px]' severity='info'>
        This is proudly developed by the MES's Infrastructure Technology Team
      </Alert>
    </>
  );
}
