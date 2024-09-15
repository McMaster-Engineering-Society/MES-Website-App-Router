'use server';
import { redirect } from 'next/navigation';

import { getUserEmail } from '@/lib/auth/emailSignInHelper';

type ServerSignInGatePageProps = {
  requireSignIn?: boolean;
  href?: string;
  adminRequired?: boolean;
};

/**
 * This component acts as a blocker that sends a user away from a page if they are already signed in / out, specifically on the server (so it redirects right away, being more secure by redirecting before rendering anything for the client).
 * @param param0 Contains children of the page, boolean for if we are redirect a user if they are signed in / out, and href for where to redirect.
 * @returns
 */
const ServerSignInGatePage = async ({
  requireSignIn = true,
  href = '/auth/sign-in',
}: ServerSignInGatePageProps) => {
  const email = await getUserEmail();

  // If we want to block the user if they are signed out, redirect them if there is no email. Else, we redirect them if there is a email because we block the page when they're signed in.
  if (requireSignIn ? !email : email) {
    redirect(href);
  }
};

export default ServerSignInGatePage;
