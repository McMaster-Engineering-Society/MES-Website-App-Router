'use client';

import { TBooking } from '@slices/hatch/booking-page/types';
import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';

import { useScreenSize } from '@/components/hooks/useScreenSize';

import { BookingDayLengthFromScreenSize } from '@/constant/hatch-bookings/booking-screen-size';
import { useFetchAllBookingsHook } from '@/slices/hatch/admin/hooks/bookingHooks';
import BookingIndicator from '@/slices/hatch/booking-page/components/BookingIndicator';
import { useTimePickerContext } from '@/slices/hatch/booking-page/context/TimePickerContext';

/**
 * @param isAdmin if true, display all existing bookings. if false, display only user's existing bookings
 * @param daysToShow array containing the first dates of each time picker column
 * @param timeslotCount number of timeslots to show on the time picker; determines rows
 * @param firstTimeslot eg. "11:00:00.000Z"
 */
type TimePickerBookingsProps = {
  isAdmin: boolean;
  daysToShow: Date[];
  timeslotCount: number;
  firstTimeslot: string;
};

const TimePickerBookings = ({
  isAdmin,
  daysToShow,
  timeslotCount,
  firstTimeslot,
}: TimePickerBookingsProps) => {
  const [bookings, setBookings] = useState<TBooking[]>([]);
  const screenSize = useScreenSize();
  const { userBookings, roomVisibilities, pickerStartDate } =
    useTimePickerContext();
  const pickerEndDate = addDays(
    pickerStartDate,
    BookingDayLengthFromScreenSize[screenSize],
  );

  const { data: allBookings, isFetched } = useFetchAllBookingsHook(
    pickerStartDate,
    pickerEndDate,
    isAdmin,
  );

  useEffect(() => {
    // setTimeout used to buffer document.getElementByID calls, as the useEffect goes off before the browser finishes rendering DOM mutations
    const findBookingsInDOM = setTimeout(() => {
      const visibleBookings: TBooking[] = [];
      if (isAdmin) {
        if (allBookings && isFetched) {
          allBookings.forEach((booking) => {
            // For some reason, start time isn't returned as a date object. Must convert it (but checks if we need to first).
            if (!(booking.startTime instanceof Date)) {
              booking.startTime = new Date(booking.startTime);
            }
            // checking if the time slots for a booking are currently visible on the time picker
            const timeslotDiv = document.getElementById(
              `${booking.startTime.toISOString()}`,
            );

            if (timeslotDiv) {
              visibleBookings.push(booking);
            }
          });

          setBookings(visibleBookings);
        }
      } else {
        (userBookings || []).forEach((booking) => {
          // For some reason, start time isn't returned as a date object. Must convert it (but checks if we need to first).
          if (!(booking.startTime instanceof Date)) {
            booking.startTime = new Date(booking.startTime);
          }
          // checking if the time slots for a booking are currently visible on the time picker
          const timeslotDiv = document.getElementById(
            `${new Date(booking.startTime).toISOString()}`,
          );

          if (timeslotDiv) {
            visibleBookings.push(booking);
          }
        });

        setBookings(visibleBookings);
      }
    }, 20);

    return () => clearTimeout(findBookingsInDOM);
  }, [isAdmin, userBookings, allBookings, isFetched]);

  const TimePickerCell = ({ time }: { time: string }) => {
    // finds all the bookings at a certain time
    const bookingsAtTime = bookings.filter((booking) => {
      return new Date(booking.startTime).toISOString() == time;
    });

    return (
      <div id={time} className='relative flex w-full flex-1 justify-evenly'>
        {bookingsAtTime.length != 0
          ? bookingsAtTime.map((booking) => {
              if (!roomVisibilities[`${booking.room}`]) {
                return null;
              }

              return (
                <BookingIndicator
                  key={`${time}-${booking.room}`}
                  booking={booking}
                  isAdmin={isAdmin}
                />
              );
            })
          : null}
      </div>
    );
  };

  return (
    <div
      className={`grid grid-cols-${daysToShow.length} pointer-events-none absolute top-0 h-full w-full`}
    >
      {[...Array(daysToShow.length)].map((_, i) => {
        // initializes the starting date & time for each column
        const firstTimeOfColumn = new Date(daysToShow[i].getTime());
        firstTimeOfColumn.setUTCHours(
          parseInt(firstTimeslot.split(':')[0]),
          parseInt(firstTimeslot.split(':')[1]),
          0,
          0,
        );

        return (
          <div
            key={firstTimeOfColumn.toISOString().split('T')[0]}
            id={firstTimeOfColumn.toISOString().split('T')[0]}
            className='flex flex-col items-center justify-start opacity-100'
          >
            {[...Array(timeslotCount)].map((_, j) => {
              // creates a shallow copy of firstTimeOfColumn
              const firstTimeCopy = new Date(firstTimeOfColumn.getTime());

              firstTimeCopy.setUTCMinutes(
                firstTimeCopy.getUTCMinutes() + 30 * j,
              );

              return (
                <TimePickerCell
                  key={firstTimeCopy.toISOString()}
                  time={firstTimeCopy.toISOString()}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TimePickerBookings;
