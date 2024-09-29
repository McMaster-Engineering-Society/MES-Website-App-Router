import { Popover } from '@mui/material';
import React, { useState } from 'react';

import { useClubProfileContext } from '@/lib/context/ClubProfileContext';
import { cn } from '@/lib/utils';

import Button from '@/components/buttons/Button';
import Box from '@/components/clubs-portal/administration/club-profile-panel/Box';
import Social, {
  socialIcons,
} from '@/components/clubs-portal/administration/club-profile-panel/Social';

import { SocialMedia } from '@/types/clubProfile';

const SocialsList = () => {
  const { profileData, handleChange } = useClubProfileContext();
  const { socials } = profileData;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleSocialChange = (
    name: SocialMedia,
    value: string | null = null,
  ) => {
    const updatedSocials = { ...socials, [name]: value };
    if (value === null) {
      delete updatedSocials[name];
    }
    handleChange({ socials: updatedSocials });
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const unaddedSocialsList = unaddedSocials(socials);

  return (
    <Box name='Social Media' className='basis-full'>
      <div className='flex flex-col gap-2 w-full'>
        {Object.entries(socials).length > 0 ? (
          Object.entries(socials).map(([name, value]) => (
            <Social
              key={name}
              name={name as SocialMedia}
              value={value}
              handleChange={handleSocialChange}
            />
          ))
        ) : (
          <p className='m-auto mb-0'>No social media added yet.</p>
        )}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          {unaddedSocialsList.map((social) => {
            const SocialIcon = socialIcons[social];
            return (
              <button
                key={social}
                onClick={() => {
                  handleSocialChange(social as SocialMedia, '');
                  handleClose();
                }}
              >
                <SocialIcon size='40' />
              </button>
            );
          })}
        </Popover>
        <Button
          className={cn([
            'w-52 ml-auto',
            Object.keys(socials).length === 0 && 'm-auto mt-0',
          ])}
          onClick={handleClick}
        >
          Add Social Media
        </Button>
      </div>
    </Box>
  );
};

export default SocialsList;

function unaddedSocials(socials: Record<SocialMedia, string>) {
  const allSocials = Object.keys(socialIcons) as SocialMedia[];
  const existingSocials = Object.keys(socials) as SocialMedia[];
  return allSocials.filter((social) => !existingSocials.includes(social));
}
