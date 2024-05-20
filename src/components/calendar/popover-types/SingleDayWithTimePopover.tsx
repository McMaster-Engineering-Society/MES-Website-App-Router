import { AiOutlineClockCircle } from 'react-icons/ai';

import { CalendarEvent } from '@/types/calendar';

type SingleDayWithTimePopoverProps = {
  event: CalendarEvent;
};

const SingleDayWithTimePopover = ({ event }: SingleDayWithTimePopoverProps) => {
  return (
    <div className='flex flex-row items-center gap-2'>
      <AiOutlineClockCircle className='min-w-max text-gray-500' />
      <>
        <span>
          {event.start?.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        <span className='mx-[2px]'>•</span>
        <span>
          {event.start?.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          })}
          {' - '}
          {event.end?.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </span>
      </>
    </div>
  );
};

export default SingleDayWithTimePopover;
