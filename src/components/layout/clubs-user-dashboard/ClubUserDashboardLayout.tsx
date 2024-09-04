import * as React from 'react';

import Sidebar from './Sidebar';
import TaskBanner from './TaskBanner';

type dashboardLayoutProps = {
  pageName?: string;
  children: React.ReactNode;
  taskBanner?: boolean;
};

const ClubUserDashboardLayout = ({
  pageName = 'Main Dashboard',
  taskBanner = false,
  children,
}: dashboardLayoutProps) => {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='flex flex-col w-full p-12'>
        <h1>{pageName}</h1>
        {taskBanner ? <TaskBanner /> : <></>}
        <div className='w-full overflow-hidden'>{children}</div>
      </div>
    </div>
  );
};

export default ClubUserDashboardLayout;
