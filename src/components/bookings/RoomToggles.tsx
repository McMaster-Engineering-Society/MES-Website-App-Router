import { Switch } from '@nextui-org/react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import RoomToggleSwitch from '@/components/bookings/RoomToggleSwitch';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';

export default function RoomToggles() {
  const {
    areBookingsVisible,
    setAreBookingsVisible,
    roomVisibilities,
    setRoomVisibilities,
    isAdmin,
  } = useTimePickerContext();

  return (
    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-center lg:pl-8'>
      <Switch
        size='lg'
        color='success'
        className='h-16'
        onChange={() => {
          setAreBookingsVisible(!areBookingsVisible);
        }}
        isSelected={areBookingsVisible}
      >
        Toggle Bookings
      </Switch>
      <div className='flex flex-col justify-center gap-2 lg:ml-8 lg:flex-row lg:items-center lg:gap-8'>
        {HatchRoomsData.map((room) => (
          <RoomToggleSwitch
            key={room.roomName}
            roomVisibilities={roomVisibilities}
            setRoomVisibilities={setRoomVisibilities}
            isAdmin={isAdmin}
            room={room.roomName}
          />
        ))}
      </div>
    </div>
  );
}
