import SidebarItem from '@/types/clubs-dashboard/SidebarItemType';

export interface sidebarProfileProps {
  open: boolean;
  name: string;
}

type SidebarProps = {
  items: SidebarItem[];
  profile: React.ComponentType<sidebarProfileProps>;
  profileProps: Omit<sidebarProfileProps, 'open'>; // good way to let other things pass in all props for the profile except for open.
};

export default SidebarProps;
