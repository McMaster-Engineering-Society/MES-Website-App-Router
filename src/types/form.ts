export type Form = {
  id: number;
  name: string;
  clubId: number;
  clubName: string;
  description?: string;
  day: number;
  month: number;
  year: number;
  startTime: string;
  endTime: string;
  building: string;
  room: string;
  type: 'UHS Form' | 'Room Booking';
  status: 'approved' | 'pending' | 'rejected';
  reportee?: string;
  partySize?: number;
};

export const sampleForms = [
  {
    id: 1,
    name: 'Movie Night',
    clubId: 15,
    clubName: 'Film Society',
    description:
      'gathering all the club members to enjoy a night of classics, with popcorn and drinks provided. we would like to book the room... for this event.',
    day: 30,
    month: 3,
    year: 2024,
    startTime: '12:00',
    endTime: '14:00',
    building: 'JHE',
    room: '311',
    type: 'UHS Form' as Form['type'],
    status: 'approved' as Form['status'],
    reportee: 'John Doe',
    partySize: 50,
  },
  {
    id: 2,
    name: 'Presentation',
    clubId: 1,
    clubName: 'Film Society',
    day: 21,
    month: 1,
    year: 2024,
    startTime: '12:00',
    endTime: '14:00',
    building: 'MDCL',
    room: '112',
    type: 'Room Booking' as Form['type'],
    status: 'rejected' as Form['status'],
  },
  {
    id: 3,
    name: 'Social Event',
    clubId: 1,
    clubName: 'Film Society',
    day: 7,
    month: 1,
    year: 2024,
    startTime: '12:00',
    endTime: '14:00',
    building: 'BSB',
    room: '107',
    type: 'UHS Form' as Form['type'],
    status: 'pending' as Form['status'],
  },
  {
    id: 4,
    name: 'Workshop',
    clubId: 1,
    clubName: 'Film Society',
    day: 30,
    month: 5,
    year: 2024,
    startTime: '15:00',
    endTime: '17:00',
    building: 'PGCLL',
    room: '127',
    type: 'Room Booking' as Form['type'],
    status: 'approved' as Form['status'],
  },
  {
    id: 5,
    name: 'Presentation',
    clubId: 1,
    clubName: 'Film Society',
    day: 30,
    month: 5,
    year: 2024,
    startTime: '15:00',
    endTime: '17:00',
    building: 'PGCLL',
    room: '127',
    type: 'UHS Form' as Form['type'],
    status: 'approved' as Form['status'],
  },
  {
    id: 6,
    name: 'Movie Night',
    clubId: 15,
    clubName: 'Film Society',
    day: 30,
    month: 5,
    year: 2024,
    startTime: '12:00',
    endTime: '14:00',
    building: 'JHE',
    room: '311',
    type: 'UHS Form' as Form['type'],
    status: 'approved' as Form['status'],
  },
  {
    id: 7,
    name: 'Presentation',
    clubId: 1,
    clubName: 'Film Society',
    day: 21,
    month: 5,
    year: 2024,
    startTime: '12:00',
    endTime: '14:00',
    building: 'MDCL',
    room: '112',
    type: 'UHS Form' as Form['type'],
    status: 'rejected' as Form['status'],
  },
  {
    id: 8,
    name: 'Social Event',
    clubId: 1,
    clubName: 'Film Society',
    day: 7,
    month: 5,
    year: 2024,
    startTime: '12:00',
    endTime: '14:00',
    building: 'BSB',
    room: '107',
    type: 'Room Booking' as Form['type'],
    status: 'pending' as Form['status'],
  },
  {
    id: 9,
    name: 'Workshop',
    clubId: 1,
    clubName: 'Film Society',
    day: 30,
    month: 5,
    year: 2024,
    startTime: '15:00',
    endTime: '17:00',
    building: 'PGCLL',
    room: '127',
    type: 'UHS Form' as Form['type'],
    status: 'approved' as Form['status'],
  },
  {
    id: 10,
    name: 'Presentation',
    clubId: 1,
    clubName: 'Film Society',
    day: 7,
    month: 1,
    year: 2025,
    startTime: '15:00',
    endTime: '17:00',
    building: 'PGCLL',
    room: '127',
    type: 'Room Booking' as Form['type'],
    status: 'approved' as Form['status'],
  },
];