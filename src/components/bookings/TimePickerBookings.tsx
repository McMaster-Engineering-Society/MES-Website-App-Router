'use client';

import { Tooltip } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import { TBooking } from '@/app/api/types';
import {
  AdminBookingIndicatorColours,
  BookingIndicatorPositions,
  UserBookingIndicatorColours,
} from '@/constant/hatch-bookings/booking-indicator-data';

/**
 * mock API call to fetch bookings
 * @todo replace with actual API call
 */
async function fetchAllBookings(): Promise<TBooking[]> {
  const mockBookings: TBooking[] = [
    {
      _id: '66c2204b87f9ac38c4ba645f',
      userId: 'placeholder ID',
      room: 'H201',
      startTime: new Date('2024-08-24T14:30:00.000Z'),
      endTime: new Date('2024-08-24T16:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:43.845Z'),
    },
    {
      _id: '66c2204d87f9ac38c4ba6460',
      userId: 'placeholder ID',
      room: 'H203',
      startTime: new Date('2024-08-24T14:30:00.000Z'),
      endTime: new Date('2024-08-24T16:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:45.643Z'),
    },
    {
      _id: '66c2204f87f9ac38c4ba6461',
      userId: 'placeholder ID',
      room: 'H205',
      startTime: new Date('2024-08-24T14:30:00.000Z'),
      endTime: new Date('2024-08-24T16:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:47.038Z'),
    },
    {
      _id: '66c2204f87f9ac38c4ba6462',
      userId: 'placeholder ID',
      room: 'H204A',
      startTime: new Date('2024-08-24T14:30:00.000Z'),
      endTime: new Date('2024-08-24T16:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:47.038Z'),
    },
    {
      _id: '66c2204f87f9ac38c4ba6463',
      userId: 'placeholder ID',
      room: 'H204B',
      startTime: new Date('2024-08-24T14:30:00.000Z'),
      endTime: new Date('2024-08-24T16:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:47.038Z'),
    },
    {
      _id: '66c2205187f9ac38c4ba6462',
      userId: 'placeholder ID',
      room: 'H205',
      startTime: new Date('2024-08-25T14:00:00.000Z'),
      endTime: new Date('2024-08-25T15:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:49.131Z'),
    },
    {
      _id: '66c2205387f9ac38c4ba6463',
      userId: 'placeholder ID',
      room: 'H201',
      startTime: new Date('2024-08-25T16:30:00.000Z'),
      endTime: new Date('2024-08-25T17:00:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:51.461Z'),
    },
    {
      _id: '66c2205887f9ac38c4ba6464',
      userId: 'placeholder ID',
      room: 'H201',
      startTime: new Date('2024-08-26T16:00:00.000Z'),
      endTime: new Date('2024-08-26T16:00:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:56.580Z'),
    },
    {
      _id: '66c2205c87f9ac38c4ba6465',
      userId: 'placeholder ID',
      room: 'H204A',
      startTime: new Date('2024-08-25T17:00:00.000Z'),
      endTime: new Date('2024-08-25T17:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:25:00.799Z'),
    },
    {
      _id: '66c2206587f9ac38c4ba6466',
      userId: 'placeholder ID',
      room: 'H204B',
      startTime: new Date('2024-08-25T18:00:00.000Z'),
      endTime: new Date('2024-08-25T18:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:25:09.076Z'),
    },
    {
      _id: '66c2206787f9ac38c4ba6467',
      userId: 'placeholder ID',
      room: 'H204B',
      startTime: new Date('2024-08-27T21:00:00.000Z'),
      endTime: new Date('2024-08-27T22:00:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:25:11.231Z'),
    },
  ];

  return mockBookings;
}

type Booking = {
  room: string;
  startTime: Date;
  endTime: Date;
};

