import { addDays, format } from 'date-fns';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import Button from '@/components/buttons/Button';

const TimePickerChanger = () => {
  const { handlePickerStartDateShiftByDay, pickerStartDate } =
    useTimePickerContext();

  function handleShiftForward() {
    handlePickerStartDateShiftByDay(7);
  }

  function handleShiftBackward() {
    handlePickerStartDateShiftByDay(-7);
  }

  return (
    <div className='flex justify-between ml-[36px] w-full bg-white border-2 border-primary-800 rounded-lg'>
      <Button onClick={handleShiftBackward}>
        <ArrowLeft />
      </Button>
      <h2 className='text-2xl font-semibold'>
        {format(pickerStartDate, 'MMMM do') +
          ' - ' +
          format(addDays(pickerStartDate, 6), 'MMMM do, yyyy')}
      </h2>
      <Button onClick={handleShiftForward}>
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TimePickerChanger;
