'use client';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import React from 'react';

import ClubProfilePanel from '@/components/clubs-portal/administration/club-profile-panel/ClubProfilePanel';
import ExecTeamPanel from '@/components/clubs-portal/administration/exec-team/ExecTeamPanel';

const ClubAdministrationContent = () => {
  const [tabIndex, setTabIndex] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  const tabStyle = {
    '&.Mui-selected': {
      color: 'var(--color-primary-800)',
    },
    '&:hover': {
      color: 'var(--color-primary-800)',
    },
  };

  return (
    <TabContext value={tabIndex}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList
          onChange={handleChange}
          TabIndicatorProps={{
            style: { backgroundColor: 'rgb(var(--tw-color-primary-800))' },
          }}
          sx={{
            //this isnt working for some reason
            '&.MuiTabs-flexContainer': {
              justifyContent: 'space-around',
            },
          }}
        >
          <Tab label='Club Profile' disableRipple sx={tabStyle} value='1' />
          <Tab label='Exec Team' disableRipple sx={tabStyle} value='2' />
          <Tab
            label='Hatch Access Card'
            disableRipple
            sx={tabStyle}
            value='3'
          />
          <Tab label='Governing Docs' disableRipple sx={tabStyle} value='4' />
          <Tab
            label='Recruitment Notice'
            disableRipple
            sx={tabStyle}
            value='5'
          />
        </TabList>
      </Box>
      <TabPanel
        value='1'
        sx={{
          flexBasis: '100%',
          overflow: 'hidden',
          display: 'flex',
          padding: 0,
        }}
      >
        <ClubProfilePanel />
      </TabPanel>
      <TabPanel value='2'>
        <ExecTeamPanel />
      </TabPanel>
      <TabPanel value='3'>Item Three</TabPanel>
      <TabPanel value='4'>Item Four</TabPanel>
      <TabPanel value='5'>Item Five</TabPanel>
    </TabContext>
  );
};

export default ClubAdministrationContent;
