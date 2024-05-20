import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Appointed Coordinators',
  description:
    'A list of the current appointed coordinators for the MES council.',
};

export default function AppointedCoordinatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
