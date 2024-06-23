<<<<<<< HEAD
import { redirect } from 'next/navigation';
import React from 'react';

import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';

import BookingSystem from '@/app/booking-system/BookingSystemPage';

const BookingSystemPage = async () => {
  const isAuthenticated = await checkIsAuthenticated();

=======
'use client';

import { redirect } from 'next/navigation';
import React from 'react';

import BookingSystem from '@/app/booking-system/BookingSystemPage';

export default function BookingSystemPage() {
  const isAuthenticated = true;
  // const isAuthenticated = await checkIsAuthenticated();

>>>>>>> 95e513d (feat: moved booking page and signin page to new file, started sign in components)
  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else {
    return <BookingSystem />;
  }
<<<<<<< HEAD
};

export default BookingSystemPage;
=======
}
>>>>>>> 95e513d (feat: moved booking page and signin page to new file, started sign in components)
