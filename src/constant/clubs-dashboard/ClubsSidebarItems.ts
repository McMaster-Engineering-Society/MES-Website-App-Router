'use client';
import { FaHouse } from 'react-icons/fa6';
import { FaMoneyBill } from 'react-icons/fa6';
import { FaSquareCheck } from 'react-icons/fa6';
import { FaDoorOpen } from 'react-icons/fa6';
import { FaScrewdriverWrench } from 'react-icons/fa6';
import { FaCircleQuestion } from 'react-icons/fa6';
import { FaUserLarge } from 'react-icons/fa6';

import { SidebarItem } from '@/types/sidebarTypes';

const url = '/clubs-portal';
const sidebarItems: SidebarItem[] = [
  {
    name: 'Main Dashboard',
    icon: FaHouse,
    link: `${url}`,
  },
  {
    name: 'Expenses',
    icon: FaMoneyBill,
    link: `${url}/expenses`,
  },
  {
    name: 'Events Approval',
    icon: FaSquareCheck,
    link: `${url}/events-approval`,
  },
  {
    name: 'Room Booking',
    icon: FaDoorOpen,
    link: `${url}/room-booking`,
  },
  {
    name: 'Rentals and Services',
    icon: FaScrewdriverWrench,
    link: `${url}/rentals-and-services`,
  },
  {
    name: 'Resources',
    icon: FaCircleQuestion,
    link: `${url}/help`,
  },
  {
    name: 'Club Administration',
    icon: FaUserLarge,
    link: `${url}/administration`,
  },
];

export default sidebarItems;
