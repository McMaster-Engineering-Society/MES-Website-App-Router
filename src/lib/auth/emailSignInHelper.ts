'use server';

import { auth, signIn } from 'auth';

/**
 * Finds user's email if the user is authenticated (has a valid and active session in the database).
 * @returns email address if user is authenticated already, null if not.
 */
export const getUserEmail = async () => {
  const session = await auth();
  return session?.user?.email ?? null;
};

export const checkIsAuthenticated = async () => {
  const session = await auth();
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
