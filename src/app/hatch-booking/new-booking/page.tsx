import SignInGatePage from '@/components/auth/SignInGatePage';

import BookingPage from '@/app/hatch-booking/new-booking/NewBookingPage';

const NewBookingPage = () => {
  return (
    <SignInGatePage requireSignIn={true} href='/auth/sign-in'>
      <BookingPage />
    </SignInGatePage>
  );
};

export default NewBookingPage;
