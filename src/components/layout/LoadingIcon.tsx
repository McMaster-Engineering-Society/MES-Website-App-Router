import React from 'react';

type LoadingIconProps = {
  text?: string;
};

export default function LoadingIcon({ text = 'Loading...' }: LoadingIconProps) {
  return (
    <div className=' h-screen flex flex-col items-center justify-center bg-gray-200 '>
      <div className='border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-red-800' />
      {text && <div className='mt-5 font-bold'> {text}</div>}
    </div>
  );
}
