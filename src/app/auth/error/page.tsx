import { redirect } from 'next/navigation';
import React from 'react';

import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';

import { ErrorPage } from '@/app/auth/error/ErrorPage';

const Error = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  // Redirects to home page if for some reason someone tries to access the error page but they're signed in.
  if (isAuthenticated) {
    redirect('/');
  } else {
    return <ErrorPage />;
  }
};

export default Error;
