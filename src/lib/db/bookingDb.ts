import { InsertOneResult, ObjectId, WithId } from 'mongodb';

import clientPromise from '@/lib/db';

import { TBooking } from '@/app/api/types';

const getBookingsCollection = async () => {
  const client = await clientPromise;

  const db = client.db();
  const bookingsCollection = db.collection<TBooking>('bookings');
  return bookingsCollection;
};

export const createBookingDb = async (
  newBooking: TBooking,
): Promise<TBooking | null> => {
  try {
    const bookingsCollection = await getBookingsCollection();

    newBooking.createdDate = new Date();
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

export const deleteBookingByIdDb = async (
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
export const getBookingsInDateRangeDb = async (
  startDate: Date,
  endDate: Date,
) => {
  const bookingsCollection = await getBookingsCollection();
  const targetStart = startDate;
  const targetEnd = endDate;
  const cursor = await bookingsCollection.find({
    $or: [
      {
        startTime: {
          $lt: targetEnd,
        },
        endTime: {
          $gte: targetEnd,
        },
      },
      {
        startTime: {
          $lte: targetStart,
        },
        endTime: {
          $gt: targetStart,
        },
      },
      {
        endTime: {
          $gt: targetStart,
          $lte: targetEnd,
        },
        startTime: {
          $gte: targetStart,
          $lt: targetEnd,
        },
      },
    ],
  });
  const bookings = cursor.toArray();
  return bookings;
};

export const getBookingsInDateRangeForOneRoomDb = async (
  startDate: Date,
  endDate: Date,
  room: string,
) => {
  const bookingsCollection = await getBookingsCollection();
  const targetStart = startDate;
  const targetEnd = endDate;
  const cursor = await bookingsCollection.find({
    room: room,
    $or: [
      {
        startTime: {
          $lt: targetEnd,
        },
        endTime: {
          $gte: targetEnd,
        },
      },
      {
        startTime: {
          $lte: targetStart,
        },
        endTime: {
          $gt: targetStart,
        },
      },
      {
        endTime: {
          $gt: targetStart,
          $lte: targetEnd,
        },
        startTime: {
          $gte: targetStart,
          $lt: targetEnd,
        },
      },
    ],
  });
  const bookings = cursor.toArray();
  return bookings;
};

export const updateBookingByIdDb = async (
  bookingId: string,
  bookingInfo: TBooking,
): Promise<TBooking | null> => {
  try {
    const bookingsCollection = await getBookingsCollection();
    const bookingObjectId = new ObjectId(bookingId);
    const result = await bookingsCollection.findOneAndUpdate(
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: ObjectId type mismatch
        _id: bookingObjectId,
      },
      { $set: bookingInfo },
      { returnDocument: 'after' },
    );

    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error updating booking by id', error);
    throw new Error('Database error');
  }
};
