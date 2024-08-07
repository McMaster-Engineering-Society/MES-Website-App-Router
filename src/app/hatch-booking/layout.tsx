import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'New Booking System',
  description: 'Book a meeting room in Gerald Hatch Centre.',
};

export default function NewBookingSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
