'use client';

// TODO: Add custom accent colour for each calendar

import { useEffect, useState } from 'react';
import useResizeObserver from 'use-resize-observer';

import {
  getDateOfEndOfWeek,
  getDateOfStartOfNextWeek,
  getDayOfFirstOfMonth,
  getNumDaysInMonth,
} from '@/lib/calendarHelper';
import { formatEvents, listGoogleEvents } from '@/lib/gapi';
import { cn } from '@/lib/utils';

import CalendarEventWidget from '@/components/calendar/CalendarEventWidget';
import MoreEvents from '@/components/calendar/event-types/MoreEvents';
import SpacerEvent from '@/components/calendar/event-types/SpacerEvent';

import { CalendarEvent, CalendarId } from '@/types/calendar';

const borderWidthAll = 'border-[1px]';
const borderWidthBottom = 'border-b-[1px]';
const borderWidthLeft = 'border-l-[1px]';
// const borderWidthRight = 'border-r-[1px]';
const borderWidthTop = 'border-t-[1px]';

// export const eventIndicatorColor = 'bg-red-500';
export const currentDayIndicatorColor = 'bg-red-500';
export const eventHoverEffects = 'hover:translate-y-[-1px] hover:shadow-md';
// export const eventClickEffects = 'active:translate-y-[1px] active:shadow';

// Return whether the day is the start of the week (Sunday)
// @param dayNum: day of the month
// @param month: 1-12
// @param year: 4-digit year
const isDayNumStartOfWeek = (
  dayNum: number,
  month: number,
  year: number
): boolean => {
  const date = new Date(year, month - 1, dayNum);
  return date.getDay() === 0;
};

// Sort events in the following order:
// 1. Multi-day events
// 2. All-day events
// 3. Single-day events
// If events.spacer is true, leave it in the same position
// @param events: array of CalendarEvent objects
const sortDayEvents = (events: CalendarEvent[]) => {
  events.sort((a, b) => {
    // If a is a spacer, leave it in the same position
    if (a.spacer) return -1;

    // If b is a spacer, leave it in the same position
    if (b.spacer) return 1;

    // If a is multi-day and b is not, a comes first
    if (a.numDays && a.numDays > 1 && b.numDays === 1) return -1;

    // If b is multi-day and a is not, b comes first
    if (b.numDays && b.numDays > 1 && a.numDays === 1) return 1;

    // If a and b are both multi-day, sort by start time
    if (a.numDays && a.numDays > 1 && b.numDays && b.numDays > 1) {
      if (a.start && b.start) {
        return a.start?.getTime() - b.start?.getTime();
      }
    }

    // If a is all-day and b is not, a comes first
    if (a.allDay && !b.allDay) return -1;

    // If b is all-day and a is not, b comes first
    if (b.allDay && !a.allDay) return 1;

    // If a and b are both all-day, sort by start time
    if (a.allDay && b.allDay) {
      if (a.start && b.start) {
        return a.start?.getTime() - b.start?.getTime();
      }
    }

    // If a and b are both single-day, sort by start time
    if (!a.allDay && !b.allDay) {
      if (
        // If a and b are both single-day, sort by start time
        a.start &&
        b.start
      ) {
        return a.start?.getTime() - b.start?.getTime();
      }
    }

    return 0;
  });
};

export type Day = {
  dayNum: number;
  outOfBounds?: boolean;
  events?: CalendarEvent[];
};

type CalendarDaysProps = {
  month: number; // 1-12
  year: number; // 4-digit year
  calendarIds: CalendarId[];
  apiKey: string;
  darkMode?: boolean;
};

