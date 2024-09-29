import { addMinutes, startOfDay } from 'date-fns';

export function add30Minutes(date: Date): Date {
  return addMinutes(date, 30);
}

export const formatDateForKey = (date: Date) =>
  startOfDay(date).toISOString().split('T')[0];
