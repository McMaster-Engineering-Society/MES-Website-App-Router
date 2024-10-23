import { RxCheckCircled } from 'react-icons/rx';

import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';

export default function AuthSuccessPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <div className='flex flex-col items-center min-h-screen'>
            {' '}
            <div className='flex flex-col w-3/4 h-full rounded-t-lg shadow-md bg-white text-center items-center justify-center '>
              <div className='flex flex-col items-center text-[hsl(124,100%,22%)] bg-[#A1D884] rounded-t-lg w-full pb-14'>
                <h1 className='flex items-center justify-center mt-10'>
                  <RxCheckCircled className='mr-3 text-5xl' />
                  Almost there!
                </h1>
                <b className='mt-5'>
                  Please check your email inbox for the sign in link.
                </b>
              </div>

              <div className='w-5/6 p-8 rounded-lg items-center justify-center shadow-md bg-amber-200 text-center m-10'>
                <div>
                  <b>Didn't receive an email?</b>
                  <div>
                    Check your{' '}
                    <a
                      href='https://security.microsoft.com/quarantine'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 underline'
                    >
                      email quarantine
                    </a>{' '}
                    and spam messages if you're unable to locate a sign-in
                    email. Add the email to trusted users for the future!
                  </div>
                  <p className='mb-2 mt-2'>
                    To go back to the sign in page and try again, follow the
                    link below.
                  </p>

                  <div className='flex justify-center'>
                    <ButtonLink href='/auth/sign-in' className='mt-4 mr-4'>
                      Go back
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
