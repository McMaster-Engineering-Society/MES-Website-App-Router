'use client';

import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaInstagramSquare,
  FaLinkedin,
  FaMailBulk,
  FaTiktok,
  FaTree,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';

import {
  ClubProfileContext,
  TClubProfileContext,
} from '@/lib/context/ClubProfileContext';

import Box from '@/components/clubs-portal/administration/club-profile-panel/Box';

import { SocialMedia } from '@/types/clubProfile';

type SocialProps = {
  name: SocialMedia;
  value: string;
};

const Social = ({ name, value }: SocialProps) => {
  const { handleSocialChange, handleSocialDelete } = useContext(
    ClubProfileContext,
  ) as TClubProfileContext;
  const Icon = socialIcons[name];
  return (
    <div className='flex flex-row items-center w-full'>
      <Icon className='mr-2' size='40' />
      <Box className='w-full'>
        <TextField
          fullWidth
          value={value}
          onChange={(e) => handleSocialChange(name, e.target.value)}
        />
      </Box>
      <button
        onClick={() => {
          handleSocialDelete(name);
        }}
      >
        <IoCloseOutline className='ml-2' size='40' color='red' />
      </button>
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
  github: FaGithub,
  twitter: FaTwitter,
  youtube: FaYoutube,
  linktree: FaTree, //update
  tiktok: FaTiktok,
  mailingList: FaMailBulk, //update
};
