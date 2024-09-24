import { getLocalTimeZone, parseDate, Time } from '@internationalized/date';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  DateRangePicker,
  DateValue,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  RangeValue,
  TimeInput,
  useDisclosure,
} from '@nextui-org/react';
import { useMemo, useState } from 'react';
import { Key } from 'react-stately';

const RecurringBookingPicker = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedWeekdays, setSelectedWeekdays] = useState<Set<Key>>(
    new Set([]),
  );
  const [dateRange, setDateRange] = useState<RangeValue<DateValue>>({
    start: parseDate('2024-10-01'),
    end: parseDate('2024-10-08'),
  });
  const [startTime, setStartTime] = useState<Time>(new Time(7, 0));
  const [endTime, setEndTime] = useState<Time>(new Time(8, 0));
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);

  const selectedValue = useMemo(() => {
    return selectedWeekdays.size > 2
      ? `${Array.from(selectedWeekdays)[0]}, ${Array.from(selectedWeekdays)[1]}, ...`
      : Array.from(selectedWeekdays).join(', ').replaceAll('_', ' ');
  }, [selectedWeekdays]);

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
                <DateRangePicker
                  label='Date range (controlled)'
                  value={dateRange}
                  onChange={setDateRange}
                  color='secondary'
                />
                <p className='text-default-500 text-sm'>
                  Selected dates:{' '}
                  {
                    dateRange.start
                      .toDate(getLocalTimeZone())
                      .toISOString()
                      .split('T')[0]
                  }
                  ,{' '}
                  {
                    dateRange.end
                      .toDate(getLocalTimeZone())
                      .toISOString()
                      .split('T')[0]
                  }
                </p>
                <div className='w-full flex flex-row gap-2'>
                  <TimeInput
                    label='Start time'
                    value={startTime}
                    onChange={setStartTime}
                  />
                  <TimeInput
                    label='End time'
                    value={endTime}
                    onChange={setEndTime}
                  />
                </div>
                <p className='text-default-500 text-sm'>
                  Start time: {startTime.toString()}
                </p>
                <p className='text-default-500 text-sm'>
                  End time: {endTime.toString()}
                </p>
                <Divider className='my-4' />
                <CheckboxGroup
                  label='Rooms'
                  color='secondary'
                  value={selectedRooms}
                  onValueChange={setSelectedRooms}
                  classNames={{
                    wrapper: 'flex justify-between items-center flex-row pt-4',
                  }}
                >
                  <Checkbox
                    color='secondary'
                    classNames={{
                      base: ['flex flex-col justify-center items-center'],
                      wrapper: ['m-0'],
                    }}
                    value='H201'
                  >
                    H201
                  </Checkbox>
                  <Checkbox
                    color='secondary'
                    classNames={{
                      base: ['flex flex-col justify-center items-center'],
                      wrapper: ['m-0'],
                    }}
                    value='H203'
                  >
                    H203
                  </Checkbox>
                  <Checkbox
                    color='secondary'
                    classNames={{
                      base: ['flex flex-col justify-center items-center'],
                      wrapper: ['m-0'],
                    }}
                    value='H204A'
                  >
                    H204A
                  </Checkbox>
                  <Checkbox
                    color='secondary'
                    classNames={{
                      base: ['flex flex-col justify-center items-center '],
                      wrapper: ['m-0'],
                    }}
                    value='H204B'
                  >
                    H204B
                  </Checkbox>
                  <Checkbox
                    color='secondary'
                    classNames={{
                      base: ['flex flex-col justify-center items-center'],
                      wrapper: ['m-0'],
                    }}
                    value='H205'
                  >
                    H205
                  </Checkbox>
                </CheckboxGroup>
                <p className='text-default-500 text-sm'>
                  {selectedRooms.map((room) => `${room}, `)}
                </p>
                <Divider className='my-4' />

                <div className='flex justify-between items-center pb-4'>
                  <div className='flex items-center'>
                    <p className='pr-2'>Repeat booking every</p>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant='bordered'>{selectedValue}</Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label='Single selection example'
                        variant='flat'
                        closeOnSelect={false}
                        disallowEmptySelection
                        selectionMode='multiple'
                        selectedKeys={selectedWeekdays}
                        onSelectionChange={(key) => {
                          setSelectedWeekdays(new Set(key));
                        }}
                      >
                        <DropdownItem key='Monday'>Monday</DropdownItem>
                        <DropdownItem key='Tuesday'>Tuesday</DropdownItem>
                        <DropdownItem key='Wednesday'>Wednesday</DropdownItem>
                        <DropdownItem key='Thursday'>Thursday</DropdownItem>
                        <DropdownItem key='Friday'>Friday</DropdownItem>
                        <DropdownItem key='Saturday'>Saturday</DropdownItem>
                        <DropdownItem key='Sunday'>Sunday</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
                <p className='text-default-500 text-sm'>
                  {Array.from(selectedWeekdays).map(
                    (weekday) => `${weekday}, `,
                  )}
                </p>
                <ModalFooter>
                  <div className='w-full flex justify-center items-center'>
                    <Button color='secondary' onPress={onClose}>
                      Confirm
                    </Button>
                  </div>
                </ModalFooter>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RecurringBookingPicker;
