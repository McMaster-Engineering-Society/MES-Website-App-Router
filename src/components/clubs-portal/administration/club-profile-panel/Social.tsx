'use client';

import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import Box from '@/components/clubs-portal/administration/club-profile-panel/Box';

type SocialProps = {
  name: string;
  value: string;
};

const Social = ({ name, value }: SocialProps) => {
  const Icon = socialIcons[name];
  return (
    <div className='flex flex-row items-center w-full'>
      <Icon className='mr-2' size='40' />
      <Box className='w-full'>
        <input
          type='text'
          value={value}
          className='border-none p-0 focus:ring-0 outline-none bg-transparent w-full'
        />
      </Box>
    </div>
  );
};

export default Social;

export const socialIcons: Record<string, IconType> = {
  instagram: FaInstagramSquare,
  discord: FaDiscord,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  website: FaGlobe,
};
