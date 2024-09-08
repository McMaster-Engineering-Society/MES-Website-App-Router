import { Button, CheckboxGroup, Select, SelectItem } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import { RoomButton } from '@/components/bookings/RoomButton';
import RoomToggleSwitch from '@/components/bookings/RoomToggleSwitch';

const AdminRoomSelector = () => {
  const { startTimeDate } = useTimePickerContext();

  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [selectedAction, setSelectedAction] = useState<Set<string>>(
    new Set([]),
  );

  useEffect(() => {
    setSelectedRooms([]);
    setSelectedAction(new Set([]));
  }, [startTimeDate]);

  const handleRoomAction = () => {
    toast(
      `Performed "${Array.from(selectedAction)[0]}" on room(s) ${selectedRooms.map((room) => ` ${room}`)}`,
    );
    setSelectedRooms([]);
    setSelectedAction(new Set([]));
  };

  const handleTimeslotAction = () => {
    toast(
      `Performed "${Array.from(selectedAction)[0]}" on bookings in timeslot _ on room(s) ${selectedRooms.map((room) => ` ${room}`)}`, // TODO: mention timeslot that was used
    );
    setSelectedRooms([]);
    setSelectedAction(new Set([]));
  };

  return (
    <div className='flex flex-col h-[600px] w-[350px] gap-2'>
      <div className='flex-none h-[70px] w-full p-2 bg-[#CACDD1] font-bold text-center rounded-xl items-center justify-center'>
        {!startTimeDate ? (
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
              <SelectItem key='cancel'>Cancel</SelectItem>
              <SelectItem key='email'>Email</SelectItem>
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
