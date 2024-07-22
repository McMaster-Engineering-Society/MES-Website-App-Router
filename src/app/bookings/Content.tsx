import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import AvailableRoom from '@/components/bookings/AvailableRoom';

import { AvailableRooms } from '@/constant/hatch-bookings/available-rooms';

type ContentProps = {
  availableRoomIds: string[];
};

export default function Content({ availableRoomIds }: ContentProps) {
  return (
    <ScrollShadow
      hideScrollBar
      className='flex justify-end w-[200px] h-[400px]'
    >
      <div>
        {AvailableRooms.filter((room) => {
          return availableRoomIds.includes(room.roomNum);
        }).map((roomInfo) => (
          <AvailableRoom key={roomInfo.roomNum} {...roomInfo} />
        ))}
      </div>
    </ScrollShadow>
  );
}
