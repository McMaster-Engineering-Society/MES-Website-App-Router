import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import TanStackQueryProvider from '@/components/context/TanStackQueryProvider';
import PageLayout from '@/components/layout/PageLayout';
import { Toaster } from '@/components/ui/sonner';

import { SessionProvider } from '@/slices/auth/context/SessionContext';
import { TimePickerProvider } from '@/slices/hatch/booking-page/context/TimePickerContext';

export const metadata: Metadata = {
  title: 'Hatch Admin Portal',
  description: 'Admin portal for Hatch Room bookings.',
};

export default function HatchAdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <PageLayout noFooter noBackground>
          <TanStackQueryProvider>
            <SessionProvider>
              <TimePickerProvider>
                <div className='flex h-[200px] max-h-[200px] w-full justify-center'>
                  <div className='flex w-full flex-col gap-2 bg-white p-4 md:px-12'>
                    <h1 className='text-xl font-semibold'>
                      Hatch Admin Dashboard
                    </h1>
                    {children}
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