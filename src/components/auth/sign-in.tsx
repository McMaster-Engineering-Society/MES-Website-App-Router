import SignInComponent from '@/components/auth/sign-in-func';
import Button from '@/components/buttons/Button';

// Maybe add more props later if we want to let them style it differently.
interface SignInProps {
  text?: React.ReactNode;
}

<<<<<<< HEAD
=======
// Maybe add more props later if we want to let them style it differently.
interface SignInProps {
  text?: React.ReactNode;
}

>>>>>>> 95e513d (feat: moved booking page and signin page to new file, started sign in components)
export function SignIn({ text }: SignInProps) {
  return (
    <form action={SignInComponent}>
      <Button type='submit'>{text || 'Sign In'}</Button>
    </form>
  );
}
