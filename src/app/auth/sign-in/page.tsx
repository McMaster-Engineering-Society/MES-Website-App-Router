import { redirect } from 'next/navigation';
import React from 'react';

<<<<<<< HEAD
import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';

import { SignInPage } from '@/app/auth/sign-in/signin';

const SignIn = async () => {
  const isAuthenticated = await checkIsAuthenticated();
=======
import { SignInPage } from '@/app/auth/sign-in/signin';

const SignIn = async () => {
  const isAuthenticated = false;
  // const isAuthenticated = await checkIsAuthenticated();
>>>>>>> 95e513d (feat: moved booking page and signin page to new file, started sign in components)

  if (isAuthenticated) {
    redirect('/booking-system');
  } else {
    return <SignInPage />;
  }
};

export default SignIn;
