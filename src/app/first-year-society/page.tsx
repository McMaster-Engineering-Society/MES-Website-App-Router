import CouncilProfile from '@/components/council/CouncilProfile';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';

import firstYearSociety from '@/constant/council/firstYearSocietyLeaders';

export default function FirstYearSocietyPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            preTitle='2024-2025 Team'
            title='First Year Society'
            variant='red'
          />
          <div id='first-year-society-list' className='mt-8 space-y-8'>
            {firstYearSociety.map((leader) => (
              <CouncilProfile
                key={`${leader.firstName}-${leader.lastName}`}
                profile={leader}
              />
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
