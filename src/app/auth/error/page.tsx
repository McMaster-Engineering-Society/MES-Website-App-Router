'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import TextButton from '@/components/buttons/TextButton';

export default function AuthError() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/auth');
  };

  return (
    <main>
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
          <TextButton variant='basic' onClick={handleClick} className='mt-4'>
            Try again
          </TextButton>
        </div>
      </section>
    </main>
  );
}
