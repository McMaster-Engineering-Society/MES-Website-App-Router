import AppointedCoordinatorProfile from '@/components/council/AppointedCoordinatorProfile';
import SmallHeading from '@/components/council/SmallHeading';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';

import {
  AcademicPortfolioCoordinators,
  CommunicationsPortfolioCoordinators,
  ExternalPortfolioCoordinators,
  FinancePortfolioCoordinators,
  InternalPortfolioCoordinators,
  PresidentPortfolioCoordinators,
  StudentLifePortfolioCoordinators,
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
            preTitle='2024-2025 Team'
            variant='red'
          />
          <div className='my-5' />
          <SmallHeading title='Academic Portfolio' variant='red' />
          <CoordinatorProfileRenders
            coordinators={AcademicPortfolioCoordinators}
          />
          <Spacing />
          <SmallHeading title='Communications Portfolio' variant='red' />
          <CoordinatorProfileRenders
            coordinators={CommunicationsPortfolioCoordinators}
          />
          <Spacing />
          <SmallHeading title='External Portfolio' variant='red' />
          <CoordinatorProfileRenders
            coordinators={ExternalPortfolioCoordinators}
          />
          <Spacing />
          <SmallHeading title='Finance Portfolio' variant='red' />
          <CoordinatorProfileRenders
            coordinators={FinancePortfolioCoordinators}
          />
          <Spacing />
          <SmallHeading title='Internal Portfolio' variant='red' />
          <CoordinatorProfileRenders
            coordinators={InternalPortfolioCoordinators}
          />
          <Spacing />
          <SmallHeading title='Student Life Portfolio' variant='red' />
          <CoordinatorProfileRenders
            coordinators={StudentLifePortfolioCoordinators}
          />
          <Spacing />
          <SmallHeading title='President Portfolio' variant='red' />
          <CoordinatorProfileRenders
            coordinators={PresidentPortfolioCoordinators}
          />
          <Spacing />
        </section>
      </main>
    </PageLayout>
  );
}
