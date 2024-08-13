// app/dashboard/page.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import DocumentDashboard from '@/components/clubs-portal/document-editor/DocumentDashboard';

export default function DashboardPage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DocumentDashboard />
    </QueryClientProvider>
  );
}
