import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import { AvailableRoomCard } from '@/components/bookings/AvailableRoomCard';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';

export default function AvailableRooms() {
  const { availableRoomIds, startTimeDate } = useTimePickerContext();

  const numAvailRooms = availableRoomIds.length;

  return (
    <div className='flex flex-col max-h-[570px] w-full gap-2'>
      <div className=' w-full p-2 bg-[#CACDD1] font-bold text-center rounded-xl items-center'>
        Available Rooms
      </div>
      <div className='h-full flex flex-col justify-center items-center w-full rounded-xl bg-[#CACDD1] py-4 gap-2'>
        {(startTimeDate && numAvailRooms == 0) || !startTimeDate ? (
          <div className='flex justify-center items-center text-center font-bold w-full h-[490px]'>
            {startTimeDate
              ? numAvailRooms == 0
                ? 'No Rooms Available'
                : null
              : 'Click/drag to select a time'}
          </div>
        ) : (
          <ScrollShadow
            hideScrollBar
            className='w-full gap-2 flex flex-col px-4 h-[490px] overflow-auto'
          >
            {/* Displays only the available rooms for the selected timeslot */}
            {HatchRoomsData.filter((room) =>
              availableRoomIds.includes(room.roomName),
            ).map((roomInfo) => (
              <AvailableRoomCard key={roomInfo.roomName} roomInfo={roomInfo} />
            ))}
          </ScrollShadow>
        )}
      </div>
    </div>
  );
}
