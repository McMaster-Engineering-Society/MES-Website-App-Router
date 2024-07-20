export type HatchRoomType = {
  roomNum: string;
  capacity: number;
  outlets: number;
  resources: string[]; //tv, whiteboard
};


export const AvailableRooms: HatchRoomType[] = [
  {
    roomNum: "201",
    capacity: 16,
    outlets: 10,
    resources: ["TV", "Whiteboard"]
  },
  {
    roomNum: "203A",
    capacity: 6,
    outlets: 4,
    resources: ["TV", "Whiteboard"]
  },
  {
    roomNum: "204",
    capacity: 10,
    outlets: 6,
    resources: ["TV", "Whiteboard"]
  },
  {
    roomNum: "205",
    capacity: 4,
    outlets: 4,
    resources: ["Whiteboard"]
  }
];