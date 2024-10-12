import clientPromise from '@/lib/db';

import { HatchRoomsData } from '@/constant/hatch-bookings/rooms-data';
import { THatchRoom } from '@/slices/hatch/booking-page/types';
const getRoomsCollection = async () => {
  const client = await clientPromise;

  const db = client.db();

  // Get a list of all collections in the database
  const collections = await db.listCollections({ name: 'rooms' }).toArray();

  // Check if the "rooms" collection already exists
  if (collections.length === 0) {
    // If it doesn't exist, create the "rooms" collection
    await db.createCollection('rooms');
  }
  const bookingsCollection = db.collection<THatchRoom>('rooms');
  return bookingsCollection;
};

/**This function resets the rooms to their default state. */
export async function initializeRoomsDb() {
  try {
    const collection = await getRoomsCollection();

    // Delete all rooms in collection
    await collection.deleteMany({});

    // Update one document that matches the query
    const result = await collection.insertMany(HatchRoomsData);

    if (!result.acknowledged) {
      throw new Error('Failed to initialize rooms, result not acknowledged');
    }

    return result;
  } catch (e) {
    /* eslint-disable no-console */
    console.error('Error initialize rooms', e);
    throw new Error('Database error');
  }
}
export async function getDisabledRoomsDb() {
  try {
    const collection = await getRoomsCollection();
    const query = { enabled: false };
    const cursor = collection.find(query);
    const disabledRooms = await cursor.toArray();
    if (disabledRooms) {
      return disabledRooms;
    } else {
      throw new Error('Rooms not found');
    }
  } catch (e) {
    throw new Error('Error from db in finding room');
  }
}
export async function getRoomDb(room: string) {
  try {
    const collection = await getRoomsCollection();
    const query = { roomName: room };
    const result = collection.findOne(query);
    if (result) {
      return result;
    } else {
      throw new Error('Room not found');
    }
  } catch (e) {
    throw new Error('Error from db in finding room');
  }
}
export async function updateRoomDb(
  room: string,
  roomUpdate: Record<string, unknown>,
) {
  try {
    const collection = await getRoomsCollection();
    const query = { roomName: room };

    // Define the update to apply
    const update = {
      $set: roomUpdate,
    };

    // Update one document that matches the query
    const result = await collection.updateOne(query, update);

    if (result.modifiedCount === 0) {
      throw new Error('Failed to update room, room not found');
    }

    return result;
  } catch (e) {
    /* eslint-disable no-console */
    console.error('Error updating room', e);
    throw new Error('Database error');
  }
}
