import { addMinutes } from 'date-fns';

export function add30Minutes(date: Date): Date {
  return addMinutes(date, 30);
}
