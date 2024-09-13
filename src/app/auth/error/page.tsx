import React from 'react';

import ServerSignInGatePage from '@/components/auth/ServerSignInGatePage';
import SignInGatePage from '@/components/auth/SignInGatePage';

import { ErrorPage } from '@/app/auth/error/ErrorPage';

const requireSignIn = false;
const href = '/';

const Error = () => {
  return (
    <ServerSignInGatePage requireSignIn={requireSignIn} href={href}>
      <SignInGatePage requireSignIn={requireSignIn} href={href}>
        <ErrorPage />
      </SignInGatePage>
    </ServerSignInGatePage>
  );
};

export default Error;
