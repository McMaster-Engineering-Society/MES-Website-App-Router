import SignInCard from '@/components/auth/SignInCard';
import PageLayout from '@/components/layout/PageLayout';

import HatchLoginSvg from '@/constant/user-dashboard/HatchLoginSvg';

export const SignInPage = () => {
  return (
    <PageLayout noFooter>
      <main className='min-h-screen bg-gray-100 flex justify-center'>
        <div className='flex items-stretch bg-primary-800 p-5 my-16 w-4/5 rounded-md'>
          <div className='flex w-full'>
            <div className='flex-1 flex items-center justify-center h-full'>
              <SignInCard />
            </div>
            <div className='flex-1 flex items-center justify-center'>
              <HatchLoginSvg className='w-full h-auto' />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};
