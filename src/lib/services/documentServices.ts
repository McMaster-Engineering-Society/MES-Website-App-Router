import { createDocumentDb, getAllDocumentsDb } from '@/lib/db/documentDb';
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
  newUser: TDocument,
): Promise<TDocument | null> => {
  try {
    const user = await createDocumentDb(newUser);
    return user;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in user services:', error);
    return null;
  }
};
