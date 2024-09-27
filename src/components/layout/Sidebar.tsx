'use client';

import * as React from 'react';
import { FaRightFromBracket } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';
import { MESLogo } from '@/components/layout/navbar/MESLogo';

import SidebarProps from '@/types/SidebarProps';

const Sidebar = (sidebarProps: SidebarProps) => {
  const [open, setOpen] = React.useState(false);
  const iconSize = 30;
  const iconColor = 'gray';

  const openIfNotOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };

  return (
    <aside className='h-screen'>
      <nav
        className={cn([
          'h-full flex flex-col bg-gray-200 transition-all',
          open ? 'w-72' : 'w-24',
        ])}
        onClick={openIfNotOpen}
      >
        <IconButton
          variant='ghost'
          className={cn(['mx-auto mt-2 text-gray-700', open && 'mr-2'])}
          onClick={() => setOpen(!open)}
          icon={open ? IoIosArrowBack : GiHamburgerMenu}
        />
        <sidebarProps.profile open={open} {...sidebarProps.profileProps} />
        <div className='flex-col mt-4'>
          {sidebarProps.items.map((item) => (
            <div
              key={item.name}
              className='flex flex-row items-center text-nowrap mx-8 my-3'
            >
              <item.icon size={iconSize} color={iconColor} />

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
              'flex items-center ml-auto overflow-hidden transition-all',
              open ? 'w-20' : 'w-0',
            ])}
          >
            <button className={cn(['mx-auto', !open && 'hidden'])}>
              <FaRightFromBracket size={iconSize} color={iconColor} />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
