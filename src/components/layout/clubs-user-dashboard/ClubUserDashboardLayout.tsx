import * as React from 'react';

import Sidebar from './Sidebar';
import TaskBanner from './TaskBanner';

type dashboardLayoutProps = {
  children: React.ReactNode;
};

const ClubUserDashboardLayout = ({ children }: dashboardLayoutProps) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full'>
        <TaskBanner />
        {children}
      </div>
    </div>
  );
};

export default ClubUserDashboardLayout;
