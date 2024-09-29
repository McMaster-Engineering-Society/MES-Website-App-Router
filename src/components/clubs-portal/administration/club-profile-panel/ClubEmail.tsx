import { TextField } from '@mui/material';
import React from 'react';

import { useClubProfileContext } from '@/lib/context/ClubProfileContext';

import Box from '@/components/clubs-portal/administration/club-profile-panel/Box';

const ClubEmail = () => {
  const { profileData, handleChange } = useClubProfileContext();
  return (
    <Box name='Club Email Address' className='shrink-0'>
      <TextField
        fullWidth
        value={profileData.email}
        placeholder={!profileData.email ? `Add your club's address!` : ''}
        onChange={(e) => handleChange({ email: e.target.value })}
        required
      />
    </Box>
  );
};

export default ClubEmail;
