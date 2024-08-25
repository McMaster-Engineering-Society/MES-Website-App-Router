import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'UHS Form',
  description: 'Filling out form for in-person events',
};

export default function UHSFormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
