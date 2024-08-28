import { TabPanel as MuiTabPanel, TabPanelProps } from '@mui/lab';
import React from 'react';

const TabPanel: React.FC<TabPanelProps> = (props) => {
  const sx = {
    overflow: 'hidden',
    display: 'flex',
    padding: 0,
    ...props.sx,
  };
  return <MuiTabPanel {...props} sx={sx} />;
};

export default TabPanel;
