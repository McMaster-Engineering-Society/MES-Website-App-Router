'use client';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import '@/styles/colors.css';

const pathNames = [
  '/hatch-booking/new-booking',
  '/hatch-booking/dashboard',
  '/hatch-booking/using-hatch-rooms',
];

export default function TabNavigation({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider' }}
        className='mb-4 max-w-full md:mb-8'
      >
        <Tabs
          value={pathNames.indexOf(pathname)}
          aria-label='tabs'
          className='text-primary-900'
          TabIndicatorProps={{
            className: 'bg-primary-900 MuiTabs-flexContainer',
          }}
          variant='scrollable'
          scrollButtons='auto'
        >
          <Link href={pathNames[0]}>
            <Tab
              className='text-nowrap'
              label='New Booking'
              {...a11yProps(0)}
            />
          </Link>
          <Link href={pathNames[1]}>
            <Tab className='text-nowrap' label='Dashboard' {...a11yProps(1)} />
          </Link>
          <Link href={pathNames[2]}>
            <Tab
              className='text-nowrap'
              label='Using Hatch Rooms'
              {...a11yProps(2)}
            />
          </Link>
        </Tabs>
      </Box>
      {children}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
