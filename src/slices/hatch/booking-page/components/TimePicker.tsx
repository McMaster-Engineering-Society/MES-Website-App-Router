'use client';

import { TBooking } from '@slices/hatch/booking-page/types';
import { differenceInCalendarDays } from 'date-fns';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import LoadingIcon from '@/components/layout/LoadingIcon';

import TimePickerBookings from '@/slices/hatch/booking-page/components/TimePickerBookings';
import { useTimePickerContext } from '@/slices/hatch/booking-page/context/TimePickerContext';
import { useFetchAvailabilitiesHook } from '@/slices/hatch/booking-page/hooks/bookingHooks';

export type RoomAvailabilities = {
  H201: string[];
  H203: string[];
  H205: string[];
  H204A: string[];
  H204B: string[];
};

type NumDaysToShow = 1 | 3 | 7;

type TimePickerProps = {
  className?: string;
  numDaysToShow: NumDaysToShow;
  adminView?: boolean;
};

export default function TimePicker({
  numDaysToShow,
  className,
  adminView = false,
}: TimePickerProps) {
  /**
   * changes when users clicks arrows to change the date range
   */
  const {
    userBookings,
    pickerStartDate,
    timeslots,
    timeSlotIndexToTimeISO,
    isAdmin,
  } = useTimePickerContext();

  const pickerEndDate = useMemo(
    () => new Date(pickerStartDate),
    [pickerStartDate],
  );

  useEffect(() => {
    pickerEndDate.setDate(pickerEndDate.getDate() + numDaysToShow);
  }, [pickerStartDate, pickerEndDate, numDaysToShow]);

  const { data: roomAvailabilities, isLoading } = useFetchAvailabilitiesHook(
    pickerStartDate,
    pickerEndDate,
  );

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
        const dayIndex = differenceInCalendarDays(
          new Date(currentDay.endTime),
          pickerStartDate,
        );

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
  }, [
    availabilities,
    daysToShow,
    numDaysToShow,
    timeSlotIndexToTimeISO,
    timeslots.length,
  ]);

  /**
   * @todo add proper loading indicator (render table but make everything greyed out?) AND ADD SAME LOADING INDICATOR TO SignInGatePage.tsx
   */
  if (Object.keys(roomsAvailableByTime).length === 0) {
    return <LoadingIcon />;
  }

  return (
    <div className={className}>
      <TimePickerTable
        numDaysToShow={numDaysToShow}
        daysToShow={daysToShow}
        roomsAvailableByTime={roomsAvailableByTime}
        maxBlockLengths={maxBlockLengths}
        userBookings={userBookings}
        adminView={adminView && isAdmin} // Only shows admin view if passed into time picker AND the user is actually an admin.
      />
    </div>
  );
}

type TimePickerTableProps = {
  numDaysToShow: NumDaysToShow;
  daysToShow: Date[];
  roomsAvailableByTime: Record<string, string[]>;
  maxBlockLengths: number[];
  userBookings: TBooking[] | undefined;
  adminView: boolean;
};

