import React from 'react';

const TaskBanner = () => {
  return (
    <div className='flex relative items-center px-7 py-auto h-14 bg-white border-3 rounded-2xl border-primary-800 w-auto text-lg text-black'>
      Notice of tasks to do
      <div className='absolute top-2 right-2 w-3 h-3 bg-primary-800 rounded-full'></div>
    </div>
  );
};

export default TaskBanner;
