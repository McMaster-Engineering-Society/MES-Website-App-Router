import { Tab as MuiTab, TabProps } from '@mui/material';
import React from 'react';

const Tab: React.FC<TabProps> = (props) => {
  return (
    <MuiTab
      sx={{
        '&.Mui-selected': {
          color: 'var(--color-primary-800)',
        },
        '&:hover': {
          color: 'var(--color-primary-800)',
        },
      }}
      disableRipple
      {...props}
    />
  );
};

export default Tab;
