export type HatchRoomType = {
  roomName: string;
  capacity: number;
  outlets: number;
  resources: { [resource: string]: boolean }; //value is true IF resource is available, false IF unavailable. Resources currently includes: TV, Whiteboard
  img: string;
};

export const HatchRoomsData: HatchRoomType[] = [
  {
    roomName: 'H201',
    capacity: 16,
    outlets: 10,
    resources: {
      TV: true,
      Whiteboard: false,
    },
    img: '/images/bookings/the-junction.jpg',
  },
  {
    roomName: 'H203',
    capacity: 6,
    outlets: 4,
    resources: {
      TV: true,
      Whiteboard: true,
    },
    img: '/images/bookings/the-junction.jpg',
  },
  {
    roomName: 'H204A',
    capacity: 10,
    outlets: 6,
    resources: {
      TV: true,
      Whiteboard: true,
    },
    img: '/images/bookings/the-junction.jpg',
  },
  {
    roomName: 'H204B',
    capacity: 10,
    outlets: 6,
    resources: {
      TV: true,
      Whiteboard: true,
    },
    img: '/images/bookings/the-junction.jpg',
  },
  {
    roomName: 'H205',
    capacity: 4,
    outlets: 4,
    resources: {
      TV: true,
      Whiteboard: false,
    },
    img: '/images/bookings/the-junction.jpg',
  },
];
