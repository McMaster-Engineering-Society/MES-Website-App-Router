import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import { AvailableRoomCard } from '@/components/bookings/AvailableRoomCard';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';

export default function AvailableRooms() {
  const { availableRoomIds, startTimeDate } = useTimePickerContext();

  const numAvailRooms = availableRoomIds.length;

  return (
    <div className='flex flex-col'>
      <div className=' w-[200px] p-2 bg-[#CACDD1] font-bold text-center rounded-lg items-center'>
        Available Rooms
      </div>
      <div className='h-[565px] flex flex-col justify-center items-center w-[200px] rounded-lg bg-[#CACDD1] mt-2 p-1 '>
        <div className='flex justify-center items-center text-center font-bold'>
          {startTimeDate
            ? numAvailRooms == 0
              ? 'No Rooms Available'
              : null
            : 'Click/drag to select a time'}
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
    </div>
  );
}
