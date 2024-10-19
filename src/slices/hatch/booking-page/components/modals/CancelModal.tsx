import { format } from 'date-fns';
import { CircleX } from 'lucide-react';
import { toast } from 'sonner';

import { useDeleteBookingHook } from '@/slices/hatch/booking-page/hooks/bookingHooks';
import { getDuration } from '@/slices/hatch/booking-page/utils';

type CancelModalProps = {
  open: boolean;
  onClose: () => void;
  startTime: Date;
  endTime: Date;
  userId: string;
  userRoom: string;
  email: string;
  id: string;
};

export type RoomAvailabilities = {
  H201: string[];
  H203: string[];
  H205: string[];
  H204A: string[];
  H204B: string[];
};

const CancelModal: React.FC<CancelModalProps> = ({
  open,
  startTime,
  endTime,
  onClose,
  userRoom,
  id,
}) => {
  const deleteRoomBooking = useDeleteBookingHook();

  const handleDeleteBooking = (bookingId: string) => {
    deleteRoomBooking.mutate(bookingId, {
      onSuccess: () => {
        toast(
          `Successfully deleted booking in room ${userRoom}. Refresh to see updated list.`,
        );
      },
      onError: () => {
        toast(`Error: booking in room ${userRoom} not deleted`);
      },
    });
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors
          ${open ? 'visible bg-black/20' : 'invisible'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow transition-all max-w-2xl border-solid border-2 border-green-300 py-8 px-10
            ${open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-2 right-2 py-0.5 px-2 border 
              berder-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'
          onClick={onClose}
        >
          X
        </button>
        {/* {children} */}
        <h1 className='text-center mx mb-5'>Confirm Cancellation</h1>
        <div className='flex'>
          <p className='text-small px-3'>
            <b> {userRoom}</b>, {format(startTime, 'MMMM do')},{' '}
            {format(startTime, 'p')} ({getDuration(startTime, endTime)}H):
          </p>
          <button
            className='rounded-full bg-red-50 text-red-700 py-0.1 px-2 border-solid border-1 border-red-700 text-sm'
            onClick={() => {
              handleDeleteBooking((id || '').toString());
              onClose();
            }}
          >
            <div className='flex'>
              <CircleX className='w-4 h-4 text-red-700 pt-1 pr-1' />
              <b>
                <i>CANCEL BOOKING</i>
              </b>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
