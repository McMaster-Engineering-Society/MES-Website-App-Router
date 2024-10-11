import ServerSignInGate from '@slices/auth/components/ServerSignInGate';
import React from 'react';

import { ErrorPage } from '@/app/auth/error/ErrorPage';
import SignInGatePage from '@/slices/auth/components/SignInGatePage';

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
