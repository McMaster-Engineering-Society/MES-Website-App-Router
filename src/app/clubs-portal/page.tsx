import React from 'react';

import { TipTapWrapper } from '@/components/clubs-portal/document-editor/TipTapWrapper';
import PageLayout from '@/components/layout/PageLayout';

export default function ConferencesPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <div className='bg-white'>
          <TipTapWrapper />
        </div>
      </main>
    </PageLayout>
  );
}
