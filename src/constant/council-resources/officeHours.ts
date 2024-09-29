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
    name: 'Alexis Moutafis-Tymcio',
    image: '/images/council-24-25/alexis-moutafis-tymcio.jpg',
    position: 'President',
    officeHours: [],
  },
  {
    name: 'Emily Attai',
    image: '/images/council-24-25/emily-attai.jpg',
    position: 'VP Academic',
    officeHours: [],
  },
  {
    name: 'Annabelle Heys',
    image: '/images/council-24-25/annabelle-heys.jpg',
    position: 'VP Communications',
    officeHours: [],
  },
  {
    name: 'Jackie Fisher',
    image: '/images/council-24-25/jackie-fisher.jpg',
    position: 'VP External',
    officeHours: [],
  },
  {
    name: 'Muskaan Opel',
    image: '/images/council-24-25/muskaan-opel.jpg',
    position: 'VP Internal',
    officeHours: [],
  },
  {
    name: 'Luke Schuurman',
    image: '/images/council-24-25/luke-schuurman.jpg',
    position: 'VP Finance',
    officeHours: [],
  },
  {
    name: 'Pedro Cordeiro',
    image: '/images/council-24-25/pedro-cordeiro.jpg',
    position: 'VP Student Life',
    officeHours: [],
  },
  {
    name: 'Angel Zou',
    image: '/images/council-24-25/angel-zou.jpg',
    position: 'Director of Academic Resources',
    officeHours: [],
  },
  {
    name: 'James Shakespeare',
    image: '/images/council-24-25/james-shakespeare.jpg',
    position: 'Director of Clubs',
    officeHours: [],
  },
  {
    name: 'Will Scott',
    image: '/images/council-24-25/will-scott.jpg',
    position: 'Director of Events',
    officeHours: [],
  },
  {
    name: 'Maliha Mahjabin',
    image: '/images/council-24-25/maliha-mahjabin.jpg',
    position: 'Administrator',
    officeHours: [],
  },
  {
    name: 'Dayton Chan',
    image: '/images/council-24-25/dayton-chan.jpg',
    position: 'Chief Returning Officer',
    officeHours: [],
  },
  {
    name: 'Toluwaleke David Agunbiade',
    image: '/images/council-24-25/toluwaleke-david-agunbiade.jpg',
    position: 'Equity, Diversity and Inclusion Officer',
    officeHours: [],
  },
  {
    name: 'Amy Hall & Ansh Kuckreja',
    image: '/images/council/amy-and-ansh.jpg',
    position: 'Co-orientation Coordinators',
    officeHours: [],
  },
];
