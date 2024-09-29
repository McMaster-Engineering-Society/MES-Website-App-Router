import React from 'react';

import Button from '@/components/buttons/Button';

export type ManageClubsButtonProps = {
  text: string;
  alignment: 'left' | 'center' | 'right';
};

export const ManageClubsButton = ({
  text,
  alignment,
}: ManageClubsButtonProps) => {
  const alignmentOptions = {
    left: 'ml-auto mr-20',
    center: 'ml-20 mr-20',
    right: 'ml-20 mr-auto',
  };
  return (
    <Button
      size='base'
      className={`${alignmentOptions[alignment]} mt-20 mb-10 w-1/3 px-2`}
    >
      <span className='font-normal not-italic'>{text}</span>
    </Button>
  );
};

export const ManageClubsSection = () => {
  return (
    <div className='flex flex-row w-full items-center bg-white'>
      <ManageClubsButton text='Add A Club' alignment='left' />
      <ManageClubsButton text='Remove A Club' alignment='center' />
      <ManageClubsButton text='View All Clubs' alignment='right' />
    </div>
  );
};
