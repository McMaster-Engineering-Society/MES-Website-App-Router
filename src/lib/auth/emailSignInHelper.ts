'use server';

import { auth, signIn } from 'auth';

export const checkIsAuthenticated = async () => {
  const session = await auth();
  // eslint-disable-next-line no-console
  console.log(session);
  if (session) {
    return true;
  } else {
    return false;
  }
};

export const handleEmailSignIn = async (email: string) => {
  try {
    await signIn('nodemailer', { email, callbackUrl: '/booking-system' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    // throws error because Auth.js handles them for us.
    throw error;
  }
};
