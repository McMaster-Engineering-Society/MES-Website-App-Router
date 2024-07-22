import { InsertOneResult, ObjectId, WithId } from 'mongodb';

import clientPromise from '@/lib/db';

import { TBooking } from '@/app/api/types';

const getBookingsCollection = async () => {
  const client = await clientPromise;

  const db = client.db();
  const bookingsCollection = db.collection<TBooking>('bookings');
  return bookingsCollection;
};

const createBookingDb = async (
  newBooking: TBooking,
): Promise<TBooking | null> => {
  try {
    const bookingsCollection = await getBookingsCollection();
    const result: InsertOneResult =
      await bookingsCollection.insertOne(newBooking);

    if (!result.acknowledged) {
      throw new Error('Failed to insert booking');
    }

    const createdBooking: TBooking = {
      ...newBooking,
      _id: result.insertedId.toString(),
    };

    return createdBooking;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error inserting booking into database:', error);
    throw new Error('Database error');
  }
};

const deleteBookingByIdDb = async (
  bookingId: string,
): Promise<TBooking | null> => {
  try {
    const bookingsCollection = await getBookingsCollection();
    const bookingObjectId = new ObjectId(bookingId);
    const booking: WithId<TBooking> | null =
      await bookingsCollection.findOneAndDelete({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: ObjectId type mismatch
        _id: bookingObjectId,
      });

    if (!booking) {
      return null;
    }
    return booking;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error deleting booking by id from database:', error);
    throw new Error('Database error');
  }
};

export { createBookingDb, deleteBookingByIdDb };
