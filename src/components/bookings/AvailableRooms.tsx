import React from 'react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import { AvailableRoomCard } from '@/components/bookings/AvailableRoomCard';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';

export default function AvailableRooms() {
  const { availableRoomIds } = useTimePickerContext();

  return (
    <div className='flex flex-col w-full h-[570px] rounded-lg bg-[#CACDD1] p-5 gap-4 overflow-auto items-center scrollbar-hide'>
      {/* <ScrollShadow hideScrollBar> */}
      {/* Displays only the available rooms for the selected timeslot */}
      {HatchRoomsData.filter((room) =>
        availableRoomIds.includes(room.roomName),
      ).map((roomInfo) => (
        <AvailableRoomCard key={roomInfo.roomName} roomInfo={roomInfo} />
      ))}
      {/* </ScrollShadow> */}
    </div>
  );
}
