'use client';

import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import * as React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';

import { sidebarItems } from './sidebarItems';

const ClubProfile = () => {
  return (
    <div className='flex flex-col items-center text-nowrap overflow-x-hidden'>
      <Avatar sx={{ height: 100, width: 100 }}>MES</Avatar>
      Team name
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const iconSize = 'large';

  return (
    <aside className='h-screen'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm font-bold'>
        <IconButton
          variant='ghost'
          className={cn(['mx-auto mt-2 text-gray-700', open && 'mr-2'])}
          onClick={() => setOpen(!open)}
          icon={open ? IoIosArrowBack : GiHamburgerMenu}
        />
        <div className={cn(['py-2', open ? 'w-full' : 'w-0'])}>
          <ClubProfile />
        </div>
        <div id='dashboard-nav-items' className='my-auto flex-col'>
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              className='flex flex-row items-center text-nowrap px-6 py-1'
            >
              <item.icon fontSize={iconSize} />

              <a
                href={item.link}
                className={cn([
                  'overflow-hidden',
                  open ? 'w-full ml-2' : 'w-0',
                ])}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className='flex flex-row m-4 items-center'>
          <Image
            src='/favicon/android-chrome-192x192.png'
            width={50}
            height={50}
            alt='MES logo'
          />
          {open && <button className='pr-5 ml-auto'>Logout</button>}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
