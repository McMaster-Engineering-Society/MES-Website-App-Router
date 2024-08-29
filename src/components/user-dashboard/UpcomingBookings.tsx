import { CalendarDaysIcon } from 'lucide-react';

import PageSection from '@/components/PageSection';
const UpcomingBookings = () => {
  return (
    <PageSection
      heading='Your Upcoming Bookings'
      variant='white'
      headingClassName='bg-[#8BD3E6] capitalize'
      leftIcon={CalendarDaysIcon}
      className='rounded-lg'
    >
      {/* testing only */}
      {/* flex flex-col sm:grid sm:grid-cols-3 justify-items-center gap-10 */}
      <div className='flex flex-col sm:grid sm:grid-cols-3 justify-items-center gap-10'>
        <div className='flex flex-row items-center bg-[#8BD3E6] max-h-[24px] max-w-[100px]'>
          <span className='text-white px-8'>H2O3</span>
        </div>
        <span>
          <strong>August 30, 2024</strong>
        </span>
        <span className='font-light text-gray-700'>4:30pm - 8:29pm</span>

        <div className='flex flex-row items-center bg-[#8BD3E6] max-h-[24px] max-w-[100px]'>
          <span className='text-white px-8'>H2O3</span>
        </div>
        <span>
          <strong>August 31, 2024</strong>
        </span>
        <span className='font-light text-gray-700'>7:30pm - 8:39pm</span>

        <div className='flex flex-row items-center bg-[#8BD3E6] max-h-[24px] max-w-[100px]'>
          <span className='text-white px-8'>H2O3</span>
        </div>
        <span>
          <strong>August 31, 2024</strong>
        </span>
        <span className='font-light text-gray-700 text-nowrap'>
          10:30pm - 11:00pm
        </span>

        <div className='flex flex-row justify-center bg-[#8BD3E6] max-h-[24px] max-w-[100px]'>
          <span className='text-white px-8'>H2O4A</span>
        </div>
        <span>
          <strong>August 31, 2024</strong>
        </span>
        <span className='font-light text-gray-700 text-nowrap'>
          11:30pm - 11:30pm
        </span>
      </div>
    </PageSection>
  );
};

export default UpcomingBookings;
