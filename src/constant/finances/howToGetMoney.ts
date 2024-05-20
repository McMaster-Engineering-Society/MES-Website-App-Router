type HowToGetMoney = {
  title: string;
  link: string;
  disabled?: boolean;
};

// title, hred, enabled or disabled for How to Get Money Section
const howToGetMoneyArray: HowToGetMoney[] = [
  {
    title: 'Department Clubs',
    link: '/pdfs/finances/department-clubs-funding-guide.pdf',
  },
  {
    title: 'Groups and Teams',
    link: '/pdfs/finances/groups-and-teams-funding-guide.pdf',
  },
  {
    title: 'Special Projects',
    link: '/special-projects',
  },
  {
    title: 'Intramurals',
    link: '/pdfs/finances/intramural-reimbursement-process.pdf',
  },
  {
    title: 'Conferences and Competitions',
    link: '/pdfs/finances/conferences-and-competitions-funding-guide.pdf',
  },
];

export default howToGetMoneyArray;
