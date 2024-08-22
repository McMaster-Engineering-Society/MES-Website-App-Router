import { Avatar } from '@mui/material';
import React from 'react';

import Box from '@/components/clubs-portal/administration/club-profile-panel/Box';
import Social from '@/components/clubs-portal/administration/club-profile-panel/Social';

const ClubProfilePanel = () => {
  const [email, setEmail] = React.useState('current_address@mcmaster.ca');
  return (
    <div className='flex flex-row gap-12'>
      <div className='flex flex-col basis-1/3'>
        <Avatar sx={{ height: 175, width: 175 }} className='m-auto'>
          MES
        </Avatar>
        <Box name='Description' className='basis-1/2'>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Sit nullam fusce
          ligula massa dignissim integer. At efficitur curabitur eleifend
          maecenas hendrerit; molestie egestas. Natoque elit sagittis mi ipsum
          pretium metus per. Litora egestas sociosqu, turpis fames faucibus
          consectetur eleifend. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Omnis praesentium assumenda excepturi, aliquid
          consequatur, voluptatum cupiditate veniam eveniet tempora, mollitia
          libero eos quidem itaque vel alias quisquam. Facere, facilis officiis!
        </Box>
      </div>
      <div className='flex flex-col basis-full justify-around gap-12'>
        <Box name='Club Email Address' className='items-center'>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-none p-0 focus:ring-0 outline-none bg-transparent w-full'
          />
        </Box>
        <Box name='Social Media'>
          <div className='flex flex-col gap-2 w-full'>
            <Social name='instagram' value='@mesmac' />
            <Social name='discord' value='discord.gg/mesmac' />
            <Social name='linkedin' value='linkedin.com/mesmac' />
            <Social name='facebook' value='facebook.com/mesmac' />
            <Social name='website' value='mesmac.ca' />
          </div>
        </Box>
      </div>
    </div>
  );
};

type _ClubProfile = {
  id: string;
  name: string;
  log: string;
  email: string;
  description: string;
  website: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  twitter: string;
  youtube: string;
  linktree: string;
  github: string;
  tiktok: string;
  discord: string;
  mailingList: string;
};

export default ClubProfilePanel;
