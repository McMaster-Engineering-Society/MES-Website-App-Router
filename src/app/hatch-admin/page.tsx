import ServerSignInGate from '@slices/auth/components/ServerSignInGate';
import SignInGatePage from '@slices/auth/components/SignInGatePage';

import AdminDashboardPage from '@/app/hatch-admin/AdminDashboardPage';

const requireSignIn = true;
const href = '/auth/sign-in';

const AdminPage = async () => {
  await ServerSignInGate({ requireSignIn: requireSignIn, href: href });
  return (
    <SignInGatePage
      requireSignIn={requireSignIn}
      href={href}
      adminRequired={true}
    >
      <AdminDashboardPage />
    </SignInGatePage>
  );
};

export default AdminPage;
