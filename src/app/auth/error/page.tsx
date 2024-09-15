import ServerSignInGate from '@slices/auth/components/ServerSignInGate';
import React from 'react';

import { ErrorPage } from '@/app/auth/error/ErrorPage';

const requireSignIn = false;
const href = '/';

const Error = async () => {
  await ServerSignInGate({ requireSignIn: requireSignIn, href: href });
  return <ErrorPage />;
};

export default Error;
