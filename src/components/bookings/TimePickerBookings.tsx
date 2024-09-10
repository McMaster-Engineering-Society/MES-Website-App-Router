'use client';

import { addDays } from 'date-fns';
import { useEffect, useState } from 'react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';
import { useFetchAllBookingsHook } from '@/lib/hooks/bookingHooks';
import { TBooking } from '@/lib/types';

import BookingIndicator from '@/components/bookings/BookingIndicator';
import { useScreenSize } from '@/components/bookings/useScreenSize';

import { BookingDayLengthFromScreenSize } from '@/constant/hatch-bookings/booking-screen-size';

// /**
//  * mock API call to fetch bookings
//  * @todo replace with actual API call
//  */
// async function fetchAllBookings(): Promise<TBookingDb[]> {
//   const mockBookings: TBookingDb[] = [
//     {
//       _id: '66c2204b87f9ac38c4ba645f',
//       userId: 'placeholder ID',
//       room: 'H201',
//       startTime: new Date('2024-08-30T14:30:00.000Z'),
//       endTime: new Date('2024-08-30T16:30:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:24:43.845Z'),
//     },
//     {
//       _id: '66c2204d87f9ac38c4ba6460',
//       userId: 'placeholder ID',
//       room: 'H203',
//       startTime: new Date('2024-08-30T14:30:00.000Z'),
//       endTime: new Date('2024-08-30T16:30:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:24:45.643Z'),
//     },
//     {
//       _id: '66c2204f87f9ac38c4ba6461',
//       userId: 'placeholder ID',
//       room: 'H205',
//       startTime: new Date('2024-08-30T14:30:00.000Z'),
//       endTime: new Date('2024-08-30T16:30:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:24:47.038Z'),
//     },
//     {
//       _id: '66c2204f87f9ac38c4ba6462',
//       userId: 'placeholder ID',
//       room: 'H204A',
//       startTime: new Date('2024-08-30T14:30:00.000Z'),
//       endTime: new Date('2024-08-30T16:30:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:24:47.038Z'),
//     },
//     {
//       _id: '66c2204f87f9ac38c4ba6463',
//       userId: 'placeholder ID',
//       room: 'H204B',
//       startTime: new Date('2024-08-30T14:30:00.000Z'),
//       endTime: new Date('2024-08-30T16:30:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:24:47.038Z'),
//     },
//     {
//       _id: '66c2205187f9ac38c4ba6462',
//       userId: 'placeholder ID',
//       room: 'H205',
//       startTime: new Date('2024-08-31T14:00:00.000Z'),
//       endTime: new Date('2024-08-31T15:30:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:24:49.131Z'),
//     },
//     {
//       _id: '66c2205387f9ac38c4ba6463',
//       userId: 'placeholder ID',
//       room: 'H201',
//       startTime: new Date('2024-08-31T16:30:00.000Z'),
//       endTime: new Date('2024-08-31T17:00:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:24:51.461Z'),
//     },
//     {
//       _id: '66c2205887f9ac38c4ba6464',
//       userId: 'placeholder ID',
//       room: 'H201',
//       startTime: new Date('2024-09-01T16:00:00.000Z'),
//       endTime: new Date('2024-09-01T16:00:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:24:56.580Z'),
//     },
//     {
//       _id: '66c2205c87f9ac38c4ba6465',
//       userId: 'placeholder ID',
//       room: 'H204A',
//       startTime: new Date('2024-08-31T17:00:00.000Z'),
//       endTime: new Date('2024-08-31T17:30:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:25:00.799Z'),
//     },
//     {
//       _id: '66c2206587f9ac38c4ba6466',
//       userId: 'placeholder ID',
//       room: 'H204B',
//       startTime: new Date('2024-08-31T18:00:00.000Z'),
//       endTime: new Date('2024-08-31T18:30:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:25:09.076Z'),
//     },
//     {
//       _id: '66c2206787f9ac38c4ba6467',
//       userId: 'placeholder ID',
//       room: 'H204B',
//       startTime: new Date('2024-09-02T21:00:00.000Z'),
//       endTime: new Date('2024-09-02T22:00:00.000Z'),
//       hasConfirmed: false,
//       email: 'placeholder email',
//       createdDate: new Date('2024-08-18T16:25:11.231Z'),
//     },
//   ];

//   return mockBookings;
// }

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

// Created because React doesn't like hooks called conditionally within useEffect, so we call it here.
const AdminAllBookings = (startDate: Date, endDate: Date) => {
  const {
    data: allBookings,
    isLoading,
    error,
  } = useFetchAllBookingsHook(startDate, endDate);
  return { allBookings, isLoading, error };
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

  useEffect(() => {
    const visibleBookings: TBooking[] = [];
    if (isAdmin) {
      // TODO: move all admin stuff to new page. We need the components related to getting all bookings separate so we dont have issues with hooks.
      // eslint-disable-next-line unused-imports/no-unused-vars
      const { allBookings, isLoading, error } = AdminAllBookings(
        pickerStartDate,
        pickerEndDate,
      );
      if (allBookings) {
        allBookings.forEach((booking) => {
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
  }, [isAdmin, userBookings, pickerStartDate, pickerEndDate]);

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