function TimePickerTable({
  numDaysToShow,
  daysToShow,
  roomsAvailableByTime,
  maxBlockLengths,
  adminView,
}: TimePickerTableProps) {
  // start and end indexes of the currently selected block
  const {
    startIndex,
    setStartIndex,
    endIndex,
    setEndIndex,
    timeslots,
    timeSlotIndexToTimeISO,
    availableRoomIds,
    setAvailableRoomIds,
    areBookingsVisible,
  } = useTimePickerContext();

  const timeslotsPerDay = timeslots.length;

  const dragOperationRef = useRef<
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
      if (
        JSON.stringify(availableRoomIds) !== JSON.stringify(intersectionRooms)
      ) {
        setAvailableRoomIds(intersectionRooms);
      }
    };

    handleSetAvailableRoomIds();
  }, [
    startIndex,
    endIndex,
    roomsAvailableByTime,
    setAvailableRoomIds,
    timeSlotIndexToTimeISO,
    availableRoomIds,
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
  const atLeastOneRoomAvailable = useCallback(
    (slotIndex: number) => {
      const time = timeSlotIndexToTimeISO(slotIndex);
      return roomsAvailableByTime[time]?.length > 0;
    },
    [roomsAvailableByTime, timeSlotIndexToTimeISO],
  );
  /**
   * used to prevent selecting unavailable cells by dragging past them
   */
  const allSlotsBetweenIndexesAreAvailable = useCallback(
    (index1: number, index2: number) =>
      Array.from(
        { length: Math.max(index1, index2) - Math.min(index1, index2) + 1 },
        (_, i) => Math.min(index1, index2) + i,
      ).every(atLeastOneRoomAvailable),
    [atLeastOneRoomAvailable],
  );

  const handleMouseDownUser = (slotIndex: number) => {
    if (slotIsOnEdgeOfSelected(slotIndex)) {
      // deselect
      if (startIndex == slotIndex && endIndex == slotIndex) {
        // only 1 slot selected and we are unselecting it
        setStartIndex(-1);
        setEndIndex(-1);
      } else if (slotIndex === startIndex) {
        // clicked first selected slot in block
        setStartIndex(slotIndex + 1);
        dragOperationRef.current = 'DeselectingFromStart';
      } else if (slotIndex === endIndex) {
        // clicked last selected slot in block
        setEndIndex(slotIndex - 1);
        dragOperationRef.current = 'DeselectingFromEnd';
      }
    } else if (
      slotIsAdjacentToSelected(slotIndex) &&
      endIndex - startIndex + 1 <
        maxBlockLengths[Math.floor(slotIndex / timeslotsPerDay)] &&
      atLeastOneRoomAvailable(slotIndex)
    ) {
      // add to selected block
      dragOperationRef.current = 'Selecting';
      const newStartIndex = Math.min(startIndex, slotIndex);
      const newEndIndex = Math.max(endIndex, slotIndex);
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    } else if (
      atLeastOneRoomAvailable(slotIndex) &&
      maxBlockLengths[Math.floor(slotIndex / timeslotsPerDay)] >= 1
    ) {
      // starting to select a new block
      dragOperationRef.current = 'Selecting';
      setStartIndex(slotIndex);
      setEndIndex(slotIndex);
    }
  };

  const handleMouseDownAdmin = (slotIndex: number) => {
    if (slotIsOnEdgeOfSelected(slotIndex)) {
      // deselect
      if (startIndex == slotIndex && endIndex == slotIndex) {
        // only 1 slot selected and we are unselecting it
        setStartIndex(-1);
        setEndIndex(-1);
      } else if (slotIndex === startIndex) {
        // clicked first selected slot in block
        setStartIndex(slotIndex + 1);
        dragOperationRef.current = 'DeselectingFromStart';
      } else if (slotIndex === endIndex) {
        // clicked last selected slot in block
        setEndIndex(slotIndex - 1);
        dragOperationRef.current = 'DeselectingFromEnd';
      }
    } else if (slotIsAdjacentToSelected(slotIndex)) {
      // add to selected block
      dragOperationRef.current = 'Selecting';
      const newStartIndex = Math.min(startIndex, slotIndex);
      const newEndIndex = Math.max(endIndex, slotIndex);
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    } else {
      // starting to select a new block
      dragOperationRef.current = 'Selecting';
      setStartIndex(slotIndex);
      setEndIndex(slotIndex);
    }
  };
  const handleMouseDown = (slotIndex: number) => {
    if (!adminView) {
      handleMouseDownUser(slotIndex);
    } else if (adminView) {
      handleMouseDownAdmin(slotIndex);
    }
  };

  const handleDragUser = (slotIndex: number) => {
    if (dragOperationRef.current === 'Selecting') {
      // new slots to add to selection
      if (
        slotIndex < startIndex &&
        allSlotsBetweenIndexesAreAvailable(startIndex, slotIndex) &&
        // ~~ is a double bitwise NOT operator, which operates as a faster Math.floor() for positive numbers
        ~~(startIndex / timeslotsPerDay) == ~~(slotIndex / timeslotsPerDay)
      ) {
        const newStartIndex = Math.max(
          slotIndex,
          endIndex -
            maxBlockLengths[Math.floor(slotIndex / timeslotsPerDay)] +
            1,
        );
        setStartIndex(newStartIndex);
      } else if (
        slotIndex > endIndex &&
        allSlotsBetweenIndexesAreAvailable(endIndex, slotIndex) &&
        ~~(startIndex / timeslotsPerDay) == ~~(slotIndex / timeslotsPerDay)
      ) {
        const newEndIndex = Math.min(
          slotIndex,
          startIndex +
            maxBlockLengths[Math.floor(slotIndex / timeslotsPerDay)] -
            1,
        );
        setEndIndex(newEndIndex);
      }
    } else if (
      dragOperationRef.current === 'DeselectingFromStart' &&
      slotIndex > startIndex
    ) {
      // new slots to remove
      setStartIndex(slotIndex);
    } else if (
      dragOperationRef.current === 'DeselectingFromEnd' &&
      slotIndex < endIndex
    ) {
      // new slots to remove
      setEndIndex(slotIndex);
    }
  };
  const handleDragAdmin = (slotIndex: number) => {
    if (dragOperationRef.current === 'Selecting') {
      // new slots to add to selection
      if (
        slotIndex < startIndex &&
        // ~~ is a double bitwise NOT operator, which operates as a faster Math.floor() for positive numbers
        ~~(startIndex / timeslotsPerDay) == ~~(slotIndex / timeslotsPerDay)
      ) {
        const newStartIndex = slotIndex;
        setStartIndex(newStartIndex);
      } else if (
        slotIndex > endIndex &&
        ~~(startIndex / timeslotsPerDay) == ~~(slotIndex / timeslotsPerDay)
      ) {
        const newEndIndex = slotIndex;
        setEndIndex(newEndIndex);
      }
    } else if (
      dragOperationRef.current === 'DeselectingFromStart' &&
      slotIndex > startIndex
    ) {
      // new slots to remove
      setStartIndex(slotIndex);
    } else if (
      dragOperationRef.current === 'DeselectingFromEnd' &&
      slotIndex < endIndex
    ) {
      // new slots to remove
      setEndIndex(slotIndex);
    }
  };
  /**
   * note: cannot treat drag the same as click
   * because when dragging quickly, the drag handler will not be called for every cell
   */
  const handleDrag = (slotIndex: number) => {
    if (!adminView) {
      handleDragUser(slotIndex);
    } else if (adminView) {
      handleDragAdmin(slotIndex);
    }
  };

  /**
   * stop dragging when we let go of the mouse
   */
  const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dragOperationRef.current = 'None';
  };
  /**
   * stop dragging when the mouse leaves the div
   */
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    dragOperationRef.current = 'None';
  };

  const TimeIndicators = memo(() => {
    /* time indicators along the side */
    return (
      <div className='mr-1 mt-14 flex flex-col justify-stretch'>
        {timeslots.map((slot: string, i) => {
          if (i % 2 === 1) return null;
          return (
            <span
              key={`time-text-${slot}`}
              id={`time-text-${slot}`}
              className='flex-1 -translate-y-[6px] whitespace-nowrap text-right text-xs italic text-[#373A36]/80'
            >
              {slot}
            </span>
          );
        })}
      </div>
    );
  });

  const gridColClass: Record<NumDaysToShow, string> = {
    1: 'grid-cols-1',
    3: 'grid-cols-3',
    7: 'grid-cols-7',
  };

  const TimePickerHeader = () => {
    return (
      <div
        className={`grid min-h-14 grid-rows-1 ${gridColClass[numDaysToShow]} auto-cols-max`}
      >
        {daysToShow.map((day, i) => (
          <div
            key={day.toString()}
            className={`flex flex-1 flex-col items-center justify-center border-1 border-b-0 border-l-0 border-t-0 border-black/20 p-0 px-8 ${i === daysToShow.length - 1 && 'border-r-0'}`}
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
        className={`grid ${gridColClass[numDaysToShow]} h-full grid-flow-row`}
      >
        {timeslots.map((slot, i) =>
          daysToShow.map((day, j) => {
            const timeSlotIndex = j * timeslots.length + i;

            return (
              <div
                key={`${day} ${slot}`}
                id={timeSlotIndex.toString()} // don't change (id is used to convert touch event to timeSlotIndex)
                className={`relative flex-1 touch-none border-1 border-b-0 border-black/20
                      ${slotIsSelected(timeSlotIndex) && 'bg-[#CAFFB1]/50'}
                      ${adminView ? '' : !atLeastOneRoomAvailable(timeSlotIndex) && 'bg-[#CACED1]/40'}
                      ${i % 2 === 1 && 'border-t-0'}
                      border-l-0
                      ${j === numDaysToShow - 1 && 'border-r-0'}`}
                onPointerDown={() => handleMouseDown(timeSlotIndex)}
                onPointerEnter={() => handleDrag(timeSlotIndex)}
              />
            );
          }),
        )}
      </div>
    );
  };

  return (
    <div className='flex h-full min-h-[400px] flex-col justify-center'>
      <div className='flex h-full flex-row md:justify-center'>
        <TimeIndicators />
        <div
          className='flex flex-1 flex-col rounded-lg bg-white shadow-lg shadow-black/25'
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <TimePickerHeader />
          {/* relative position is used here so that overlay components (eg. TimePickerBookings) can be positioned absolutely to be on top of TimePickerBody */}
          <div className='relative h-full'>
            <TimePickerBody />
            {areBookingsVisible ? (
              <TimePickerBookings
                isAdmin={adminView}
                daysToShow={daysToShow}
                timeslotCount={32}
                firstTimeslot={daysToShow[0].toISOString().split('T')[1]}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
