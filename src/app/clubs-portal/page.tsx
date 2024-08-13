'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { TipTapWrapper } from '@/components/clubs-portal/document-editor/TipTapWrapper';
import PageLayout from '@/components/layout/PageLayout';

const queryClient = new QueryClient();

export default function ConferencesPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout>
        <div className='bg-white'>
          <TipTapWrapper />
        </div>
      </PageLayout>
    </QueryClientProvider>
  );
}
