import { FileQuestion, Presentation as Whiteboard, Tv } from 'lucide-react';
import React from 'react';
import { BsProjector as Projector } from 'react-icons/bs';

type Props = {
  resource: string;
};

// Contains all hatch room resources icon to display in available rooms component
function ResourcesIcon({ resource }: Props) {
  // add resource name IN LOWERCASE, followed by its icon
  const resources: { [key: string]: JSX.Element } = {
    whiteboard: <Whiteboard className='mr-1 w-[20px]' />,
    tv: <Tv className='mr-1 w-[20px]' />,
    projector: <Projector className='mr-1 w-[20px]' />,
    default: <FileQuestion className='mr-1 w-[20px]' />,
  };

  return <>{resources[resource.toLowerCase()] || resources['default']}</>;
}

export default ResourcesIcon;
