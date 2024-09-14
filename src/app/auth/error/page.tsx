import React from 'react';

import ServerSignInGatePage from '@/components/auth/ServerSignInGatePage';
import SignInGatePage from '@/components/auth/SignInGatePage';

import { ErrorPage } from '@/app/auth/error/ErrorPage';

const requireSignIn = false;
const href = '/';

const Error = async () => {
  await ServerSignInGatePage({ requireSignIn: requireSignIn, href: href });
  return (
    <SignInGatePage requireSignIn={requireSignIn} href={href}>
      <ErrorPage />
    </SignInGatePage>
  );
};

export default Error;
