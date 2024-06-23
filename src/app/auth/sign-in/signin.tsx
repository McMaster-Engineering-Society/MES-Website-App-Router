import SignInCard from '@/components/auth/SignInCard';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

<<<<<<< HEAD
// TODO: reformat page, make prettier
=======
>>>>>>> 95e513d (feat: moved booking page and signin page to new file, started sign in components)
export const SignInPage = () => {
  return (
    <PageLayout>
      <main className='layout'>
        <PageHeading title='Sign In' variant='blue' />
<<<<<<< HEAD
        <PageSection variant='white' className='items-center w-full'>
=======
        <PageSection variant='white' className='items-center w-160'>
>>>>>>> 95e513d (feat: moved booking page and signin page to new file, started sign in components)
          <div>Sign in here</div>
          <SignInCard />
        </PageSection>
      </main>
    </PageLayout>
  );
};
