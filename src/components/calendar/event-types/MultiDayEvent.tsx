import { formatAMPM } from '@/lib/calendarHelper';
import { cn } from '@/lib/utils';

import { eventHoverEffects } from '@/components/calendar/CalendarDays';

import { CalendarEvent } from '@/types/calendar';

type MultiDayEventProps = {
  dayIndex: number;
  eventIndex: number;
  event: CalendarEvent;
  width?: number;
  accentColours?: string;
};

const MultiDayEvent = ({
  dayIndex,
  eventIndex,
  event,
  width,
  accentColours,
}: MultiDayEventProps) => {
  return (
    <div
      id={`${dayIndex}-${eventIndex}-calendar-event-${event.id}`}
      className={cn([
        'calendar-event-day z-[1] mx-1 flex flex-row rounded-md bg-white px-2 py-[3px] text-xs shadow-sm transition',
        eventHoverEffects,
      ])}
      style={{
        width:
          // If event is multi-day and carries over to next week, cut width short on Saturday
          event.start && event.numDays && event.numDays > 1
            ? event.start?.getDay() + event.numDays > 6
              ? `${(width ?? 0) * (7 - event.start?.getDay()) - 8}px`
              : `${(width ?? 0) * (event.numDays ?? 0) - 8}px`
            : undefined,
      }}
    >
      <div
        className={cn([
          'calendar-event-indicator my-[2px] mr-1 min-w-[4px] max-w-[4px] rounded-full',
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

export default MultiDayEvent;
