import { UpdateResult, WithId,  } from "mongodb";

import clientPromise from "@/lib/db";
import { TDocument } from "@/lib/types";

const getDocumentsCollection = async () => {
  const client = await clientPromise;

  const db = client.db();
  const documentsCollection = db.collection<TDocument>('documents');
  return documentsCollection;
};

export const getAllDocumentsDb = async (): Promise<TDocument[]> => {
  try {
    const documentsCollection = await getDocumentsCollection();
    const documentList: WithId<TDocument>[] = await documentsCollection.find({}).toArray();

    return documentList;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error fetching users from database:', error);
    throw new Error('Database error'); // Rethrow a generic error or the original error
  }
};

export const createDocumentDb = async (newDocument: TDocument): Promise<TDocument | null> => {

  console.log(newDocument)

  try {
    const documentsCollection = await getDocumentsCollection();
    const result: UpdateResult = await documentsCollection.updateOne(
      { title: newDocument.title },
      { $set: newDocument }, // Use $set to update only specified fields
      { upsert: true }
    );

    if (!result.acknowledged) {
      throw new Error('Failed to insert or update user');
    }

    let createdDocument: TDocument;

    if (result.upsertedId) {
      createdDocument = {
        ...newDocument,
        _id: result.upsertedId.toString(), // Ensure upsertedId is converted to string
      };
    } else {
      // If no upsertedId, fetch the updated document
      const updatedDocument = await documentsCollection.findOne({ title: newDocument.title });
      if (!updatedDocument) {
        throw new Error('Failed to retrieve updated user');
      }
      createdDocument = {
        ...updatedDocument,
        _id: updatedDocument._id.toString(), // Ensure _id is a string
      } as TDocument;
    }


    return createdDocument;
  } catch (error) {
    console.error('Error fetching user by id from database:', error);
    throw new Error('Database error');
  }
};