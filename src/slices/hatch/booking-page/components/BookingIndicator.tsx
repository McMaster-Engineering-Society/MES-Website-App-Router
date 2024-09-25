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
import { TBooking } from '@slices/hatch/booking-page/types';
import { format } from 'date-fns';
import { toast } from 'sonner';

import {
  AdminBookingIndicatorColours,
  BookingIndicatorPositions,
  UserBookingIndicatorColours,
} from '@/constant/hatch-bookings/booking-indicator-data';
import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';
import { useFetchProfileByEmailHook } from '@/slices/auth/hooks/profileHooks';
import RoomInfoModal from '@/slices/hatch/booking-page/components/RoomInfoModal';
import { useDeleteBookingHook } from '@/slices/hatch/booking-page/hooks/bookingHooks';
import { add30Minutes } from '@/slices/hatch/booking-page/utils';

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

  const {
    data: userProfileData,
    isPending: userProfileIsPending,
    error: userProfileError,
  } = useFetchProfileByEmailHook(booking.email);

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
      {isAdmin ? (
        <Modal size='md' isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  Booking Details
                </ModalHeader>
                <ModalBody>
                  <div className='flex flex-col gap-1'>
                    <p className=''>Room: {booking.room}</p>
                    <p className=''>
                      Start Time: {format(booking.startTime, 'h:mm a')}
                    </p>
                    <p className=''>
                      End Time:{' '}
                      {format(add30Minutes(booking.endTime), 'h:mm a')}
                    </p>
                    <p className=''>
                      Has Confirmed: {booking.hasConfirmed ? 'Yes' : 'No'}
                    </p>
                    <p>
                      Booking Created:{' '}
                      {booking.createdDate
                        ? new Date(booking.createdDate).toLocaleString(
                            'en-US',
                            {
                              weekday: 'short',
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            },
                          )
                        : 'Invalid Date'}
                    </p>
                    <p className=''>User Profile:</p>
                    {userProfileIsPending && <p>Loading user profile...</p>}
                    {userProfileError && <p>Error loading user profile.</p>}
                    {userProfileData && (
                      <pre className='text-sm bg-gray-200 p-2 rounded-md overflow-auto'>
                        {JSON.stringify(userProfileData, null, 2)}
                      </pre>
                    )}
                  </div>
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
      ) : (
        <RoomInfoModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          roomInfo={
            HatchRoomsData.find((room) => room.roomName === booking.room) ||
            HatchRoomsData[0]
          }
          handleConfirmBookingWithMessage={() => {
            // will not be used
          }}
          CustomFooter={({ onClose }) => (
            <Button
              color='danger'
              onPress={() => {
                handleDeleteBooking((booking._id || '').toString());
                onClose();
              }}
            >
              Cancel Booking
            </Button>
          )}
          customDate={booking.startTime}
        />
      )}
    </div>
  );
};

export default BookingIndicator;
