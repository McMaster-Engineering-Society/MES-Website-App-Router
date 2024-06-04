import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Conferences',
  description: 'Internal and external conferences throughout the year.',
};

export default function ConferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
