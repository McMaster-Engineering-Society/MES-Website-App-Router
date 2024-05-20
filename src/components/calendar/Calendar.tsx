'use client';

import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { cn } from '@/lib/utils';

import CalendarDays from '@/components/calendar/CalendarDays';

import { CalendarId } from '@/types/calendar';

type CalendarProps = {
  apiKey: string;
  calendarIds: CalendarId[];
  month?: number;
  year?: number;
  darkMode?: boolean;
};

const navigateButtonStyle = 'px-3 py-2 rounded-md hover:bg-gray-100 transition';
const todayButtonStyle =
  'bg-gray-50 rounded-lg px-6 py-2 text-black font-medium transition border-[1px] border-gray-300';
const navigateHoverEffects = 'hover:translate-y-[-1px] hover:shadow-md';
const navigateClickEffects = 'active:translate-y-[1px] active:shadow';

const darkModeNavigateButtonStyle = 'text-slate-100 hover:bg-slate-700';

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Calendar = ({
  apiKey,
  calendarIds,
  month,
  year,
  darkMode = false,
}: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState<number>(-1);
  const [currentYear, setCurrentYear] = useState<number>(-1);
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    const now = new Date();
    setToday(now);
    if (month === undefined) {
      setCurrentMonth(now.getMonth() + 1);
    }
    if (year === undefined) {
      setCurrentYear(now.getFullYear());
    }
  }, [month, year]);

  return (
    <div className='calendar-container flex flex-col'>
      <div className='calendar-header flex flex-row items-center justify-between gap-x-4'>
        <h1 className={cn([darkMode && 'text-slate-100'])}>{`${
          months[currentMonth - 1]
        } ${currentYear}`}</h1>
        <div className='calendar-navigation flex flex-row gap-4'>
          <button
            onClick={() => {
              if (currentMonth === 1) {
                setCurrentMonth(12);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}
            className={cn([
              navigateButtonStyle,
              navigateHoverEffects,
              navigateClickEffects,
              darkMode && darkModeNavigateButtonStyle,
            ])}
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => {
              if (currentMonth === 12) {
                setCurrentMonth(1);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}
            className={cn([
              navigateButtonStyle,
              navigateHoverEffects,
              navigateClickEffects,
              darkMode && darkModeNavigateButtonStyle,
            ])}
          >
            <FiChevronRight />
          </button>
          <button
            onClick={() => {
              setCurrentMonth(today.getMonth() + 1);
              setCurrentYear(today.getFullYear());
            }}
            className={cn([
              todayButtonStyle,
              navigateHoverEffects,
              navigateClickEffects,
              darkMode && 'border-slate-700 bg-slate-800 text-slate-100',
            ])}
          >
            Today
          </button>
        </div>
      </div>
      <CalendarDays
        month={currentMonth}
        year={currentYear}
        calendarIds={calendarIds}
        apiKey={apiKey}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Calendar;
