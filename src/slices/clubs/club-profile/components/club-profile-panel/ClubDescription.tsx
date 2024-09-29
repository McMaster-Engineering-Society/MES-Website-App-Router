import { TextField } from '@mui/material';
import React from 'react';

import Box from '@/slices/clubs/club-profile/components/club-profile-panel/Box';
import { useClubProfileContext } from '@/slices/clubs/club-profile/context/ClubProfileContext';

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
