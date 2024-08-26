'use client';

import { Switch } from '@nextui-org/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';
import { useFetchAvailabilitiesHook } from '@/lib/hooks/bookingHooks';
import { TBooking } from '@/lib/types';
import { cn } from '@/lib/utils';

import TimePickerBookings from '@/components/bookings/TimePickerBookings';

import {
  AdminBookingIndicatorColours,
  UserBookingIndicatorColours,
} from '@/constant/hatch-bookings/booking-indicator-data';

/**
 * human readable time slots (local time)
 */
const timeslots = [
  '7 AM',
  '7:30 AM',
  '8 AM',
  '8:30 AM',
  '9 AM',
  '9:30 AM',
  '10 AM',
  '10:30 AM',
  '11 AM',
  '11:30 AM',
  '12 PM',
  '12:30 PM',
  '1 PM',
  '1:30 PM',
  '2 PM',
  '2:30 PM',
  '3 PM',
  '3:30 PM',
  '4 PM',
  '4:30 PM',
  '5 PM',
  '5:30 PM',
  '6 PM',
  '6:30 PM',
  '7 PM',
  '7:30 PM',
  '8 PM',
  '8:30 PM',
  '9 PM',
  '9:30 PM',
  '10 PM',
  '10:30 PM',
];
const firstTimeSlotOfTheDayUTC = 11; // 7 AM EST
const timeslotsPerDay = timeslots.length;

export type RoomAvailabilities = {
  H201: string[];
  H203: string[];
  H205: string[];
  H204A: string[];
  H204B: string[];
};

type TimePickerProps = {
  className?: string;
};

