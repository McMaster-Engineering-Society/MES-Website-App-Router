'use client';
import { Button, useDisclosure } from '@nextui-org/react';
import { Check, InfoIcon, Plug, User, X } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import ConfirmationPopover from '@/components/bookings/ConfirmationPopover';
import ResourcesIcon from '@/components/bookings/ResourcesIcon';
import RoomInfoModal from '@/components/bookings/RoomInfoModal';

import { HatchRoomType } from '@/constant/hatch-bookings/rooms-data';

type AvailableRoomType = {
  roomInfo: HatchRoomType;
};

export const AvailableRoomCard = ({ roomInfo }: AvailableRoomType) => {
  const { handleAddBookRoom } = useTimePickerContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const resourceKeys = Object.keys(roomInfo.resources);

  function handleConfirmBookingWithMessage() {
    handleAddBookRoom(roomInfo.roomName).then((response: string) => {
      toast(response);
    });
  }

  return (
    <>
      <div className='bg-[#373A36] text-white box-border rounded-xl w-full h-auto p-4 border-4 text-center flex flex-col justify-between items-center'>
        <div className='relative inline-block w-full text-center justify-center items-center'>
          <div className='inline-block font-bold items-center'>
            {roomInfo.roomName}
          </div>
          <button
            className='absolute right-0 top-0.5 hover:bg-primary-700 rounded-full'
            onClick={onOpen}
          >
            <InfoIcon size={20} />
          </button>
        </div>

        <div className='w-full text-left grid grid-cols-2 gap-x-auto gap-y-4 my-2 mb-4'>
          <div className='flex items-center justify-center'>
            <User className='mr-1' />
            {/* width set to 25px for row alignment */}
            <p className='w-[25px]'>{roomInfo.capacity}</p>
          </div>

          <div className='flex items-center justify-center'>
            <Plug className='mr-1' />
            {/* width set to 25px for row alignment */}
            <p className='w-[25px]'>{roomInfo.outlets}</p>
          </div>

          {resourceKeys.map((resource, index) => (
            <div className='flex items-center justify-center' key={index}>
              <ResourcesIcon resource={resource} />
              {roomInfo.resources[resource] ? (
                <Check className='w-[25px]' />
              ) : (
                <X className='w-[25px]' />
              )}
            </div>
          ))}
        </div>
        <ConfirmationPopover
          handleConfirmBookingWithMessage={handleConfirmBookingWithMessage}
        >
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
        handleConfirmBookingWithMessage={handleConfirmBookingWithMessage}
      />
    </>
  );
};
