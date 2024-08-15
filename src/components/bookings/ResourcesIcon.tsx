import { Presentation as Whiteboard } from 'lucide-react';
import { FileQuestion } from 'lucide-react';
import { Tv } from 'lucide-react';
import React from 'react';

type Props = {
  resource: string;
};

// Contains all hatch room resources icon to display in available rooms component
function ResourcesIcon({ resource }: Props) {
  // add resource name IN LOWERCASE, followed by its icon
  const resources: { [key: string]: JSX.Element } = {
    whiteboard: <Whiteboard className='mr-1' />,
    tv: <Tv className='mr-1' />,
    default: <FileQuestion className='mr-1' />,
  };

  return <>{resources[resource.toLowerCase()] || resources['default']}</>;
}

export default ResourcesIcon;
