import { RoomResource, THatchRoom } from '@/slices/hatch/booking-page/types';

export const HatchRoomsData: THatchRoom[] = [
  {
    roomName: 'H201',
    capacity: 8,
    outlets: 4,
    resources: {
      [RoomResource.TV]: true,
      [RoomResource.Whiteboard]: false,
      [RoomResource.Projector]: false,
    },
    img: '/images/bookings/room201.jpg',
    enabled: true,
  },
  {
    roomName: 'H203',
    capacity: 6,
    outlets: 4,
    resources: {
      [RoomResource.TV]: true,
      [RoomResource.Whiteboard]: true,
      [RoomResource.Projector]: false,
    },
    img: '/images/bookings/room203.jpg',
    enabled: true,
  },
  {
    roomName: 'H204A',
    capacity: 12,
    outlets: 6,
    resources: {
      [RoomResource.TV]: false,
      [RoomResource.Whiteboard]: true,
      [RoomResource.Projector]: true,
    },
    img: '/images/bookings/room204a.jpg',
    enabled: true,
  },
  {
    roomName: 'H204B',
    capacity: 12,
    outlets: 6,
    resources: {
      [RoomResource.TV]: false,
      [RoomResource.Whiteboard]: true,
      [RoomResource.Projector]: true,
    },
    img: '/images/bookings/room204b.jpg',
    enabled: true,
  },
  {
    roomName: 'H205',
    capacity: 6,
    outlets: 4,
    resources: {
      [RoomResource.TV]: true,
      [RoomResource.Whiteboard]: true,
      [RoomResource.Projector]: false,
    },
    img: '/images/bookings/room205.jpg',
    enabled: true,
  },
];
