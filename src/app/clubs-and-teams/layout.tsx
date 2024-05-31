import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Clubs and Teams',
  description:
    'Learn about the various clubs and teams that are part of the McMaster Engineering Society.',
};

export default function ClubsAndTeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
