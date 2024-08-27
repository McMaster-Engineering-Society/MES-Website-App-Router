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
    img: '/images/bookings/room201.jpg',
  },
  {
    roomName: 'H203',
    capacity: 6,
    outlets: 4,
    resources: {
      TV: true,
      Whiteboard: true,
    },
    img: '/images/bookings/room203.jpg',
  },
  {
    roomName: 'H204A',
    capacity: 10,
    outlets: 6,
    resources: {
      TV: true,
      Whiteboard: true,
    },
    img: '/images/bookings/room204a.jpg',
  },
  {
    roomName: 'H204B',
    capacity: 10,
    outlets: 6,
    resources: {
      TV: true,
      Whiteboard: true,
    },
    img: '/images/bookings/room204b.jpg',
  },
  {
    roomName: 'H205',
    capacity: 40,
    outlets: 4,
    resources: {
      TV: true,
      Whiteboard: false,
    },
    img: '/images/bookings/room205.jpg',
  },
];
