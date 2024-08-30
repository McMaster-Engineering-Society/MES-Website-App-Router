import React, { useState } from 'react';

import TomorrowModal from '@/components/modals/TomorrowModal';

type RebookModalProps = {
  open: boolean;
  onClose: () => void;
  bookingId: string;
};

// eslint-disable-next-line unused-imports/no-unused-vars
const RebookModal: React.FC<RebookModalProps> = ({
  open,
  onClose,
  bookingId,
}) => {
  const [tomorrowOpen, setTomOpen] = useState<boolean>(false);
  // const closeOpen=()=>{
  //   console.log("hello")
  //   setTomOpen(true)
  // }

  const handleButtonClick = () => {
    setTomOpen(true);
    onClose();
  };

  const available1 = true;
  const available2 = true;
  const available3 = false;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors
          ${open ? 'visible bg-black/20' : 'invisible'}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-8 transition-all max-w-2xl border-solid border-2 border-green-300 
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
        <h1 className='text-center mx mb-5'>Rebooking Options</h1>

        <button
          className={`border-solid border-2 rounded-lg px-5 py-5 m-3
              ${available1 ? 'bg-white border-gray-600 hover:bg-green-100 hover:text-green-600 hover:border-green-600' : 'bg-gray-50 border-gray-300 text-gray-300'}
              `}
          onClick={handleButtonClick}
        >
          <div>
            <b className='text-lg'>
              Same time
              <br />
              tomorrow:
              <br />
            </b>
            <i>
              4:30pm (2H)
              <br />
            </i>
            <i>
              07/31/24
              <br />
            </i>
          </div>
        </button>

        <button
          className={`border-solid border-2 rounded-lg px-5 py-5 m-3
            ${available2 ? 'bg-white border-gray-600 hover:bg-green-100 hover:text-green-600 hover:border-green-600' : 'bg-gray-50 border-gray-300 text-gray-300'}
            `}
        >
          <div>
            <b className='text-lg'>
              Same time<br></br>next week:<br></br>
            </b>
            <i>
              4:30pm (2H)<br></br>
            </i>
            <i>
              08/06/24<br></br>
            </i>
          </div>
        </button>

        <button
          className={`border-solid border-2 rounded-lg px-5 py-5 m-3
            ${available3 ? 'bg-white border-gray-600 hover:bg-green-100 hover:text-green-600 hover:border-green-600' : 'bg-gray-50 border-gray-300 text-gray-300'}
            `}
        >
          <div>
            <b className='text-lg'>
              Same room, <br></br>time, day:<br></br>
            </b>
            <i>
              4:30pm (2H)<br></br>
            </i>
            <i>
              08/06/24<br></br>
            </i>
          </div>
        </button>
      </div>
      <TomorrowModal
        open={tomorrowOpen}
        onClose={() => setTomOpen(false)}
        tomInfo='6531a67db0a3f963db5b4175'
      ></TomorrowModal>
    </div>
  );
};

export default RebookModal;
