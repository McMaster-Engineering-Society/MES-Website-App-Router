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
    officeHours: [
      {
        day: 'Tuesday',
        time: '11:00 AM - 12:00 PM',
      },
      {
        day: 'Thursday',
        time: '9:30 AM - 10:30 AM',
      },
    ],
  },
  {
    name: 'Alexis Moutafis-Tymcio',
    image: '/images/council/alexis-moutafis-tymcio.jpg',
    position: 'VP Academic',
    officeHours: [
      {
        day: 'Monday',
        time: '2:30 PM - 3:30 PM',
      },
      {
        day: 'Thursday',
        time: '2:30 PM - 3:30 PM',
      },
    ],
  },
  {
    name: 'Mason Wu',
    image: '/images/council/mason-wu.jpg',
    position: 'VP Communications',
    officeHours: [
      {
        day: 'Tuesday',
        time: '12:30 PM - 1:30 PM',
      },
      {
        day: 'Wednesday',
        time: '12:30 PM - 1:30 PM',
      },
    ],
  },
  {
    name: 'Simone Ocvirk',
    image: '/images/council/simone-ocvirk.jpeg',
    position: 'VP External',
    officeHours: [
      {
        day: 'Wednesday',
        time: '3:00 PM - 5:00 PM',
      },
    ],
  },
  {
    name: 'Luke Schuurman',
    image: '/images/council/luke-schuurman.png',
    position: 'VP Internal',
    officeHours: [
      {
        day: 'Monday',
        time: '10:30 AM - 11:30 AM',
      },
      {
        day: 'Wednesday',
        time: '10:30 AM - 11:30 AM',
      },
    ],
  },
  {
    name: 'Spring Fu',
    image: '/images/council/spring-fu.jpg',
    position: 'VP Finance',
    officeHours: [
      {
        day: 'Thursday',
        time: '10:30 AM - 11:30 AM',
      },
      {
        day: 'Friday',
        time: '11:30 AM - 12:30 PM',
      },
    ],
  },
  {
    name: 'Ayesha Basu',
    image: '/images/council/ayesha-basu.jpg',
    position: 'VP Student Life',
    officeHours: [
      {
        day: 'Monday',
        time: '1:30 PM - 2:30 PM',
      },
      {
        day: 'Wednesday',
        time: '1:30 PM - 2:30 PM',
      },
    ],
  },
  {
    name: 'Bryson Carey',
    image: '/images/council/bryson-carey.png',
    position: 'AVP Academic Resources',
    officeHours: [
      {
        day: 'Friday',
        time: '1:30 PM - 2:30 PM',
      },
    ],
  },
  {
    name: 'Jordan Classen',
    image: '/images/council/jordan-classen.jpg',
    position: 'AVP Clubs & Services',
    officeHours: [
      {
        day: 'Thursday',
        time: '11:30 AM - 12:30 PM',
      },
    ],
  },
  {
    name: 'Emily Attai',
    image: '/images/council/emily-attai.png',
    position: 'AVP Events',
    officeHours: [
      {
        day: 'Tuesday',
        time: '4:30 PM - 5:30 PM',
      },
    ],
  },
  {
    name: 'Armina Aryaie',
    image: '/images/council/armina-aryaie.jpg',
    position: 'Administrator',
    officeHours: [
      {
        day: 'Monday',
        time: '3:30 PM - 4:30 PM',
      },
    ],
  },
  {
    name: 'Annabelle Heys',
    image: '/images/council/annabelle-heys.jpg',
    position: 'Chief Returning Officer',
    officeHours: [
      {
        day: 'Thursday',
        time: '3:30 PM - 4:30 PM',
      },
    ],
  },
  {
    name: "Hala Zou'bi",
    image: '/images/council/hala-zoubi.jpeg',
    position: 'Equity & Inclusion Officer',
    officeHours: [
      {
        day: 'Tuesday',
        time: '2:30 PM - 3:30 PM',
      },
    ],
  },
  {
    name: 'Amy & Ansh',
    image: '/images/council/amy-and-ansh.jpg',
    position: 'Co-orientation Coordinators',
    officeHours: [
      {
        day: 'By appointment only',
        time: 'coocs@macengsociety.ca',
      },
    ],
  },
];
