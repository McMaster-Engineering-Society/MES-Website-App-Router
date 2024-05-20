import { AiOutlineClockCircle } from 'react-icons/ai';

import { CalendarEvent } from '@/types/calendar';

type SingleDayAllDayPopoverProps = {
  event: CalendarEvent;
};

const SingleDayAllDayPopover = ({ event }: SingleDayAllDayPopoverProps) => {
  return (
    <div className='flex flex-row items-center gap-2'>
      <AiOutlineClockCircle className='min-w-max text-gray-500' />
      <span>
        {new Date(event.year, event.month - 1, event.day).toLocaleDateString(
          'en-US',
          {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          }
        )}
      </span>
    </div>
  );
};

export default SingleDayAllDayPopover;
