import CouncilProfile from '@/components/council/CouncilProfile';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';

import avps from '@/constant/council/associateVicePresidents';

export default function AVPsPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            preTitle='2024-2025 Team'
            title='Directors'
            variant='red'
          />
          <div id='executives-list' className='mt-8 space-y-8'>
            {avps.map((avp) => (
              <CouncilProfile
                key={`${avp.firstName}-${avp.lastName}`}
                profile={avp}
              />
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
