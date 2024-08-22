import React from 'react';

import { cn } from '@/lib/utils';

type BoxProps = {
  name?: string;
  children?: React.ReactNode;
  className?: string;
};

const Box = ({ name, children, className }: BoxProps) => {
  return (
    <>
      <span className='text-primary-800 font-b'>{name}</span>
      <div
        className={cn([
          className,
          'flex p-3 border-2 rounded-xl bg-gray-100 border-gray-300 overflow-scroll',
        ])}
      >
        {children}
      </div>
    </>
  );
};

export default Box;
