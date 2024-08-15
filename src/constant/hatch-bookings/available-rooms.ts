export type HatchRoomTypeDb = {
  roomNum: string;
  capacity: number;
  outlets: number;
  resources: string[]; //tv, whiteboard
  img: string;
};

export type HatchRoomType = {
  roomNum: string;
  capacity: number;
  outlets: number;
  resources: string[]; //tv, whiteboard
  img: string;
  missingResources: string[];
};

//update with all of the available resources in hatch rooms
const allResources = ['TV', 'Whiteboard'];

//assuming this is format of info from db
const AvailableRoomsDb: HatchRoomTypeDb[] = [
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

const updateRoomsWithMissingResources = (
  allResources: string[],
  availableRooms: HatchRoomTypeDb[],
): HatchRoomType[] => {
  return availableRooms.map((room) => ({
    ...room,
    missingResources: allResources.filter(
      (resource) => !room.resources.includes(resource),
    ),
  }));
};

//update the AvailableRooms array with missing resources
export const AvailableRoomsData: HatchRoomType[] =
  updateRoomsWithMissingResources(allResources, AvailableRoomsDb);
