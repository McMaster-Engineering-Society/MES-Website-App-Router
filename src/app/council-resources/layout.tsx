import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import PageLayout from '@/components/layout/PageLayout';

export const metadata: Metadata = {
  title: 'Council Resources',
  description: 'Office hours, forms, and links for MES-related enquiries.',
};

export default function CouncilResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
