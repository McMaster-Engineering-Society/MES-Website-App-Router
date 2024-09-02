'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { SessionProvider } from '@/lib/context/SessionContext';
import { TimePickerProvider } from '@/lib/context/TimePickerContext';

import BookingPage from '@/components/bookings/BookingPage';

const queryClient = new QueryClient();

export default function HatchBookingPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <TimePickerProvider>
          <div className='md:h-[calc(100vh-81px)] flex justify-center'>
            <div className='md:w-[85%] bg-white p-4'>
              <BookingPage />
            </div>
          </div>
        </TimePickerProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
