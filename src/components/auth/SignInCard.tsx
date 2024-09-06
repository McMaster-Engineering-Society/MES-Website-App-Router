'use client';

import { LoaderCircle } from 'lucide-react';
import { useState, useTransition } from 'react';

import { handleEmailSignIn } from '@/lib/auth/emailSignInHelper';

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
    <div className='flex-row w-full p-8 rounded-lg shadow-md bg-white text-center items-center justify-center content-center m-auto h-full'>
      <div className='flex flex-col items-center justify-center content-center w-full mb-8'>
        <div className='font-semibold text-3xl text-gray-700 w-3/4 text-left '>
          Welcome to the Hatch Booking Dashboard!
        </div>
        <div className='text-xl text-gray-500 w-3/4 text-left'>
          Please enter your McMaster email to continue.
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-5 justify-center items-center'
      >
        <div className='flex flex-col items-start justify-start content-start w-3/4'>
          <label
            htmlFor='email'
            className='text-sm font-medium text-gray-700 w-full text-left'
          >
            Email
          </label>
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
        <Button type='submit' className='mt-2 w-3/4' disabled={isPending}>
          {isPending ? <LoaderCircle className='animate-spin' /> : 'Continue'}
        </Button>
      </form>
    </div>
  );
};

export default SignInCard;
