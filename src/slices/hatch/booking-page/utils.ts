import { addMinutes, startOfDay } from 'date-fns';

export function add30Minutes(date: Date): Date {
  return addMinutes(date, 30);
}

export const formatDateForKey = (date: Date) =>
  startOfDay(date).toISOString().split('T')[0];

export function getESTDayBoundaries(startTimeUTC: Date, endTimeUTC: Date) {
  const timeZone = 'America/New_York'; // EST time zone

  // Convert UTC times to EST
  const startTimeEST = new Date(startTimeUTC).toLocaleString('en-US', {
    timeZone,
  });
  const endTimeEST = new Date(endTimeUTC).toLocaleString('en-US', { timeZone });

  // Create Date objects from the EST strings
  const startDateEST = new Date(startTimeEST);
  const endDateEST = new Date(endTimeEST);

  // Get start of day for start time
  const startOfDayEST = new Date(
    startDateEST.getFullYear(),
    startDateEST.getMonth(),
    startDateEST.getDate(),
  );

  // Get end of day for end time
  const endOfDayEST = new Date(
    endDateEST.getFullYear(),
    endDateEST.getMonth(),
    endDateEST.getDate(),
    23,
    59,
    59,
    999,
  );

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
