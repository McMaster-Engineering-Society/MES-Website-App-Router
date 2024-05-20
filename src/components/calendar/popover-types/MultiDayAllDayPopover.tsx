import { AiOutlineClockCircle } from 'react-icons/ai';

import { CalendarEvent } from '@/types/calendar';

type MultiDayAllDayPopoverProps = {
  event: CalendarEvent;
};

const MultiDayAllDayPopover = ({ event }: MultiDayAllDayPopoverProps) => {
  return (
    <div className='flex flex-row items-center gap-2'>
      <AiOutlineClockCircle className='min-w-max text-gray-500' />
      <span>
        {event.start?.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        })}
        {' - '}
        {event.end?.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        })}
      </span>
    </div>
  );
};

export default MultiDayAllDayPopover;
