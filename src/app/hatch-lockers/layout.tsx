import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Hatch Lockers',
  description: 'Information about reserving Hatch Centre project lockers.',
};

export default function HatchLockersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
