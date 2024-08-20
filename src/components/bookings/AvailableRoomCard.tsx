'use client';
import { Button, useDisclosure } from '@nextui-org/react';
import { Check, InfoIcon, Plug, User, X } from 'lucide-react';
import React from 'react';

import ConfirmationPopover from '@/components/bookings/ConfirmationPopover';
import ResourcesIcon from '@/components/bookings/ResourcesIcon';
import RoomInfoModal from '@/components/bookings/RoomInfoModal';

import { HatchRoomType } from '@/constant/hatch-bookings/rooms-data';

export default function AvailableRoom(roomInfo: HatchRoomType) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const resourceKeys = Object.keys(roomInfo.resources);

  return (
    <>
      <div className='bg-[#373A36] text-white box-border rounded-xl w-40 h-auto p-4 mt-4 border-4 text-center flex flex-col justify-between items-center'>
        <div className='relative inline-block w-full text-center justify-center items-center pb-1'>
          <div className='inline-block font-bold'>{roomInfo.roomNum}</div>
          <button
            className='absolute right-0 top-0.5 hover:bg-primary-700 rounded-full'
            onClick={onOpen}
          >
            <InfoIcon size={20} />
          </button>
        </div>

        <div className='w-full text-left grid grid-cols-2 gap-x-6 gap-y-4 my-2 mb-4'>
          <div className='flex justify-left'>
            <User className='mr-1' />
            <p>{roomInfo.capacity}</p>
          </div>
          <div className='flex justify-left'>
            <Plug className='mr-1' />
            <p>{roomInfo.outlets}</p>
          </div>

          {resourceKeys.map((resource, index) => (
            <div className='flex justify-left' key={index}>
              <ResourcesIcon resource={resource} />
              {/* outputs checkmark or X depending on if the resource is available for the room or not */}
              {roomInfo.resources[resource] ? <Check /> : <X />}
            </div>
          ))}
        </div>
        <ConfirmationPopover>
          <Button
            className='m-1 bg-white font-semibold w-[130px] hover:bg-primary-700'
            size='sm'
          >
            Book Now
          </Button>
        </ConfirmationPopover>
      </div>

      {/*More room information pop up*/}
      <RoomInfoModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        roomInfo={roomInfo}
      />
    </>
  );
}
