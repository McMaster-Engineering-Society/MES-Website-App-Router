import React from 'react';

import ServerSignInGatePage from '@/components/auth/ServerSignInGatePage';
import SignInGatePage from '@/components/auth/SignInGatePage';

import { SignInPage } from '@/app/auth/sign-in/signin';

const requireSignIn = false;
const href = '/hatch-booking/new-booking';

const SignIn = () => {
  return (
    <ServerSignInGatePage requireSignIn={requireSignIn} href={href}>
      <SignInGatePage requireSignIn={requireSignIn} href={href}>
        <SignInPage />
      </SignInGatePage>
    </ServerSignInGatePage>
  );
};

export default SignIn;
