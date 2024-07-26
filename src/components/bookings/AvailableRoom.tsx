'use client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { InfoIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { HatchRoomType } from '@/constant/hatch-bookings/available-rooms';

import { CheckmarkIcon } from '../../../public/svg/checkmark';

export default function AvailableRoom(roomInfo: HatchRoomType) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className='bg-[#A6192E] text-white box-border rounded-xl w-40 p-4 my-4 border-4 text-center flex flex-col items-center'>
        <div className='relative inline-block w-full text-center justify-center items-center pb-1'>
          <div className='inline-block font-bold'>{roomInfo.roomNum}</div>
          <button
            className='absolute right-0 top-0.5 hover:bg-red-950 rounded-full'
            onClick={onOpen}
          >
            <InfoIcon size={20} />
          </button>
        </div>
        <div className='w-full text-left font-semibold'>
          <p>
            Capacity: {roomInfo.capacity} <br />{' '}
          </p>
          <p>
            Outlets: {roomInfo.outlets} <br />{' '}
          </p>

          {roomInfo.resources.map((resource, index) => (
            <div className='flex' key={index}>
              <CheckmarkIcon /> {resource}
            </div>
          ))}
        </div>
        <Button
          className='m-1 font-semibold bg-[#FFDEA7]'
          size='sm'
          color='success'
        >
          Book Now
        </Button>
      </div>

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
                {roomInfo.roomNum}
              </ModalHeader>
              <ModalBody>
                <p>Room capacity: {roomInfo.capacity}</p>
                <p>Outlet: {roomInfo.outlets}</p>
                <p>
                  Resources:{' '}
                  {roomInfo.resources.map((resource) => {
                    return resource;
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
                <Button
                  className='m-1 font-semibold bg-[#FFDEA7]'
                  color='success'
                >
                  Book Now
                </Button>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
