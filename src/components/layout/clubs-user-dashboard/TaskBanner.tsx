import React from 'react';

import Button from '@/components/buttons/Button';

const TaskNav = () => {
  return (
    <div className='flex flex-col h-1/2 justify-evenly'>
      Complete your tasks
      <div className='flex justify-between items-center'>
        <Button variant='light'>View all Tasks</Button>
        <a className='text-sm m-auto'>View Deadlines</a>
      </div>
    </div>
  );
};

const TaskBanner = () => {
  return (
    <div className='flex items-center justify-evenly h-1/3 bg-primary-800 w-auto text-3xl text-white font-bold'>
      <TaskNav />
    </div>
  );
};

export default TaskBanner;
