import { ObjectId } from 'mongodb';

export type TBooking = {
  _id?: ObjectId | string;
  userId: string;
  room: string;
  email: string;
  startTime: Date;
  endTime: Date;
  hasConfirmed: boolean;
  createdDate?: Date;
};

export enum RoomResource {
  TV = 'TV',
  Whiteboard = 'Whiteboard',
  Projector = 'Projector',
}

export type THatchRoom = {
  roomName: string;
  capacity: number;
  outlets: number;
  resources: { [key in RoomResource]: boolean };
  img: string;
  enabled: boolean;
};
