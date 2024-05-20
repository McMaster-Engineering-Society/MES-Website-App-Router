import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'AVPs',
  description:
    'A list of the current associate vice presidents for the MES council.',
};

export default function AVPsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
