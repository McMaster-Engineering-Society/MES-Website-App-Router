import SignInComponent from '@/components/auth/sign-in-func';
import Button from '@/components/buttons/Button';

// NOTE: not needed component. Currently, sign-in-func.tsx isn't needed because the redirect that Authjs causes can lead to errors.

// Maybe add more props later if we want to let them style it differently.
interface SignInProps {
  text?: React.ReactNode;
}

// A button that sends someone to the sign in page. Very basic styling.
export function SignIn({ text }: SignInProps) {
  return (
    <form action={SignInComponent}>
      <Button type='submit'>{text || 'Sign In'}</Button>
    </form>
  );
}
