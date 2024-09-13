import ServerSignInGatePage from '@/components/auth/ServerSignInGatePage';
import SignInGatePage from '@/components/auth/SignInGatePage';

import AdminDashboardPage from '@/app/hatch-admin-dashboard/AdminDashboardPage';

const requireSignIn = true;
const href = '/auth/sign-in';

const AdminPage = () => {
  return (
    <ServerSignInGatePage requireSignIn={requireSignIn} href={href}>
      <SignInGatePage
        requireSignIn={requireSignIn}
        href={href}
        adminRequired={true}
      >
        <AdminDashboardPage />
      </SignInGatePage>
    </ServerSignInGatePage>
  );
};

export default AdminPage;
