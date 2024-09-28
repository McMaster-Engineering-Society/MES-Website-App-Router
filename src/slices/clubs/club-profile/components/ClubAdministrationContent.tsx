'use client';

import { TabContext } from '@mui/lab';
import { Box } from '@mui/material';
import React from 'react';

import Tab from '@/components/layout/tab-panel/Tab';
import TabList from '@/components/layout/tab-panel/TabList';
import TabPanel from '@/components/layout/tab-panel/TabPanel';

import ClubProfilePanel from '@/slices/clubs/club-profile/components/club-profile-panel/ClubProfilePanel';
import ExecTeamPanel from '@/slices/clubs/club-profile/components/exec-team/ExecTeamPanel';
import { ClubProfileProvider } from '@/slices/clubs/club-profile/context/ClubProfileContext';

const ClubAdministrationContent = () => {
  const [tabIndex, setTabIndex] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  return (
    <TabContext value={tabIndex}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange}>
          <Tab label='Club Profile' value='1' />
          <Tab label='Exec Team' value='2' />
          <Tab label='Hatch Access Card' value='3' />
          <Tab label='Governing Docs' value='4' />
          <Tab label='Recruitment Notice' value='5' />
        </TabList>
      </Box>
      <ClubProfileProvider>
        <TabPanel value='1' sx={{ flexBasis: '100%' }}>
          <ClubProfilePanel />
        </TabPanel>
      </ClubProfileProvider>
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