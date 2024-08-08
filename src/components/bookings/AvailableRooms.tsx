import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import AvailableRoom from '@/components/bookings/AvailableRoom';

import { AvailableRoomsData } from '@/constant/hatch-bookings/available-rooms';

type ContentProps = {
  availableRoomIds: string[];
};

export default function AvailableRooms({ availableRoomIds }: ContentProps) {
  return (
    <ScrollShadow
      hideScrollBar
      className='flex justify-center w-[200px] h-[450px] mt-8 rounded-lg bg-[#CACDD1]'
    >
      <div>
        {AvailableRoomsData.filter((room) => {
          return availableRoomIds.includes(room.roomNum);
        }).map((roomInfo) => (
          <AvailableRoom key={roomInfo.roomNum} {...roomInfo} />
        ))}
      </div>
    </ScrollShadow>
  );
}
