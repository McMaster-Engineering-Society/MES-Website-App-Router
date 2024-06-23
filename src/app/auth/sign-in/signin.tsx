import SignInCard from '@/components/auth/SignInCard';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

export const SignInPage = () => {
  return (
    <PageLayout>
      <main className='layout'>
        <PageHeading title='Sign In' variant='blue' />
        <PageSection variant='white' className='items-center w-160'>
          <div>Sign in here</div>
          <SignInCard />
        </PageSection>
      </main>
    </PageLayout>
  );
};
