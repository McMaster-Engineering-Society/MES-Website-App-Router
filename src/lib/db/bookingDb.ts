import { InsertManyResult, InsertOneResult, ObjectId, WithId } from 'mongodb';

import clientPromise from '@/lib/db';
import { TBatchBookingResponse } from '@/lib/types';

import { TBookingDb } from '@/app/api/types';

const getBookingsCollection = async () => {
  const client = await clientPromise;

  const db = client.db();
  const bookingsCollection = db.collection<TBookingDb>('bookings');
  return bookingsCollection;
};

export const createBookingDb = async (
  newBooking: TBookingDb,
  disabledRooms: string[],
): Promise<TBookingDb> => {
  try {
    const bookingsCollection = await getBookingsCollection();

    if (disabledRooms?.includes(newBooking.room)) {
      throw new Error('Room is disabled.');
    }
    newBooking.createdDate = new Date();
    const result: InsertOneResult =
      await bookingsCollection.insertOne(newBooking);

    if (!result.acknowledged) {
      throw new Error('Failed to insert booking');
    }

    const createdBooking: TBookingDb = {
      ...newBooking,
      _id: result.insertedId,
    };

    return createdBooking;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error inserting booking into database:', error);
    throw new Error('Database error');
  }
};
export const deleteBatchBookingDb = async (
  bookingIdsToDelete: string[],
): Promise<(WithId<TBookingDb> | null)[]> => {
  try {
    const bookingsCollection = await getBookingsCollection();
    // Convert string IDs to ObjectId
    const objectIdsToDelete = bookingIdsToDelete.map((id) => new ObjectId(id));

    // Delete documents where _id is in the list of objectIds

    const resultList = [];
    for (const id of objectIdsToDelete) {
      const result = await bookingsCollection.findOneAndDelete({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: ObjectId type mismatch
        _id: id,
      });
      resultList.push(result);
    }

    return resultList;
    //console.log(`${result.deletedCount} document(s) were deleted.`);
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error inserting booking into database:', error);
    throw new Error('Database error');
  }
};
export const createBatchBookingDb = async (
  bookingList: TBookingDb[],
  disabledRooms: string[],
): Promise<TBatchBookingResponse | null> => {
  try {
    const bookingsCollection = await getBookingsCollection();

    bookingList.forEach((booking) => {
      booking._id = new ObjectId(booking._id);
      booking.startTime = new Date(booking.startTime);
      booking.endTime = new Date(booking.endTime);
      booking.createdDate = new Date();
    });

    const conflictingBookings: {
      booking: TBookingDb;
      conflicts: WithId<TBookingDb>[];
    }[] = [];
    const promises = [];
    const bookingsToAdd: TBookingDb[] = [];

    // Check for conflicting rooms and disabled rooms
    for (const booking of bookingList) {
      const room = booking.room;
      const startDate = new Date(booking.startTime);
      const endDate = new Date(booking.endTime);
      console.log('the room is' + room);
      console.log(startDate);
      console.log(endDate);
      // Push the promise into the array, along with a reference to the current booking
      const promise = getBookingsInDateRangeForOneRoomDb(
        startDate,
        endDate,
        room,
      ).then((result) => {
        console.log(result);

        if (result && result.length > 0) {
          // If there are conflicting bookings, add them to the list
          conflictingBookings.push({ booking: booking, conflicts: result });
        } else if (disabledRooms && !disabledRooms.includes(room)) {
          bookingsToAdd.push(booking);
        }
      });

      promises.push(promise);
    }

    // Wait for all the promises to resolve
    await Promise.all(promises);

    if (bookingsToAdd.length > 0) {
      const result: InsertManyResult =
        await bookingsCollection.insertMany(bookingsToAdd);

      if (!result.acknowledged) {
        throw new Error('Failed to insert booking');
      }
    }

    const response: TBatchBookingResponse = {
      bookingsAdded: bookingsToAdd,
      conflictingBookings: conflictingBookings,
      conflictExists: conflictingBookings.length > 0,
    };
    return response;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error inserting booking into database:', error);
    throw new Error('Database error');
  }
};

export const deleteBookingByIdDb = async (
  bookingId: string,
): Promise<TBookingDb | null> => {
  try {
    const bookingsCollection = await getBookingsCollection();
    const bookingObjectId = new ObjectId(bookingId);
    const booking: WithId<TBookingDb> | null =
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

export const getBookingsInDateRangeAndEmailDb = async (
  startDate: Date,
  endDate: Date,
  email: string,
) => {
  const bookingsCollection = await getBookingsCollection();
  const targetStart = startDate;
  const targetEnd = endDate;
  const cursor = await bookingsCollection.find({
    email: email,
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

export const getBookingsInDateRangeDb = async (
  startDate: Date,
  endDate: Date,
) => {
  const bookingsCollection = await getBookingsCollection();
  const targetStart = startDate;
  const targetEnd = endDate;
  const cursor = await bookingsCollection
    .find({
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
    })
    .sort({ startTime: 1 });
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
  const bookings = await cursor.toArray();
  console.log(bookings);
  return bookings;
};

export const updateBookingByIdDb = async (
  bookingId: string,
  bookingInfo: TBookingDb,
): Promise<TBookingDb | null> => {
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

export const getBookingsByUserDb = async (userId: string) => {
  try {
    const bookingsCollection = await getBookingsCollection();
    const currentDate = new Date();
    const twoWeeksBefore = new Date(
      currentDate.getTime() - 14 * 24 * 60 * 60 * 1000,
    );
    const twoWeeksAfter = new Date(
      currentDate.getTime() + 14 * 24 * 60 * 60 * 1000,
    );
    const cursor = await bookingsCollection.find({
      userId,
      startTime: { $lt: twoWeeksAfter },
      endTime: { $gt: twoWeeksBefore },
    });
    const bookings = await cursor.toArray();
    return bookings;
  } catch (error) {
    console.error('Error retrieving bookings by user from database:', error);
    throw new Error('Database error');
  }
};
