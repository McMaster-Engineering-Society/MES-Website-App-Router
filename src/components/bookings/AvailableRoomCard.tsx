'use client';
import { Button, useDisclosure } from '@nextui-org/react';
import { Check, InfoIcon, Plug, User, X } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

import { useSessionContext } from '@/slices/auth/context/SessionContext';
import ConfirmationPopover from '@/slices/hatch/booking-page/components/ConfirmationPopover';
import ResourcesIcon from '@/slices/hatch/booking-page/components/ResourcesIcon';
import RoomInfoModal from '@/slices/hatch/booking-page/components/RoomInfoModal';
import { useTimePickerContext } from '@/slices/hatch/booking-page/context/TimePickerContext';
import { THatchRoom } from '@/slices/hatch/booking-page/types';

type AvailableRoomCardProps = {
  roomInfo: THatchRoom;
};

export const AvailableRoomCard = ({ roomInfo }: AvailableRoomCardProps) => {
  const { handleAddBookRoom } = useTimePickerContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const resourceKeys = Object.keys(roomInfo.resources);
  const { profile } = useSessionContext();

  function handleConfirmBookingWithMessage() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    handleAddBookRoom(roomInfo.roomName, profile!.email!).then(
      (response: string) => {
        toast(response);
      },
    );
  }

  return (
    <>
      <Button
        className='relative inline-block rounded-xl bg-white md:hidden'
        onClick={onOpen}
      >
        {roomInfo.roomName}
      </Button>
      <div className='box-border hidden h-auto w-full flex-col items-center justify-between rounded-xl  border-2 bg-[#676767] p-4 text-center text-white md:flex'>
        <div className='relative inline-block w-full items-center justify-center text-center'>
          <div className='inline-block items-center font-bold'>
            {roomInfo.roomName}
          </div>
          <button
            className='absolute right-0 top-0.5 rounded-full hover:bg-primary-700'
            onClick={onOpen}
          >
            <InfoIcon size={20} />
          </button>
        </div>

        <div className='gap-x-auto my-2 mb-4 grid w-full grid-cols-2 gap-y-4 text-left'>
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
            className='m-1 w-[130px] bg-white font-semibold hover:bg-primary-700'
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
