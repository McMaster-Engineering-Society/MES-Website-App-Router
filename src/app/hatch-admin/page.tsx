import ServerSignInGatePage from '@/components/auth/ServerSignInGatePage';
import SignInGatePage from '@/components/auth/SignInGatePage';

import AdminDashboardPage from '@/app/hatch-admin/AdminDashboardPage';

const requireSignIn = true;
const href = '/auth/sign-in';

const AdminPage = async () => {
  await ServerSignInGatePage({ requireSignIn: requireSignIn, href: href });
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
