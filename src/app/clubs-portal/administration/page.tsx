'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';

import ClubAdministrationContent from '@/components/clubs-portal/administration/ClubAdministrationContent';
import ClubUserDashboardLayout from '@/components/layout/clubs-user-dashboard/ClubUserDashboardLayout';

const queryClient = new QueryClient();
export default function ClubsPortal() {
  return (
    <ClubUserDashboardLayout pageName='Club Administration'>
      <QueryClientProvider client={queryClient}>
        <ClubAdministrationContent />
      </QueryClientProvider>
    </ClubUserDashboardLayout>
  );
}
