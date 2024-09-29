'use client';
import { FaHouse } from 'react-icons/fa6';
import { FaScroll } from 'react-icons/fa6';
import { FaSquareCheck } from 'react-icons/fa6';
import { FaDoorOpen } from 'react-icons/fa6';
import { FaNewspaper } from 'react-icons/fa6';
import { FaCalendarDays } from 'react-icons/fa6';
import { FaPeopleGroup } from 'react-icons/fa6';

import { SidebarItem } from '@/types/sidebarTypes';

const url = '/clubs-portal/admin';
const sidebarItems: SidebarItem[] = [
  {
    name: 'Admin Dashboard',
    icon: FaHouse,
    link: `${url}`,
  },
  {
    name: 'Documentation',
    icon: FaScroll,
    link: `${url}/expenses`,
  },
  {
    name: 'Add/Remove Club',
    icon: FaSquareCheck,
    link: `${url}/events-approval`,
  },
  {
    name: 'View all Clubs',
    icon: FaPeopleGroup,
    link: `${url}/room-booking`,
  },
  {
    name: 'View all Events',
    icon: FaCalendarDays,
    link: `${url}/rentals-and-services`,
  },
  {
    name: 'UHS Forms',
    icon: FaNewspaper,
    link: `${url}/help`,
  },
  {
    name: 'Room Bookings',
    icon: FaDoorOpen,
    link: `${url}/club-administration`,
  },
];

export default sidebarItems;
