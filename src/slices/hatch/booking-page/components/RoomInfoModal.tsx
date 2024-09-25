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
import { Check, Plug, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import { THatchRoom } from '@/constant/hatch-bookings/rooms-data';
import ResourcesIcon from '@/slices/hatch/booking-page/components/ResourcesIcon';
import { useTimePickerContext } from '@/slices/hatch/booking-page/context/TimePickerContext';
import { add30Minutes } from '@/slices/hatch/booking-page/utils';

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  roomInfo: THatchRoom;
  handleConfirmBookingWithMessage: () => void;
  CustomFooter?: React.FC<{ onClose: () => void }>;
  customDate?: Date;
};

function RoomInfoModal({
  isOpen,
  onOpenChange,
  roomInfo,
  handleConfirmBookingWithMessage,
  CustomFooter,
  customDate,
}: Props) {
  // filters out only available resources in the room
  // had to add key as a condition bc eslint was giving me warning :(
  const availableResources = Object.entries(roomInfo.resources)
    .filter(([key, value]) => key && value == true)
    .map(([key]) => key);
  const { startIndex, endIndex, timeSlotIndexToTimeISODate } =
    useTimePickerContext();
  const date = customDate || timeSlotIndexToTimeISODate(startIndex);

  return (
    <Modal
      size='sm'
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      placement='center'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col items-center justify-center p-0'>
              <Image
                src={roomInfo.img}
                width={440}
                height={200}
                alt='room pic'
              />
            </ModalHeader>
            <ModalBody>
              <p className='text-2xl font-bold mt-2 mb-3 mx-2'>
                Room {roomInfo.roomName}
              </p>
              <div className='flex justify-between mx-2'>
                <div className='w-fit h-auto border border-black text-3xl px-3 mr-4 flex flex-col text-center items-center justify-center rounded-xl'>
                  {startIndex && endIndex && format(date, 'MMM')}
                  <p className='text-5xl'>{format(date, 'd')}</p>
                  {format(date, 'yyyy')}
                </div>

                <div className='flex justify-between w-fit p-3 bg-gray-200 rounded-xl'>
                  <div className='flex flex-col gap-3'>
                    <div className='inline-flex items-center'>
                      <User className='mr-1 w-[20px]' />
                      <p className='text-lg'>
                        <span className='font-bold '>Room Capacity: </span>
                        {roomInfo.capacity}
                      </p>
                    </div>

                    <div className='inline-flex items-center'>
                      <Plug className='mr-1 w-[20px]' />
                      <p className='text-lg'>
                        <span className='font-bold'>Outlets: </span>
                        {roomInfo.outlets}
                      </p>
                    </div>

                    <div className='flex flex-col gap-3'>
                      {availableResources.map((resource, index) => (
                        <div
                          className='inline-flex text-lg items-center'
                          key={index}
                        >
                          <ResourcesIcon resource={resource} />
                          <p className='font-bold mr-1'>{resource}: </p>
                          <Check className='w-[20px]' />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter className={`${!CustomFooter && 'justify-center'}`}>
              {CustomFooter ? (
                <CustomFooter onClose={onClose} />
              ) : (
                <>
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
                    className='flex-1 bg-[#28a745]'
                  >
                    {startIndex &&
                      endIndex &&
                      'Book from ' +
                        format(
                          timeSlotIndexToTimeISODate(startIndex),
                          'h:mm a',
                        ) +
                        ' to ' +
                        format(
                          add30Minutes(timeSlotIndexToTimeISODate(endIndex)),
                          'h:mm a',
                        )}
                  </Button>
                </>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default RoomInfoModal;
