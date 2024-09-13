import ServerSignInGatePage from '@/components/auth/ServerSignInGatePage';
import SignInGatePage from '@/components/auth/SignInGatePage';

import BookingPage from '@/app/hatch-booking/new-booking/NewBookingPage';

const requireSignIn = true;
const href = '/auth/sign-in';

const NewBookingPage = () => {
  return (
    <ServerSignInGatePage requireSignIn={requireSignIn} href={href}>
      <SignInGatePage requireSignIn={requireSignIn} href={href}>
        <BookingPage />
      </SignInGatePage>
    </ServerSignInGatePage>
  );
};

export default NewBookingPage;
