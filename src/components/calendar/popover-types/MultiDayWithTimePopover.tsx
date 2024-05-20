import { AiOutlineClockCircle } from 'react-icons/ai';

import { CalendarEvent } from '@/types/calendar';

type MultiDayWithTimePopoverProps = {
  event: CalendarEvent;
};

const MultiDayWithTimePopover = ({ event }: MultiDayWithTimePopoverProps) => {
  return (
    <div className='flex flex-row items-start gap-2'>
      <AiOutlineClockCircle className='mt-1 min-w-max text-gray-500' />
      <div className='flex flex-col'>
        <span>
          {event.start?.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
          {', '}
          {event.start?.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          })}{' '}
          -
        </span>

        <span>
          {event.end?.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
          {', '}
          {event.end?.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
      </div>
    </div>
  );
};

export default MultiDayWithTimePopover;
