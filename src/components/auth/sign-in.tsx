import Button from '@/components/buttons/Button';

import SignInComponent from './sign-in-func';

export function SignIn() {
  return (
    <form action={SignInComponent}>
      <Button type='submit'>Sign In</Button>
      {/* <button type='submit'>Sign In</button> */}
    </form>
  );
}
