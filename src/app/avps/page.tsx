import CouncilProfile from '@/components/council/CouncilProfile';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';

import avps from '@/constant/council/associateVicePresidents';

export default function AVPs() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            preTitle='2023-2024 Team'
            title='Associate Vice Presidents'
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
