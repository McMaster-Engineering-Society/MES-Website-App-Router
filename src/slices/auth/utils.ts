'use server';

import {
  auth,
  signIn,
  // signOut
} from 'auth';
import { isRedirectError } from 'next/dist/client/components/redirect';
import { redirect } from 'next/navigation';

/**
 * Finds user's email if the user is authenticated (has a valid and active session in the database).
 * @returns email address if user is authenticated already, null if not.
 */
export const getUserEmail = async () => {
  const session = await auth();
  return session?.user?.email ?? null;
};

/**
 * Sends a magic link for sign in to the input email.
 * @param email email that is attemping to sign in using nodemailer. Assumes it has already been checked for validity.
 */
export const handleEmailSignIn = async (email: string) => {
  let errorThrown;
  try {
    // The bottom two lines in this comment block are being kept because there is a chance that the CSRF issue with next auth could come back, and those lines may fix it.
    // This issue involves an error where logging says there is a missing CSRF token.
    // Because Authjs sometimes has a weird CSRF token issue, we're trying to work around it by signing out first (which solved the issue in testing).
    // await signOut({redirect: false});

    // Perform the sign-in using nodemailer to send a magic link.
    await signIn('nodemailer', {
      email,
      callbackUrl: '/hatch-booking/new-booking',
    });
    errorThrown = false;
  } catch (error) {
    // We need to catch errors because of how auth errors work, but wrapping signIn in a try catch block seems to throw redirect errors (pretty sure it also sends it without the try catch)
    // To fix this, specifically check if the error was a redirect error, in which case nothing happens.
    if (isRedirectError(error)) {
      // eslint-disable-next-line no-console
      console.log(
        'Redirect error. This always happens from Authjs, nothing to worry about.',
      );
    } else {
      // eslint-disable-next-line no-console
      console.error(error);

      errorThrown = true;
    }
  } finally {
    // Overrides authjs redirects because it wants to render stuff through api/, much better to send like this.
    // Could change that in the future if we want the api because the headers include stuff like the email provider, but we don't really want users to see that.
    if (!errorThrown) {
      redirect('/auth/success');
    }
    redirect('/auth/error');
  }
};

export const getSessionUser = async () => {
  const session = await auth();
  // eslint-disable-next-line no-console
  console.log(session);
  if (session?.user) {
    return session.user ?? null;
  } else {
    return null;
  }
};

// Checks if the domain name is mcmaster
// eslint-disable-next-line unused-imports/no-unused-vars
export function isMacEmail(email: string) {
  /**
   * Checks if the given email is from a mcmaster domain
   */
  const [_, domain] = email.toLowerCase().trim().split('@');
  return domain == 'mcmaster.ca';
}
