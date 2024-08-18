'use client';

import { Switch } from '@nextui-org/react';
import { useCallback, useEffect, useState } from 'react';

import TimePickerBookings from '@/components/bookings/TimePickerBookings';

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

type RoomAvailabilities = {
  H201: string[];
  H203: string[];
  H205: string[];
  H204A: string[];
  H204B: string[];
};

/**
 * mock API call to fetch room availabilities
 * @todo replace with actual API call
 */
async function fetchAvailabilities(): Promise<RoomAvailabilities> {
  const mockAvailabilities: RoomAvailabilities = {
    H201: [
      '2024-08-11T11:00:00.000Z',
      '2024-08-11T12:00:00.000Z',
      '2024-08-11T13:00:00.000Z',
      '2024-08-11T14:00:00.000Z',
      '2024-08-11T14:30:00.000Z',
      '2024-08-11T15:00:00.000Z',
      '2024-08-11T15:30:00.000Z',
      '2024-08-11T16:00:00.000Z',
      '2024-08-11T16:30:00.000Z',
      '2024-08-11T17:00:00.000Z',
      '2024-08-11T17:30:00.000Z',
      '2024-08-11T18:00:00.000Z',
      '2024-08-11T18:30:00.000Z',
      '2024-08-12T11:00:00.000Z',
      '2024-08-12T12:00:00.000Z',
      '2024-08-12T13:00:00.000Z',
      '2024-08-12T14:00:00.000Z',
      '2024-08-12T14:30:00.000Z',
      '2024-08-12T15:00:00.000Z',
      '2024-08-13T11:00:00.000Z',
      '2024-08-14T12:00:00.000Z',
      '2024-08-14T13:00:00.000Z',
      '2024-08-14T14:00:00.000Z',
      '2024-08-14T14:30:00.000Z',
      '2024-08-14T15:00:00.000Z',
      '2024-08-15T11:00:00.000Z',
      '2024-08-15T11:30:00.000Z',
      '2024-08-15T12:00:00.000Z',
    ],
    H203: [
      '2024-08-11T11:00:00.000Z',
      '2024-08-11T12:00:00.000Z',
      '2024-08-11T13:00:00.000Z',
      '2024-08-11T14:00:00.000Z',
      '2024-08-11T14:30:00.000Z',
      '2024-08-11T15:00:00.000Z',
      '2024-08-12T11:00:00.000Z',
      '2024-08-12T12:00:00.000Z',
      '2024-08-12T13:00:00.000Z',
      '2024-08-12T14:00:00.000Z',
      '2024-08-12T14:30:00.000Z',
      '2024-08-12T15:00:00.000Z',
      '2024-08-13T11:00:00.000Z',
      '2024-08-14T12:00:00.000Z',
      '2024-08-14T13:00:00.000Z',
      '2024-08-14T14:00:00.000Z',
      '2024-08-14T14:30:00.000Z',
      '2024-08-14T15:00:00.000Z',
    ],
    H205: [
      '2024-08-11T11:00:00.000Z',
      '2024-08-13T11:00:00.000Z',
      '2024-08-11T12:00:00.000Z',
      '2024-08-11T13:00:00.000Z',
      '2024-08-11T14:00:00.000Z',
      '2024-08-11T14:30:00.000Z',
      '2024-08-11T15:00:00.000Z',
      '2024-08-12T11:00:00.000Z',
      '2024-08-12T12:00:00.000Z',
      '2024-08-12T13:00:00.000Z',
      '2024-08-12T14:00:00.000Z',
      '2024-08-12T14:30:00.000Z',
      '2024-08-12T15:00:00.000Z',
      '2024-08-13T11:00:00.000Z',
      '2024-08-14T12:00:00.000Z',
      '2024-08-14T13:00:00.000Z',
      '2024-08-14T14:00:00.000Z',
      '2024-08-14T14:30:00.000Z',
      '2024-08-14T15:00:00.000Z',
      '2024-08-15T11:00:00.000Z',
    ],
    H204A: [
      '2024-08-15T11:00:00.000Z',
      '2024-08-15T15:00:00.000Z',
      '2024-08-15T15:30:00.000Z',
      '2024-08-15T16:00:00.000Z',
      '2024-08-15T19:00:00.000Z',
      '2024-08-15T12:00:00.000Z',
      '2024-08-11T23:00:00.000Z',
    ],
    H204B: ['2024-08-17T11:00:00.000Z'],
  };
  return mockAvailabilities;
}

export default function TimePickerAdmin() {
  /**
   * changes when users clicks arrows to change the date range
   * @todo integrate with date picker arrows
   */
  const [pickerStartDate] = useState<Date>(
    new Date(new Date().setUTCHours(firstTimeSlotOfTheDayUTC, 0, 0, 0)),
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
      // day.setDate(day.getDate() + i + 1);
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
    fetchAvailabilities().then((data) => setAvailabilities(data));
  }, []);

  /**
   * max number of 30 minute slots that can be selected
   * @todo implement functionality
   * (complicated because there is a DAILY limit)
   */
  const [maxBlockLength] = useState<number>(6);

  /**
   * convert time slot index to ISO string for indexing into availabilities
   * ex. 0 -> "2024-08-11T11:00:00.000Z"
   */
  const timeSlotIndexToTimeISO = useCallback(
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
      return time.toISOString();
    },
    [pickerStartDate],
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
    <TimePickerTable
      daysToShow={daysToShow}
      roomsAvailableByTime={roomsAvailableByTime}
      timeSlotIndexToTimeISO={timeSlotIndexToTimeISO}
      maxBlockLength={maxBlockLength}
    />
  );
}

