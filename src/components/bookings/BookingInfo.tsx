import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import { FileQuestion } from 'lucide-react';
import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

export default function BookingInfoModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button className='text-white rounded-lg p-1 w-18 h-18' onPress={onOpen}>
        <FileQuestion />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size='4xl'
        scrollBehavior='inside'
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className='grid grid-cols-2 gap-4 p-4'>
                  <p>
                    <h4> Using Hatch Rooms</h4> <br></br>
                    Any undergraduate McMaster Engineering Student or MES Club
                    or Team is welcome to book one of Hatch's second-floor study
                    rooms. Each room has a tables, outlets, a whiteboard and a
                    TV or projector that can be connected to wirelessly. If you
                    would like to connect to the displays using HDMI rather than
                    the VIA Kramer system, please visit the MES office (H202) or
                    The Hub (JHE-216A) to sign out an HDMI cable. Please do not
                    rearrange the wiring behind the TVs. <br></br>
                    <br></br>
                    <b>
                      These rooms are for undergraduate students in the Faculty
                      of Engineering only. For booking inquiries by other
                      groups, please contact the Hatch Coordinator.
                    </b>
                  </p>
                  <div className='flex items-center'>
                    <NextImage
                      src='/images/bookings/the-junction.jpg'
                      alt='The Junction'
                      width={400}
                      height={600}
                      className='w-full  bg-white '
                    />
                  </div>

                  <ButtonLink href='https://docs.google.com/document/d/1a3_2fyJh-FhZ1T1B80O4mJoMfFFnjmGbhkbhMMi3MAk/edit'>
                    {' '}
                    HOW TO USE HATCH TV'S
                  </ButtonLink>
                  <ButtonLink href='https://www.eng.mcmaster.ca/engineering-support-services-hub/#Keys-Access-Cards'>
                    {' '}
                    ENGINEERING SUPPORT SERVICES
                  </ButtonLink>
                  <ButtonLink href='https://docs.google.com/forms/d/e/1FAIpQLSfCu5qtc2_HmYWJfM7aYtO0jcDEoB6rAt9VXJx-Op0k_Gc-kQ/viewform'>
                    {' '}
                    REPORT ISSUES HERE
                  </ButtonLink>
                  <ButtonLink href='mailto:ghc@mcmaster.ca'>
                    {' '}
                    EMAIL THE HATCH COORDINATOR
                  </ButtonLink>
                </div>
                <div className='grid grid-cols-1 gap-4 p-4'>
                  <h4> Accessing Hatch Room</h4>

                  <p>
                    Students require an access card in order to access the Hatch
                    study rooms. A card can be obtained from The Hub, JHE-216A
                    with a $10 deposit, charged to your student account. The
                    card will be valid for as long as you are a registered
                    engineering undergraduate student, and a refund will be
                    applied to your student account when you return the card.
                  </p>
                  <p>
                    The Hub is open Monday to Friday from 9:00 AM - 12:00 PM and
                    from 1:00 PM - 4:00 PM. Please visit the Engineering Support
                    Services website for more details.
                  </p>
                </div>
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
}
