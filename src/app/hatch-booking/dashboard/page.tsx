import SignInGatePage from '@/components/auth/SignInGatePage';

import BookingDashboardPage from '@/app/hatch-booking/dashboard/BookingDashboardPage';

const DashboardPage = () => {
  return (
    <SignInGatePage requireSignIn={true} href='/auth/sign-in'>
      <BookingDashboardPage />
    </SignInGatePage>
  );
};

export default DashboardPage;