type TimePickerTableProps = {
  daysToShow: Date[];
  roomsAvailableByTime: Record<string, string[]>;
  timeSlotIndexToTimeISO: (i: number) => string;
  maxBlockLength: number;
};

function TimePickerTable({
  daysToShow,
  roomsAvailableByTime,
  timeSlotIndexToTimeISO,
  maxBlockLength,
}: TimePickerTableProps) {
  // start and end indexes of the currently selected block
  const [startIndex, setStartIndex] = useState<number>(-1);
  const [endIndex, setEndIndex] = useState<number>(-1);

  const [dragOperation, setDragOperation] = useState<
    'Selecting' | 'DeselectingFromStart' | 'DeselectingFromEnd' | 'None'
  >('None');

  // disallow selecting more than maxBlockLength
  const [canSelect, setCanSelect] = useState(true);
  useEffect(() => {
    const currentSelectedBlockLength = endIndex - startIndex + 1; // ex. 5 - 0 + 1 = 6
    setCanSelect(currentSelectedBlockLength < maxBlockLength);
  }, [startIndex, endIndex, maxBlockLength]);

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
      } else if (slotIndex === startIndex) {
        // clicked first selected slot in block
        setStartIndex(slotIndex + 1);
        setDragOperation('DeselectingFromStart');
      } else if (slotIndex === endIndex) {
        // clicked last selected slot in block
        setEndIndex(slotIndex - 1);
        setDragOperation('DeselectingFromEnd');
      }
    } else if (
      slotIsAdjacentToSelected(slotIndex) &&
      canSelect &&
      atLeastOneRoomAvailable(slotIndex)
    ) {
      // add to selected block
      setDragOperation('Selecting');
      setStartIndex(Math.min(startIndex, slotIndex));
      setEndIndex(Math.max(endIndex, slotIndex));
    } else if (atLeastOneRoomAvailable(slotIndex)) {
      // starting to select a new block
      setDragOperation('Selecting');
      setStartIndex(slotIndex);
      setEndIndex(slotIndex);
    }
  };

  /**
   * note: cannot treat drag the same as click
   * because when dragging quickly, the drag handler will not be called for every cell
   */
  const handleDrag = (slotIndex: number) => {
    if (dragOperation === 'Selecting' && canSelect) {
      // new slots to add to selection
      if (
        slotIndex < startIndex &&
        allSlotsBetweenIndexesAreAvailable(startIndex, slotIndex)
      ) {
        setStartIndex(slotIndex);
      } else if (
        slotIndex > endIndex &&
        allSlotsBetweenIndexesAreAvailable(endIndex, slotIndex)
      ) {
        setEndIndex(slotIndex);
      }
    } else if (
      dragOperation === 'DeselectingFromStart' &&
      slotIndex > startIndex
    ) {
      // new slots to remove
      setStartIndex(slotIndex);
    } else if (dragOperation === 'DeselectingFromEnd' && slotIndex < endIndex) {
      // new slots to remove
      setEndIndex(slotIndex);
    }
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
      <div className='flex flex-col justify-stretch mt-16 mr-1 -translate-y-1'>
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
    {
      /* header that shows days of the week & month */
    }
    return (
      <div className='h-16 flex'>
        {daysToShow.map((day, i) => (
          <div
            key={day.toString()}
            className={`w-32 flex-1 flex flex-col justify-center items-center p-0 border-black/20 border-1 border-l-0 border-t-0 border-b-0 ${i === daysToShow.length - 1 && 'border-r-0'}`}
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
      <div>
        {timeslots.map((slot, i) => (
          <div key={slot} className='flex'>
            {daysToShow.map((day, j) => {
              const timeSlotIndex = j * timeslots.length + i;
              return (
                <div
                  key={`${day} ${slot}`}
                  className={`h-4 border-1 border-b-0 border-black/20 flex-1
                ${slotIsSelected(timeSlotIndex) && 'bg-[#CAFFB1]/50'}
                ${!atLeastOneRoomAvailable(timeSlotIndex) && 'bg-[#CACED1]/40'}
                ${i % 2 === 1 && 'border-t-0'}
                border-l-0
                ${j === daysToShow.length - 1 && 'border-r-0'}
              `}
                  onMouseEnter={() => handleDrag(timeSlotIndex)}
                  onMouseDown={() => handleMouseDown(timeSlotIndex)}
                ></div>
              );
            })}
          </div>
        ))}
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
              firstDate={18}
              roomVisibilities={roomVisibilities}
            />
          ) : null}
        </div>
      </div>

      <div>
        <Switch
          size='lg'
          color='success'
          className='h-32 pl-8'
          onChange={() => {
            setAreBookingsVisible(!areBookingsVisible);
          }}
          isSelected={areBookingsVisible}
        >
          Toggle Bookings
        </Switch>
        <div>
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
              <div className='w-2 h-2 rounded-full bg-red-500' />
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
              <div className='w-2 h-2 rounded-full bg-orange-500' />
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
              <div className='w-2 h-2 rounded-full bg-yellow-500' />
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
              <div className='w-2 h-2 rounded-full bg-green-500' />
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
              <div className='w-2 h-2 rounded-full bg-blue-500' />
            </div>
          </Switch>
        </div>
      </div>

      <Switch
        defaultSelected
        size='lg'
        color='success'
        aria-label='Toggle Bookings'
        className='h-32 pl-8'
        onChange={(e) => {
          setAreBookingsVisible(e.target.checked);
        }}
      >
        Toggle Bookings
      </Switch>
    </div>
  );
}
