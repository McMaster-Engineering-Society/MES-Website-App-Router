import { InsertOneResult, ObjectId, WithId } from 'mongodb';

import clientPromise from '@/lib/db';
import { TDocument } from '@/lib/types';

const getDocumentsCollection = async () => {
  const client = await clientPromise;

  const db = client.db();
  const documentsCollection = db.collection<TDocument>('documents');
  return documentsCollection;
};

export const getAllDocumentsDb = async (): Promise<TDocument[]> => {
  try {
    const documentsCollection = await getDocumentsCollection();
    const documentList: WithId<TDocument>[] = await documentsCollection
      .find({})
      .toArray();
    return documentList;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error fetching users from database:', error);
    throw new Error('Database error'); // Rethrow a generic error or the original error
  }
};

export const createDocumentDb = async (
  newDocument: TDocument,
): Promise<TDocument | null> => {
  try {
    const documentsCollection = await getDocumentsCollection();
    const result: InsertOneResult =
      await documentsCollection.insertOne(newDocument);

    if (!result.acknowledged) {
      throw new Error('Failed to insert document');
    }

    const createdUser: TDocument = {
      ...newDocument,
      _id: result.insertedId.toString(),
    };

    return createdUser;
  } catch (error) {
    console.error('Error inserting new document into database:', error);
    throw new Error('Database error');
  }
};

export const updateDocumentDb = async (
  updatedDocument: TDocument,
): Promise<TDocument | null> => {
  try {
    const documentsCollection = await getDocumentsCollection();

    if (!updatedDocument._id) {
      throw new Error('Document must have an _id for an update');
    }

    const documentObjectId = new ObjectId(updatedDocument._id);

    // Create a shallow copy of updatedDocument and remove the _id field
    const { _id, ...documentWithoutId } = updatedDocument;

    const result = await documentsCollection.findOneAndReplace(
      { _id: documentObjectId },
      documentWithoutId, // Use the document without _id for replacement
      { returnDocument: 'after' }, // Return the updated document
    );

    if (!result) {
      throw new Error('Failed to update document');
    }

    // Add back the _id to the updated document before returning
    return result;
  } catch (error) {
    console.error('Error updating document in database:', error);
    throw new Error('Database error');
  }
};
