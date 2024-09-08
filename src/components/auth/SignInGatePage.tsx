'use client';

import { redirect } from 'next/navigation';
import React from 'react';

import { useSessionContext } from '@/lib/context/SessionContext';

type SignInGatePageProps = {
  children: React.ReactNode;
  requireSignIn?: boolean;
  href?: string;
  adminRequired?: boolean;
};

/**
 * This component acts as a blocker that sends a user away from a page if they are already signed in / out.
 * @param param0 Contains children of the page, boolean for if we are redirect a user if they are signed in / out, href for where to redirect, and adminRequired for if we also block if they aren't an admin.
 * @returns
 */
const SignInGatePage = ({
  children,
  requireSignIn = true,
  href = '/auth/sign-in',
  adminRequired = false,
}: SignInGatePageProps) => {
  const { profile, isAdmin } = useSessionContext();

  // If we want to block the user if they are signed out, redirect them if there is no profile. Else, we redirect them if there is a profile because we block the page when they're signed in.
  if (requireSignIn ? !profile : profile) {
    redirect(href);
  } else if (adminRequired && !isAdmin) {
    // Redirects user to regular booking page if they are not an admin and they need to be for this page.
    redirect('/hatch-booking/new-booking');
  } else {
    return <>{children}</>;
  }
};

export default SignInGatePage;
