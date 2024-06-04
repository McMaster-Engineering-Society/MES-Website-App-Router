import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Department & Program Reps',
  description: 'List of the current MES department & program reps.',
};

export default function DeptProgramRepsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
