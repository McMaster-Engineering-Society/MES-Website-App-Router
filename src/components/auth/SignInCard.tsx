import { useState } from 'react';

import { handleEmailSignIn } from '@/lib/auth/emailSignInHelper';

import Button from '@/components/buttons/Button';

const SignInCard = () => {
  const [formData, setFormData] = useState({ email: '' as string });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleEmailSignIn(formData.email);
  };

  return (
    <div className='w-80 p-8 rounded-lg shadow-md bg-white text-center hover:bg-gray-100'>
      Enter your Email
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          className='w-3/4'
          maxLength={320}
          placeholder='Email Address'
          value={formData.email}
          onChange={handleChange}
        />
        <Button type='submit'>Sign In</Button>
      </form>
    </div>
  );
};

export default SignInCard;
