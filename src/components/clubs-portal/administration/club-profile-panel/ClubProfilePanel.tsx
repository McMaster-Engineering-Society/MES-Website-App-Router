'use client';

import { CircularProgress } from '@mui/material';
import React from 'react';
import { FaSave } from 'react-icons/fa';

import { useClubProfileContext } from '@/lib/context/ClubProfileContext';

import ClubDescription from '@/components/clubs-portal/administration/club-profile-panel/ClubDescription';
import ClubEmail from '@/components/clubs-portal/administration/club-profile-panel/ClubEmail';
import ClubProfilePicture from '@/components/clubs-portal/administration/club-profile-panel/ClubProfilePicture';
import SocialsList from '@/components/clubs-portal/administration/club-profile-panel/SocialsList';

const ClubProfilePanel = () => {
  const { isError, isLoading, handleSave, hasChanges } =
    useClubProfileContext();
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSave().then((message) => alert(message));
  };
  if (isError) {
    return (
      <div className='m-auto font-bold text-lg'>
        There was an error loading your club's profile. Contact support
      </div>
    );
  }
  if (isLoading) {
    return <CircularProgress className='m-auto' />;
  }
  return (
    <form
      className='flex flex-row gap-12 pt-5 basis-full relative'
      onSubmit={onSubmit}
    >
      <div className='flex flex-col basis-1/3 gap-12'>
        <ClubProfilePicture />
        <ClubDescription />
      </div>
      <div className='flex flex-col basis-full gap-12'>
        <ClubEmail />
        <SocialsList />
      </div>
      <button
        className='top-5 left-5 absolute'
        disabled={!hasChanges}
        type='submit'
      >
        <FaSave
          size='40'
          color={
            hasChanges
              ? 'rgb(var(--tw-color-primary-800))'
              : 'rgb(var(--tw-color-primary-200))'
          }
        />
      </button>
    </form>
  );
};

export default ClubProfilePanel;
