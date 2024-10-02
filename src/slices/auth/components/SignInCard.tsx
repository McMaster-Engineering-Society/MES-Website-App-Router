'use client';

import { handleEmailSignIn } from '@slices/auth/utils';
import { LoaderCircle } from 'lucide-react';
import { useState, useTransition } from 'react';

import Button from '@/components/buttons/Button';

const SignInCard = () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({ email: '' as string });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    startTransition(async () => {
      await handleEmailSignIn(formData.email);
    });
  };

  return (
    <div className='flex flex-col gap-6 w-full p-2 md:p-4 lg:p-8 rounded-lg shadow-md bg-white text-center items-center justify-center content-center m-auto h-full'>
      <div className='flex flex-col justify-center content-center w-full gap-2'>
        <div className='font-semibold text-xl text-gray-700'>
          Hatch Booking Sign In
        </div>
        <div className='text-gray-500'>
          Enter your McMaster email to start booking
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-2 justify-center items-center w-full max-w-96'
      >
        <div className='flex w-full flex-col items-start justify-start content-start flex-1'>
          <input
            type='email'
            className='w-full border border-gray-300 rounded-md shadow-sm p-2'
            maxLength={320}
            placeholder='username@mcmaster.ca'
            pattern='.+@mcmaster\.ca'
            value={formData.email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFormData({ email: event.target.value });
            }}
            // These next two onInvalid and onInput are used for custom error messages about requiring a mac email.
            onInvalid={(event: React.InvalidEvent<HTMLInputElement>) => {
              event.target.setCustomValidity(
                'Please use a McMaster email address',
              );
            }}
            onInput={(event: React.FormEvent<HTMLInputElement>) => {
              const inputElement = event.target as HTMLInputElement; // Type assertion to use
              inputElement.setCustomValidity(''); // Clear the custom message when input changes
            }}
            disabled={isPending}
            required
          />
        </div>
        <Button type='submit' className='w-full' disabled={isPending}>
          {isPending ? <LoaderCircle className='animate-spin' /> : 'Continue'}
        </Button>
      </form>
    </div>
  );
};

export default SignInCard;
