'use client';
import React, { useState } from 'react';

import ApprovedPage from '@/components/clubs-portal/EventApprovalPages/ApprovedPage';
import ErrorPage from '@/components/clubs-portal/EventApprovalPages/ErrorPage';
import PendingPage from '@/components/clubs-portal/EventApprovalPages/PendingPage';
import RejectedPage from '@/components/clubs-portal/EventApprovalPages/RejectedPage';

const EventsApproval = () => {
  const [selected, setSelected] = useState('pending');

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='flex flex-row w-20 mt-10 text-2xl'>
        <button
          className={`text-[#4B4B4B] border-b-2 py-2 px-5 hover:border-[#A6192E] ${
            selected === 'pending' ? 'border-[#A6192E]' : 'border-[#C1C1C1]'
          }`}
          onClick={() => setSelected('pending')}
        >
          Pending
        </button>
        <button
          className={`text-[#4B4B4B] border-b-2 py-2 px-5 hover:border-[#A6192E] ${
            selected === 'approved' ? 'border-[#A6192E]' : 'border-[#C1C1C1]'
          }`}
          onClick={() => setSelected('approved')}
        >
          Approved
        </button>
        <button
          className={`text-[#4B4B4B] border-b-2 py-2 px-5 hover:border-[#A6192E] ${
            selected === 'rejected' ? 'border-[#A6192E]' : 'border-[#C1C1C1]'
          }`}
          onClick={() => setSelected('rejected')}
        >
          Rejected
        </button>
      </div>

      {selected === 'pending' ? (
        <PendingPage />
      ) : selected === 'approved' ? (
        <ApprovedPage />
      ) : selected === 'rejected' ? (
        <RejectedPage />
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default EventsApproval;
