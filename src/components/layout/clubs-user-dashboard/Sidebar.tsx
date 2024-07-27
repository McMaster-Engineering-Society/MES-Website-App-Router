'use client';

import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';

import { sidebarItems } from './sidebarItems';

const ClubProfile = () => {
  return (
    <div className='absolute top-20 flex flex-col items-center'>
      <Avatar sx={{ height: 100, width: 100 }}>MES</Avatar>
      Team name
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const iconSize = 'large';

  return (
    <div
      className={cn([
        'bg-gray-200 h-screen flex flex-col justify-center items-center relative transition-all duration-300 overflow-hidden',
        open ? 'w-3/12' : 'w-1/12',
      ])}
    >
      <IconButton
        variant='ghost'
        className={cn(['absolute top-2 text-gray-700', open && 'right-3'])}
        onClick={() => setOpen(!open)}
        icon={open ? IoIosArrowBack : GiHamburgerMenu}
      />
      {open && <ClubProfile />}
      <div id='dashboard-nav-items' className='flex flex-col'>
        {sidebarItems.map((item) => (
          <div
            key={item.name}
            className='flex flex-row items-center text-nowrap'
          >
            <item.icon fontSize={iconSize} />
            {open && (
              <a href={item.link} className='ml-2'>
                {item.name}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
