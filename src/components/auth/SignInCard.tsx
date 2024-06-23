<<<<<<< HEAD
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
          placeholder='Email Address'
          value={formData.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ email: event.target.value });
          }}
          disabled={isPending}
          required
        />
        <Button type='submit' className='mt-2'>
          Sign In
        </Button>
      </form>
=======
const SignInCard = () => {
  return (
    <div className='w-80 p-8 rounded-lg shadow-md bg-white text-center hover:bg-gray-100'>
      Enter your Email
>>>>>>> 95e513d (feat: moved booking page and signin page to new file, started sign in components)
    </div>
  );
};

export default SignInCard;