export default function TimePicker({ className }: TimePickerProps) {
  /**
   * changes when users clicks arrows to change the date range
   * @todo integrate with date picker arrows
   */
  const {
    setAvailableRoomIds,
    setStartTimeDate,
    setEndTimeDate,
    userBookings,
  } = useTimePickerContext();

  const [pickerStartDate] = useState<Date>(
    new Date(new Date().setUTCHours(firstTimeSlotOfTheDayUTC, 0, 0, 0)),
  );

  const pickerEndDate = useMemo(
    () => new Date(pickerStartDate),
    [pickerStartDate],
  );

  pickerEndDate.setDate(pickerEndDate.getDate() + 14);

  const { data: roomAvailabilities, isLoading } = useFetchAvailabilitiesHook(
    pickerStartDate,
    pickerEndDate,
  );

  /**
   * changes based on screen size (ex. on mobile only show 1 day at a time)
   * @todo integrate with screen size
   */
  const [numDaysToShow] = useState<number>(7);

  /**
   * actual date objects based on pickerStartDate and numDaysToShow
   */
  const [daysToShow, setDaysToShow] = useState<Date[]>([]);
  useEffect(() => {
    const days = Array.from({ length: numDaysToShow }, (_, i) => {
      const day = new Date(pickerStartDate);
      day.setDate(day.getDate() + i);
      return day;
    });
    setDaysToShow(days);
  }, [numDaysToShow, pickerStartDate]);

  const [availabilities, setAvailabilities] = useState<RoomAvailabilities>({
    H201: [],
    H203: [],
    H205: [],
    H204A: [],
    H204B: [],
  });

  useEffect(() => {
    if (!isLoading && roomAvailabilities) {
      setAvailabilities(roomAvailabilities);
    }
  }, [roomAvailabilities, isLoading]);

  const calculatedDailyMaxBlockLength = useCallback((): number[] => {
    if (!userBookings) {
      return Array.from({ length: numDaysToShow }, () => 6);
    }

    const userBookingsHoursByDay = userBookings
      .filter((booking) => {
        return (
          new Date(booking.startTime).getTime() >= pickerStartDate.getTime() &&
          new Date(booking.endTime).getTime() <= pickerEndDate.getTime()
        );
      })
      .reduce((accumulator: Record<number, number>, currentDay) => {
        const dayIndex =
          new Date(currentDay.startTime).getDay() - pickerStartDate.getDay();

        const diffTimeInTimeSlots =
          (new Date(currentDay.endTime).getTime() -
            new Date(currentDay.startTime).getTime()) /
            (1000 * 60 * 60) +
          0.5;

        if (dayIndex in accumulator) {
          accumulator[dayIndex] += diffTimeInTimeSlots;
        } else {
          accumulator[dayIndex] = diffTimeInTimeSlots;
        }

        return accumulator;
      }, {});

    const userBookingsMaxBlockLength = [];
    for (let i = 0; i < numDaysToShow; i++) {
      const maxBlockLength = userBookingsHoursByDay[i]
        ? 6 - userBookingsHoursByDay[i] * 2
        : 6;
      userBookingsMaxBlockLength.push(maxBlockLength);
    }

    return userBookingsMaxBlockLength;
  }, [userBookings, pickerStartDate, pickerEndDate, numDaysToShow]);

  const [maxBlockLengths, setMaxBlockLengths] = useState<number[]>(() =>
    Array.from({ length: numDaysToShow }, () => 6),
  );

  useEffect(() => {
    const newMaxBlockLengths = calculatedDailyMaxBlockLength();

    // Only update state if the new calculated values differ from the current state
    if (
      JSON.stringify(maxBlockLengths) !== JSON.stringify(newMaxBlockLengths)
    ) {
      setMaxBlockLengths(newMaxBlockLengths);
    }
  }, [calculatedDailyMaxBlockLength, maxBlockLengths]);

  /**
   * convert time slot index to Date for indexing into availabilities
   * ex. 0 -> "2024-08-11T11:00:00.000Z"
   */
  const timeSlotIndexToTimeISODate = useCallback(
    (timeSlotIndex: number) => {
      const time = new Date(pickerStartDate);
      // slot at index timeslots.length+1 is the first slot of the next day
      const daysOffset = Math.floor(timeSlotIndex / timeslots.length);
      // i.e. first slot of every day should have an offset of 0
      const hoursOffset = timeSlotIndex % timeslots.length;
      time.setDate(time.getDate() + daysOffset);
      time.setUTCHours(
        firstTimeSlotOfTheDayUTC + Math.floor(hoursOffset / 2),
        (hoursOffset % 2) * 30,
        0,
        0,
      );
      return time;
    },
    [pickerStartDate],
  );

  /**
   * convert time slot index to ISO string for indexing into availabilities
   * ex. 0 -> "2024-08-11T11:00:00.000Z"
   */
  const timeSlotIndexToTimeISO = useCallback(
    (timeSlotIndex: number) => {
      return timeSlotIndexToTimeISODate(timeSlotIndex).toISOString();
    },
    [timeSlotIndexToTimeISODate],
  );

  /**
   * list what rooms are available at each time slot,
   * this will be used to check what cells should be greyed out
   * and what rooms to display as available
   */
  const [roomsAvailableByTime, setRoomsAvailableByTime] = useState<
    Record<string, string[]>
  >({});
  useEffect(() => {
    const _roomsAvailableByTime: Record<string, string[]> = {};
    for (let i = 0; i < numDaysToShow * timeslots.length; i++) {
      const time = timeSlotIndexToTimeISO(i);
      _roomsAvailableByTime[time] = [];
    }
    for (const room of Object.keys(availabilities)) {
      for (const time of availabilities[room as keyof typeof availabilities]) {
        if (time in _roomsAvailableByTime) {
          _roomsAvailableByTime[time].push(room);
        }
      }
    }
    setRoomsAvailableByTime(_roomsAvailableByTime);
  }, [availabilities, daysToShow, numDaysToShow, timeSlotIndexToTimeISO]);

  /**
   * @todo add proper loading indicator (render table but make everything greyed out?)
   */
  if (Object.keys(roomsAvailableByTime).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cn('px-8', className)}>
      <TimePickerTable
        daysToShow={daysToShow}
        roomsAvailableByTime={roomsAvailableByTime}
        timeSlotIndexToTimeISO={timeSlotIndexToTimeISO}
        timeSlotIndexToTimeISODate={timeSlotIndexToTimeISODate}
        maxBlockLengths={maxBlockLengths}
        setAvailableRoomIds={setAvailableRoomIds}
        setStartTimeDate={setStartTimeDate}
        setEndTimeDate={setEndTimeDate}
        userBookings={userBookings}
        isAdmin={false}
      />
    </div>
  );
}

