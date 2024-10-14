'use client';

import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';

export function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  // Exits the page if we didn't get an error to lead us here from NextAuth.
  if (!error) {
    redirect('/auth/sign-in');
  }

  // eslint-disable-next-line no-console
  console.log('Someone had an error signing in:', error);
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <div className='flex flex-col items-center min-h-full'>
            <div className='flex flex-col w-3/4 rounded-t-lg shadow-md bg-white text-center items-center justify-center '>
              <div className='flex flex-col items-center text-[hsl(0,45%,28%)] bg-red-400 rounded-t-lg w-full pb-14'>
                <h1 className='flex flex-col items-center justify-center mt-10'>
                  <RiAlarmWarningFill
                    size={60}
                    className='drop-shadow-glow animate-flicker text-red-500'
                  />
                </h1>
                <h1 className='mt-5 mb-5'> Oops! </h1>
                <h2 className='w-1/2 mb-5'>
                  It looks like there was an error with signing in.
                </h2>
              </div>
              <div className='flex flex-col w-5/6 pt-6 pb-4 m-8 rounded-lg items-center justify-center text-center shadow-md bg-amber-200'>
                <b>
                  Sign in again, then copy and paste the sign-in link into your
                  browser
                </b>
                <ButtonLink
                  variant='outline'
                  href='/auth/sign-in'
                  className='mt-2 w-1/4'
                >
                  Try Again
                </ButtonLink>
              </div>
              <div className='w-5/6 justify-center text-center mb-8'>
                If the error persists, contact the administrator at
                ghc@mcmaster.ca
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
