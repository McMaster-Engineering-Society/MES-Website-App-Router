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
      <div className='w-full px-12 pt-12'>
        <h1>{pageName}</h1>
        <TaskBanner />
        <div className='w-full h-2/3'>{children}</div>
      </div>
    </div>
  );
};

export default ClubUserDashboardLayout;
