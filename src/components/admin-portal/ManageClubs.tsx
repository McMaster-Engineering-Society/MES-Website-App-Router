import React from 'react';

import Button from '@/components/buttons/Button';

const ManageClubs = () => {
  return (
    <div className='flex flex-row w-full items-center bg-white'>
      <Button size='base' className='ml-auto mr-20 mt-20 mb-10 w-1/3 px-2'>
        <span className='font-normal not-italic'>Add A Club</span>
      </Button>
      <Button size='base' className='ml-20 mr-20 mt-20 mb-10 w-1/3 px-2'>
        <span className='font-normal not-italic'>Remove A Club</span>
      </Button>
      <Button size='base' className='ml-20 mr-auto mt-20 mb-10 w-1/3 px-2'>
        <span className='font-normal not-italic'>View All Clubs</span>
      </Button>
    </div>
  );
};

export default ManageClubs;
