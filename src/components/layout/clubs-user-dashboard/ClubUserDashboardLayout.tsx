import * as React from 'react';

import TaskBanner from './TaskBanner';
import UserSidebar from './UserSidebar';

type dashboardLayoutProps = {
  pageName?: string;
  children: React.ReactNode;
};

const ClubUserDashboardLayout = ({
  pageName = 'Main Dashboard',
  children,
}: dashboardLayoutProps) => {
  return (
    <div className='flex h-screen w-screen'>
      <UserSidebar />
      <div className='flex flex-col w-full p-12'>
        <h1>{pageName}</h1>
        <TaskBanner />
        <div className='w-full h-2/3 overflow-y-scroll'>{children}</div>
      </div>
    </div>
  );
};

export default ClubUserDashboardLayout;
