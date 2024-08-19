'use client';

import { Tooltip } from '@nextui-org/react';
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
      room: 'H205',
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
  roomVisibilities: {
    [room: string]: boolean;
  };
};

const TimePickerBookings = ({
  firstDate,
  roomVisibilities,
}: TimePickerBookingsProps) => {
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

      // push after the while loop to add the end time to time slots
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

    const getRoomColour = (room: string) => {
      let roomColour = '';
      switch (room) {
        case 'H201':
          roomColour = 'bg-red-500';
          break;
        case 'H203':
          roomColour = 'bg-orange-500';
          break;
        case 'H205':
          roomColour = 'bg-yellow-500';
          break;
        case 'H204A':
          roomColour = 'bg-green-500';
          break;
        case 'H204B':
          roomColour = 'bg-blue-500';
          break;
        default:
          roomColour = 'bg-gray-500';
      }
      return roomColour;
    };

    return (
      <div id={time} className='h-4 flex justify-evenly w-32'>
        {result.length != 0
          ? result.map((booking) => {
              if (!roomVisibilities[`${booking.room}`]) {
                return null;
              }
              return (
                <div
                  key={`${time}-${booking.room}`}
                  className='flex justify-center items-center text-xs'
                >
                  <Tooltip showArrow content={booking.room} placement='bottom'>
                    <div
                      className={`w-2 h-2 rounded-full ${getRoomColour(booking.room)} pointer-events-auto`}
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
    <div className='flex absolute top-0 w-full h-full pointer-events-none'>
      {[...Array(columnCount)].map((_, i) => {
        // initializes the starting date & time for each column
        const startTime = new Date();
        startTime.setUTCDate(firstDate + i);
        startTime.setUTCHours(10, 30, 0, 0);

        return (
          <div
            key={`day-${startTime.getUTCDate()}`}
            className='flex-1 flex flex-col justify-center items-center opacity-100'
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
