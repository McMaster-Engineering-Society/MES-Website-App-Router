import React, { SVGProps } from 'react';

export const CheckmarkIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    className='m-1'
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 48 48' // Updated viewBox to match polygon coordinates
    width='1em'
    version='1'
    xmlns='http://www.w3.org/2000/svg'
    enableBackground='new 0 0 48 48'
    {...props}
  >
    <g id='SVGRepo_bgCarrier' strokeWidth='0' />
    <g
      id='SVGRepo_tracerCarrier'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <g id='SVGRepo_iconCarrier'>
      <polygon
        fill='#FFDEA7'
        points='40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9'
      />
    </g>
  </svg>
);
