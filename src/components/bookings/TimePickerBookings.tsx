'use client';

import { useEffect, useState } from 'react';

import { TBooking } from '@/app/api/types';

/**
 * mock API call to fetch bookings
 * @todo replace with actual API call
 */
async function fetchBookings(): Promise<TBooking[]> {
  const mockBookings: TBooking[] = [
    {
      _id: '66c2204b87f9ac38c4ba645f',
      userId: 'placeholder ID',
      room: 'H201',
      startTime: new Date('2024-08-21T14:30:00.000Z'),
      endTime: new Date('2024-08-21T16:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:43.845Z'),
    },
    {
      _id: '66c2204d87f9ac38c4ba6460',
      userId: 'placeholder ID',
      room: 'H203',
      startTime: new Date('2024-08-21T14:30:00.000Z'),
      endTime: new Date('2024-08-21T16:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:45.643Z'),
    },
    {
      _id: '66c2204f87f9ac38c4ba6461',
      userId: 'placeholder ID',
      room: 'H204A',
      startTime: new Date('2024-08-21T14:30:00.000Z'),
      endTime: new Date('2024-08-21T16:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:47.038Z'),
    },
    {
      _id: '66c2205187f9ac38c4ba6462',
      userId: 'placeholder ID',
      room: 'H201',
      startTime: new Date('2024-08-22T14:00:00.000Z'),
      endTime: new Date('2024-08-22T15:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:49.131Z'),
    },
    {
      _id: '66c2205387f9ac38c4ba6463',
      userId: 'placeholder ID',
      room: 'H201',
      startTime: new Date('2024-08-22T16:30:00.000Z'),
      endTime: new Date('2024-08-22T17:00:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:51.461Z'),
    },
    {
      _id: '66c2205887f9ac38c4ba6464',
      userId: 'placeholder ID',
      room: 'H201',
      startTime: new Date('2024-08-23T16:00:00.000Z'),
      endTime: new Date('2024-08-23T16:00:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:24:56.580Z'),
    },
    {
      _id: '66c2205c87f9ac38c4ba6465',
      userId: 'placeholder ID',
      room: 'H204A',
      startTime: new Date('2024-08-22T17:00:00.000Z'),
      endTime: new Date('2024-08-22T17:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:25:00.799Z'),
    },
    {
      _id: '66c2206587f9ac38c4ba6466',
      userId: 'placeholder ID',
      room: 'H204B',
      startTime: new Date('2024-08-22T18:00:00.000Z'),
      endTime: new Date('2024-08-22T18:30:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:25:09.076Z'),
    },
    {
      _id: '66c2206787f9ac38c4ba6467',
      userId: 'placeholder ID',
      room: 'H204B',
      startTime: new Date('2024-08-24T21:00:00.000Z'),
      endTime: new Date('2024-08-24T22:00:00.000Z'),
      hasConfirmed: false,
      email: 'placeholder email',
      createdDate: new Date('2024-08-18T16:25:11.231Z'),
    },
  ];

  return mockBookings;
}

type Booking = {
  room: string;
  time: string;
};

type TimePickerBookingsProps = {
  firstDate: number;
};

const TimePickerBookings = ({ firstDate }: TimePickerBookingsProps) => {
  const columnCount = 7;
  const rowCount = 32;

  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // finds all timeslots between two times
    const findTimeSlotsBetween = (
      start: Date,
      end: Date,
      room: string,
    ): Booking[] => {
      const timeSlots = [];
      while (start.toISOString() != end.toISOString()) {
        timeSlots.push({ room: room, time: start.toISOString() });
        start.setUTCMinutes(start.getUTCMinutes() + 30);
      }
      timeSlots.push({ room: room, time: start.toISOString() });

      return timeSlots;
    };

    fetchBookings().then((data) => {
      let visibleBookings: Booking[] = [];

      data.forEach((booking) => {
        // checking if the time slots for a booking are currently visible on the time picker
        const timeslotDiv = document.getElementById(
          `${booking.startTime.toISOString()}`,
        );

        if (timeslotDiv) {
          // spread the occupied time slots of the booking into visibleBookings
          visibleBookings = [
            ...visibleBookings,
            ...findTimeSlotsBetween(
              booking.startTime,
              booking.endTime,
              booking.room,
            ),
          ];
        }
      });

      setBookings(visibleBookings);
    });
  }, []);

  const TimePickerCell = ({ time }: { time: string }) => {
    // finds all the bookings at a certain day & time
    const result = bookings.filter((booking) => {
      return booking.time == time;
    });

    return (
      <div id={time} className='h-4 flex gap-2'>
        {result.length != 0
          ? result.map((booking) => {
              return (
                <p key={`${time}-${booking.room}`} className='text-xs'>
                  {booking.room}
                </p>
              );
            })
          : null}
      </div>
    );
  };

  return (
    <div className='flex absolute w-full h-full top-0 bg-red-500/20 pointer-events-none'>
      {[...Array(columnCount)].map((_, i) => {
        // initializes the starting date & time for each column
        const startTime = new Date();
        startTime.setUTCDate(firstDate + i);
        startTime.setUTCHours(10, 30, 0, 0);

        return (
          <div
            key={`day-${startTime.getUTCDate()}`}
            className='flex-1 flex flex-col justify-center items-center border-1 border-indigo-500 opacity-100'
          >
            {[...Array(rowCount)].map(() => {
              // increments the starting time by 30 minutes for each following row
              startTime.setUTCMinutes(startTime.getUTCMinutes() + 30);

              return (
                <TimePickerCell
                  key={startTime.toISOString()}
                  time={startTime.toISOString()}
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
