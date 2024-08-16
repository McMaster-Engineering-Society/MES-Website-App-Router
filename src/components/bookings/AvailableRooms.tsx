import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import AvailableRoom from '@/components/bookings/AvailableRoomCard';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';

type ContentProps = {
  availableRoomIds: string[];
};

export default function AvailableRooms({ availableRoomIds }: ContentProps) {
  return (
    <div className='flex justify-center w-[200px] h-[500px] my-8 rounded-lg bg-[#CACDD1]'>
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
