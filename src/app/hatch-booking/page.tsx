'use client';
import { redirect } from 'next/navigation';

import { useSessionContext } from '@/lib/context/SessionContext';

const HatchBookingPage = () => {
  const { profile } = useSessionContext();

  if (!profile) {
    redirect('/auth/sign-in');
  } else {
    redirect('/hatch-booking/new-booking');
  }
};

export default HatchBookingPage;