/**
 * @param isAdmin if true, display all existing bookings. if false, display only user's existing bookings
 * @param userBookings array of user's existing bookings
 * @param daysToShow array containing the first dates of each time picker column
 * @param timeslotCount number of timeslots to show on the time picker; determines rows
 * @param firstTimeslot eg. "11:00:00.000Z"
 * @param roomVisibilities boolean array to determine which rooms should have bookings shown
 */
type TimePickerBookingsProps = {
  isAdmin: boolean;
  userBookings: TBooking[] | undefined;
  daysToShow: Date[];
  timeslotCount: number;
  firstTimeslot: string;
  roomVisibilities: {
    [room: string]: boolean;
  };
};

const TimePickerBookings = ({
  isAdmin,
  userBookings,
  daysToShow,
  timeslotCount,
  firstTimeslot,
  roomVisibilities,
}: TimePickerBookingsProps) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const visibleBookings: Booking[] = [];
    if (isAdmin) {
      fetchAllBookings().then((data) => {
        data.forEach((booking) => {
          // checking if the time slots for a booking are currently visible on the time picker
          const timeslotDiv = document.getElementById(
            `${booking.startTime.toISOString()}`,
          );

          if (timeslotDiv) {
            visibleBookings.push({
              room: booking.room,
              startTime: new Date(booking.startTime),
              endTime: new Date(booking.endTime),
            });
          }
        });

        setBookings(visibleBookings);
      });
    } else {
      (userBookings || []).forEach((booking) => {
        // checking if the time slots for a booking are currently visible on the time picker
        const timeslotDiv = document.getElementById(
          `${new Date(booking.startTime).toISOString()}`,
        );

        if (timeslotDiv) {
          visibleBookings.push({
            room: booking.room,
            startTime: new Date(booking.startTime),
            endTime: new Date(booking.endTime),
          });
        }
      });

      setBookings(visibleBookings);
    }
  }, [isAdmin, userBookings]);

  const TimePickerCell = ({ time }: { time: string }) => {
    // finds all the bookings at a certain time
    const bookingsAtTime = bookings.filter((booking) => {
      return booking.startTime.toISOString() == time;
    });

    const getRoomIndicatorHeight = (start: Date, end: Date) => {
      return `${((end.getTime() - start.getTime()) / 1800000) * 16 + 8}px`;
    };

    return (
      <div id={time} className='relative h-4 flex justify-evenly w-full'>
        {bookingsAtTime.length != 0
          ? bookingsAtTime.map((booking) => {
              if (!roomVisibilities[`${booking.room}`]) {
                return null;
              }

              // substract 4 hours worth of milliseconds for EST
              const formattedStartTime = new Date(
                booking.startTime.getTime() - 14400000,
              );
              // substract 4 hours worth of milliseconds for EST
              // add 30 minutes worth of milliseconds to make range include last timeslot
              const formattedEndTime = new Date(
                booking.endTime.getTime() - 14400000 + 1800000,
              );
              const bookingTooltipContent = `${booking.room}, ${formattedStartTime.toISOString().split('T')[1].substring(0, 5)}-${formattedEndTime.toISOString().split('T')[1].substring(0, 5)}`;

              return (
                <div
                  key={`${time}-${booking.room}`}
                  className={`absolute top-1/3 flex justify-center items-center text-xs ${BookingIndicatorPositions[booking.room] || ''}`}
                >
                  <Tooltip
                    showArrow
                    content={bookingTooltipContent}
                    placement='bottom'
                  >
                    <div
                      style={{
                        height: getRoomIndicatorHeight(
                          booking.startTime,
                          booking.endTime,
                        ),
                      }}
                      className={`w-2 rounded-full ${(isAdmin ? AdminBookingIndicatorColours[booking.room] : UserBookingIndicatorColours[booking.room]) || 'bg-gray-500/70'} pointer-events-auto`}
                    />
                  </Tooltip>
                </div>
              );
            })
          : null}
      </div>
    );
  };

  return (
    <div
      className={`grid grid-cols-${daysToShow.length} absolute top-0 w-full h-full pointer-events-none`}
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
            className='flex flex-col justify-start items-center opacity-100'
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
