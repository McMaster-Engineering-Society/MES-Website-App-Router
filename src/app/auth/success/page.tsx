import { RxCheckCircled } from 'react-icons/rx';

import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';

// TODO: reformat page, make prettier
export default function AuthSuccessPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <div className='flex items-center justify-center min-h-screen bg-[hsl(0,0%,97.5%)]'>
            <div className='w-80 p-8 rounded-lg shadow-md bg-white text-center'>
              <div className='flex items-center text-[hsl(124,100%,22%)] bg-[#A1D884] rounded-lg px-4 py-2'>
                <RxCheckCircled className='mr-3 text-5xl' />

                <p>
                  Success! Please check your email inbox for the sign in link.
                </p>
              </div>
              <div>
                <p>
                  Didn't receive an email? To go back to the sign in page and
                  try again, follow the link below.
                </p>
                <ButtonLink href='/auth/sign-in' className='mt-4'>
                  Go back
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
