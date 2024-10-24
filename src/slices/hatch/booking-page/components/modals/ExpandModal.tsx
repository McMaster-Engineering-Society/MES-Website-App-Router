import React, { useState } from 'react';

import CancelModal from '@/slices/hatch/booking-page/components/modals/CancelModal';
import RebookModal from '@/slices/hatch/booking-page/components/modals/RebookModal';

type ExpandModalProps = {
  open: boolean;
  onClose: () => void;
  startTime: Date;
  endTime: Date;
  userRoom: string;
  userId: string;
  email: string;
  id: string;
  includeCancel?: boolean;
};

export type RoomAvailabilities = {
  H201: string[];
  H203: string[];
  H205: string[];
  H204A: string[];
  H204B: string[];
};

// eslint-disable-next-line unused-imports/no-unused-vars
const ExpandModal: React.FC<ExpandModalProps> = ({
  startTime,
  endTime,
  userRoom,
  userId,
  email,
  id,
  open,
  onClose,
  includeCancel = true,
}) => {
  const [rebookOpen, setRebookOpen] = useState<boolean>(false);
  const [cancelOpen, setCancelOpen] = useState<boolean>(false);

  const handleCancel = () => {
    setCancelOpen(true);
    onClose();
  };

  const handleRebook = () => {
    setRebookOpen(true);
    onClose();
  };

  return (
    // Handles logic of being open plus items inside.
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors
          ${open ? 'visible bg-black/20' : 'invisible'}`}
      onClick={onClose}
    >
      {/* Outer div to handle white background with green border */}
      <div
        className={`bg-white flex flex-col items-center rounded-lg shadow p-8 transition-all max-w-2xl border-solid border-2 border-green-300 
            ${open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className='absolute top-2 right-2 py-0.5 px-2 border 
              border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'
          onClick={onClose}
        >
          X
        </button>
        <h1 className='text-center mx mb-5'>More Options</h1>

        <div className='flex flex-col sm:flex-row'>
          {/* Rebook button */}
          <button
            className='border-solid border-2 rounded-lg px-5 py-5 m-3 bg-white border-black hover:bg-green-100 hover:text-green-600 hover:border-green-600'
            onClick={() => handleRebook()}
          >
            <div>
              <b className='text-lg'>Rebook Booking</b>
            </div>
          </button>

          {/* Cancel button optionally showing up */}
          {includeCancel && (
            <button
              className='border-solid border-2 rounded-lg px-5 py-5 m-3 bg-white border-black hover:bg-green-100 hover:text-green-600 hover:border-green-600'
              onClick={() => handleCancel()}
            >
              <div>
                <b className='text-lg'>Cancel Booking</b>
              </div>
            </button>
          )}
        </div>
      </div>
      <RebookModal
        open={rebookOpen}
        onClose={() => setRebookOpen(false)}
        startTime={startTime}
        endTime={endTime}
        userRoom={userRoom}
        userId={userId}
        email={email}
      ></RebookModal>
      <CancelModal
        open={cancelOpen}
        onClose={() => setCancelOpen(false)}
        startTime={startTime}
        endTime={endTime}
        userRoom={userRoom}
        userId={userId}
        email={email}
        id={id}
      ></CancelModal>
    </div>
  );
};

export default ExpandModal;
