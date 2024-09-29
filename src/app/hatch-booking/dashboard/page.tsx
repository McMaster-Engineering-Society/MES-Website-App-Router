import ServerSignInGate from '@slices/auth/components/ServerSignInGate';

import BookingDashboardPage from '@/app/hatch-booking/dashboard/BookingDashboardPage';
import SignInGatePage from '@/slices/auth/components/SignInGatePage';

const requireSignIn = true;
const href = '/auth/sign-in';

const DashboardPage = async () => {
  await ServerSignInGate({ requireSignIn: requireSignIn, href: href });
  return (
    <SignInGatePage requireSignIn={requireSignIn} href={href}>
      <BookingDashboardPage />
    </SignInGatePage>
  );
};

export default DashboardPage;
