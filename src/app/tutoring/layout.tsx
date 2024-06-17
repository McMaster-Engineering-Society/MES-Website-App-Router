import { Metadata } from 'next';
import * as React from 'react';

import '@/styles/colors.css';

export const metadata: Metadata = {
  title: 'Tutoring',
  description:
    'The Undergraduate Peer Tutoring Network (UPTN) makes it easy for you to find a tutor who can help with specific course content. Peer tutors are McMaster undergraduate students who have completed and earned at least an A- (10.0) grade in the course(s) they are tutoring.',
};

export default function TutoringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
