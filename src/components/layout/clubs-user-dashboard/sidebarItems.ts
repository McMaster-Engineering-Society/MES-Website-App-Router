import { SvgIconComponent } from '@mui/icons-material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ConstructionIcon from '@mui/icons-material/Construction';
import HelpIcon from '@mui/icons-material/Help';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonIcon from '@mui/icons-material/Person';

const url = '/clubs-portal';
export const sidebarItems: SidebarItem[] = [
  {
    name: 'Expenses',
    icon: LocalAtmIcon,
    link: `${url}/expenses`,
  },
  {
    name: 'Events Approval',
    icon: CheckBoxIcon,
    link: `${url}/events-approval`,
  },
  {
    name: 'Room Booking',
    icon: MeetingRoomIcon,
    link: `${url}/room-booking`,
  },
  {
    name: 'Rentals and Services',
    icon: ConstructionIcon,
    link: `${url}/rentals-and-services`,
  },
  {
    name: 'Resources',
    icon: HelpIcon,
    link: `${url}/help`,
  },
  {
    name: 'Club Administration',
    icon: PersonIcon,
    link: `${url}/club-administration`,
  },
];

type SidebarItem = {
  name: string;
  icon: SvgIconComponent;
  link: string;
};
