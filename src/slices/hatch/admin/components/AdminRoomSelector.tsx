import { Button, CheckboxGroup, Select, SelectItem } from '@nextui-org/react';
import { startOfDay } from 'date-fns';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useSessionContext } from '@/slices/auth/context/SessionContext';
import RoomToggleSwitch from '@/slices/hatch/admin/components/RoomToggleSwitch';
import {
  useBatchAddRoomBookingHook,
  useBatchDeleteRoomBookingHook,
} from '@/slices/hatch/admin/hooks/bookingHooks';
import { fetchAllBookings } from '@/slices/hatch/booking-page/apiCalls/bookingApiCalls';
import { RoomButton } from '@/slices/hatch/booking-page/components/RoomButton';
import { useTimePickerContext } from '@/slices/hatch/booking-page/context/TimePickerContext';
import { TBooking } from '@/slices/hatch/booking-page/types';

const AdminRoomSelector = () => {
  const { startIndex, endIndex, timeSlotIndexToTimeISODate } =
    useTimePickerContext();
  const { profile } = useSessionContext();
  const batchAddRoomBooking = useBatchAddRoomBookingHook();
  const batchDeleteRoomBooking = useBatchDeleteRoomBookingHook();
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [selectedAction, setSelectedAction] = useState<Set<string>>(
    new Set([]),
  );

  useEffect(() => {
    setSelectedRooms([]);
    setSelectedAction(new Set([]));
  }, [startIndex]);

  async function handleDeleteAllBookingsInSelectedRange() {
    try {
      const startTime = timeSlotIndexToTimeISODate(startIndex);
      const endTime = timeSlotIndexToTimeISODate(endIndex);
      const data = await fetchAllBookings(startTime, endTime);
      const idsToDelete = data.flatMap((booking) => {
        if (selectedRooms.includes(booking.room)) {
          return booking._id ? [booking._id.toString()] : [];
        } else {
          return [];
        }
      });
      await batchDeleteRoomBooking.mutateAsync(idsToDelete);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching data:', error);
    }
  }
  async function handleBatchBooking(rooms: string[]) {
    const bookingsToAdd: TBooking[] = [];

    const startTime = timeSlotIndexToTimeISODate(startIndex);
    const endTime = timeSlotIndexToTimeISODate(endIndex);
    const userId = profile?._id.toString();
    const email = profile?.email;
    if (userId && email) {
      for (const room of rooms) {
        const newBooking: TBooking = {
          userId: userId,
          room: room,
          startTime: startTime,
          endTime: endTime,
          hasConfirmed: false,
          email: email,
          createdDate: startOfDay(new Date()),
        };
        bookingsToAdd.push(newBooking);
      }

      await batchAddRoomBooking.mutateAsync(bookingsToAdd);
    }
  }
  const handleRoomAction = () => {
    const action: string = Array.from(selectedAction)[0];
    toast(
      `Performed "${action}" on room(ssdf) ${selectedRooms.map((room) => ` ${room}`)}`,
    );

    setSelectedRooms([]);
    setSelectedAction(new Set([]));
  };

  const handleTimeslotAction = () => {
    const action: string = Array.from(selectedAction)[0];
    toast(
      `Performed "${action}" on bookings in timeslot _ on room(s) ${selectedRooms.map((room) => ` ${room}`)}`, // TODO: mention timeslot that was used
    );

    switch (action) {
      case 'cancel all in selected range':
        handleDeleteAllBookingsInSelectedRange();
        break;
      case 'book':
        handleBatchBooking(selectedRooms);
        break;
    }

    setSelectedRooms([]);
    setSelectedAction(new Set([]));
  };

  return (
    <div className='flex flex-col h-[600px] w-[350px] gap-2'>
      <div className='flex-none h-[70px] w-full p-2 bg-[#CACDD1] font-bold text-center rounded-xl items-center justify-center'>
        {!startIndex ? (
          selectedRooms.length ? (
            <div className='flex gap-1'>
              <Select
                size='sm'
                selectedKeys={selectedAction}
                onSelectionChange={(keys) =>
                  setSelectedAction(
                    new Set(Array.from(keys).map((key) => String(key))),
                  )
                }
                label='Room actions'
                labelPlacement='outside'
                className='flex-1'
              >
                <SelectItem key='enable'>Enable</SelectItem>
                <SelectItem key='disable'>Disable</SelectItem>
              </Select>
              <div className='flex-1 px-0 flex flex-col justify-end'>
                <Button
                  color='secondary'
                  size='sm'
                  isDisabled={selectedAction.size == 0}
                  onClick={handleRoomAction}
                >
                  Confirm
                </Button>
              </div>
            </div>
          ) : (
            <div className='flex w-full h-full justify-center items-center'>
              <p>Click a room to view options</p>
            </div>
          )
        ) : (
          <div className='flex gap-1'>
            <Select
              size='sm'
              selectedKeys={selectedAction}
              onSelectionChange={(keys) =>
                setSelectedAction(
                  new Set(Array.from(keys).map((key) => String(key))),
                )
              }
              label='Timeslot actions'
              labelPlacement='outside'
              className='flex-1'
            >
              <SelectItem key='cancel all in selected range'>
                Cancel all in selected range
              </SelectItem>
              <SelectItem key='email'>Email</SelectItem>
              <SelectItem key='book'>Book</SelectItem>
            </Select>
            <div className='flex-1 px-0 flex flex-col justify-end'>
              <Button
                color='secondary'
                size='sm'
                isDisabled={selectedAction.size == 0}
                onClick={handleTimeslotAction}
              >
                Confirm
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className='flex-1 flex flex-col justify-center items-center w-full rounded-xl bg-[#CACDD1] py-4 gap-2'>
        <div className='flex w-full'>
          <div className='flex flex-col h-[490px] justify-center items-center gap-[75px]'>
            <RoomToggleSwitch room='H201' />
            <RoomToggleSwitch room='H203' />
            <RoomToggleSwitch room='H204A' />
            <RoomToggleSwitch room='H204B' />
            <RoomToggleSwitch room='H205' />
          </div>
          <CheckboxGroup
            value={selectedRooms}
            onChange={setSelectedRooms}
            classNames={{
              base: 'w-full h-full flex-1',
              wrapper:
                ' flex flex-col gap-2 justify-center items-center text-center font-bold w-full h-[490px] pr-2',
            }}
          >
            <RoomButton value='H201'>H201</RoomButton>
            <RoomButton value='H203'>H203</RoomButton>
            <RoomButton value='H204A'>H204A</RoomButton>
            <RoomButton value='H204B'>H204B</RoomButton>
            <RoomButton value='H205'>H205</RoomButton>
          </CheckboxGroup>
        </div>
      </div>
    </div>
  );
};

export default AdminRoomSelector;
