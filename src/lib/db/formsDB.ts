import { InsertOneResult, ObjectId, WithId } from 'mongodb';
import clientPromise from '@/lib/db';

import { UHSForm } from '@/lib/types';

const getFormsCollection = async () => {
  const client = await clientPromise;
  const db = client.db();
  const formsCollection = db.collection<UHSForm>('forms');
  return formsCollection;
};

const getAllFormsDb = async (): Promise<UHSForm[]> => {
  try {
    const formsCollection = await getFormsCollection();
    const formList: WithId<UHSForm>[] = await formsCollection.find({}).toArray();
    return formList;
  } catch (error) {
    console.error('Error fetching forms from database:', error);
    throw new Error('Database error');
  }
};

const deleteFormByIdDb = async (formId: string): Promise<UHSForm | null> => {
  try {
    const formsCollection = await getFormsCollection();
    const formObjectId = new ObjectId(formId);
    const form: WithId<UHSForm> | null = await formsCollection.findOneAndDelete({
      id: formObjectId,
    });

    if (!form) {
      return null;
    }

    return form;
  } catch (error) {
    console.error('Error deleting form by id from database:', error);
    throw new Error('Database error');
  }
};

export { deleteFormByIdDb, getAllFormsDb }