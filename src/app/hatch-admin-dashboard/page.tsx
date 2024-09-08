import SignInGatePage from '@/components/auth/SignInGatePage';

import AdminDashboardPage from '@/app/hatch-admin-dashboard/AdminDashboardPage';

const AdminPage = () => {
  return (
    <SignInGatePage
      requireSignIn={true}
      href='/auth/sign-in'
      adminRequired={true}
    >
      <AdminDashboardPage />
    </SignInGatePage>
  );
};

export default AdminPage;
