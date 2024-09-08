import { redirect } from 'next/navigation';

import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';

import AdminDashboardPage from '@/app/hatch-booking/admin-dashboard/AdminDashboardPage';

const AdminPage = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else {
    return <AdminDashboardPage />;
  }
};

export default AdminPage;
