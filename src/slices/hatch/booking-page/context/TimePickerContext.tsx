'use client';

import { TBooking } from '@slices/hatch/booking-page/types';
import { addWeeks } from 'date-fns';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { useSessionContext } from '@/slices/auth/context/SessionContext';
import {
  useAddRoomBookingHook,
  useFetchUserBookingsHook,
} from '@/slices/hatch/booking-page/hooks/bookingHooks';

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

type TTimePickerContext = {
  pickerStartDate: Date;
  setPickerStartDate: (date: Date) => void;
  availableRoomIds: string[];
  setAvailableRoomIds: React.Dispatch<React.SetStateAction<string[]>>;
  handleAddBookRoom: (room: string, email: string) => Promise<string>;
  handlePickerStartDateShiftByDay: (shift: number) => void;
  userBookings: TBooking[] | undefined;
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
  endIndex: number;
  setEndIndex: React.Dispatch<React.SetStateAction<number>>;
  checkBookingWithinTwoWeeks: () => boolean;
  checkBookingNotInPast: () => boolean;
  areBookingsVisible: boolean;
  setAreBookingsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  roomVisibilities: Record<string, boolean>;
  setRoomVisibilities: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
  isAdmin: boolean;
  timeslots: string[];
  timeSlotIndexToTimeISODate: (timeSlotIndex: number) => Date;
  timeSlotIndexToTimeISO: (timeSlotIndex: number) => string;
};

type Props = {
  children: ReactNode;
};

export const TimePickerContext = createContext<TTimePickerContext | undefined>(
  undefined,
);

const firstTimeSlotOfTheDayUTC = 11;

export const TimePickerProvider = ({ children }: Props) => {
  // Gets the current date in EST and sets the time to the first time slot of the day
  const initialPickerStartDate = useMemo(() => {
    const estDate = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
    );
    return new Date(
      Date.UTC(
        estDate.getFullYear(),
        estDate.getMonth(),
        estDate.getDate(),
        firstTimeSlotOfTheDayUTC,
        0,
        0,
        0,
      ),
    );
  }, []);

  const [pickerStartDate, setPickerStartDate] = useState<Date>(
    initialPickerStartDate,
  );

  const pickerEndDate = useMemo(
    () => new Date(pickerStartDate),
    [pickerStartDate],
  );

  const [availableRoomIds, setAvailableRoomIds] = useState<string[]>([]);
  const [startIndex, setStartIndex] = useState<number>(-1);
  const [endIndex, setEndIndex] = useState<number>(-1);
  const { profile, isAdmin } = useSessionContext();
  const addRoomBooking = useAddRoomBookingHook();
  const { data: userBookings } = useFetchUserBookingsHook(profile?.email ?? '');

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

  const checkBookingWithinTwoWeeks = useCallback(() => {
    const twoWeeksFromNow = addWeeks(new Date(), 2);
    if (
      (pickerStartDate && pickerStartDate > twoWeeksFromNow) ||
      (endIndex && timeSlotIndexToTimeISODate(endIndex) > twoWeeksFromNow)
    ) {
      return false;
    }
    return true;
  }, [pickerStartDate, endIndex, timeSlotIndexToTimeISODate]);

  const checkBookingNotInPast = useCallback(() => {
    pickerEndDate.setDate(pickerStartDate.getDate() + 6);
    if (
      (startIndex && timeSlotIndexToTimeISODate(startIndex) < new Date()) ||
      (pickerEndDate && pickerEndDate < new Date())
    ) {
      return false;
    }
    return true;
  }, [pickerStartDate, pickerEndDate, startIndex, timeSlotIndexToTimeISODate]);

  const handleAddBookRoom = useCallback(
    (room: string, email: string): Promise<string> => {
      setStartIndex(-1);
      setEndIndex(-1);

      return new Promise((resolve) => {
        const newBooking: TBooking = {
          userId: profile?._id.toString() ?? '',
          room: room,
          startTime: timeSlotIndexToTimeISODate(startIndex) || new Date(),
          endTime: timeSlotIndexToTimeISODate(endIndex) || new Date(),
          hasConfirmed: false,
          email: email,
        };

        addRoomBooking.mutate(newBooking, {
          onSuccess: () => {
            resolve('Room has been successfully booked.');
          },
          onError: () => {
            resolve('Room booking was unsuccessful.');
          },
        });
      });
    },
    [
      profile,
      setStartIndex,
      setEndIndex,
      timeSlotIndexToTimeISODate,
      startIndex,
      endIndex,
      addRoomBooking,
    ],
  );

  const handlePickerStartDateShiftByDay = useCallback(
    (shift: number) => {
      const newDate = new Date(pickerStartDate);
      newDate.setUTCDate(newDate.getUTCDate() + shift);
      setPickerStartDate(newDate);
      setStartIndex(-1);
      setEndIndex(-1);
    },
    [pickerStartDate, setPickerStartDate, setStartIndex, setEndIndex],
  );

  const [areBookingsVisible, setAreBookingsVisible] = useState<boolean>(true);
  const [roomVisibilities, setRoomVisibilities] = useState<
    Record<string, boolean>
  >({
    H201: true,
    H203: true,
    H205: true,
    H204A: true,
    H204B: true,
  });

  const userIsAdmin = isAdmin;

  return (
    <TimePickerContext.Provider
      value={{
        pickerStartDate,
        setPickerStartDate,
        availableRoomIds,
        setAvailableRoomIds,
        handleAddBookRoom,
        handlePickerStartDateShiftByDay,
        userBookings,
        startIndex,
        setStartIndex,
        endIndex,
        setEndIndex,
        checkBookingNotInPast,
        checkBookingWithinTwoWeeks,
        areBookingsVisible,
        setAreBookingsVisible,
        roomVisibilities,
        setRoomVisibilities,
        isAdmin: userIsAdmin,
        timeslots,
        timeSlotIndexToTimeISODate,
        timeSlotIndexToTimeISO,
      }}
    >
      {children}
    </TimePickerContext.Provider>
  );
};

export const useTimePickerContext = () => {
  const context = useContext(TimePickerContext);
  if (!context) {
    throw new Error(
      'useTimePickerContext must be used within a TimePickerProvider',
    );
  }
  return context;
};
