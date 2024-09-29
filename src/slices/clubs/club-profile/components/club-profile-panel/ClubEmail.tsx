import { TextField } from '@mui/material';
import React from 'react';

import Box from '@/slices/clubs/club-profile/components/club-profile-panel/Box';
import { useClubProfileContext } from '@/slices/clubs/club-profile/context/ClubProfileContext';

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
