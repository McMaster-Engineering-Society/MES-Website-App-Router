'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';
import { Day, eventHoverEffects } from '@/components/calendar/CalendarDays';
import CalendarEventWidget from '@/components/calendar/CalendarEventWidget';

import { CalendarEvent } from '@/types/calendar';

type MoreEventsProps = {
  dayIndex: number;
  dayObj: Day;
  month: number;
  year: number;
  events?: CalendarEvent[];
};

const MoreEvents = ({
  dayIndex,
  dayObj,
  month,
  year,
  events,
}: MoreEventsProps) => {
  const date = new Date(year, month - 1, dayObj.dayNum);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger>
        <div
          id={`calendar-day-${dayIndex}-more-events`}
          className={cn([
            'calendar-day-more-events mx-1 rounded-md px-2 py-[3px] text-xs transition',
            eventHoverEffects,
          ])}
        >
          <div className='calendar-day-more-events-container truncate py-[1px]'>
            <span className='calendar-day-more-events-text inline text-black'>
              +{(dayObj.events?.length ?? 3) - 3} more
            </span>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <div {...titleProps} className='flex flex-col items-center py-3'>
            <div className='calendar-day-more-events-header flex flex-row justify-between'>
              <div className='calendar-day-more-events-date flex flex-col'>
                <span className='text-xs text-gray-500'>
                  {date
                    .toLocaleDateString('en-US', {
                      weekday: 'short',
                    })
                    .toUpperCase()}
                </span>
                <span className='mt-1 text-xl'>{dayObj.dayNum}</span>
              </div>
              <IconButton
                icon={IoClose}
                variant='ghost'
                className='absolute right-3 rounded-full text-black'
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
            <div className='calendar-day-popover-events mt-4 flex flex-col gap-1'>
              {events?.map((event, eventIndex) => {
                return (
                  !event.spacer && (
                    <CalendarEventWidget
                      key={`${dayIndex}-${eventIndex}-calendar-event-${event.id}`}
                      dayIndex={dayIndex}
                      event={event}
                      eventIndex={eventIndex}
                      width={100}
                      accentColours={event.accentColours}
                    />
                  )
                );
              })}
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default MoreEvents;
