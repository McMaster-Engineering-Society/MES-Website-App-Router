'use client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { format } from 'date-fns';
import Image from 'next/image';
import React from 'react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import { THatchRoom } from '@/constant/hatch-bookings/rooms-data';

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  roomInfo: THatchRoom;
  handleConfirmBookingWithMessage: () => void;
};

// TODO: Fix date not outputting to modal
function RoomInfoModal({
  isOpen,
  onOpenChange,
  roomInfo,
  handleConfirmBookingWithMessage,
}: Props) {
  const resourceKeys = Object.keys(roomInfo.resources);
  const { startTimeDate, endTimeDate } = useTimePickerContext();
  return (
    <Modal
      size='md'
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      placement='center'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              Room: {roomInfo.roomName}
            </ModalHeader>
            <ModalBody>
              <p>Room capacity: {roomInfo.capacity}</p>
              <p>Outlets: {roomInfo.outlets}</p>
              <p>
                Resources:{' '}
                {resourceKeys.map((resource, index) => {
                  return (
                    resource + (index < resourceKeys.length - 1 ? ', ' : '') //so that ", " does not output for the last item in the list                 );
                  );
                })}
              </p>
              <Image
                src={roomInfo.img}
                width={200}
                height={200}
                alt='room pic'
              />
            </ModalBody>
            <ModalFooter className='justify-center'>
              <Button
                color='danger'
                variant='light'
                onPress={onClose}
                className='hidden md:block'
              >
                Close
              </Button>

              <Button
                color='warning'
                onPress={onClose}
                onClick={handleConfirmBookingWithMessage} //displays room confirmation sonner
                className='flex-1'
              >
                {startTimeDate &&
                  endTimeDate &&
                  'Book for ' +
                    format(startTimeDate, 'MMMM do h:mm') +
                    ' to ' +
                    format(endTimeDate, 'h:mm')}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default RoomInfoModal;
