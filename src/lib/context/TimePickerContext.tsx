import { createContext, ReactNode, useContext, useState } from 'react';

import { useAddRoomBookingHook } from '@/lib/hooks/bookingHooks';
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
  handleAddBookRoom: (room: string) => void;
  handlePickerStartDateShiftByDay: (shift: number) => void;
};

type Props = {
  children: ReactNode;
};

export const TimePickerContext = createContext<TTimePickerContext | undefined>(
  undefined,
);

const firstTimeSlotOfTheDayUTC = 11;

export const TimePickerProvider = ({ children }: Props) => {
  const [pickerStartDate, setPickerStartDate] = useState<Date>(
    new Date(new Date().setUTCHours(firstTimeSlotOfTheDayUTC, 0, 0, 0)),
  );
  const [availableRoomIds, setAvailableRoomIds] = useState<string[]>([]);
  const [startTimeDate, setStartTimeDate] = useState<Date | undefined>(
    undefined,
  );
  const [endTimeDate, setEndTimeDate] = useState<Date | undefined>(undefined);

  const addRoomBooking = useAddRoomBookingHook();

  function handleAddBookRoom(room: string) {
    const newBooking: TBooking = {
      userId: 'placeholder ID',
      room: room,
      startTime: startTimeDate || new Date(),
      endTime: endTimeDate || new Date(),
      hasConfirmed: false,
      email: 'placeholder email',
    };

    addRoomBooking.mutate(newBooking);
  }

  function handlePickerStartDateShiftByDay(shift: number) {
    const newDate = new Date(pickerStartDate);
    newDate.setUTCDate(newDate.getUTCDate() + shift);
    setPickerStartDate(newDate);
  }

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
