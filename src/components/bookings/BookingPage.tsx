import { CircleUserRound } from 'lucide-react';
import React from 'react';

import AvailableRooms from '@/components/bookings/AvailableRooms';
import BookingInfoModal from '@/components/bookings/BookingInfo';
import TimePicker from '@/components/bookings/TimePicker';
import TimePickerChanger from '@/components/bookings/TimePickerChanger';
import Button from '@/components/buttons/Button';

const BookingPage = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://example.com';
  };

  return (
    <div className='grid grid-cols-5 grids-rows-7'>
      <div className='col-span-4 row-span-1 flex items-center'>
        <h1 className='font-sans ml-[75px]'>
          Welcome to the Hatch Room Booking Page
        </h1>
      </div>
      <div className='col-span-1 row-span-1 flex align-center content-center justify-center py-4'>
        <Button
          onClick={handleButtonClick}
          className='font-bold w-full rounded-xl gap-2 h-fit'
        >
          <CircleUserRound />
          <i> User Dashboard </i>
        </Button>
      </div>
      <div className='col-span-4 row-span-1 px-8 flex items-center justify-center content-center'>
        <TimePickerChanger />
      </div>
      <div className='col-span-1 row-span-1 flex w-full justify-between gap-3 py-6'>
        <Button
          onClick={handleButtonClick}
          className='font-bold w-full rounded-xl bg-white h-fit'
          variant='outline'
        >
          Booking By Room
        </Button>
        <BookingInfoModal />
      </div>
      <div className='col-span-4 row-span-5'>
        <TimePicker />
      </div>
      <div className='col-span-1 row-span-5'>
        <AvailableRooms />
      </div>
    </div>
  );
};

export default BookingPage;
