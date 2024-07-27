import * as React from 'react';

import Sidebar from './Sidebar';
import TaskBanner from './TaskBanner';

type dashboardLayoutProps = {
  children: React.ReactNode;
};

const ClubUserDashboardLayout = ({ children }: dashboardLayoutProps) => {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='w-full'>
        <TaskBanner />
        <div className='w-full h-2/3 p-5 overflow-y-hidden'>{children}</div>
      </div>
    </div>
  );
};

export default ClubUserDashboardLayout;
