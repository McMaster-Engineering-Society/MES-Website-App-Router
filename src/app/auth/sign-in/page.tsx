import React from 'react';

import ServerSignInGatePage from '@/components/auth/ServerSignInGatePage';
import SignInGatePage from '@/components/auth/SignInGatePage';

import { SignInPage } from '@/app/auth/sign-in/signin';

const requireSignIn = false;
const href = '/hatch-booking/new-booking';

const SignIn = async () => {
  await ServerSignInGatePage({ requireSignIn: requireSignIn, href: href });
  return (
    <SignInGatePage requireSignIn={requireSignIn} href={href}>
      <SignInPage />
    </SignInGatePage>
  );
};

export default SignIn;
