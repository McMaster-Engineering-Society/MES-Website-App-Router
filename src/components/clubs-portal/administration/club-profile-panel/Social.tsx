'use client';

import { TextField } from '@mui/material';
import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import Box from '@/components/clubs-portal/administration/club-profile-panel/Box';

import { SocialMedia } from '@/types/clubProfile';

type SocialProps = {
  name: SocialMedia;
  value: string;
  onChange: (name: SocialMedia, value: string) => void;
};

const Social = ({ name, value, onChange }: SocialProps) => {
  const Icon = socialIcons[name];
  return (
    <div className='flex flex-row items-center w-full'>
      <Icon className='mr-2' size='40' />
      <Box className='w-full pb-3'>
        <TextField
          fullWidth
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
        />
      </Box>
    </div>
  );
};

export default Social;

export const socialIcons: Record<SocialMedia, IconType> = {
  instagram: FaInstagramSquare,
  discord: FaDiscord,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
  website: FaGlobe,
  github: FaGlobe, //place holder globes
  twitter: FaGlobe,
  youtube: FaGlobe,
  linktree: FaGlobe,
  tiktok: FaGlobe,
  mailingList: FaGlobe,
};
