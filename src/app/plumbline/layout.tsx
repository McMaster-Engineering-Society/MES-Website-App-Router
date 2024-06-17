import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'The Plumbline',
  description:
    'The Plumbline publication, a satirical publication for students.',
};

export default function PlumblineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
