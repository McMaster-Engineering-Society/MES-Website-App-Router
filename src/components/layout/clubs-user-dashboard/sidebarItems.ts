import { AiOutlineDollarCircle } from 'react-icons/ai';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { IoIosHelpCircleOutline } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { LiaToolsSolid } from 'react-icons/lia';
import { IconType } from 'react-icons/lib';
import { MdOutlineDoorBack } from 'react-icons/md';
import { PiCheckSquare } from 'react-icons/pi';
const url = '/clubs-portal';
export const sidebarItems: SidebarItem[] = [
  {
    name: 'Dashboard',
    icon: HiOutlineSquares2X2,
    link: `${url}/dashboard`,
  },
  {
    name: 'Expenses',
    icon: AiOutlineDollarCircle,
    link: `${url}/expenses`,
  },
  {
    name: 'Events Approval',
    icon: PiCheckSquare,
    link: `${url}/events-approval`,
  },
  {
    name: 'Room Booking',
    icon: MdOutlineDoorBack,
    link: `${url}/room-booking`,
  },
  {
    name: 'Rentals and Services',
    icon: LiaToolsSolid,
    link: `${url}/rentals-and-services`,
  },
  {
    name: 'Resources',
    icon: IoIosHelpCircleOutline,
    link: `${url}/help`,
  },
  {
    name: 'Club Administration',
    icon: IoPersonOutline,
    link: `${url}/club-administration`,
  },
];

type SidebarItem = {
  name: string;
  icon: IconType;
  link: string;
};
