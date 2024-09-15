'use client';

import { useScreenSize } from '@/components/hooks/useScreenSize';

import { BookingDayLengthFromScreenSize } from '@/constant/hatch-bookings/booking-screen-size';
import AdminRoomSelector from '@/slices/hatch/admin/components/AdminRoomSelector';
import TimePicker from '@/slices/hatch/booking-page/components/TimePicker';
import TimePickerChanger from '@/slices/hatch/booking-page/components/TimePickerChanger';

export default function AdminDashboard() {
  const screenSize = useScreenSize();

  return (
    <div className='mb-8 flex w-full flex-col gap-8'>
      <div className='flex flex-col gap-4 md:hidden'>
        <TimePickerChanger />
        <div className='grid h-[600px] grid-cols-2 gap-4'>
          <TimePicker
            numDaysToShow={BookingDayLengthFromScreenSize[screenSize]}
            adminView={true}
          />
          <AdminRoomSelector />
        </div>
      </div>

      <div className='hidden gap-4 md:flex'>
        <div className='flex flex-col gap-2'>
          <TimePickerChanger />
          <TimePicker
            numDaysToShow={BookingDayLengthFromScreenSize[screenSize]}
            className='h-full'
            adminView={true}
          />
        </div>
        <AdminRoomSelector />
      </div>
    </div>
  );
}
