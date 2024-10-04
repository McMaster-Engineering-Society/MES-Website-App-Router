import PageLayout from '@/components/layout/PageLayout';

import HatchLoginSvg from '@/constant/user-dashboard/HatchLoginSvg';
import SignInCard from '@/slices/auth/components/SignInCard';

export const SignInPage = () => {
  return (
    <PageLayout noFooter>
      <main className='min-h-screen bg-gray-100 flex justify-center p-4 md:p-12'>
        <div className='flex items-stretch bg-primary-800 p-4 rounded-md flex-1'>
          <div className='flex flex-col md:flex-row w-full '>
            <div className='flex-1 flex items-center justify-center h-full'>
              <SignInCard />
            </div>
            <div className='flex-1 flex items-center justify-center'>
              <HatchLoginSvg className='w-full h-auto max-w-96' />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};
