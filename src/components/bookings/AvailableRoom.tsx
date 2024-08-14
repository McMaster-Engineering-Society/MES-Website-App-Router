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
import { X } from 'lucide-react';
import { Check } from 'lucide-react';
import { User } from 'lucide-react';
import { Plug } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import ResourcesIcon from '@/components/bookings/ResourcesIcon';

import { HatchRoomType } from '@/constant/hatch-bookings/available-rooms';

export default function AvailableRoom(roomInfo: HatchRoomType) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className='bg-[#373A36] text-white box-border rounded-xl w-40 h-auto p-4 mt-4 border-4 text-center flex flex-col justify-between items-center'>
        <div className='relative inline-block w-full text-center justify-center items-center pb-1'>
          <div className='inline-block font-bold'>{roomInfo.roomNum}</div>
          <button
            className='absolute right-0 top-0.5 hover:bg-yellow-600 rounded-full'
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

          {/*Iterates through all available resources and displays its icon + checkmark next to it*/}
          {roomInfo.resources.map((resource, index) => (
            <div className='flex justify-left' key={index}>
              <ResourcesIcon resource={resource} />
              <Check />
            </div>
          ))}

          {/*Iterates through all unavailable resources and displays its icon + cross next to it*/}
          {roomInfo.missingResources.map((resource, index) => (
            <div className='flex justify-left' key={index}>
              <ResourcesIcon resource={resource} />
              <X />
            </div>
          ))}
        </div>

        <Button
          className='m-1 font-semibold bg-[#FFFFFF]'
          size='sm'
          color='success'
        >
          Book Now
        </Button>
      </div>

      {/*More room information pop up*/}
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
                  {roomInfo.resources.map((resource, index) => {
                    return (
                      resource +
                      (index < roomInfo.resources.length - 1 ? ', ' : '')
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
    </>
  );
}
