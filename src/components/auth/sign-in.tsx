import Button from '@/components/buttons/Button';

import SignInComponent from './sign-in-func';

// Maybe add more props later if we want to let them style it differently.
interface SignInProps {
  text?: React.ReactNode;
}

export function SignIn({ text }: SignInProps) {
  return (
    <form action={SignInComponent}>
      <Button type='submit'>{text || 'Sign In'}</Button>
    </form>
  );
}
