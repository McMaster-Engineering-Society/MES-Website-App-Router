'use client';
import { Button, useDisclosure } from '@nextui-org/react';
import { InfoIcon, Plug, User } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

import { useSessionContext } from '@/slices/auth/context/SessionContext';
import ConfirmationPopover from '@/slices/hatch/booking-page/components/ConfirmationPopover';
import RoomInfoModal from '@/slices/hatch/booking-page/components/RoomInfoModal';
import { useTimePickerContext } from '@/slices/hatch/booking-page/context/TimePickerContext';
import { THatchRoom } from '@/slices/hatch/booking-page/types';

type AvailableRoomCardProps = {
  roomInfo: THatchRoom;
};

export const AvailableRoomCard = ({ roomInfo }: AvailableRoomCardProps) => {
  const { handleAddBookRoom } = useTimePickerContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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

      <div className='relative box-border hidden h-auto w-full flex-row items-center justify-between rounded-xl  border-2 bg-primary-800 p-4 text-center text-white md:flex'>
        <div>
          <button
            className='absolute left-2 top-2 rounded-full hover:bg-primary-700'
            onClick={onOpen}
          >
            <InfoIcon size={20} />
          </button>
        </div>

        <div className='flex ml-4 items-center justify-center font-bold text-xl'>
          {roomInfo.roomName}
        </div>

        <div className='gap-y-2 mx-4 flex flex-col text-left items-center justify-center'>
          <div className='flex items-center justify-center'>
            <User className='mr-1 w-[20px]' />

            <p>{roomInfo.capacity}</p>
          </div>

          <div className='flex items-center justify-center'>
            <Plug className='mr-1 w-[20px]' />
            <p>{roomInfo.outlets}</p>
          </div>
        </div>

        <ConfirmationPopover
          handleConfirmBookingWithMessage={handleConfirmBookingWithMessage}
        >
          <Button
            className='m-1 w-[90px] border bg-inherit text-white text-md border-white font-semibold hover:bg-white hover:text-primary-700'
            size='sm'
          >
            Book
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
