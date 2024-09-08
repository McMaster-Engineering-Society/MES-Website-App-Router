import { redirect } from 'next/navigation';

import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';

import BookingPage from '@/app/hatch-booking/new-booking/NewBookingPage';

const NewBookingPage = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else {
    return <BookingPage />;
  }
};

export default NewBookingPage;
