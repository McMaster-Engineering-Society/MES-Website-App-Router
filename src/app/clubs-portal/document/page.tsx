'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { TipTapWrapper } from '@/components/clubs-portal/document-editor/TipTapWrapper';

const queryClient = new QueryClient();

export default function DocumentsPage() {
  const searchParams = useSearchParams();
  const docId = searchParams.get('docId') || '';

  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-white'>
        <TipTapWrapper docId={docId} />
      </div>
    </QueryClientProvider>
  );
}
