import React from 'react';

import SignInGatePage from '@/components/auth/SignInGatePage';

import { SignInPage } from '@/app/auth/sign-in/signin';

const SignIn = () => {
  return (
    <SignInGatePage requireSignIn={false} href='/hatch-booking/new-booking'>
      <SignInPage />
    </SignInGatePage>
  );
};

export default SignIn;
