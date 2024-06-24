import SignInCard from '@/components/auth/SignInCard';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

// TODO: reformat page, make prettier
export const SignInPage = () => {
  return (
    <PageLayout>
      <main className='layout'>
        <PageHeading title='Sign In' variant='blue' />
        <PageSection variant='white' className='items-center w-full'>
          <div>Sign in here</div>
          <SignInCard />
        </PageSection>
      </main>
    </PageLayout>
  );
};
