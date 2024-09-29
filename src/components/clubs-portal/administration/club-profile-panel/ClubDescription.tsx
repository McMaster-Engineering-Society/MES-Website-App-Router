import { TextField } from '@mui/material';
import React from 'react';

import { useClubProfileContext } from '@/lib/context/ClubProfileContext';

import Box from '@/components/clubs-portal/administration/club-profile-panel/Box';

const ClubDescription = () => {
  const { profileData, handleChange } = useClubProfileContext();
  return (
    <Box name='Description' className='basis-full'>
      <TextField
        multiline
        fullWidth
        placeholder='Add a description of your club!'
        value={profileData.description}
        onChange={(e) => handleChange({ description: e.target.value })}
        sx={{
          '& .MuiOutlinedInput-root': {
            flexBasis: '99%',
            alignItems: 'flex-start',
          },
        }}
      />
    </Box>
  );
};

export default ClubDescription;
