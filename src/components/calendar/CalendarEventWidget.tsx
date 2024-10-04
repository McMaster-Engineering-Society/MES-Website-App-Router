'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { useState } from 'react';

import MultiDayEvent from '@/components/calendar/event-types/MultiDayEvent';
import SingleDayEvent from '@/components/calendar/event-types/SingleDayEvent';
import CalendarPopoverContent from '@/components/calendar/popover-types/CalendarPopoverContent';

import { CalendarEvent } from '@/types/calendar';

type CalendarEventWidgetProps = {
  eventIndex: number;
  dayIndex: number;
  event: CalendarEvent;
  width?: number;
  accentColours?: string;
};

const CalendarEventWidget = ({
  eventIndex,
  dayIndex,
  event,
  width,
  accentColours,
}: CalendarEventWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      placement='left-start'
      color='primary'
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      shouldCloseOnInteractOutside={() => false}
    >
      <PopoverTrigger>
        <div>
          {!event.multiDay ? (
            <SingleDayEvent
              dayIndex={dayIndex}
              eventIndex={eventIndex}
              event={event}
              accentColours={accentColours}
            />
          ) : (
            <MultiDayEvent
              dayIndex={dayIndex}
              eventIndex={eventIndex}
              event={event}
              width={width}
              accentColours={accentColours}
            />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className='bg-white text-black'>
        {(titleProps) => (
          <CalendarPopoverContent
            event={event}
            titleProps={titleProps}
            setIsOpen={setIsOpen}
          />
        )}
      </PopoverContent>
    </Popover>
  );
};

export default CalendarEventWidget;
