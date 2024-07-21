'use client';

import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';

import { cn } from '@/lib/utils';

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
    <>
      <div
        className={cn([
          'bg-gray-200 h-screen flex flex-col justify-center items-center relative',
          open ? 'w-3/12' : 'w-1/12',
        ])}
      >
        <button onClick={() => setOpen(!open)}>
          <MenuIcon />
        </button>
        {open && <ClubProfile />}
        <div className='flex flex-col'>
          {sidebarItems.map((item) => (
            <div key={item.name} className='flex flex-row items-center'>
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
    </>
  );
};

export default Sidebar;
