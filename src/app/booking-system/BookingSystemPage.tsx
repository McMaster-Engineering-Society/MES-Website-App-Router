'use client';
import Alert from '@mui/material/Alert';
import Link from 'next/link';

import PageLayout from '@/components/layout/PageLayout';

export default function BookingPage() {
  return (
    <PageLayout noFooter>
      <>
        <Alert className='h-[70px] sm:h-[50px]' severity='info'>
          We're planning to release our new booking system soon, but we need
          your help to test it out and make sure it's ready! If you have a few
          minutes to spare, please check it out{' '}
          <Link
            href='https://macengsociety.ca/hatch-booking/new-booking'
            target='_blank'
            rel='noopener noreferrer'
          >
            here
          </Link>{' '}
          and let us know of any issues or suggestions you have at this
          <Link
            href='https://forms.gle/dbZq1rAYVgANM9Zr8'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            form
          </Link>
          !
        </Alert>

        <iframe
          className='h-[calc(100vh-81px-70px)] w-full sm:h-[calc(100vh-81px-50px)]'
          src='https://squareup.com/appointments/buyer/widget/45dhrrihp46ip7/L2R6EFJ85Y7Z6'
        />
      </>
    </PageLayout>
  );
}
