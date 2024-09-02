import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import { toast } from 'sonner';

import { useDeleteBookingHook } from '@/lib/hooks/bookingHooks';

import { TBooking } from '@/app/api/types';
import {
  AdminBookingIndicatorColours,
  BookingIndicatorPositions,
  UserBookingIndicatorColours,
} from '@/constant/hatch-bookings/booking-indicator-data';

type BookingIndicatorProps = {
  booking: TBooking;
  isAdmin: boolean;
};

const BookingIndicator = ({ booking, isAdmin }: BookingIndicatorProps) => {
  const deleteBooking = useDeleteBookingHook();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const getRoomIndicatorHeight = (start: Date, end: Date) => {
    return `${((end.getTime() - start.getTime()) / 1800000) * 16 + 8}px`;
  };

  // substract 4 hours worth of milliseconds for EST
  const formattedStartTime = new Date(
    new Date(booking.startTime).getTime() - 14400000,
  );
  // substract 4 hours worth of milliseconds for EST
  // add 30 minutes worth of milliseconds to make range include last timeslot
  const formattedEndTime = new Date(
    new Date(booking.endTime).getTime() - 14400000 + 1800000,
  );

  const bookingTooltipContent = `${booking.room}, ${formattedStartTime.toISOString().split('T')[1].substring(0, 5)}-${formattedEndTime.toISOString().split('T')[1].substring(0, 5)}`;

  const handleDeleteBooking = (bookingId: string) => {
    deleteBooking.mutate(bookingId, {
      onSuccess: () => {
        toast(`Successfully deleted booking in room ${bookingTooltipContent}`);
      },
      onError: () => {
        toast(`Error: booking in room ${bookingTooltipContent} not deleted`);
      },
    });
  };

  return (
    <div
      onClick={onOpen}
      className={`absolute top-1/3 flex justify-center items-center text-xs ${BookingIndicatorPositions[booking.room] || ''}`}
    >
      <Tooltip showArrow content={bookingTooltipContent} placement='bottom'>
        <div
          style={{
            height: getRoomIndicatorHeight(
              new Date(booking.startTime),
              new Date(booking.endTime),
            ),
          }}
          className={`w-2 rounded-full ${(isAdmin ? AdminBookingIndicatorColours[booking.room] : UserBookingIndicatorColours[booking.room]) || 'bg-gray-500/70'} pointer-events-auto`}
        />
      </Tooltip>
      <Modal size='md' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Booking in Room {bookingTooltipContent}
              </ModalHeader>
              <ModalBody>
                <p>User ID: {booking.userId}</p>
                <p>User email: {booking.email}</p>
                <p>
                  Created on: {new Date(booking.createdDate || 0).toISOString()}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color='danger'
                  onPress={() => {
                    handleDeleteBooking((booking._id || '').toString());
                    onClose();
                  }}
                >
                  Cancel Booking
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BookingIndicator;
