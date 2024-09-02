'use client';

import React from 'react';
import { FaSave } from 'react-icons/fa';

import { useClubProfileContext } from '@/lib/context/ClubProfileContext';

import ClubDescription from '@/components/clubs-portal/administration/club-profile-panel/ClubDescription';
import ClubEmail from '@/components/clubs-portal/administration/club-profile-panel/ClubEmail';
import ClubProfilePicture from '@/components/clubs-portal/administration/club-profile-panel/ClubProfilePicture';
import SocialsList from '@/components/clubs-portal/administration/club-profile-panel/SocialsList';

const ClubProfilePanel = () => {
  const { status } = useClubProfileContext();
  if (status === 'pending') {
    return <></>;
  }
  return (
    <div className='flex flex-row gap-12 pt-5 basis-full relative'>
      <div className='flex flex-col basis-1/3 gap-12'>
        <ClubProfilePicture />
        <ClubDescription />
      </div>
      <div className='flex flex-col basis-full gap-12'>
        <ClubEmail />
        <SocialsList />
      </div>
      <button className='top-5 left-5 absolute'>
        <FaSave size='40' color='gray' />
      </button>
    </div>
  );
};

export default ClubProfilePanel;
