import { CalendarEvent } from '@/types/calendar';

type SpacerEventProps = {
  dayIndex: number;
  eventIndex: number;
  event: CalendarEvent;
};

const SpacerEvent = ({ dayIndex, eventIndex, event }: SpacerEventProps) => {
  return (
    <div
      id={`${dayIndex}-${eventIndex}-calendar-event-s${event.id}`}
      className='calendar-event-day mx-1 flex flex-row rounded-md px-2 py-[3px] text-xs'
    >
      <div className='calendar-event-text truncate py-[1px] text-gray-500'>
        <span className='calendar-event-title inline text-transparent'>.</span>
      </div>
    </div>
  );
};

export default SpacerEvent;
