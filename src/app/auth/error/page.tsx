import React from 'react';

import SignInGatePage from '@/components/auth/SignInGatePage';

import { ErrorPage } from '@/app/auth/error/ErrorPage';

const Error = () => {
  return (
    <SignInGatePage requireSignIn={false} href='/'>
      <ErrorPage />
    </SignInGatePage>
  );
};

export default Error;
