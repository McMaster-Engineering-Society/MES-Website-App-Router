'use client';

import Alert from '@mui/material/Alert';
import React from 'react';

import PageLayout from '@/components/layout/PageLayout';

export default function BookingSystemPage() {
  return (
    <PageLayout noFooter>
      <>
        <Alert className='h-[70px] sm:h-[50px]' severity='info'>
          This is a temporary booking system. Our new, custom booking system is
          coming soon!
        </Alert>

        <iframe
          className='h-[calc(100vh-81px-70px)] w-full sm:h-[calc(100vh-81px-50px)]'
          src='https://squareup.com/appointments/buyer/widget/45dhrrihp46ip7/L2R6EFJ85Y7Z6'
        />
      </>
    </PageLayout>
  );
}
