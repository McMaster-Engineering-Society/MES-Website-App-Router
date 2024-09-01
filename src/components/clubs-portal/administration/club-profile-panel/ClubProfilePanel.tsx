'use client';

import { Avatar, TextField } from '@mui/material';
import React from 'react';
import { FaSave } from 'react-icons/fa';

import {
  ClubProfileContext,
  TClubProfileContext,
} from '@/lib/context/ClubProfileContext';

import Box from '@/components/clubs-portal/administration/club-profile-panel/Box';
import SocialsList from '@/components/clubs-portal/administration/club-profile-panel/SocialsList';

const ClubProfilePanel = () => {
  const { profileData, handleChange, handleSocialChange, handleSocialDelete } =
    React.useContext(ClubProfileContext) as TClubProfileContext;
  return (
    <div className='flex flex-row gap-12 pt-5 basis-full relative'>
      <div className='flex flex-col basis-1/3 gap-12'>
        <Avatar sx={{ height: 175, width: 175 }} className='mx-auto mt-5'>
          MES
        </Avatar>
        <Box name='Description' className='basis-full'>
          <TextField
            multiline
            fullWidth
            placeholder={
              !profileData.description ? 'Add a description of your club!' : ''
            }
            value={profileData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                flexBasis: '100%',
                alignItems: 'flex-start',
              },
            }}
          />
        </Box>
      </div>
      <div className='flex flex-col basis-full gap-12'>
        <Box name='Club Email Address' className='shrink-0'>
          <TextField
            fullWidth
            value={profileData.email}
            placeholder={!profileData.email ? `Add your club's address!` : ''}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </Box>
        <SocialsList
          socials={profileData.socials}
          handleSocialChange={handleSocialChange}
          handleSocialDelete={handleSocialDelete}
        />
      </div>
      <button className='top-5 left-5 absolute'>
        <FaSave size='40' color='gray' />
      </button>
    </div>
  );
};

export default ClubProfilePanel;
