import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import AvailableRoom from '@/components/bookings/AvailableRoomCard';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';

type ContentProps = {
  availableRoomIds: string[];
};

export default function AvailableRooms({ availableRoomIds }: ContentProps) {
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
        {HatchRoomsData.filter((room) => {
          return availableRoomIds.includes(room.roomNum);
        }).map((roomInfo) => (
          <AvailableRoom key={roomInfo.roomNum} {...roomInfo} />
        ))}
      </ScrollShadow>
    </div>
  );
}
