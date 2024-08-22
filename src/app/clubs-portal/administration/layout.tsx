import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Club Administration',
  description:
    'A page where clubs administrators can manage their club profile',
};

export default function ClubAdministrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
