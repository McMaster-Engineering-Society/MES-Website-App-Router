import { SiGooglecalendar, SiMicrosoftoutlook } from 'react-icons/si';

import DropdownLinkItem from '@/types/dropdownLinkItem';

export const googleLinks: DropdownLinkItem[] = [
  {
    text: 'Google Calendar',
    url: 'https://calendar.google.com/calendar/u/0?cid=bWFjZW5nc29jaWV0eS5jYV8xMjg3YmV2aWhndnBwbTBib3VtcmE3ZWI2Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
    icon: <SiGooglecalendar />,
  },
  // {
  //   text: 'Elections',
  //   url: 'https://calendar.google.com/calendar/u/0?cid=Y19hNTIyYjI3MzE5ODg4ODU2NmIyOTAxN2YzMTdkOTNlYzNlMTJlOTY3ZDNkYTU1NTgwZWIzNGNlNTAzODVmN2EzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20',
  // },
  // {
  //   text: 'Office Hours',
  //   url: 'https://calendar.google.com/calendar/u/0?cid=bWFjZW5nc29jaWV0eS5jYV9hdDYwbWUyZmVkZ21xN2prdDh0c2I5dDc2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
  // },
];

export const outlookLinks: DropdownLinkItem[] = [
  {
    text: 'Outlook Calendar',
    url: 'https://calendar.google.com/calendar/ical/macengsociety.ca_1287bevihgvppm0boumra7eb6c%40group.calendar.google.com/public/basic.ics',
    icon: <SiMicrosoftoutlook />,
  },
  // {
  //   text: 'Elections',
  //   url: 'https://calendar.google.com/calendar/ical/c_a522b273198888566b29017f317d93ec3e12e967d3da55580eb34ce50385f7a3%40group.calendar.google.com/public/basic.ics',
  // },
  // {
  //   text: 'Office Hours',
  //   url: 'https://calendar.google.com/calendar/ical/macengsociety.ca_at60me2fedgmq7jkt8tsb9t768%40group.calendar.google.com/public/basic.ics',
  // },
];
