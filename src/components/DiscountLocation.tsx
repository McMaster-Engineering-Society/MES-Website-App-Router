import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

type DiscountLocationProps = {
  name: string;
  address: string;
  description: string;
  link: string;
  imagePath: string;
};

const DiscountLocation = ({
  name,
  address,
  description,
  link,
  imagePath,
}: DiscountLocationProps) => {
  return (
    <div
      className='card flex w-3/4 flex-col justify-end overflow-hidden rounded-lg bg-cover bg-center backdrop-blur-sm sm:aspect-[2/1]'
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
    >
      <div className='card-footer bg-primary-950 flex flex-row items-center justify-between bg-opacity-50 p-4 text-white backdrop-blur-sm'>
        <div className='flex flex-col'>
          <h3 className='text-xl font-bold'>{name}</h3>
          <div className='text-xs font-bold italic text-gray-300'>
            {address}
          </div>
          <div className='mt-2 text-sm'>{description}</div>
        </div>
        <ButtonLink href={link} target='_blank' className='text-xs'>
          Visit Website
        </ButtonLink>
      </div>
    </div>
  );
};

export default DiscountLocation;
