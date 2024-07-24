import React from 'react';

import './index.css';

import PageLayout from '@/components/layout/PageLayout';

import { Tiptap } from './Tiptap';

export default function ConferencesPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <div className='bg-white'>
          <Tiptap />
        </div>
      </main>
    </PageLayout>
  );
}
