'use client';

import { useState, useTransition } from 'react';

import { handleEmailSignIn } from '@/lib/auth/emailSignInHelper';

import Button from '@/components/buttons/Button';

// TODO: reformat component, make prettier
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
    <div className='flex-row w-80 p-8 rounded-lg shadow-md bg-white text-center hover:bg-gray-100'>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          className='w-3/4'
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
        <Button type='submit' className='mt-2'>
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInCard;
