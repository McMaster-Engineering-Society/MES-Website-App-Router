import AdminSidebarItems from '@/constant/clubs-dashboard/AdminSidebarItems';
import { ManageClubsSection } from '@/slices/clubs/admin-dashboard/components/ManageClubs';
import UHSForms from '@/slices/clubs/admin-dashboard/components/UHSForms';
import { ClubsSidebar } from '@/slices/clubs/user-dashboard/components/layout/ClubsSidebar';

const PendingUHSForms = () => {
  return (
    <div>
      <h3>Pending UHS Forms</h3>
    </div>
  );
};

export default function AdminPortal() {
  return (
    <div className='AdminPortal'>
      <div className='flex h-screen w-screen'>
        <ClubsSidebar items={AdminSidebarItems} clubName='Admin' />
        <div className='w-full px-12 pt-12'>
          <h1>Admin Dashboard</h1>
          <div className='w-full px-0 pt-12'>
            <PendingUHSForms />
          </div>
          <div className='w-full h-1/2 px-0 pt-12'>
            <UHSForms />
          </div>
          <ManageClubsSection />
        </div>
      </div>
    </div>
  );
}
