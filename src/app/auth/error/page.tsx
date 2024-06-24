'use client';

import { useSearchParams } from 'next/navigation';
import { redirect } from 'next/navigation';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';

// TODO: reformat page, make prettier
export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  // Exits the page if we didn't get an error to lead us here from NextAuth.
  if (!error) {
    redirect('/auth/sign-in');
  }
  return (
    <PageLayout>
      <main className='layout'>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>
              There was an error with signing in. You must use a McMaster email
              address in order to sign in.
            </h1>
            <ButtonLink
              href='/auth/sign-in'
              variant='outline'
              className='mt-8 w-1/4'
            >
              Try Again
            </ButtonLink>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
