export const navItems: NavItem[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Council',
    dropdownItems: [
      { title: 'Executives', link: '/executives' },
      { title: 'Associate Vice Presidents', link: '/avps' },
      { title: 'Dept. & Program Reps', link: '/dept-and-program-reps' },
      { title: 'Appointed Coordinators', link: '/appointed-coordinators' },
    ],
  },
  {
    title: 'Elections',
    link: '/elections',
  },
  {
    title: 'Publications',
    dropdownItems: [
      // { title: 'The Plumbline', link: '/plumbline' },
      { title: 'The Frequency', link: '/frequency' },
    ],
  },
  {
    title: 'Services',
    dropdownItems: [
      { title: 'Tutoring', link: '/tutoring' },
      // Temporary removal of Special Projects page
      // { title: 'Special Projects', link: '/special-projects' },
      { title: 'Wellness', link: '/wellness' },
      // Temporary removal of MES Card page
      // { title: 'MES Card', link: '/mes-card' },
      { title: 'Hatch Lockers', link: '/hatch-lockers' },
    ],
  },
  {
    title: 'Administration',
    dropdownItems: [
      { title: 'Council Resources', link: '/council-resources' },
      { title: 'Governing Documents', link: '/governing-documents' },
      { title: 'macLAB', link: '/maclab' },
      { title: 'Finances', link: '/finances' },
    ],
  },
  {
    title: 'Get Involved',
    dropdownItems: [
      { title: 'Clubs & Teams', link: '/clubs-and-teams' },
      { title: 'Conferences', link: '/conferences' },
      { title: 'Events', link: '/events' },
    ],
  },
  {
    title: 'Hatch Room Bookings',
    link: '/bookings',
  },
];

type NavItem = {
  title: string;
  link?: string;
  dropdownItems?: NavItem[];
};
