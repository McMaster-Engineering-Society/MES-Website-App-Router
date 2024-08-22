import * as React from 'react';

import Sidebar from './Sidebar';
import TaskBanner from './TaskBanner';

type dashboardLayoutProps = {
  showTask?: boolean;
  pageName?: string;
  children?: React.ReactNode;
};

const ClubUserDashboardLayout = ({
  pageName = 'Main Dashboard',
  showTask = false,
  children,
}: dashboardLayoutProps) => {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='flex flex-col w-full p-12'>
        <h1>{pageName}</h1>
        {showTask && <TaskBanner />}
        <div className='flex flex-col basis-full w-full overflow-hidden mt-5'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ClubUserDashboardLayout;
