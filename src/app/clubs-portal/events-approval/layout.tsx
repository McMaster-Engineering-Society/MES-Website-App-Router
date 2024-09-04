import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Clubs Portal - Events Approval',
  description: 'A web portal for clubs forms to be approved',
};

export default function ClubsPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
