'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { TimePickerProvider } from '@/lib/context/TimePickerContext';

import BookingPage from '@/components/bookings/BookingPage';
import PageLayout from '@/components/layout/PageLayout';

const queryClient = new QueryClient();

export default function NewBookingSystemPage() {
  return (
    <PageLayout noFooter>
      <QueryClientProvider client={queryClient}>
        <TimePickerProvider>
          <div className='md:h-[calc(100vh-81px)] flex justify-center'>
            <div className='md:w-[85%] bg-white p-4'>
              <BookingPage />
            </div>
          </div>
        </TimePickerProvider>
      </QueryClientProvider>
    </PageLayout>
  );
}
