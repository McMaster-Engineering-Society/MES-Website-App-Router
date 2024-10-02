import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'First Year Society',
  description: 'List of the current MES first year society leaders.',
};

export default function FirstYearSocietyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
