import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import TanStackQueryProvider from '@/lib/context/TanStackQueryProvider';

import { SessionProvider } from '@/slices/auth/context/SessionContext';

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
