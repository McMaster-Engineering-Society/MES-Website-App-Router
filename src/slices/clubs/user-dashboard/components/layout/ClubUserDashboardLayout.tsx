import * as React from 'react';

import ClubsSidebarItems from '@/constant/clubs-dashboard/ClubsSidebarItems';
import { ClubsSidebar } from '@/slices/clubs/user-dashboard/components/layout/ClubsSidebar';
import TaskBanner from '@/slices/clubs/user-dashboard/components/layout/TaskBanner';

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
      <ClubsSidebar items={ClubsSidebarItems} clubName='Team Name' />
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
