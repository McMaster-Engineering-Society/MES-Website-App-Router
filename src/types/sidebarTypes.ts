import { IconType } from 'react-icons/lib';

export type SidebarItem = {
  name: string;
  icon: IconType;
  link: string;
};

export interface SidebarProfileProps {
  open: boolean;
  name: string;
}

type SidebarProps = {
  items: SidebarItem[];
  profile: React.ComponentType<SidebarProfileProps>;
  profileProps: Omit<SidebarProfileProps, 'open'>; // good way to let other things pass in all props for the profile except for open.
};

export default SidebarProps;
