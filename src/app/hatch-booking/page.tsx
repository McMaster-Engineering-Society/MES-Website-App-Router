import { redirect } from 'next/navigation';
import React from 'react';

import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';

import PageLayout from '@/components/layout/PageLayout';

import BookingSystem from '@/app/hatch-booking/BookingPage';

const HatchBookingPage = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else {
    return (
      <PageLayout noFooter>
        <BookingSystem />
      </PageLayout>
    );
  }
};

export default HatchBookingPage;
