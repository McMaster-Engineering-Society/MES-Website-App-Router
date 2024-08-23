'use client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

import { HatchRoomType } from '@/constant/hatch-bookings/rooms-data';
type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  roomInfo: HatchRoomType;
};

// TODO: Fix date not outputting to modal
function RoomInfoModal({ isOpen, onOpenChange, roomInfo }: Props) {
  const resourceKeys = Object.keys(roomInfo.resources);
  const { startTimeDate, endTimeDate } = useTimePickerContext();
  // const { startTimeDate } = useTimePickerContext();
  return (
    <Modal
      size='xs'
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              Room: {roomInfo.roomName}
            </ModalHeader>
            <ModalBody>
              <p>Date: {startTimeDate?.toDateString()}</p>
              <p>Room capacity: {roomInfo.capacity}</p>
              <p>Outlet: {roomInfo.outlets}</p>
              <p>
                Resources:{' '}
                {resourceKeys.map((resource, index) => {
                  return (
                    resource + (index < resourceKeys.length - 1 ? ', ' : '')
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
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                Close
              </Button>

              <Button
                color='warning'
                onPress={onClose}
                onClick={() => toast('Room has been successfully booked.')}
              >
                Book from{' '}
                {startTimeDate // Formats as string like `8:00AM` or `2:30PM`
                  ?.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                  })
                  .replace(
                    ' ',
                    '',
                  ) // Replaces space to display `8:00AM` instead of `8:00 AM`
                }{' '}
                -{' '}
                {endTimeDate
                  ? new Date(
                      new Date(endTimeDate).setMinutes(
                        new Date(endTimeDate).getMinutes() + 30,
                      ), // Because the endTimeDate shows the start time of the *last* time slot, add 30 minutes since each time slot is 30 minutes.
                    )
                      .toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                      })
                      .replace(' ', '') // Replaces space to display `8:00AM` instead of `8:00 AM`
                  : ''}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default RoomInfoModal;
