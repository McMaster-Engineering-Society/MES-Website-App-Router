import {
  addDays,
  differenceInMinutes,
  format,
  isBefore,
  startOfDay,
  subDays,
} from 'date-fns';
import React, { useEffect, useState } from 'react';

import SameRoomModal from '@/slices/hatch/booking-page/components/modals/SameRoomModal';
import TomorrowModal from '@/slices/hatch/booking-page/components/modals/TomorrowModal';
import WeekModal from '@/slices/hatch/booking-page/components/modals/WeekModal';
import { useFetchAvailabilitiesHook } from '@/slices/hatch/booking-page/hooks/bookingHooks';

type RebookModalProps = {
  open: boolean;
  onClose: () => void;
  startTime: Date;
  endTime: Date;
  userRoom: string;
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
const RebookModal: React.FC<RebookModalProps> = ({
  startTime,
  endTime,
  userRoom,
  userId,
  email,
  open,
  onClose,
}) => {
  const [tomorrowOpen, setTomOpen] = useState<boolean>(false);
  const [nextWeekOpen, setNextOpen] = useState<boolean>(false);
  const [sameRoomOpen, setSameOpen] = useState<boolean>(false);

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

  const handleButtonClick = (option: string, avail: boolean) => {
    if (avail) {
      if (option == '1') {
        setTomOpen(true);
      } else if (option == '2') {
        setNextOpen(true);
      } else {
        setSameOpen(true);
      }
      onClose();
    } else {
      // eslint-disable-next-line no-console
      console.log('Room unavailable. Select again!');
    }
  };

  function isAvail(
    availabilities: RoomAvailabilities,
    startTime: Date,
    numTimes: number,
  ): boolean {
    const today = startOfDay(new Date());
    const isBeforeTd = isBefore(subDays(startTime, 1), today);
    if (!isBeforeTd) {
      return Object.values(availabilities).some(
        (availability) => Number(availability.length) === Number(numTimes + 1),
      );
    } else {
      return false;
    }
  }

  function sameWeekAvail(
    room: keyof RoomAvailabilities,
    startTime: Date,
    numTimes: number,
  ): boolean {
    const avail = availabilities2[room];
    const today = startOfDay(new Date());
    const isBeforeTd = isBefore(subDays(startTime, 1), today);
    return !isBeforeTd && Array.isArray(avail) && avail.length === numTimes;
  }

  const [availabilities1, setAvailabilities1] = useState<RoomAvailabilities>({
    H201: [],
    H203: [],
    H205: [],
    H204A: [],
    H204B: [],
  });

  const [availabilities2, setAvailabilities2] = useState<RoomAvailabilities>({
    H201: [],
    H203: [],
    H205: [],
    H204A: [],
    H204B: [],
  });

  const minBtwn = differenceInMinutes(startTime, endTime);
  const halfHoursBtwn = Math.abs(minBtwn / 30);
  const startTmrw = addDays(startTime, 1);
  const endTmrw = addDays(endTime, 1);
  const startWeek = addDays(startTime, 7);
  const endWeek = addDays(endTime, 7);

  const { data: roomAvailabilities1, isLoading: isLoading1 } =
    useFetchAvailabilitiesHook(startTmrw, endTmrw);

  const { data: roomAvailabilities2, isLoading: isLoading2 } =
    useFetchAvailabilitiesHook(startWeek, endWeek);

  useEffect(() => {
    if (!isLoading1 && roomAvailabilities1) {
      setAvailabilities1(roomAvailabilities1);
    }
  }, [roomAvailabilities1, isLoading1]);

  useEffect(() => {
    if (!isLoading2 && roomAvailabilities2) {
      setAvailabilities2(roomAvailabilities2);
    }
  }, [roomAvailabilities2, isLoading2]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors
          ${open ? 'visible bg-black/20' : 'invisible'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-8 transition-all max-w-2xl border-solid border-2 border-green-300 
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
        <h1 className='text-center mx mb-5'>Rebooking Options</h1>

        <button
          className={`border-solid border-2 rounded-lg px-5 py-5 m-3
              ${isAvail(availabilities1, startTmrw, halfHoursBtwn) ? 'bg-white border-gray-600 hover:bg-green-100 hover:text-green-600 hover:border-green-600' : 'bg-gray-50 border-gray-300 text-gray-300'}
              `}
          onClick={() =>
            handleButtonClick(
              '1',
              isAvail(availabilities1, startTmrw, halfHoursBtwn),
            )
          }
        >
          <div>
            <b className='text-lg'>
              Same time
              <br />
              tomorrow:
              <br />
            </b>
            <i>
              {format(startTime.toString(), 'p')} (
              {getDuration(startTime, endTime)}H)
              <br />
            </i>
            <i>
              {format(addDays(startTime, 1), 'MMMM do')}
              <br />
            </i>
          </div>
        </button>

        <button
          className={`border-solid border-2 rounded-lg px-5 py-5 m-3
            ${isAvail(availabilities2, startWeek, halfHoursBtwn) ? 'bg-white border-gray-600 hover:bg-green-100 hover:text-green-600 hover:border-green-600' : 'bg-gray-50 border-gray-300 text-gray-300'}
            `}
          onClick={() =>
            handleButtonClick(
              '2',
              isAvail(availabilities2, startWeek, halfHoursBtwn),
            )
          }
        >
          <div>
            <b className='text-lg'>
              Same time
              <br />
              next week:
              <br />
            </b>
            <i>
              {format(startTime.toString(), 'p')} (
              {getDuration(startTime, endTime)}H) <br />
            </i>
            <i>{format(addDays(startTime, 7), 'MMMM do')}</i>
          </div>
        </button>

        <button
          className={`border-solid border-2 rounded-lg px-5 py-5 m-3
            ${sameWeekAvail(userRoom as keyof RoomAvailabilities, startWeek, halfHoursBtwn) ? 'bg-white border-gray-600 hover:bg-green-100 hover:text-green-600 hover:border-green-600' : 'bg-gray-50 border-gray-300 text-gray-300'}
            `}
          onClick={() =>
            handleButtonClick(
              '3',
              sameWeekAvail(
                userRoom as keyof RoomAvailabilities,
                startWeek,
                halfHoursBtwn,
              ),
            )
          }
        >
          <div>
            <b className='text-lg'>
              Same room, <br />
              time, day:
              <br />
            </b>
            <i>
              {format(startTime.toString(), 'p')} (
              {getDuration(startTime, endTime)}H) <br />
            </i>
            <i>{format(addDays(startTime, 7), 'MMMM do')}</i>
          </div>
        </button>
      </div>
      <TomorrowModal
        open={tomorrowOpen}
        onClose={() => setTomOpen(false)}
        startTime={startTime}
        endTime={endTime}
        userId={userId}
        email={email}
      ></TomorrowModal>
      <WeekModal
        open={nextWeekOpen}
        onClose={() => setNextOpen(false)}
        startTime={startTime}
        endTime={endTime}
        userId={userId}
        email={email}
      ></WeekModal>
      <SameRoomModal
        open={sameRoomOpen}
        onClose={() => setSameOpen(false)}
        startTime={startTime}
        endTime={endTime}
        userId={userId}
        userRoom={userRoom}
        email={email}
      ></SameRoomModal>
    </div>
  );
};

export default RebookModal;