type TimePickerTableProps = {
  daysToShow: Date[];
  roomsAvailableByTime: Record<string, string[]>;
  timeSlotIndexToTimeISO: (i: number) => string;
  timeSlotIndexToTimeISODate: (i: number) => Date;
  maxBlockLengths: number[];
  setAvailableRoomIds: React.Dispatch<React.SetStateAction<string[]>>;
  setStartTimeDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setEndTimeDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  userBookings: TBooking[] | undefined;
  isAdmin: boolean;
};

function TimePickerTable({
  daysToShow,
  roomsAvailableByTime,
  timeSlotIndexToTimeISO,
  timeSlotIndexToTimeISODate,
  maxBlockLengths,
  setAvailableRoomIds,
  setStartTimeDate,
  setEndTimeDate,
  userBookings,
  isAdmin,
}: TimePickerTableProps) {
  // start and end indexes of the currently selected block
  const [startIndex, setStartIndex] = useState<number>(-1);
  const [endIndex, setEndIndex] = useState<number>(-1);

  const [dragOperation, setDragOperation] = useState<
    'Selecting' | 'DeselectingFromStart' | 'DeselectingFromEnd' | 'None'
  >('None');

  useEffect(() => {
    const handleSetAvailableRoomIds = () => {
      if (startIndex > endIndex) {
        // If the range is invalid, exit early
        return;
      }

      const times = Array.from({ length: endIndex - startIndex + 1 }, (_, i) =>
        timeSlotIndexToTimeISO(startIndex + i),
      );
      let intersectionRooms: string[] = [];

      times.forEach((time) => {
        const availableRooms = roomsAvailableByTime[time] || [];

        if (!intersectionRooms.length) {
          // Initialize the intersection set with the rooms available at the first time slot
          intersectionRooms = availableRooms;
        } else {
          // Compute the intersection of available rooms
          intersectionRooms = [...intersectionRooms].filter((room) =>
            availableRooms.includes(room),
          );
        }
      });

      // Convert intersectionRooms to an array and set state
      setAvailableRoomIds(intersectionRooms);
    };

    handleSetAvailableRoomIds();
  }, [
    startIndex,
    endIndex,
    roomsAvailableByTime,
    setAvailableRoomIds,
    timeSlotIndexToTimeISO,
  ]);

  const slotIsSelected = (slotIndex: number) =>
    startIndex <= slotIndex && slotIndex <= endIndex;

  const slotIsOnEdgeOfSelected = (slotIndex: number) =>
    slotIndex == startIndex || slotIndex == endIndex;

  // extra modulo logic: last slot of the day is not adjacent to first slot of the next day
  const slotIsAdjacentToSelected = (slotIndex: number) =>
    (slotIndex == startIndex - 1 &&
      slotIndex % timeslots.length !== timeslots.length - 1) ||
    (slotIndex == endIndex + 1 && slotIndex % timeslots.length !== 0);

  /**
   * used for greying out cells that are not available
   */
  const atLeastOneRoomAvailable = (slotIndex: number) => {
    const time = timeSlotIndexToTimeISO(slotIndex);
    if (!(time in roomsAvailableByTime)) {
      throw `No availability data for time: ${time}`;
    }
    return roomsAvailableByTime[time].length > 0;
  };
  /**
   * used to prevent selecting unavailable cells by dragging past them
   */
  const allSlotsBetweenIndexesAreAvailable = (index1: number, index2: number) =>
    Array.from(
      { length: Math.max(index1, index2) - Math.min(index1, index2) + 1 },
      (_, i) => Math.min(index1, index2) + i,
    ).every(atLeastOneRoomAvailable);

  const handleMouseDown = (slotIndex: number) => {
    if (slotIsOnEdgeOfSelected(slotIndex)) {
      // deselect
      if (startIndex == slotIndex && endIndex == slotIndex) {
        // only 1 slot selected and we are unselecting it
        setStartIndex(-1);
        setEndIndex(-1);
        setStartTimeDate(undefined);
        setEndTimeDate(undefined);
      } else if (slotIndex === startIndex) {
        // clicked first selected slot in block
        setStartIndex(slotIndex + 1);
        setStartTimeDate(timeSlotIndexToTimeISODate(slotIndex + 1));
        setDragOperation('DeselectingFromStart');
      } else if (slotIndex === endIndex) {
        // clicked last selected slot in block
        setEndIndex(slotIndex - 1);
        setEndTimeDate(timeSlotIndexToTimeISODate(slotIndex - 1));
        setDragOperation('DeselectingFromEnd');
      }
    } else if (
      slotIsAdjacentToSelected(slotIndex) &&
      endIndex - startIndex + 1 <
        maxBlockLengths[Math.floor(slotIndex / timeslotsPerDay)] &&
      atLeastOneRoomAvailable(slotIndex)
    ) {
      // add to selected block
      setDragOperation('Selecting');
      const newStartIndex = Math.min(startIndex, slotIndex);
      const newEndIndex = Math.max(endIndex, slotIndex);
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
      setStartTimeDate(timeSlotIndexToTimeISODate(newStartIndex));
      setEndTimeDate(timeSlotIndexToTimeISODate(newEndIndex));
    } else if (atLeastOneRoomAvailable(slotIndex)) {
      // starting to select a new block
      setDragOperation('Selecting');
      setStartIndex(slotIndex);
      setEndIndex(slotIndex);
      setStartTimeDate(timeSlotIndexToTimeISODate(slotIndex));
      setEndTimeDate(timeSlotIndexToTimeISODate(slotIndex));
    }
  };

  /**
   * note: cannot treat drag the same as click
   * because when dragging quickly, the drag handler will not be called for every cell
   */
  const handleDrag = (slotIndex: number) => {
    if (dragOperation === 'Selecting') {
      // new slots to add to selection
      if (
        slotIndex < startIndex &&
        allSlotsBetweenIndexesAreAvailable(startIndex, slotIndex)
      ) {
        const newStartIndex = Math.max(
          slotIndex,
          endIndex -
            maxBlockLengths[Math.floor(slotIndex / timeslotsPerDay)] +
            1,
        );
        setStartIndex(newStartIndex);
        setStartTimeDate(timeSlotIndexToTimeISODate(newStartIndex));
      } else if (
        slotIndex > endIndex &&
        allSlotsBetweenIndexesAreAvailable(endIndex, slotIndex)
      ) {
        const newEndIndex = Math.min(
          slotIndex,
          startIndex +
            maxBlockLengths[Math.floor(slotIndex / timeslotsPerDay)] -
            1,
        );
        setEndIndex(newEndIndex);
        setEndTimeDate(timeSlotIndexToTimeISODate(newEndIndex));
      }
    } else if (
      dragOperation === 'DeselectingFromStart' &&
      slotIndex > startIndex
    ) {
      // new slots to remove
      setStartIndex(slotIndex);
      setStartTimeDate(timeSlotIndexToTimeISODate(slotIndex));
    } else if (dragOperation === 'DeselectingFromEnd' && slotIndex < endIndex) {
      // new slots to remove
      setEndIndex(slotIndex);
      setEndTimeDate(timeSlotIndexToTimeISODate(slotIndex));
    }
  };

  /**
   * onTouchMove will not fire for the proper timeSlotIndex
   * So we need to convert the touch coordinates to the proper timeSlotIndex
   */
  const touchEventToTimeslot = (event: React.TouchEvent): number | null => {
    const { touches } = event;
    if (!touches || touches.length === 0) return null;
    const { clientX, clientY } = touches[0];
    const targetElement = document.elementFromPoint(clientX, clientY);
    if (targetElement) {
      return parseInt(targetElement.id);
    }
    return null;
  };

  /**
   * stop dragging when we let go of the mouse
   */
  const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setDragOperation('None');
  };
  /**
   * stop dragging when the mouse leaves the div
   */
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setDragOperation('None');
  };
  /**
   * if we don't include this, the browser will select text and everything will get messed up
   */
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
  };

  const TimeIndicators = () => {
    {
      /* time indicators along the side */
    }
    return (
      <div className='flex flex-col justify-stretch mt-14 mr-1 -translate-y-1'>
        {timeslots.map((slot: string, i) => {
          if (i % 2 === 1) return null;
          return (
            <span
              key={`time-text-${slot}`}
              id={`time-text-${slot}`}
              className='h-8 text-[#373A36]/80 italic text-xs whitespace-nowrap text-right'
            >
              {slot}
            </span>
          );
        })}
      </div>
    );
  };

  const TimePickerHeader = () => {
    return (
      <div
        className={`h-14 grid grid-rows-1 grid-cols-${daysToShow.length} auto-cols-max`}
      >
        {daysToShow.map((day, i) => (
          <div
            key={day.toString()}
            className={`px-8 flex-1 flex flex-col justify-center items-center p-0 border-black/20 border-1 border-l-0 border-t-0 border-b-0 ${i === daysToShow.length - 1 && 'border-r-0'}`}
          >
            <span className='text-sm font-light'>
              {/* ex. "MONDAY" */}
              {day
                .toLocaleDateString('en-US', { weekday: 'long' })
                .toUpperCase()}
            </span>
            <span className='text-2xl font-light'>
              {/* ex. "23" */}
              {day.getDate()}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const TimePickerBody = () => {
    return (
      <div
        className={`grid grid-rows-${timeslots.length} grid-cols-${daysToShow.length}`}
      >
        {timeslots.map((slot, i) =>
          daysToShow.map((day, j) => {
            const timeSlotIndex = j * timeslots.length + i;
            return (
              <div
                key={`${day} ${slot}`}
                id={timeSlotIndex.toString()} // don't change (id is used to convert touch event to timeSlotIndex)
                className={`h-4 relative border-1 border-b-0 border-black/20 flex-1 touch-none
                      ${slotIsSelected(timeSlotIndex) && 'bg-[#CAFFB1]/50'} 
                      ${!atLeastOneRoomAvailable(timeSlotIndex) && 'bg-[#CACED1]/40'} 
                      ${i % 2 === 1 && 'border-t-0'} 
                      border-l-0
                      ${j === daysToShow.length - 1 && 'border-r-0'}`}
                onPointerDown={() => handleMouseDown(timeSlotIndex)} // fired on desktop & mobile
                onMouseEnter={() => handleDrag(timeSlotIndex)} // fired on desktop only
                onTouchMove={(e) => {
                  // onTouchMove will not fire for the proper timeSlotIndex
                  // so we need to convert the touch to the proper timeSlotIndex
                  const timeSlotIndex = touchEventToTimeslot(e);
                  timeSlotIndex && handleDrag(timeSlotIndex);
                }} // fired on mobile only
              />
            );
          }),
        )}
      </div>
    );
  };

  const [areBookingsVisible, setAreBookingsVisible] = useState<boolean>(true);
  const [roomVisibilities, setRoomVisibilities] = useState({
    H201: true,
    H203: true,
    H205: true,
    H204A: true,
    H204B: true,
  });

  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-row justify-center'>
        <TimeIndicators />
        <div
          className='flex flex-col bg-white rounded-lg shadow-lg shadow-black/25'
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <TimePickerHeader />
          {/* relative position is used here so that overlay components (eg. TimePickerBookings) can be positioned absolutely to be on top of TimePickerBody */}
          <div className='relative'>
            <TimePickerBody />
            {areBookingsVisible ? (
              <TimePickerBookings
                isAdmin={isAdmin}
                userBookings={userBookings}
                daysToShow={daysToShow}
                timeslotCount={32}
                firstTimeslot={daysToShow[0].toISOString().split('T')[1]}
                roomVisibilities={roomVisibilities}
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <Switch
          size='lg'
          color='success'
          className='h-16 pl-8'
          onChange={() => {
            setAreBookingsVisible(!areBookingsVisible);
          }}
          isSelected={areBookingsVisible}
        >
          Toggle Bookings
        </Switch>
        <div className='flex justify-center items-center'>
          <Switch
            defaultSelected
            size='sm'
            color='secondary'
            className='pl-8'
            onChange={(e) => {
              setRoomVisibilities({
                ...roomVisibilities,
                H201: e.target.checked,
              });
            }}
          >
            <div className='flex justify-center items-center gap-2'>
              <p>H201</p>
              <div
                className={`w-2 h-2 rounded-full ${(isAdmin ? AdminBookingIndicatorColours['H201'] : UserBookingIndicatorColours['H201']) || 'bg-gray-500/70'}`}
              />
            </div>
          </Switch>
          <Switch
            defaultSelected
            size='sm'
            color='secondary'
            className='pl-8'
            onChange={(e) => {
              setRoomVisibilities({
                ...roomVisibilities,
                H203: e.target.checked,
              });
            }}
          >
            <div className='flex justify-center items-center gap-2'>
              <p>H203</p>
              <div
                className={`w-2 h-2 rounded-full ${(isAdmin ? AdminBookingIndicatorColours['H203'] : UserBookingIndicatorColours['H203']) || 'bg-gray-500/70'}`}
              />
            </div>
          </Switch>
          <Switch
            defaultSelected
            size='sm'
            color='secondary'
            className='pl-8'
            onChange={(e) => {
              setRoomVisibilities({
                ...roomVisibilities,
                H205: e.target.checked,
              });
            }}
          >
            <div className='flex justify-center items-center gap-2'>
              <p>H205</p>
              <div
                className={`w-2 h-2 rounded-full ${(isAdmin ? AdminBookingIndicatorColours['H205'] : UserBookingIndicatorColours['H205']) || 'bg-gray-500/70'}`}
              />
            </div>
          </Switch>
          <Switch
            defaultSelected
            size='sm'
            color='secondary'
            className='pl-8'
            onChange={(e) => {
              setRoomVisibilities({
                ...roomVisibilities,
                H204A: e.target.checked,
              });
            }}
          >
            <div className='flex justify-center items-center gap-2'>
              <p>H204A</p>
              <div
                className={`w-2 h-2 rounded-full ${(isAdmin ? AdminBookingIndicatorColours['H204A'] : UserBookingIndicatorColours['H204A']) || 'bg-gray-500/70'}`}
              />
            </div>
          </Switch>
          <Switch
            defaultSelected
            size='sm'
            color='secondary'
            className='pl-8'
            onChange={(e) => {
              setRoomVisibilities({
                ...roomVisibilities,
                H204B: e.target.checked,
              });
            }}
          >
            <div className='flex justify-center items-center gap-2'>
              <p>H204B</p>
              <div
                className={`w-2 h-2 rounded-full ${(isAdmin ? AdminBookingIndicatorColours['H204B'] : UserBookingIndicatorColours['H204B']) || 'bg-gray-500/70'}`}
              />
            </div>
          </Switch>
        </div>
      </div>
    </div>
  );
}
