import { redirect } from 'next/navigation';
import React from 'react';

import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';

import BookingSystem from '@/app/booking-system/BookingSystemPage';

const BookingSystemPage = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else {
    return <BookingSystem />;
  }
};

export default BookingSystemPage;
