import { redirect } from 'next/navigation';

import { checkIsAuthenticated } from '@/lib/auth/emailSignInHelper';
import { useSessionContext } from '@/lib/context/SessionContext';

import AdminDashboardPage from '@/app/hatch-admin-dashboard/AdminDashboardPage';

const AdminPage = async () => {
  const isAuthenticated = await checkIsAuthenticated();
  const { isAdmin } = useSessionContext();

  if (!isAuthenticated) {
    redirect('/auth/sign-in');
  } else if (!isAdmin) {
    // Redirects user to regular booking page if they are not an admin.
    redirect('/hatch-booking/new-booking');
  } else {
    return <AdminDashboardPage />;
  }
};

export default AdminPage;
