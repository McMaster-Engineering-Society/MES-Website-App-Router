'use client';

import { redirect } from 'next/navigation';
import React from 'react';

import BookingSystem from '@/app/booking-system/BookingSystemPage';

export default function BookingSystemPage() {
  const isAuthenticated = true;
  // const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else {
    return <BookingSystem />;
  }
}
