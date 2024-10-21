import InfoIcon from '@mui/icons-material/Info';
import Alert from '@mui/material/Alert';
import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import TanStackQueryProvider from '@/components/context/TanStackQueryProvider';
import PageLayout from '@/components/layout/PageLayout';
import { Toaster } from '@/components/ui/sonner';

import { SessionProvider } from '@/slices/auth/context/SessionContext';
import TabNavigation from '@/slices/hatch/booking-page/components/TabNavigation';
import { TimePickerProvider } from '@/slices/hatch/booking-page/context/TimePickerContext';

export const metadata: Metadata = {
  title: 'Hatch Booking System',
  description: 'Book a meeting room in Gerald Hatch Centre.',
};

export default function NewBookingSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <PageLayout noFooter noBackground>
          <Alert
            className='bg-primary-700 text-white h-[70px] sm:h-[50px]'
            severity='info'
            icon={<InfoIcon className='text-primary-200' />}
          >
            Welcome to the new booking system (still in beta testing), proudly
            developed by the MES's Infrastructure Technology Team!{' '}
            <span className='underline'>
              <a href='https://forms.gle/fMPTNg1EdLBfthXW7'>
                Please leave feedback here so we can improve the system
                together.
              </a>
            </span>
          </Alert>
          <TanStackQueryProvider>
            <SessionProvider>
              <TimePickerProvider>
                <div className='flex h-[200px] max-h-[200px] w-full justify-center'>
                  <div className='flex w-full flex-col gap-2 bg-white p-4 md:px-12 max-w-[1452px]'>
                    <h1 className='text-xl font-semibold'>
                      Hatch Room Booking
                    </h1>
                    <TabNavigation>{children}</TabNavigation>
                  </div>
                </div>
              </TimePickerProvider>
            </SessionProvider>
          </TanStackQueryProvider>
        </PageLayout>
      </main>
      <Toaster />
    </>
  );
}
