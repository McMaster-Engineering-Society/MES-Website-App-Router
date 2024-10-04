import {
  getLocalTimeZone,
  Time,
  today,
  ZonedDateTime,
} from '@internationalized/date';
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
import { toast } from 'sonner';

import { useSessionContext } from '@/slices/auth/context/SessionContext';
import { useBatchAddRoomBookingHook } from '@/slices/hatch/admin/hooks/bookingHooks';
import { TBooking } from '@/slices/hatch/booking-page/types';

const RecurringBookingPicker = () => {
  const { profile } = useSessionContext();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const batchAddBookings = useBatchAddRoomBookingHook();

  const [dateRange, setDateRange] = useState<RangeValue<DateValue>>({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ days: 14 }),
  });
  const [startTime, setStartTime] = useState<Time>(new Time(7, 0));
  const [endTime, setEndTime] = useState<Time>(new Time(8, 0));
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [selectedWeekdays, setSelectedWeekdays] = useState<Set<Key>>(
    new Set([]),
  );

  const handleBatchAdd = (bookings: TBooking[]) => {
    batchAddBookings.mutate(bookings, {
      onSuccess: () => {
        toast(
          `Recurring booking made from ${dateRange.start} to ${dateRange.end} for ${startTime} to ${endTime}, in room(s) ${selectedRooms}, every ${Array.from(selectedWeekdays).map((weekday) => intToWeekday(weekday))}`,
        );
      },
      onError: () => {
        toast('Recurring booking unsuccessful.');
      },
    });
  };

  const intToWeekday = (day: Key): string | null => {
    switch (day) {
      case '0':
        return 'Sunday';
      case '1':
        return 'Monday';
      case '2':
        return 'Tuesday';
      case '3':
        return 'Wednesday';
      case '4':
        return 'Thursday';
      case '5':
        return 'Friday';
      case '6':
        return 'Saturday';
      default:
        return null;
    }
  };

  const checkDateRangeValidity = (
    value: RangeValue<DateValue>,
  ): string | null => {
    if (!value?.start || !value?.end) {
      return 'Must select a start and end date.';
    }

    if (value?.start < today(getLocalTimeZone())) {
      return 'Bookings cannot be made in the past.';
    }

    // 604800000 is the number of milliseconds in a week
    if (
      value?.end.toDate(getLocalTimeZone()).getTime() -
        value?.start.toDate(getLocalTimeZone()).getTime() <
      604800000
    ) {
      return 'Range must be at least a week.';
    }

    return null;
  };

  const checkStartTimeValidity = (): string | null => {
    if (!startTime) {
      return `Must select a start time.`;
    }

    if (startTime?.hour < 7 || startTime?.hour > 22) {
      return `Start time must be between 7:00 AM and 10:30 PM.`;
    }

    if (startTime?.minute != 0 && startTime?.minute != 30) {
      return 'Start time must be on the hour or half hour. ';
    }

    if (startTime?.compare(endTime || new Time(0, 0)) > 0) {
      return 'Start time must be smaller than end time.';
    }

    return null;
  };

  const checkEndTimeValidity = (): string | null => {
    if (!endTime) {
      return `Must select an end time.`;
    }

    if (
      endTime?.hour < 7 ||
      (endTime?.hour == 7 && endTime?.minute == 0) ||
      endTime?.hour > 23 ||
      (endTime?.hour == 23 && endTime?.minute == 30)
    ) {
      return `End time must be between 7:30 AM and 11:00 PM.`;
    }

    if (endTime?.minute != 0 && endTime?.minute != 30) {
      return 'End time must be on the hour or half hour.';
    }

    if (startTime?.compare(endTime || new Time(0, 0)) > 0) {
      return 'End time must be greater than start time.';
    }

    return null;
  };

  const findFirstWeekOfBookings = (): Date[] => {
    const firstBookingDate = dateRange.start.toDate(getLocalTimeZone());

    const firstWeekOfBookings: Date[] = [];

    for (let i = 0; i < 7; i++) {
      if (
        Array.from(selectedWeekdays).includes(
          firstBookingDate.getDay().toString(),
        )
      ) {
        firstWeekOfBookings.push(new Date(firstBookingDate));
      }
      firstBookingDate.setDate(firstBookingDate.getDate() + 1);
    }

    return firstWeekOfBookings;
  };

  const determineAllBookings = (): TBooking[] => {
    const allBookings: TBooking[] = [];

    const endDate = new ZonedDateTime(
      dateRange.end.year,
      dateRange.end.month,
      dateRange.end.day,
      getLocalTimeZone(),
      -14400000,
      11,
      59,
      59,
    ).toDate();

    selectedRooms.forEach((room) => {
      findFirstWeekOfBookings().forEach((date) => {
        let bookingStartTime = new ZonedDateTime(
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate(),
          getLocalTimeZone(),
          -14400000,
          startTime.hour,
          startTime.minute,
          startTime.second,
        );

        let bookingEndTime = new ZonedDateTime(
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate(),
          getLocalTimeZone(),
          -14400000,
          endTime.hour,
          endTime.minute,
          endTime.second,
        ).subtract({ minutes: 30 });

        while (bookingEndTime.toDate().getTime() < endDate.getTime()) {
          allBookings.push({
            userId: profile?._id.toString() || '',
            room: room,
            email: profile?.email || '',
            startTime: bookingStartTime.toDate(),
            endTime: bookingEndTime.toDate(),
            hasConfirmed: false,
            createdDate: new Date(),
          });

          // 168 hours in a week. incrementing by hours here to avoid weird interactions with daylight savings
          bookingStartTime = bookingStartTime.add({ hours: 168 });
          bookingEndTime = bookingEndTime.add({ hours: 168 });
        }
      });
    });

    return allBookings;
  };

  const weekdayDisplay = useMemo(() => {
    return selectedWeekdays.size > 2
      ? `${intToWeekday(Array.from(selectedWeekdays)[0])}, ${intToWeekday(Array.from(selectedWeekdays)[1])}, ...`
      : Array.from(selectedWeekdays)
          .map((weekday) => intToWeekday(weekday))
          .join(', ');
  }, [selectedWeekdays]);

  const RoomCheckbox = ({ room }: { room: string }) => {
    return (
      <Checkbox
        color='secondary'
        classNames={{
          base: ['flex flex-col justify-center items-center'],
          wrapper: ['m-0'],
        }}
        value={room}
      >
        {room}
      </Checkbox>
    );
  };

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
                  label='Date range'
                  color='secondary'
                  visibleMonths={2}
                  pageBehavior='single'
                  value={dateRange}
                  onChange={setDateRange}
                  validate={checkDateRangeValidity}
                  validationBehavior='native'
                />
                <div className='w-full flex flex-row gap-2'>
                  <TimeInput
                    label='Start time'
                    color='secondary'
                    value={startTime}
                    onChange={setStartTime}
                    isInvalid={typeof checkStartTimeValidity() == 'string'}
                    errorMessage={(value) => {
                      if (value.isInvalid) {
                        return checkStartTimeValidity();
                      }
                    }}
                  />
                  <TimeInput
                    label='End time'
                    color='secondary'
                    value={endTime}
                    onChange={setEndTime}
                    isInvalid={typeof checkEndTimeValidity() == 'string'}
                    errorMessage={(value) => {
                      if (value.isInvalid) {
                        return checkEndTimeValidity();
                      }
                    }}
                  />
                </div>
                <Divider />
                <p>Rooms</p>
                <CheckboxGroup
                  color='secondary'
                  value={selectedRooms}
                  onValueChange={setSelectedRooms}
                  classNames={{
                    wrapper: 'flex justify-between items-center flex-row pt-4',
                  }}
                >
                  <RoomCheckbox room='H201' />
                  <RoomCheckbox room='H203' />
                  <RoomCheckbox room='H204A' />
                  <RoomCheckbox room='H204B' />
                  <RoomCheckbox room='H205' />
                </CheckboxGroup>
                <Divider />
                <div className='flex items-center'>
                  <p className='pr-2'>Repeat booking every</p>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant='bordered'>{weekdayDisplay}</Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      variant='flat'
                      closeOnSelect={false}
                      disallowEmptySelection
                      selectionMode='multiple'
                      selectedKeys={selectedWeekdays}
                      onSelectionChange={(key) => {
                        setSelectedWeekdays(new Set(key));
                      }}
                    >
                      <DropdownItem key='1'>Monday</DropdownItem>
                      <DropdownItem key='2'>Tuesday</DropdownItem>
                      <DropdownItem key='3'>Wednesday</DropdownItem>
                      <DropdownItem key='4'>Thursday</DropdownItem>
                      <DropdownItem key='5'>Friday</DropdownItem>
                      <DropdownItem key='6'>Saturday</DropdownItem>
                      <DropdownItem key='0'>Sunday</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className='w-full flex justify-center items-center'>
                  <Button
                    isDisabled={
                      typeof checkDateRangeValidity(dateRange) == 'string' ||
                      typeof checkStartTimeValidity() == 'string' ||
                      typeof checkEndTimeValidity() == 'string' ||
                      selectedWeekdays.size == 0 ||
                      selectedRooms.length == 0
                    }
                    color='secondary'
                    onPress={() => {
                      const bookings = determineAllBookings();
                      handleBatchAdd(bookings);
                      onClose();
                    }}
                  >
                    Create Recurring Booking
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default RecurringBookingPicker;
