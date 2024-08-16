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

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  roomInfo: {
    roomNum: string;
    capacity: number;
    outlets: number;
    resources: { [resource: string]: boolean };
    img: string;
  };
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
              Room: {roomInfo.roomNum}
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
