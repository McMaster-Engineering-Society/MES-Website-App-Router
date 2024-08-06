import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Clubs Portal',
  description:
    'A web portal for clubs where they can obtain all the information they need from MES',
};

export default function ClubsPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
