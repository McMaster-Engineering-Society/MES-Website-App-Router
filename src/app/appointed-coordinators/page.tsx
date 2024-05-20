import AppointedCoordinatorProfile from '@/components/council/AppointedCoordinatorProfile';
import SmallHeading from '@/components/council/SmallHeading';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';

import {
  AcademicResourcesCoordinators,
  AdministrationCoordinators,
  AdvertisingCoordinators,
  PublicationsCoordinators,
  StudentOutreachCoordinators,
  StudentSpaceCoordinators,
} from '@/constant/council/appointedCoordinators';

import CoordinatorDetails from '@/types/coordinatorDetails';

const Spacing = () => {
  return <div className='mt-4' />;
};

// Function on how to render all the coordinators in a list based on an input list of coordinators.
const CoordinatorProfileRenders = ({
  coordinators,
}: {
  coordinators: CoordinatorDetails[];
}) => {
  return (
    <div className='mt-8 flex flex-col gap-4 sm:grid sm:grid-cols-3'>
      {coordinators.map((coordinator, index) => (
        <div key={index}>
          <AppointedCoordinatorProfile
            name={coordinator.name}
            role={coordinator.role}
            image={coordinator.image}
          />
        </div>
      ))}
    </div>
  );
};

export default function AppointedCoordinatorsPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section className='flex flex-col justify-between'>
          <PageHeading
            title='Appointed Coordinators'
            preTitle='2023-2024 Team'
            variant='red'
          />
          <div className='my-5' />
          <SmallHeading title='Administration' variant='red' />
          <CoordinatorProfileRenders
            coordinators={AdministrationCoordinators}
          />
          <Spacing />
          <SmallHeading title='Student Outreach & Engagement' variant='red' />
          <CoordinatorProfileRenders
            coordinators={StudentOutreachCoordinators}
          />
          <Spacing />
          {/* <SmallHeading title='Student Space' variant='red' /> */}
          <CoordinatorProfileRenders coordinators={StudentSpaceCoordinators} />
          <Spacing />
          {/* <SmallHeading title='Academic Resources' variant='red' /> */}
          <CoordinatorProfileRenders
            coordinators={AcademicResourcesCoordinators}
          />
          <Spacing />
          <SmallHeading title='Advertising' variant='red' />
          <CoordinatorProfileRenders coordinators={AdvertisingCoordinators} />
          <Spacing />
          <SmallHeading title='Publications' variant='red' />
          <CoordinatorProfileRenders coordinators={PublicationsCoordinators} />
        </section>
      </main>
    </PageLayout>
  );
}
