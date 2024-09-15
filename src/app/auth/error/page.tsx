import ServerSignInGate from '@slices/auth/components/ServerSignInGate';
import SignInGatePage from '@slices/auth/components/SignInGatePage';
import React from 'react';

import { ErrorPage } from '@/app/auth/error/ErrorPage';

const requireSignIn = false;
const href = '/';

const Error = async () => {
  await ServerSignInGate({ requireSignIn: requireSignIn, href: href });
  return (
    <SignInGatePage requireSignIn={requireSignIn} href={href}>
      <ErrorPage />
    </SignInGatePage>
  );
};

export default Error;
