'use client';

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CircleUserRound, FileQuestion } from 'lucide-react';
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
            <div className='grid grid-cols-5 grids-rows-12 h-[750px]'>
              <div className='col-span-4 row-span-1 '>
                <h1 className='font-sans mr-10'>
                  Welcome to the Hatch Room Booking Page
                </h1>
              </div>
              <div className='col-span-1 row-span-1  flex align-center content-center justify-center'>
                <Button
                  onClick={handleButtonClick}
                  className='bg-red-500 text-white font-bold py-2 px-4 w-full rounded-lg flex items-center'
                >
                  {' '}
                  <CircleUserRound />
                  <i> User Dashboard </i>
                </Button>
              </div>
              <div className='col-span-4 row-span-11 '>
                <TimePicker />
              </div>
              <div className='col-span-1 row-span-1 border-2  border-black'>
                <div className='flex w-full justify-between gap-2'>
                  <div className='bg-white text-xs p-2 rounded-lg text-red-500 outline outline-red-500 outline-2 w-full'>
                    {' '}
                    Booking By Room
                  </div>
                  <Popover placement='right' className='w-[50px] h-[50px]'>
                    <PopoverTrigger>
                      <Button
                        size='sm'
                        className='bg-red-400 text-xs text-white max-w-[32px] max-h-[32px]'
                      >
                        <FileQuestion />
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
              </div>
              <div className='col-span-1 row-span-10 border-2  border-black'>
                <AvailableRooms />
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
