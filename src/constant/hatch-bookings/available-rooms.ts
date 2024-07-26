export type HatchRoomType = {
  roomNum: string;
  capacity: number;
  outlets: number;
  resources: string[]; //tv, whiteboard
  img: string;
};

export const AvailableRooms: HatchRoomType[] = [
  {
    roomNum: '201',
    capacity: 16,
    outlets: 10,
    resources: ['TV'],
    img: '/images/bookings/the-junction.jpg',
  },
  {
    roomNum: '203A',
    capacity: 6,
    outlets: 4,
    resources: ['TV', 'Whiteboard'],
    img: '/images/bookings/the-junction.jpg',
  },
  {
    roomNum: '204',
    capacity: 10,
    outlets: 6,
    resources: ['TV', 'Whiteboard'],
    img: '/images/bookings/the-junction.jpg',
  },
  {
    roomNum: '205',
    capacity: 4,
    outlets: 4,
    resources: ['Whiteboard'],
    img: '/images/bookings/the-junction.jpg',
  },
];
