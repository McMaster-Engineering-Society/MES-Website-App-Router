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
import { TimePickerProvider } from '@/lib/context/TimePickerContext';

import { HatchRoomType } from '@/constant/hatch-bookings/rooms-data';
type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  roomInfo: HatchRoomType;
};

// TODO: Integrate start and end time (from TimePickerContext) for selected time slot in the Modal room booking button
// TODO: Fix date not outputting to modal
function RoomInfoModal({ isOpen, onOpenChange, roomInfo }: Props) {
  const resourceKeys = Object.keys(roomInfo.resources);
  // const {startTimeDate, endTimeDate } = useTimePickerContext();
  const { startTimeDate } = useTimePickerContext();
  return (
    <TimePickerProvider>
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

<<<<<<< HEAD
                {/* TODO: INTEGRATE TIME PICKER CONTEXT FOR TIMESLOT START AND END TIME */}
                <Button
                  color='warning'
                  onPress={onClose}
                  onClick={() => toast('Room has been successfully booked.')}
=======
                {/* TODO: update time with selected booking timeslot */}
                <Button
                  color='warning'
                  onPress={onClose}
                  onClick={() => toast('Room has been successfully booked.')}
                >
                  {/* Book room from {startTimeDate?.toDateString()} to {endTimeDate?.toDateString()} */}
                  Book from 6:00 - 8:30 pm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </TimePickerProvider>
  );
}

export default RoomInfoModal;
