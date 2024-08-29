'use client';

import { UserRoundCogIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import PageSection from '@/components/PageSection';
import DashboardButtonLink from '@/components/user-dashboard/DashboardButtonLink';
import ProfilePicture from '@/components/user-dashboard/ProfilePictureSvg';

const UserInfo = () => {
  const [userData, setUserData] = useState({
    firstName: '' as string,
    lastName: '' as string,
    email: '' as string,
    hatchNum: '' as string,
  });

  const fetchUserInfo = async (userId: string) => {
    const queryParams = new URLSearchParams({ userId: userId });
    const response = await fetch(
      `/api/users/get-user?${queryParams.toString()}`,
      {
        method: 'GET',
      },
    );
    const jsonResponse = await response.json();
    setUserData({
      firstName: jsonResponse.data.firstName,
      lastName: jsonResponse.data.lastName,
      email: jsonResponse.data.email,
      hatchNum: jsonResponse.data.hatchNumber,
    });
  };

  // hard coded id just for testing
  useEffect(() => {
    fetchUserInfo('66c3caf909e523e22135eb21');
  }, []);

  return (
    <div>
      <PageSection
        heading='Account Information'
        variant='white'
        headingClassName='bg-[#988ED7] capitalize'
        leftIcon={UserRoundCogIcon}
        className='rounded-lg'
      >
        {/* testing only */}
        <div className='flex flex-col place-items-center space-y-2'>
          <ProfilePicture />
          <p className='text-2xl font-bold'>
            {userData.firstName} {userData.lastName}
          </p>
          <p className='text-gray-500 font-light'>{userData.email}</p>
          <p className='text-gray-500 font-light'>
            hatch{userData.hatchNum && userData.hatchNum}
          </p>

          <DashboardButtonLink href='' size='sm' variant='purple'>
            Edit Account Info
          </DashboardButtonLink>
        </div>
      </PageSection>
    </div>
  );
};

export default UserInfo;
