'use client';

import { Avatar, TextField } from '@mui/material';
import React from 'react';

import Box from '@/components/clubs-portal/administration/club-profile-panel/Box';
import Social from '@/components/clubs-portal/administration/club-profile-panel/Social';

import { SocialMedia } from '@/types/clubProfile';

const ClubProfilePanel = () => {
  const [profileData, setProfileData] = React.useState({
    profilePicture: '',
    email: '',
    description: '',
    socialMedia: {} as Record<SocialMedia, string>,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData();
      setProfileData(data);
    };
    fetchData();
  }, []);

  const handleChange = (field: string, value: string) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSocialChange = (name: SocialMedia, value: string) => {
    const updatedSocialMedia = profileData.socialMedia;
    updatedSocialMedia[name] = value;
    setProfileData((prevData) => ({
      ...prevData,
      socialMedia: updatedSocialMedia,
    }));
  };

  return (
    <div className='flex flex-row gap-12 pt-5 basis-full'>
      <div className='flex flex-col basis-1/3 gap-12'>
        <Avatar sx={{ height: 175, width: 175 }} className='mx-auto mt-5'>
          MES
        </Avatar>
        <Box name='Description' className='basis-full'>
          <TextField
            multiline
            fullWidth
            placeholder={
              !profileData.description ? 'Add a description of your club!' : ''
            }
            value={profileData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                flexBasis: '100%',
                alignItems: 'flex-start',
              },
            }}
          />
        </Box>
      </div>
      <div className='flex flex-col basis-full gap-12'>
        <Box name='Club Email Address' className='shrink-0'>
          <TextField
            fullWidth
            value={profileData.email}
            placeholder={!profileData.email ? `Add your club's address!` : ''}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </Box>
        <Box name='Social Media' className='basis-full'>
          <div className='flex flex-col gap-2 w-full'>
            {Object.entries(profileData.socialMedia).length > 0 ? (
              Object.entries(profileData.socialMedia).map(([name, value]) => (
                <Social
                  key={name}
                  name={name as SocialMedia}
                  value={value}
                  onChange={handleSocialChange}
                />
              ))
            ) : (
              <p>No social media added yet.</p>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ClubProfilePanel;

const fetchUserData = async () => {
  return {
    profilePicture: '',
    email: '', //'current_address@mcmaster.ca',
    description: '', //'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus totam non iusto sapiente! Veritatis rerum consequuntur fugiat inventore sapiente porro labore laudantium minus iure. Consequatur vel nihil iusto odit nisi?',
    socialMedia: {
      instagram: '@mcmasterengsoc',
      discord: 'McMaster Engineering Society',
      linkedin: 'McMaster Engineering Society',
      facebook: 'McMaster Engineering Society',
    } as Record<SocialMedia, string>,
  };
};
