import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Directors',
  description: 'A list of the current directors for the MES council.',
};

export default function Directors({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
