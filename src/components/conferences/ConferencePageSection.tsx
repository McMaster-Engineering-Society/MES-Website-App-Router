'use client';

import {
  Button,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGlobe, FaInstagram } from 'react-icons/fa6';

import IconButton from '@/components/buttons/IconButton';

import { ConferencePageSectionType } from '@/constant/conferences';

const socialMediaIcon: Record<string, IconType> = {
  Instagram: FaInstagram,
  Website: FaGlobe,
};

export const ConferencePageSection: React.FC<ConferencePageSectionType> = ({
  title,
  location,
  dates,
  delegates,
  links,
  body,
  image,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className='relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden max-w-xs mx-auto m-4 pb-10'>
        <div>
          <Image
            src={image}
            width={400}
            height={200}
            className='rounded-lg'
            alt='Picture of conference'
          />
        </div>

        <div className='p-4 flex flex-col flex-grow'>
          <div className='flex justify-between items-center'>
            <span
              className='text-xl font-bold cursor-pointer hover:underline'
              onClick={onOpen}
            >
              {title}
            </span>
          </div>

          <Divider className='my-2' />

          <span>
            <b>Location:</b> {location}
          </span>
          <span>
            <b>Dates:</b> {dates}
          </span>
          <span>
            <b>Delegates:</b> {delegates}
          </span>

          <div className='absolute bottom-2 left-4 flex space-x-2'>
            {links ? (
              Object.entries(links).map(([key, value]) => (
                <Link key={key} href={value} target='_blank'>
                  <Tooltip showArrow content={key} placement='bottom'>
                    <IconButton
                      variant='ghost'
                      className='rounded-full'
                      icon={socialMediaIcon[key]}
                      rel='noreferrer'
                      classNames={{
                        icon: 'text-gray-700',
                      }}
                    />
                  </Tooltip>
                </Link>
              ))
            ) : (
              <span className='select-none text-sm italic text-gray-600'>
                No social media
              </span>
            )}
          </div>
        </div>
      </div>

      <Modal
        backdrop='opaque'
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>
                <span>{body}</span>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
