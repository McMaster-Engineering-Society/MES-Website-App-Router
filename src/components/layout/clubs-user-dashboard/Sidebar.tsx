'use client';

import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';
import { MESLogo } from '@/components/layout/navbar/MESLogo';

import { sidebarItems } from './sidebarItems';

type ClubProfileProps = {
  open: boolean;
};

const ClubProfile = ({ open }: ClubProfileProps) => {
  const height = open ? 100 : 50;
  const width = open ? 100 : 50;
  return (
    <div className='flex flex-col items-center justify-center text-nowrap min-h-40'>
      <div className='flex min-h-28'>
        <Avatar
          sx={{ height: height, width: width }}
          className='transition-all m-auto'
        >
          MES
        </Avatar>
      </div>

      <span
        className={cn([
          'flex justify-center mt-3 overflow-hidden transition-all',
          open ? 'w-full h-6' : 'w-0 h-0',
        ])}
      >
        Team name
      </span>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const iconSize = 30;

  return (
    <aside className='h-screen'>
      <nav
        className={cn([
          'h-full flex flex-col bg-gray-200 transition-all',
          open ? 'w-72' : 'w-24',
        ])}
      >
        <IconButton
          variant='ghost'
          className={cn(['mx-auto mt-2 text-gray-700', open && 'mr-2'])}
          onClick={() => setOpen(!open)}
          icon={open ? IoIosArrowBack : GiHamburgerMenu}
        />
        <ClubProfile open={open} />
        <div className='flex-col mt-4'>
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              className='flex flex-row items-center text-nowrap mx-8 my-3'
            >
              <item.icon size={iconSize} />

              <a
                href={item.link}
                className={cn([
                  'overflow-hidden transition-all',
                  open ? 'pl-3 w-44' : 'w-0',
                ])}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className='flex flex-row mt-auto ml-6 mb-3'>
          <div
            className={cn([
              'transition-all overflow-hidden',
              open ? 'w-36' : 'w-9',
            ])}
          >
            <MESLogo />
          </div>
          <div
            className={cn([
              'flex items-center pr-5 ml-auto overflow-hidden transition-all',
              open ? 'w-20' : 'w-0',
            ])}
          >
            <button className={cn([!open && 'hidden'])}>Logout</button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
