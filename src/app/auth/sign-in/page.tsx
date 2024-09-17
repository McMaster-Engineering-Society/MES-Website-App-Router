import ServerSignInGate from '@slices/auth/components/ServerSignInGate';
import React from 'react';

import { SignInPage } from '@/app/auth/sign-in/signin';
import SignInGatePage from '@/slices/auth/components/SignInGatePage';

const requireSignIn = false;
const href = '/hatch-booking/new-booking';

const SignIn = async () => {
  await ServerSignInGate({ requireSignIn: requireSignIn, href: href });
  return (
    <SignInGatePage requireSignIn={requireSignIn} href={href}>
      <SignInPage />
    </SignInGatePage>
  );
};

export default SignIn;
