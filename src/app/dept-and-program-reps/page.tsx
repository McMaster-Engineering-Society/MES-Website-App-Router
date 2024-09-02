import CouncilProfile from '@/components/council/CouncilProfile';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';

import deptAndProgramReps from '@/constant/council/departmentAndProgramReps';

export default function DeptProgramRepsPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            preTitle='2024-2025 Team'
            title='Department & Program Reps'
            variant='red'
          />
          <div id='executives-list' className='mt-8 space-y-8'>
            {deptAndProgramReps.map((rep) => (
              <CouncilProfile
                key={`${rep.firstName}-${rep.lastName}`}
                profile={rep}
              />
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
