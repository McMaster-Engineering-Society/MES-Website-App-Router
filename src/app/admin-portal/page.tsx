import ManageClubs from '@/components/admin-portal/ManageClubs';
import UHSForms from '@/components/admin-portal/UHSForms';
import AdminSidebar from '@/components/layout/clubs-user-dashboard/AdminSidebar';

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
        <AdminSidebar />
        <div className='w-full px-12 pt-12'>
          <h1>Admin Dashboard</h1>
          <div className='w-full px-0 pt-12'>
            <PendingUHSForms />
          </div>
          <div className='w-full h-1/2 px-0 pt-12'>
            <UHSForms />
          </div>
          <ManageClubs />
        </div>
      </div>
    </div>
  );
}
