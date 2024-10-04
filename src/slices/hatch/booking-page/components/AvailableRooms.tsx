import { ScrollShadow } from '@nextui-org/react';
import React from 'react';

import { cn } from '@/lib/utils';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';
import { AvailableRoomCard } from '@/slices/hatch/booking-page/components/AvailableRoomCard';
import { useTimePickerContext } from '@/slices/hatch/booking-page/context/TimePickerContext';

export default function AvailableRooms({ className }: { className?: string }) {
  const {
    availableRoomIds,
    checkBookingNotInPast,
    checkBookingWithinTwoWeeks,
    startIndex,
  } = useTimePickerContext();

  const numAvailRooms = availableRoomIds.length;

  return (
    <div className={cn(className, 'flex flex-col gap-2 md:w-[340px]')}>
      <div className='border-2 border-[#A6192E] w-full items-center rounded-xl bg-white p-2 text-center font-bold md:h-[42px]'>
        Available Rooms
        <div className='font-normal md:hidden'>Click to Book</div>
      </div>
      <div className='h-0 w-full flex-1 rounded-xl bg-white  border-[#A6192E] border-2 py-4'>
        {!checkBookingNotInPast() ? (
          <div className='flex h-full w-full items-center justify-center p-4 text-center font-bold'>
            Booking cannot be made in the past
          </div>
        ) : !checkBookingWithinTwoWeeks() ? (
          <div className='flex h-full w-full items-center justify-center p-4 text-center font-bold'>
            Booking can only be made within two weeks
          </div>
        ) : !startIndex || (startIndex && numAvailRooms === 0) ? (
          <div className='flex h-full w-full items-center justify-center p-4 text-center font-bold'>
            {startIndex
              ? numAvailRooms === 0
                ? 'No Rooms Available'
                : null
              : 'Click/drag to select a time'}
          </div>
        ) : (
          <div className='h-full'>
            <ScrollShadow
              hideScrollBar
              className='flex h-full w-full flex-col gap-2 overflow-auto px-4'
            >
              {/* Displays only the available rooms for the selected timeslot */}
              {HatchRoomsData.filter((room) =>
                availableRoomIds.includes(room.roomName),
              ).map((roomInfo) => (
                <AvailableRoomCard
                  key={roomInfo.roomName}
                  roomInfo={roomInfo}
                />
              ))}
            </ScrollShadow>
          </div>
        )}
      </div>
    </div>
  );
}
