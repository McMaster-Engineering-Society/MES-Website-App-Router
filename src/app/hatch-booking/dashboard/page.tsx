import { redirect } from 'next/navigation';

import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';

import BookingDashboardPage from '@/app/hatch-booking/dashboard/BookingDashboardPage';

const DashboardPage = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else {
    return <BookingDashboardPage />;
  }
};

export default DashboardPage;
