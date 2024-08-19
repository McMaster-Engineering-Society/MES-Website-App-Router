'use client';

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { TimePickerProvider } from '@/lib/context/TimePickerContext';

import AvailableRooms from '@/components/bookings/AvailableRooms';
import TimePicker from '@/components/bookings/TimePicker';
import PageLayout from '@/components/layout/PageLayout';

const queryClient = new QueryClient();

export default function NewBookingSystemPage() {
  return (
    <PageLayout noFooter>
      <main className='layout'>
        <QueryClientProvider client={queryClient}>
          <TimePickerProvider>
            <div className='flex flex-col items-center mt-2'>
              <div className='flex items-center justify-between w-full max-w-screen-lg'>
                <h1 className='font-sans mr-10'>
                  Welcome to the Hatch Room Booking Page!!!!!
                </h1>
                <Button
                  onClick={handleButtonClick}
                  className='bg-red-500 text-white font-bold py-2 px-4 w-48 rounded-;g flex items-center '
                >
                  {' '}
                  <svg
                    className='h-6 w-6 text-white mr-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />{' '}
                  </svg>
                  <i> User Dashboard </i>
                </Button>
              </div>
              <div className='flex mt-4 w-full max-w-screen-lg justify-between'>
                <div className='bg-white w-3/4 rounded-lg'></div>
                <div className='bg-white ml-16 text-xs mr-4 p-2 rounded-lg text-red-500 outline outline-red-500 outline-2'>
                  {' '}
                  Booking By Room
                </div>
                <Popover placement='right'>
                  <PopoverTrigger>
                    <Button size='sm' className='bg-red-400 text-xs text-white'>
                      ?
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className='px-1 py-2'>
                      <div className='text-small font-bold'>
                        Popover Content
                      </div>
                      <div className='text-tiny'>
                        This is the popover content
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className='flex mt-4 w-full max-w-screen-lg justify-end'>
                <div className='w-full flex justify-end'>
                  <TimePicker />
                  <AvailableRooms />
                </div>
              </div>
            </div>
          </TimePickerProvider>
        </QueryClientProvider>
      </main>
    </PageLayout>
  );
}

const handleButtonClick = () => {
  window.location.href = 'https://example.com';
};
