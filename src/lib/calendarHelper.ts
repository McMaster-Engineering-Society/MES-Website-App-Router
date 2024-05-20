// Return the time in AM/PM format
// @param date: Date object
export const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  const strHours: string = hours > 0 ? hours.toString() : '12'; // the hour '0' should be '12'
  const strMinutes: string = minutes < 10 ? '0' + minutes : minutes.toString();
  const strTime = strHours + ':' + strMinutes + ampm;
  return strTime;
};

// Return the day-of-the-week of the first day of the month
// @param month: 1-12
// @param year: 4-digit year
export const getDayOfFirstOfMonth = (month: number, year: number) => {
  return new Date(year, month - 1, 1).getDay();
};

// Return the number of days in a month
// @param month: 1-12
// @param year: 4-digit year
export const getNumDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

// Return the day-of-the-month of the end of the week (Saturday)
// @param date: Date object of the week
export const getDateOfEndOfWeek = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + (6 - newDate.getDay()));
  return newDate;
};

// Return the day-of-the-month of the following Sunday
// @param date: Date object
export const getDateOfStartOfNextWeek = (date: Date): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + (7 - newDate.getDay()));
  return newDate;
};
