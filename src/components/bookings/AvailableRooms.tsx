import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import { AvailableRoomCard } from '@/components/bookings/AvailableRoomCard';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';

type ContentProps = {
  availableRoomIds: string[];
  handleAddBookRoom: (room: string) => void;
};

export default function AvailableRooms({
  availableRoomIds,
  handleAddBookRoom,
}: ContentProps) {
  return (
    <div className='flex justify-center w-[200px] h-[500px] my-8 rounded-lg bg-[#CACDD1]'>
      <ScrollShadow hideScrollBar>
        {/* Displays only the available rooms for the selected timeslot */}
        {HatchRoomsData.filter((room) =>
          availableRoomIds.includes(room.roomName),
        ).map((roomInfo) => (
          <AvailableRoomCard
            key={roomInfo.roomName}
            roomInfo={roomInfo}
            handleAddBookRoom={handleAddBookRoom}
          />
        ))}
      </ScrollShadow>
    </div>
  );
}
