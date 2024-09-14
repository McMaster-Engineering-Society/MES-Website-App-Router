import ServerSignInGatePage from '@/components/auth/ServerSignInGatePage';
import SignInGatePage from '@/components/auth/SignInGatePage';

import BookingDashboardPage from '@/app/hatch-booking/dashboard/BookingDashboardPage';

const requireSignIn = true;
const href = '/auth/sign-in';

const DashboardPage = async () => {
  await ServerSignInGatePage({ requireSignIn: requireSignIn, href: href });
  return (
    <SignInGatePage requireSignIn={requireSignIn} href={href}>
      <BookingDashboardPage />
    </SignInGatePage>
  );
};

export default DashboardPage;
