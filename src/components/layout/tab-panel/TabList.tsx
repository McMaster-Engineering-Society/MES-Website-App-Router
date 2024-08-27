import { TabList as MuiTabList, TabListProps } from '@mui/lab';
import React from 'react';

const TabList: React.FC<TabListProps> = (props) => {
  return (
    <MuiTabList
      TabIndicatorProps={{
        style: { backgroundColor: 'rgb(var(--tw-color-primary-800))' },
      }}
      sx={{
        //this isnt working for some reason
        '&.MuiTabs-flexContainer': {
          justifyContent: 'space-around',
        },
      }}
      {...props}
    />
  );
};

export default TabList;