const CalendarDays = ({
  month,
  year,
  calendarIds,
  apiKey,
  darkMode = false,
}: CalendarDaysProps) => {
  const calendarDayBackgroundColor = darkMode ? 'bg-slate-800' : 'bg-slate-100';
  const borderColor = darkMode ? 'border-slate-950' : 'border-gray-200';

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [today, setToday] = useState<Date>(new Date());

  const { ref, width } = useResizeObserver<HTMLDivElement>();

  useEffect(() => {
    setToday(new Date());
  }, []);

  useEffect(() => {
    const fetchData = async (calendarIds: CalendarId[], apiKey: string) => {
      const allEvents: CalendarEvent[] = [];

      // Default accent colours for each calendar
      const accentColours: string[] = [
        'bg-red-500',
        'bg-blue-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-pink-500',
      ];

      for (let i = 0; i < calendarIds.length; i++) {
        const calendarId = calendarIds[i];
        const events = await listGoogleEvents(calendarId.id, apiKey).then(
          (res) => {
            return res;
          }
        );

        allEvents.push(
          ...(await formatEvents(
            events,
            calendarId.id,
            apiKey,
            accentColours[i % accentColours.length],
            calendarId.name
          ))
        );
      }

      setEvents(allEvents);
    };

    fetchData(calendarIds, apiKey);
  }, [calendarIds, apiKey]);

  // === Intializing info for days of the month ===
  const numDaysInPreviousMonth = getNumDaysInMonth(month - 1, year);
  const numDaysInCurrentMonth = getNumDaysInMonth(month, year);
  const dayOfFirstOfMonth = getDayOfFirstOfMonth(month, year);

  const firstOfTheMonthDate: Date = new Date(year, month - 1, 1);
  const lastOfTheMonthDate: Date = new Date(
    year,
    month - 1,
    numDaysInCurrentMonth
  );

  // Number of days left in the week after the last day of the month
  const numDaysAfterCurrentMonth = () => {
    const dateOfEndOfWeek = getDateOfEndOfWeek(lastOfTheMonthDate).getDate();
    return dateOfEndOfWeek < 7 ? dateOfEndOfWeek : 0;
  };

  const days: Day[] = [];

  type Spacer = {
    eventTitle: string;
    remainingDays: number;
    spacingHeight: number;
  };

  const multiDaySpacers: Spacer[] = [];
  const multiDayCarryOver: CalendarEvent[] = [];

  let spacerId = 1;

  // Check that none of the spacers with remainingDays > 0 have a spacingHeight of height
  // @param height: height to check
  const isHeightAvailable = (height: number): boolean => {
    return !multiDaySpacers.some(
      (spacer) => spacer.remainingDays > 0 && spacer.spacingHeight === height
    );
  };

  // Get the date of the first day of the current month

  let currentDayNum = numDaysInPreviousMonth - dayOfFirstOfMonth + 1;
  let currentMonth = month - 1;

  if (currentDayNum > numDaysInPreviousMonth) {
    currentDayNum = 1;
    currentMonth = month;
  }

  while (
    currentMonth === month - 1 ||
    currentMonth === month ||
    (currentMonth === month + 1 && currentDayNum <= numDaysAfterCurrentMonth())
  ) {
    const newDay: Day = {
      dayNum: currentDayNum,
      events: [],
      outOfBounds: currentMonth !== month,
    };

    let currentEventInsertHeight = 1;

    const eventsInCurrentDay: CalendarEvent[] = [];

    // TODO: Optimize this by only looping through events that have not been added to the calendar yet (not including recurring events)
    events.forEach((event) => {
      // If event starts on the current day
      if (
        event.day === currentDayNum &&
        event.month === currentMonth &&
        event.year === year
      ) {
        eventsInCurrentDay.push(event);
      }

      // If event is multi-day and starts before the first of the month, and extends into the current month
      if (
        currentDayNum === 1 &&
        event.start &&
        event.end &&
        event.start < firstOfTheMonthDate &&
        event.end >= firstOfTheMonthDate
      ) {
        let newStart = new Date(firstOfTheMonthDate);

        // If event.start is before or on Sunday, set newStart to Sunday
        newStart.setDate(newStart.getDate() - newStart.getDay());
        // Otherwise, keep event.start as newStart
        if (event.start > newStart) newStart = event.start;
      }
    });

    sortDayEvents(eventsInCurrentDay || []);

    // Check if current day is the start of the week (Sunday)
    if (isDayNumStartOfWeek(currentDayNum, currentMonth, year)) {
      // Empty the multiDaySpacers array
      multiDaySpacers.splice(0, multiDaySpacers.length);

      if (multiDayCarryOver.length > 0) {
        // Store events to be removed from multiDayCarryOver
        const eventsToBeAdded: CalendarEvent[] = [];

        multiDayCarryOver.forEach((event: CalendarEvent) => {
          if (
            event.end &&
            event.end >= new Date(year, currentMonth - 1, currentDayNum)
          ) {
            eventsToBeAdded.push(event);
          }
        });

        // Remove events from multiDayCarryOver that have been added to the current day
        eventsToBeAdded.forEach((event: CalendarEvent) => {
          multiDayCarryOver.splice(multiDayCarryOver.indexOf(event), 1);
        });

        // Add the reverse order of carry-over events to the current day, to keep the same order as the previous week
        eventsToBeAdded.reverse().forEach((event: CalendarEvent) => {
          eventsInCurrentDay.unshift(event);
        });
      }
    }

    // Add events to the day
    eventsInCurrentDay.forEach((event) => {
      while (!isHeightAvailable(currentEventInsertHeight)) {
        newDay.events?.push({
          id: spacerId,
          spacer: true,
          day: currentDayNum,
          month: currentMonth,
          year: year,
        });

        spacerId += 1;
        currentEventInsertHeight += 1;
      }

      newDay.events?.push(event);

      // Add spacer count if event is multi-day
      if (event.numDays && event.numDays > 1) {
        multiDaySpacers.push({
          eventTitle: event.title ?? '',
          remainingDays: event.numDays,
          spacingHeight: currentEventInsertHeight,
        });

        // Check if event carries over to next week, as we want to render the event on the next week as well
        if (
          event.start &&
          event.end &&
          event.end > getDateOfEndOfWeek(event.start)
        ) {
          multiDayCarryOver.push({
            ...event,
            numDays:
              Math.ceil(
                (event.end.getTime() -
                  getDateOfStartOfNextWeek(event.start).getTime()) /
                  (1000 * 60 * 60 * 24)
              ) + (event.allDay ? 1 : 0),
            start: getDateOfStartOfNextWeek(event.start),
          });
        }
      }

      currentEventInsertHeight += 1;
    });

    // Decrement remainingDays for all spacers
    if (multiDaySpacers.length > 0) {
      multiDaySpacers.forEach((spacer: Spacer) => {
        if (spacer.remainingDays > 0) {
          spacer.remainingDays -= 1;
        }
      });
    }

    days.push(newDay);

    currentDayNum += 1;

    if (currentMonth === month - 1 && currentDayNum > numDaysInPreviousMonth) {
      currentDayNum = 1;
      currentMonth = month;
    } else if (
      currentMonth === month &&
      currentDayNum > numDaysInCurrentMonth
    ) {
      currentDayNum = 1;
      currentMonth = month + 1;
    }
  }

  // ===============================================

  return (
    <div
      id='calendar'
      className={cn(
        'mt-8 grid grid-cols-7 overflow-clip rounded-lg',
        borderColor,
        borderWidthAll
      )}
    >
      {/* Render header for the days of the week */}
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
        (dayOfWeek, index) => (
          <div
            key={`calendar-${dayOfWeek}`}
            className={cn(
              'bg-white py-4 text-center text-sm font-medium uppercase text-black',
              index > 0 && borderWidthLeft,
              borderColor,
              borderWidthBottom,
              darkMode && 'bg-slate-700 text-slate-100'
            )}
          >
            {dayOfWeek}
          </div>
        )
      )}

      {/* Render each day cell */}
      {days.map((day, dayIndex) => (
        <div
          key={`${dayIndex}-calendar-day-${day.dayNum}`}
          id={`${dayIndex}-calendar-day-${day.dayNum}`}
          ref={ref}
          className={cn([
            'flex aspect-[9/10] select-none flex-col items-center',
            dayIndex > 0 && borderWidthLeft,
            dayIndex > 6 && borderWidthTop,
            borderColor,
            calendarDayBackgroundColor,
          ])}
        >
          <div
            className={cn([
              'my-1 flex h-7 w-7 justify-center p-1 text-center text-black',
              today.getDate() === day.dayNum &&
                today.getMonth() + 1 === month &&
                today.getFullYear() === year &&
                !day.outOfBounds && [
                  'rounded-full text-white',
                  currentDayIndicatorColor,
                ],
              darkMode && 'text-slate-100',
            ])}
          >
            <span
              className={cn([
                'text-sm font-medium',
                day.outOfBounds && 'text-gray-400',
              ])}
            >
              {day.dayNum}
            </span>
          </div>

          {/* Render list of events for this day */}
          {
            <div className='calendar-events flex w-full flex-col gap-2'>
              {day.events?.map((event: CalendarEvent, eventIndex: number) =>
                // Only display the first 3 events, and the 4th event if it's the last event of the day
                !event.spacer ? (
                  eventIndex <= 2 ||
                  (eventIndex === 3 && day.events?.length === 4) ? (
                    <CalendarEventWidget
                      key={`calendar-event-${eventIndex}`}
                      dayIndex={dayIndex}
                      eventIndex={eventIndex}
                      event={event}
                      width={width}
                      accentColours={event.accentColours}
                    />
                  ) : (
                    // If there are 5 or more events, display a "+X more" event
                    eventIndex === 3 && (
                      <MoreEvents
                        key={`${dayIndex}-${eventIndex}-calendar-event-${event.id}`}
                        dayIndex={dayIndex}
                        dayObj={day}
                        month={month}
                        year={year}
                        events={day.events}
                      />
                    )
                  )
                ) : (
                  <SpacerEvent
                    key={`calendar-event-spacer-${eventIndex}`}
                    dayIndex={dayIndex}
                    eventIndex={eventIndex}
                    event={event}
                  />
                )
              )}
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
