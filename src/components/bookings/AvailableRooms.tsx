import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import { AvailableRoomCard } from '@/components/bookings/AvailableRoomCard';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';

export default function AvailableRooms() {
  const { availableRoomIds } = useTimePickerContext();
  const selected = true;
  const numAvailRooms = 2;

  return (
    <div className='flex flex-col justify-center items-center w-[200px] h-[500px] my-4 rounded-lg bg-[#CACDD1]'>
      <div className='flex justify-center items-center text-center font-bold mt-4'>
        {numAvailRooms > 0
          ? selected
            ? 'Available Rooms'
            : 'Select time to view available rooms'
          : 'No Rooms Available'}
      </div>
      <ScrollShadow hideScrollBar>
        {/* Displays only the available rooms for the selected timeslot */}
        {HatchRoomsData.filter((room) =>
          availableRoomIds.includes(room.roomName),
        ).map((roomInfo) => (
          <AvailableRoomCard key={roomInfo.roomName} roomInfo={roomInfo} />
        ))}
      </ScrollShadow>
    </div>
  );
}
