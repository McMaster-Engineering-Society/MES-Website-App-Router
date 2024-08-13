'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import PageLayout from '@/components/layout/PageLayout';

const queryClient = new QueryClient();

export default function DocumentsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout>hi</PageLayout>
    </QueryClientProvider>
  );
}
