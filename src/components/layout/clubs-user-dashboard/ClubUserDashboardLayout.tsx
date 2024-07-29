import * as React from 'react';

import Sidebar from './Sidebar';
import TaskBanner from './TaskBanner';

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
      <Sidebar />
      <div className='w-full px-12 pt-16'>
        <h1 className='my-5'>{pageName}</h1>
        <TaskBanner />
        <div className='w-full h-2/3 p-5 overflow-y-hidden'>{children}</div>
      </div>
    </div>
  );
};

export default ClubUserDashboardLayout;
