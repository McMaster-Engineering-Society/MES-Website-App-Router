import {
  createDocumentDb,
  getAllDocumentsDb,
  updateDocumentDb,
} from '@/lib/db/documentDb';
import { TDocument } from '@/lib/types';

export const getAllDocumentsService = async (): Promise<TDocument[]> => {
  try {
    const docList: TDocument[] = await getAllDocumentsDb();
    return docList;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in user services:', error);
    return [];
  }
};

export const createDocumentService = async (
  newDocument: TDocument,
): Promise<TDocument | null> => {
  try {
    const user = await createDocumentDb(newDocument);
    return user;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in user services:', error);
    return null;
  }
};

export const updateDocumentService = async (
  updatedDocument: TDocument,
): Promise<TDocument | null> => {
  return await updateDocumentDb(updatedDocument);
};
