import CouncilProfile from '@/components/council/CouncilProfile';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';

import executives from '@/constant/council/executives';

export default function ExecutivesPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            preTitle='2024-2025 Team'
            title='Executives'
            variant='red'
          />
          <div id='executives-list' className='mt-8 space-y-8'>
            {executives.map((executive) => (
              <CouncilProfile
                key={`${executive.firstName}-${executive.lastName}`}
                profile={executive}
              />
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
