import { TabPanel as MuiTabPanel, TabPanelProps } from '@mui/lab';
import React from 'react';

const TabPanel: React.FC<TabPanelProps> = (props) => {
  return (
    <MuiTabPanel
      sx={{
        flexBasis: '100%',
        overflow: 'hidden',
        display: 'flex',
        padding: 0,
      }}
      {...props}
    />
  );
};

export default TabPanel;
