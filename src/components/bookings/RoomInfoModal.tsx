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

import { THatchRoom } from '@/constant/hatch-bookings/rooms-data';

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  roomInfo: THatchRoom;
};

function RoomInfoModal({ isOpen, onOpenChange, roomInfo }: Props) {
  const resourceKeys = Object.keys(roomInfo.resources);

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
              <Button color='success' onPress={onClose}>
                Book Now
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default RoomInfoModal;
