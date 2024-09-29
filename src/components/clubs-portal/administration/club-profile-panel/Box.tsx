import React from 'react';

import { cn } from '@/lib/utils';

type BoxProps = {
  name?: string;
  children?: React.ReactNode;
  className?: string;
};

const Box = ({ name, children, className }: BoxProps) => {
  return (
    <div className={cn([className, 'flex flex-col overflow-hidden'])}>
      <span className='text-primary-800 font-b'>{name}</span>
      <div
        className={cn([
          'flex p-3 basis-full border-2 rounded-xl bg-gray-100 border-gray-300 overflow-scroll',
        ])}
      >
        {children}
      </div>
    </div>
  );
};

export default Box;
