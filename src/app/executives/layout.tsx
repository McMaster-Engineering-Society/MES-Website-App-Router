import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Executives',
  description: 'List of the current MES executives.',
};

export default function ExecutivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
