import { InsertOneResult, ObjectId, WithId } from 'mongodb';

import clientPromise from '@/lib/db';
import { UHSForm } from '@/lib/types';

const getFormsCollection = async () => {
  const client = await clientPromise;
  const db = client.db();
  const formsCollection = db.collection<UHSForm>('forms');
  return formsCollection;
};

const createFormDb = async (newForm: UHSForm): Promise<UHSForm | null> => {
  try {
    const formsCollection = await getFormsCollection();
    const result: InsertOneResult = await formsCollection.insertOne(newForm);

    if (!result.acknowledged) {
      throw new Error('Failed to insert form');
    }

    const createdForm: UHSForm = {
      ...newForm,
      _id: result.insertedId.toString(),
    };

    return createdForm;
  } catch (error) {
    throw new Error('Database error');
  }
};

const getAllFormsDb = async (): Promise<UHSForm[]> => {
  try {
    const formsCollection = await getFormsCollection();
    const formList: WithId<UHSForm>[] = await formsCollection
      .find({})
      .toArray();
    return formList;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error fetching forms from database:', error);
    throw new Error('Database error');
  }
};

const getFormByIdDb = async (formId: string): Promise<UHSForm | null> => {
  try {
    const formsCollection = await getFormsCollection();
    const formObjectId = new ObjectId(formId);

    const form: WithId<UHSForm> | null = await formsCollection.findOne({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: ObjectId type mismatch
      _id: formObjectId,
    });

    if (!form) {
      return null;
    }

    return form;
  } catch (error) {
    console.error('Error fetching forms from database:', error);
    throw new Error('Database error');
  }
};

const deleteFormByIdDb = async (formId: string): Promise<UHSForm | null> => {
  try {
    const formsCollection = await getFormsCollection();
    const formObjectId = new ObjectId(formId);
    const form: WithId<UHSForm> | null = await formsCollection.findOneAndDelete(
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: ObjectId type mismatch
        _id: formObjectId,
      },
    );

    if (!form) {
      return null;
    }

    return form;
  } catch (error) {
    console.error('Error deleting form by id from database:', error);
    throw new Error('Database error');
  }
};

const updateFormByIdDb = async (
  formId: string,
  newStatus: 'pending' | 'approved' | 'rejected',
): Promise<UHSForm | null> => {
  try {
    const formsCollection = await getFormsCollection();
    const formObjectId = new ObjectId(formId);
    const result = await formsCollection.findOneAndUpdate(
      { _id: formObjectId.toString() },
      { $set: { formStatus: newStatus } },
      { returnDocument: 'after' },
    );

    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    console.error('Error updating form status in database:', error);
    throw new Error('Database error');
  }
};

export {
  createFormDb,
  deleteFormByIdDb,
  getAllFormsDb,
  getFormByIdDb,
  updateFormByIdDb,
};
