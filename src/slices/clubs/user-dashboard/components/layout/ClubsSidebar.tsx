'use client';

import Avatar from '@mui/material/Avatar';

import { cn } from '@/lib/utils';

import Sidebar from '@/components/layout/Sidebar';

import { ClubsSidebarProps } from '@/slices/clubs/types/ClubsSidebarProps';

import { SidebarProfileProps } from '@/types/sidebarTypes';

export const ClubProfile = ({ open, name }: SidebarProfileProps) => {
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
        {name}
      </span>
    </div>
  );
};

export const ClubsSidebar = ({ items, clubName }: ClubsSidebarProps) => {
  return (
    <Sidebar
      items={items}
      profile={ClubProfile}
      profileProps={{ name: clubName }}
    />
  );
};
