import Sidebar from '@/components/layout/clubs-user-dashboard/Sidebar';

import { sidebarItems } from '@/constant/clubs-dashboard/AdminSidebarItems';

const AdminSidebar = () => {
  return <Sidebar items={sidebarItems} />;
};

export default AdminSidebar;
