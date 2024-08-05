import React, { SVGProps } from 'react';

export const CrossIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className='m-1'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke='#ffffff'
    {...props}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0' />
    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <g id='SVGRepo_iconCarrier'>
      <path
        d='M19 5L4.99998 19M5.00001 5L19 19'
        stroke='#ffffff'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);
