import { addDays, differenceInMinutes, format, startOfDay } from 'date-fns';
import { Bookmark } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import {
  useAddRoomBookingHook,
  useFetchAvailabilitiesHook,
} from '@/slices/hatch/booking-page/hooks/bookingHooks';

type WeekModalProps = {
  open: boolean;
  onClose: () => void;
  startTime: Date;
  endTime: Date;
  userId: string;
  email: string;
};

export type RoomAvailabilities = {
  H201: string[];
  H203: string[];
  H205: string[];
  H204A: string[];
  H204B: string[];
};

// eslint-disable-next-line unused-imports/no-unused-vars
const WeekModal: React.FC<WeekModalProps> = ({
  open,
  startTime,
  endTime,
  onClose,
  userId,
  email,
}) => {
  const [availabilities, setAvailabilities] = useState<RoomAvailabilities>({
    H201: [],
    H203: [],
    H205: [],
    H204A: [],
    H204B: [],
  });

  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const addRoomBooking = useAddRoomBookingHook();
  const startWeek = addDays(startTime, 7);
  const endWeek = addDays(endTime, 7);
  const minBtwn = differenceInMinutes(startTime, endTime);
  const halfHoursBtwn = Math.abs(minBtwn / 30);

  const { data: roomAvailabilities, isLoading } = useFetchAvailabilitiesHook(
    startWeek,
    endWeek,
  );

  useEffect(() => {
    if (!isLoading && roomAvailabilities) {
      setAvailabilities(roomAvailabilities);
    }
  }, [roomAvailabilities, isLoading]);

  const handleRoomSelection = (room: string, avail: boolean) => {
    if (avail) {
      setSelectedRoom(room);
    } else {
      // eslint-disable-next-line no-console
      console.log('Room unavailable. Select again!');
    }
  };

  const roomString = selectedRoom ?? 'No Room Selected';

  async function handleBooking(
    userIdx: string,
    roomx: string,
    startx: Date,
    endx: Date,
    hasConfirmedx: boolean,
    emailx: string,
    created: Date,
  ) {
    const newBooking = {
      userId: userIdx,
      room: roomx,
      startTime: startx,
      endTime: endx,
      hasConfirmed: hasConfirmedx,
      email: emailx,
      createdDate: created,
    };

    try {
      await addRoomBooking.mutateAsync(newBooking);
      // eslint-disable-next-line no-console
      console.log('Room booked successfully!');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to book room:', error);
    }
    onClose();
  }

  function getDuration(startTime: Date, endTime: Date) {
    const timeMin = differenceInMinutes(endTime, startTime);
    const hours = Math.floor(timeMin / 60);
    const min = timeMin % 60;
    if (min != 0) {
      return hours + 0.5;
    } else {
      return hours;
    }
  }

  function isAvail(
    availabilities: RoomAvailabilities,
    room: keyof RoomAvailabilities,
    numSlots: number,
  ): boolean {
    const roomTimes = availabilities[room];
    return roomTimes.length === numSlots + 1;
  }

  const roomButtonClass = (room: string, av: boolean) =>
    av === true
      ? `border-solid border-1 rounded-lg py-0.5 px-1 mr-2.5 text-sm 
        ${
          selectedRoom === room
            ? 'text-green-600 border-green-600 bg-green-100'
            : 'bg-white border-gray-600 hover:bg-green-100 hover:text-green-600 hover:border-green-600'
        }`
      : `border-solid border-1 rounded-lg py-0.5 px-1 mr-2.5 text-sm bg-gray-50 border-gray-300 text-gray-300`;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors
          ${open ? 'visible bg-black/20' : 'invisible'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow transition-all max-w-2xl border-solid border-2 border-green-300 py-8 px-10
            ${open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-2 right-2 py-0.5 px-2 border 
              berder-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'
          onClick={onClose}
        >
          X
        </button>
        {/* {children} */}
        <h1 className='text-center mx mb-5'>Same Time Next Week</h1>

        <div className='flex'>
          <button className='border-solid border-2 border-green-600 rounded-lg px-5 py-5 m-3 bg-green-100 text-green-600'>
            <div>
              <b className='text-lg'>
                Same time
                <br />
                next week:
                <br />
              </b>
              <i>
                {format(startWeek.toString(), 'p')} (
                {getDuration(startWeek, endWeek)}H)
                <br />
              </i>
              <i>
                {format(startWeek, 'MMMM do')}
                <br />
              </i>
            </div>
          </button>
          <div className='ml-5'>
            <h4 className='mt-2 mb-0.5'>Available Rooms:</h4>
            <div className='flex'>
              <button
                className={roomButtonClass(
                  'H201',
                  isAvail(availabilities, 'H201', halfHoursBtwn),
                )}
                onClick={() => {
                  handleRoomSelection(
                    'H201',
                    isAvail(availabilities, 'H201', halfHoursBtwn),
                  );
                }}
              >
                H201
              </button>

              <button
                className={roomButtonClass(
                  'H203',
                  isAvail(availabilities, 'H203', halfHoursBtwn),
                )}
                onClick={() => {
                  handleRoomSelection(
                    'H203',
                    isAvail(availabilities, 'H203', halfHoursBtwn),
                  );
                  // eslint-disable-next-line no-console
                  console.log(roomString);
                }}
              >
                H203
              </button>

              <button
                className={roomButtonClass(
                  'H205',
                  isAvail(availabilities, 'H205', halfHoursBtwn),
                )}
                onClick={() => {
                  handleRoomSelection(
                    'H205',
                    isAvail(availabilities, 'H205', halfHoursBtwn),
                  );
                  // eslint-disable-next-line no-console
                  console.log(roomString);
                }}
              >
                H205
              </button>
              <button
                className={roomButtonClass(
                  'H204A',
                  isAvail(availabilities, 'H204A', halfHoursBtwn),
                )}
                onClick={() => {
                  handleRoomSelection(
                    'H204A',
                    isAvail(availabilities, 'H204A', halfHoursBtwn),
                  );
                }}
              >
                H204A
              </button>
              <button
                className={roomButtonClass(
                  'H204B',
                  isAvail(availabilities, 'H204B', halfHoursBtwn),
                )}
                onClick={() => {
                  handleRoomSelection(
                    'H204B',
                    isAvail(availabilities, 'H204B', halfHoursBtwn),
                  );
                }}
              >
                H204B
              </button>
            </div>
            <h4 className='mt-3'>Confirm Booking:</h4>
            <p className='text-small mb-1.5'>
              <b> {selectedRoom ?? 'No Room Selected'}</b>,{' '}
              {format(startWeek, 'MMMM do')}, {format(endWeek, 'p')} (
              {getDuration(startWeek, endWeek)}H).
            </p>
            <button
              className='rounded-full bg-red-50 text-red-700 py-0.1 px-2 border-solid border-1 border-red-700 text-sm'
              onClick={() => {
                handleBooking(
                  userId,
                  roomString,
                  startWeek,
                  endWeek,
                  false,
                  email,
                  startOfDay(new Date()),
                );
              }}
            >
              <div className='flex'>
                <Bookmark className='w-4 h-4 text-red-700 pt-1 pr-1' />
                <b>
                  <i>BOOK NOW</i>
                </b>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekModal;
