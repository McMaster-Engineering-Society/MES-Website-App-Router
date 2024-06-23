import { redirect } from 'next/navigation';
import React from 'react';

import { SignInPage } from '@/app/auth/sign-in/signin';

const SignIn = async () => {
  const isAuthenticated = false;
  // const isAuthenticated = await checkIsAuthenticated();

  if (isAuthenticated) {
    redirect('/booking-system');
  } else {
    return <SignInPage />;
  }
};

export default SignIn;
