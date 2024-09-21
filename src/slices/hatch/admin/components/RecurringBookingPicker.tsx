import {
  Button,
  DatePicker,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  TimeInput,
  useDisclosure,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';

const RecurringBookingPicker = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedKeys, setSelectedKeys] = useState(new Set(['every week']));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys],
  );

  return (
    <div>
      <Button onPress={onOpen}>Create Recurring Booking</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Create Recurring Booking
              </ModalHeader>
              <ModalBody>
                <DatePicker label='Date of first booking' className='w-full' />
                <div className='w-full flex flex-row gap-2'>
                  <TimeInput label='Start Time' />
                  <TimeInput label='End Time' />
                </div>
                <Input
                  type='number'
                  label='How many times should the booking occur?'
                  classNames={{
                    input: ['!border-none focus:!ring-0'],
                  }}
                />

                <Divider className='my-4' />

                <div className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <p className='pr-2'>Repeat booking</p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant='bordered'>{selectedValue}</Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label='Single selection example'
                        variant='flat'
                        disallowEmptySelection
                        selectionMode='single'
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                      >
                        <DropdownItem key='every_week'>every week</DropdownItem>
                        <DropdownItem key='every_other_week'>
                          every other week
                        </DropdownItem>
                        <DropdownItem key='every_third_week'>
                          every third week
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <Button color='secondary' onPress={onClose}>
                    Confirm
                  </Button>
                </div>

                <Divider className='my-4' />

                <div className='flex justify-between items-center pb-4'>
                  <p>Repeat booking every month</p>
                  <Button color='secondary' onPress={onClose}>
                    Confirm
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RecurringBookingPicker;
