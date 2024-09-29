'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';

import ClubAdministrationContent from '@/slices/clubs/club-profile/components/ClubAdministrationContent';
import ClubUserDashboardLayout from '@/slices/clubs/user-dashboard/components/layout/ClubUserDashboardLayout';

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
