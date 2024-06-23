import SignOutComponent from '@/components/auth/sign-out-func';
import Button from '@/components/buttons/Button';

// Maybe add more props later if we want to let them style it differently.
interface SignOutProps {
  text?: React.ReactNode;
}

export function SignOut({ text }: SignOutProps) {
  return (
    <form action={SignOutComponent}>
      <Button type='submit'>{text || 'Sign Out'}</Button>
    </form>
  );
}
