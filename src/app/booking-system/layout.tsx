import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

import { SessionProvider } from '@/lib/context/SessionContext';

export const metadata: Metadata = {
  title: 'Booking System',
  description: 'Book a meeting room in Gerald Hatch Centre.',
};

export default function BookingSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
