import { InsertManyResult, UpdateResult, WithId } from 'mongodb';

import { THatchRoom } from '@/constant/hatch-bookings/rooms-data';
import {
  getDisabledRoomsDb,
  getRoomDb,
  initializeRoomsDb,
  updateRoomDb,
} from '@/slices/hatch/admin/db/roomsDb';

export const initializeRoomsService =
  async (): Promise<InsertManyResult<THatchRoom> | null> => {
    try {
      const result = await initializeRoomsDb();
      return result;
    } catch (error) {
      /* eslint-disable no-console */
      console.error('Error in booking services:', error);
      return null;
    }
  };

export const updateRoomService = async (
  room: string,
  update: Record<string, unknown>,
): Promise<UpdateResult<THatchRoom> | null> => {
  try {
    const result = await updateRoomDb(room, update);
    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    return null;
  }
};

export const getRoomService = async (
  room: string,
): Promise<WithId<THatchRoom> | null> => {
  try {
    const result = await getRoomDb(room);
    return result;
  } catch (error) {
    return null;
  }
};

export const getDisabledRoomsService = async (): Promise<{
  disabledRooms: string[];
} | null> => {
  try {
    const result = await getDisabledRoomsDb();
    const disabledRoomNames = [];
    for (const room of result) {
      disabledRoomNames.push(room.roomName);
    }

    return {
      disabledRooms: disabledRoomNames,
    };
  } catch (e) {
    return null;
  }
};
