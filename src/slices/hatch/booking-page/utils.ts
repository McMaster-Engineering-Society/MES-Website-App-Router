import {
  addMinutes,
  differenceInMinutes,
  endOfDay,
  endOfWeek,
  startOfDay,
  startOfWeek,
} from 'date-fns';
import { enGB } from 'date-fns/locale/en-GB';
import { formatInTimeZone } from 'date-fns-tz';

const timeZone = 'America/New_York'; // EST timezone

export function add30Minutes(date: Date): Date {
  return addMinutes(date, 30);
}

export const formatDateForKey = (date: Date) =>
  startOfDay(date).toISOString().split('T')[0];

export function getESTDayBoundaries(startTimeUTC: Date, endTimeUTC: Date) {
  // Convert UTC times to EST
  const startTimeEST = formatInTimeZone(
    startTimeUTC,
    timeZone,
    'yyyy-MM-dd HH:mm:ssXXX',
    {
      locale: enGB,
    },
  );
  const endTimeEST = formatInTimeZone(
    endTimeUTC,
    timeZone,
    'yyyy-MM-dd HH:mm:ssXXX',
    {
      locale: enGB,
    },
  );
  // Create Date objects from the EST strings
  const startOfDayEST = startOfDay(startTimeEST);
  const endOfDayEST = endOfDay(endTimeEST);

  return {
    startOfDay: startOfDayEST,
    endOfDay: endOfDayEST,
  };
}

export const getNumberOf30MinuteSlots = (
  startTime: Date,
  endTime: Date,
): number => {
  // Get the difference in time between the end and start in milliseconds
  const differenceInMs = endTime.getTime() - startTime.getTime();

  // Convert the difference to minutes
  const differenceInMinutes = differenceInMs / (1000 * 60);

  // Divide by 30 to get the number of 30-minute timeslots
  const numberOfSlots = differenceInMinutes / 30;

  // Return the result plus one because times are indexed by the start time.
  return numberOfSlots + 1;
};

/**
 * Returns the start and end of the week given an input date. It internally converts the dates to EST
 * @param date Date to get the week of which it belongs in.
 * @returns Date objects in format `{start, end}` for the week that the input date is within.
 */
export function getWeekRangeInEST(date: Date) {
  // Convert UTC date to EST.
  const estDate = formatInTimeZone(date, timeZone, 'yyyy-MM-dd HH:mm:ssXXX', {
    locale: enGB,
  });

  // Get the start and end of the week in UTC (Sunday to Saturday).
  const startOfWeekUTC = startOfWeek(estDate, { weekStartsOn: 0 });
  const endOfWeekUTC = endOfWeek(estDate, { weekStartsOn: 0 });

  return { startOfWeekUTC, endOfWeekUTC };
}

export function getDuration(startTime: Date, endTime: Date) {
  const timeMin = differenceInMinutes(add30Minutes(endTime), startTime);
  const hours = Math.floor(timeMin / 60);
  const min = timeMin % 60;
  if (min != 0) {
    return hours + 0.5;
  } else {
    return hours;
  }
}
