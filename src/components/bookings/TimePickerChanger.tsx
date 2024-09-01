import { addDays, format } from 'date-fns';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import { useScreenSize } from '@/components/bookings/useScreenSize';
import Button from '@/components/buttons/Button';

const TimePickerChanger = () => {
  const { handlePickerStartDateShiftByDay, pickerStartDate } =
    useTimePickerContext();
  const screenSize = useScreenSize();

  function handleShiftForward() {
    handlePickerStartDateShiftByDay(
      screenSize === 'lg' ? 7 : screenSize === 'md' ? 3 : 1,
    );
  }

  function handleShiftBackward() {
    handlePickerStartDateShiftByDay(
      screenSize === 'lg' ? -7 : screenSize === 'md' ? -3 : -1,
    );
  }

  return (
    <div className='flex w-full items-center justify-between rounded-lg border-2 border-primary-800 bg-white'>
      <Button onClick={handleShiftBackward}>
        <ArrowLeft />
      </Button>
      <h2 className='font-semibold md:text-xl'>
        {/* on mobile show 1 day (ex. "August 31st") */}
        {/* on tablet/laptop show range (ex. "August 31st - September 6th") */}
        {format(pickerStartDate, 'MMMM do')}
        {(screenSize === 'lg' || screenSize === 'md') &&
          ' - ' +
            format(
              addDays(pickerStartDate, screenSize === 'lg' ? 6 : 2),
              'MMMM do',
            )}
      </h2>
      <Button onClick={handleShiftForward}>
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TimePickerChanger;
