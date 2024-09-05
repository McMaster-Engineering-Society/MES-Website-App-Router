import { redirect } from 'next/navigation';

import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';

const HatchBookingPage = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else {
    redirect('/hatch-booking/new-booking');
  }
};

export default HatchBookingPage;
