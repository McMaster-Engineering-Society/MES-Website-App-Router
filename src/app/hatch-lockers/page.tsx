import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

const HatchLockersPage = () => {
  return (
    <PageLayout>
      <main className='layout'>
        <section className='flex flex-col justify-between'>
          <PageHeading
            preTitle='Reservations'
            title='Hatch Locker Booking'
            variant='blue'
          />
          <PageSection variant='white' heading='Project Lockers'>
            <div className='flex flex-col items-center gap-x-4 gap-y-4 md:flex-row'>
              <div id='text-body' className='flex flex-col'>
                <div>
                  Project Locker booking is available to all students within the
                  McMaster Faculty of Engineering. The lockers must be used for
                  class projects, no personal projects will be allowed to store
                  in these lockers. The MES will provide a lock when the locker
                  is assigned, for a refundable deposit of $10.
                </div>
                <ButtonLink
                  href='https://docs.google.com/forms/d/e/1FAIpQLSfHollv3ZKvkBE2onCFKOvapwbmjUrKH9dlri0_9NrfNtpFWg/viewform'
                  className='my-4 justify-center'
                >
                  Fill Out This Form to Reserve a Locker
                </ButtonLink>
                <div>
                  The Hatch Centre Student Coordinator will then contact you to
                  confirm the details of your reservation. If you have any more
                  questions, please contact the Hatch Centre Student Coordinator
                  at{' '}
                  <a href='mailto:ghc@mcmaster.ca' className='underline'>
                    ghc@mcmaster.ca
                  </a>
                  .
                </div>
              </div>
              <NextImage
                id='image-body'
                src='/images/hatch-lockers/hatch-lockers.png'
                alt='Hatch Lockers'
                width={417}
                height={282}
                className='w-full'
              />
            </div>
          </PageSection>
        </section>
      </main>
    </PageLayout>
  );
};

export default HatchLockersPage;
