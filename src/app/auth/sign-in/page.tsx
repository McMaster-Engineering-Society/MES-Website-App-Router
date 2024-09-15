import ServerSignInGate from '@slices/auth/components/ServerSignInGate';
import React from 'react';

import { SignInPage } from '@/app/auth/sign-in/signin';

const requireSignIn = false;
const href = '/hatch-booking/new-booking';

const SignIn = async () => {
  await ServerSignInGate({ requireSignIn: requireSignIn, href: href });
  return <SignInPage />;
};

export default SignIn;
