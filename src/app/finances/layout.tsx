import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Finances',
  description: 'Receive MES funding, and MES budget overview.',
};

export default function FinancesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
