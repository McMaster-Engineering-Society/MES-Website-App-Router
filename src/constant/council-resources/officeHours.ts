type Timings = {
  day: string;
  time: string;
};

export type OfficeHour = {
  name: string;
  image: string;
  position: string;
  officeHours: Timings[];
};

// TODO: Fix Rosalie's and Alexander's image size, as they are not filling bottom of their circle

export const officeHours: OfficeHour[] = [
  {
    name: 'Eddy Neufeld',
    image: '/images/council/eddy-neufeld-2.jpg',
    position: 'President',
    officeHours: [],
  },
  {
    name: 'Alexis Moutafis-Tymcio',
    image: '/images/council/alexis-moutafis-tymcio.jpg',
    position: 'VP Academic',
    officeHours: [],
  },
  {
    name: 'Mason Wu',
    image: '/images/council/mason-wu.jpg',
    position: 'VP Communications',
    officeHours: [],
  },
  {
    name: 'Simone Ocvirk',
    image: '/images/council/simone-ocvirk.jpeg',
    position: 'VP External',
    officeHours: [],
  },
  {
    name: 'Luke Schuurman',
    image: '/images/council/luke-schuurman.png',
    position: 'VP Internal',
    officeHours: [],
  },
  {
    name: 'Spring Fu',
    image: '/images/council/spring-fu.jpg',
    position: 'VP Finance',
    officeHours: [],
  },
  {
    name: 'Ayesha Basu',
    image: '/images/council/ayesha-basu.jpg',
    position: 'VP Student Life',
    officeHours: [],
  },
  {
    name: 'Bryson Carey',
    image: '/images/council/bryson-carey.png',
    position: 'AVP Academic Resources',
    officeHours: [],
  },
  {
    name: 'Jordan Classen',
    image: '/images/council/jordan-classen.jpg',
    position: 'AVP Clubs & Services',
    officeHours: [],
  },
  {
    name: 'Emily Attai',
    image: '/images/council/emily-attai.png',
    position: 'AVP Events',
    officeHours: [],
  },
  {
    name: 'Armina Aryaie',
    image: '/images/council/armina-aryaie.jpg',
    position: 'Administrator',
    officeHours: [],
  },
  {
    name: 'Annabelle Heys',
    image: '/images/council/annabelle-heys.jpg',
    position: 'Chief Returning Officer',
    officeHours: [],
  },
  {
    name: "Hala Zou'bi",
    image: '/images/council/hala-zoubi.jpeg',
    position: 'Equity & Inclusion Officer',
    officeHours: [],
  },
  {
    name: 'Amy & Ansh',
    image: '/images/council/amy-and-ansh.jpg',
    position: 'Co-orientation Coordinators',
    officeHours: [],
  },
];
