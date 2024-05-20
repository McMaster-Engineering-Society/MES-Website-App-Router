import { formatAMPM } from '@/lib/calendarHelper';
import { cn } from '@/lib/utils';

import { eventHoverEffects } from '@/components/calendar/CalendarDays';

import { CalendarEvent } from '@/types/calendar';

type SingleDayEventProps = {
  dayIndex: number;
  eventIndex: number;
  event: CalendarEvent;
  accentColours?: string;
};

const SingleDayEvent = ({
  dayIndex,
  eventIndex,
  event,
  accentColours,
}: SingleDayEventProps) => {
  return (
    <div
      id={`${dayIndex}-${eventIndex}-calendar-event-${event.id}`}
      className={cn([
        'calendar-event-day mx-1 flex flex-row items-center rounded-md px-2 py-[3px] text-xs transition',
        'bg-white shadow-sm',
        eventHoverEffects,
      ])}
    >
      <div
        className={cn([
          'calendar-event-indicator mr-1 max-h-[4px] min-h-[4px] min-w-[4px] max-w-[4px] rounded-full',
          accentColours,
        ])}
      />
      <div className='calendar-event-text truncate py-[1px] text-gray-500'>
        {!event.allDay && event.start && (
          <span className='calendar-event-start-time'>
            {formatAMPM(event.start)} ·{' '}
          </span>
        )}
        <span className='calendar-event-title inline text-black'>
          {event.title}
        </span>
      </div>
    </div>
  );
};
export default SingleDayEvent;
