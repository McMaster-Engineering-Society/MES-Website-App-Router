import { getRandomColour } from '@/lib/helper';

type GetMoney = {
  title: string;
  link: string;
  colour: string;
};

const getMoneyArray: GetMoney[] = [
  {
    title: 'Expense Report',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeG-pjzdVEXAuYhoB2scI93P_Oafy0vEQXsZhWzVT5HpyhLfg/viewform',
    colour: getRandomColour(),
  },
  // {
  //   title: 'Clubs and Teams Sponsorship Checklist',
  //   link: '/pdfs/finances/clubs-and-teams-sponsorship-checklist.pdf',
  //   colour: getRandomColour(),
  // },
  // {
  //   title: 'SAGM Department Funding',
  //   link: '/pdfs/finances/department-club-funding.pdf',
  //   colour: getRandomColour(),
  // },
  // {
  //   title: 'Interdepartmental Transfer of Funds',
  //   link: '/pdfs/finances/interdepartmental-transfer-of-funds.pdf',
  //   colour: getRandomColour(),
  // },
  // {
  //   title: 'Special Projects Funding Application',
  //   link: 'https://airtable.com/appeTdwccCOeO23yY/shrmdllXw1LJo1BYg',
  //   colour: getRandomColour(),
  // },
  // {
  //   title: 'Conferences and Competitions Funding Application',
  //   link: '/pdfs/finances/conferences-and-competitions-funding-application.pdf',
  //   colour: getRandomColour(),
  // },
  // {
  //   title: 'Review Engagement',
  //   link: '/pdfs/finances/review-engagement.pdf',
  //   colour: getRandomColour(),
  // },
];

export default getMoneyArray;
