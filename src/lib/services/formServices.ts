import {
  deleteFormByIdDb,
  getAllFormsDb
} from '@/lib/db/formsDB';
import { UHSForm } from '@/lib/types';

const getAllFormsService = async (): Promise<UHSForm[]> => {
  try {
    const formList: UHSForm[] = await getAllFormsDb();
    return formList;
  } catch (error) {
    console.error('Error in form services:', error);
    return [];
  }
};


const deleteFormByIdService = async (formId: string): Promise<UHSForm | null> => {
  try {
    const form = await deleteFormByIdDb(formId);
    return form;
  } catch (error) {
    console.error('Error in form services:', error);
    return null;
  }
};



export {
  deleteFormByIdService,
  getAllFormsService
};