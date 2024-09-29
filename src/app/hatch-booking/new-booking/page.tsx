import ServerSignInGate from '@slices/auth/components/ServerSignInGate';

import BookingPage from '@/app/hatch-booking/new-booking/NewBookingPage';
import SignInGatePage from '@/slices/auth/components/SignInGatePage';

const requireSignIn = true;
const href = '/auth/sign-in';

const NewBookingPage = async () => {
  await ServerSignInGate({ requireSignIn: requireSignIn, href: href });
  return (
    <SignInGatePage requireSignIn={requireSignIn} href={href}>
      <BookingPage />
    </SignInGatePage>
  );
};

export default NewBookingPage;
