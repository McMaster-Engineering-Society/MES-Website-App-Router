import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'The Frequency',
  description: 'The Frequency publication.',
};

export default function FrequencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
