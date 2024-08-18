import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import { AvailableRoomCard } from '@/components/bookings/AvailableRoomCard';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';

export default function AvailableRooms() {
  const { availableRoomIds } = useTimePickerContext();

  return (
    <div className='flex justify-center w-[200px] h-[500px] my-8 rounded-lg bg-[#CACDD1]'>
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
