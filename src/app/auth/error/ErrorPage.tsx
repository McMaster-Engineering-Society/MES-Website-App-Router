'use client';

import { SignOut } from '@slices/auth/components/SignOutButton';
import { useSearchParams } from 'next/navigation';
// import { redirect } from 'next/navigation';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';

// TODO: reformat page, make prettier
export function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  // Exits the page if we didn't get an error to lead us here from NextAuth.
  if (!error) {
    // redirect('/auth/sign-in');
    // eslint-disable-next-line no-console
    console.log('no error apparently');
  }
  // eslint-disable-next-line no-console
  console.log(error);
  return (
    <PageLayout>
      <main className='layout'>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1>
              Oops! It looks like there was an error with signing in.
              {error == 'Configuration' &&
                ' You must use a McMaster email address in order to sign in.'}
            </h1>
            <ButtonLink
              href='/auth/sign-in'
              variant='outline'
              className='my-8 w-1/4'
            >
              Try Again
            </ButtonLink>
            <h1>
              If you're not sure why you got the error, try signing out here:
            </h1>
            <SignOut className='w-60 mt-4'></SignOut>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
