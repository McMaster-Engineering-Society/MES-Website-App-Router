'use client';

import { FaLocationDot } from 'react-icons/fa6';
import { IoCalendarClearOutline, IoClose } from 'react-icons/io5';
import { LuText } from 'react-icons/lu';

import IconButton from '@/components/buttons/IconButton';
import AddEventToCalendarDropdown from '@/components/calendar/AddEventToCalendarDropdown';
import MultiDayAllDayPopover from '@/components/calendar/popover-types/MultiDayAllDayPopover';
import MultiDayWithTimePopover from '@/components/calendar/popover-types/MultiDayWithTimePopover';
import SingleDayAllDayPopover from '@/components/calendar/popover-types/SingleDayAllDayPopover';
import SingleDayWithTimePopover from '@/components/calendar/popover-types/SingleDayWithTimePopover';

import { CalendarEvent } from '@/types/calendar';

type CalendarPopoverContentProps = {
  event: CalendarEvent;
  titleProps: object;
  setIsOpen: (open: boolean) => void;
};

const CalendarPopoverContent = ({
  event,
  titleProps,
  setIsOpen,
}: CalendarPopoverContentProps) => {
  return (
    <div className='flex max-w-md flex-col gap-2 p-4'>
      <div className='flex flex-row items-center justify-between gap-x-4'>
        <span
          className='popover-calendar-title text-lg font-bold'
          {...titleProps}
        >
          {event.title}
        </span>
        <IconButton
          icon={IoClose}
          variant='ghost'
          className='rounded-full text-black'
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </div>
      <div className='popover-calendar-date-and-time'>
        {!event.multiDay ? (
          // Single day events
          !event.allDay ? (
            // Single day events with start and end times
            <SingleDayWithTimePopover event={event} />
          ) : (
            // Single day events that are all-day
            <SingleDayAllDayPopover event={event} />
          )
        ) : // Multiday events
        !event.allDay ? (
          // Multiday events with start and end times
          <MultiDayWithTimePopover event={event} />
        ) : (
          // Multiday events that are all-day
          <MultiDayAllDayPopover event={event} />
        )}
      </div>
      {event.location && (
        <div className='popover-calendar-location flex flex-row items-center gap-2'>
          <FaLocationDot className='min-w-max text-gray-500' />
          <span>{event.location}</span>
        </div>
      )}
      {event.calendarName && (
        <div className='popover-calendar-calendar-name flex flex-row items-center gap-2'>
          <IoCalendarClearOutline className='min-w-max text-gray-500' />
          <span>{event.calendarName}</span>
        </div>
      )}
      {event.description && (
        <div className='popover-calendar-description flex flex-row items-start gap-2'>
          <LuText className='mt-1 min-w-max text-gray-500' />
          <span>{event.description}</span>
        </div>
      )}
      <AddEventToCalendarDropdown event={event} />
    </div>
  );
};

export default CalendarPopoverContent;
