import * as React from 'react';

import ClubAdministrationContent from '@/components/clubs-portal/administration/ClubAdministrationContent';
import ClubUserDashboardLayout from '@/components/layout/clubs-user-dashboard/ClubUserDashboardLayout';

export default function ClubsPortal() {
  return (
    <ClubUserDashboardLayout pageName='Club Administration'>
      <ClubAdministrationContent />
    </ClubUserDashboardLayout>
  );
}
