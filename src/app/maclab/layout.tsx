import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'MacLAB',
  description: 'Learn about the macLAB funding program.',
};

export default function MacLABLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
