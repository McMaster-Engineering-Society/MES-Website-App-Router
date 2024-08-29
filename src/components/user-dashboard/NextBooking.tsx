import { CalendarClockIcon } from 'lucide-react';

import PageSection from '@/components/PageSection';
import DashboardButtonLink from '@/components/user-dashboard/DashboardButtonLink';

const NextBooking = () => {
  return (
    <PageSection
      heading='Your Next Booking'
      variant='white'
      headingClassName='bg-[#A1D884] capitalize'
      leftIcon={CalendarClockIcon}
      className='rounded-lg'
    >
      {/* testing only */}
      {/* flex flex-col sm:grid sm:grid-cols-4 justify-items-center */}
      <div className='flex flex-col sm:grid sm:grid-cols-4 justify-center justify-items-center'>
        <div className='flex flex-row justify-center bg-[#A1D884] max-h-[24px] max-w-[100px]'>
          <span className='text-white px-8'>H2O3</span>
        </div>
        <span>
          <strong className=''>July 30, 2024</strong>
        </span>
        <span className='font-light text-gray-700 text-nowrap ml-8'>
          8:30pm - 10:29pm
        </span>
        <DashboardButtonLink href='' size='sm' variant='green'>
          Edit
        </DashboardButtonLink>
      </div>
    </PageSection>
  );
};

export default NextBooking;
