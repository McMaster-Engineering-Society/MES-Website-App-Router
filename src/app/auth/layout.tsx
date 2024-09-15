import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import { SessionProvider } from '@/lib/context/SessionContext';
import TanStackQueryProvider from '@/lib/context/TanStackQueryProvider';

export const metadata: Metadata = {
  title: 'Auth',
  description: 'A test page for user authentication.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TanStackQueryProvider>
      <SessionProvider>{children}</SessionProvider>
    </TanStackQueryProvider>
  );
}
