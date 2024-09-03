'use client';

import { TabContext } from '@mui/lab';
import { Box } from '@mui/material';
import React from 'react';

import { ClubProfileProvider } from '@/lib/context/ClubProfileContext';

import ClubProfilePanel from '@/components/clubs-portal/administration/club-profile-panel/ClubProfilePanel';
import ExecTeamPanel from '@/components/clubs-portal/administration/exec-team/ExecTeamPanel';
import Tab from '@/components/layout/tab-panel/Tab';
import TabList from '@/components/layout/tab-panel/TabList';
import TabPanel from '@/components/layout/tab-panel/TabPanel';

const ClubAdministrationContent = () => {
  const [tabIndex, setTabIndex] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  return (
    <ClubProfileProvider>
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
        <TabPanel value='1' sx={{ flexBasis: '100%' }}>
          <ClubProfilePanel />
        </TabPanel>
        <TabPanel value='2'>
          <ExecTeamPanel />
        </TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
        <TabPanel value='4'>Item Four</TabPanel>
        <TabPanel value='5'>Item Five</TabPanel>
      </TabContext>
    </ClubProfileProvider>
  );
};

export default ClubAdministrationContent;
