'use client';

import { addWeeks } from 'date-fns';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

import { useSessionContext } from '@/lib/context/SessionContext';
import {
  useAddRoomBookingHook,
  useFetchUserBookingsHook,
} from '@/lib/hooks/bookingHooks';
import { TBooking } from '@/lib/types';

type TTimePickerContext = {
  pickerStartDate: Date;
  setPickerStartDate: (date: Date) => void;
  availableRoomIds: string[];
  setAvailableRoomIds: React.Dispatch<React.SetStateAction<string[]>>;
  startTimeDate: Date | undefined;
  setStartTimeDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  endTimeDate: Date | undefined;
  setEndTimeDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
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
  const [pickerStartDate, setPickerStartDate] = useState<Date>(() => {
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
  });

  const pickerEndDate = useMemo(
    () => new Date(pickerStartDate),
    [pickerStartDate],
  );

  const [availableRoomIds, setAvailableRoomIds] = useState<string[]>([]);
  const [startIndex, setStartIndex] = useState<number>(-1);
  const [endIndex, setEndIndex] = useState<number>(-1);
  const [startTimeDate, setStartTimeDate] = useState<Date | undefined>(
    undefined,
  );
  const [endTimeDate, setEndTimeDate] = useState<Date | undefined>(undefined);
  const { profile, isAdmin } = useSessionContext();
  const addRoomBooking = useAddRoomBookingHook();

  const { data: userBookings } = useFetchUserBookingsHook(profile?.email ?? '');

  function checkBookingWithinTwoWeeks() {
    const twoWeeksFromNow = addWeeks(new Date(), 2);
    if (
      (pickerStartDate && pickerStartDate > twoWeeksFromNow) ||
      (endTimeDate && endTimeDate > twoWeeksFromNow)
    ) {
      return false;
    }
    return true;
  }

  function checkBookingNotInPast() {
    pickerEndDate.setDate(pickerStartDate.getDate() + 6);
    if (
      (startTimeDate && startTimeDate < new Date()) ||
      (pickerEndDate && pickerEndDate < new Date())
    ) {
      return false;
    }
    return true;
  }

  function handleAddBookRoom(room: string, email: string): Promise<string> {
    setStartIndex(-1);
    setEndIndex(-1);
    setStartTimeDate(undefined);
    setEndTimeDate(undefined);

    return new Promise((resolve) => {
      const newBooking: TBooking = {
        userId: profile?._id.toString() ?? '',
        room: room,
        startTime: startTimeDate || new Date(),
        endTime: endTimeDate || new Date(),
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
  }

  function handlePickerStartDateShiftByDay(shift: number) {
    const newDate = new Date(pickerStartDate);
    newDate.setUTCDate(newDate.getUTCDate() + shift);
    setPickerStartDate(newDate);
    setStartIndex(-1);
    setEndIndex(-1);
    setStartTimeDate(undefined);
    setEndTimeDate(undefined);
  }

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
        startTimeDate,
        setStartTimeDate,
        endTimeDate,
        setEndTimeDate,
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
