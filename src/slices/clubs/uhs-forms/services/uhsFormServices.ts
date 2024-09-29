import {
  createFormDb,
  deleteFormByIdDb,
  getAllFormsDb,
  getFormByIdDb,
  updateFormByIdDb,
} from '@/slices/clubs/uhs-forms/db/uhsFormsDb';
import { TUHSForm } from '@/slices/clubs/uhs-forms/types/uhsForm';

const getAllFormsService = async (): Promise<TUHSForm[]> => {
  try {
    const formList: TUHSForm[] = await getAllFormsDb();
    return formList;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in form services:', error);
    return [];
  }
};

const getFormByIdService = async (formId: string): Promise<TUHSForm | null> => {
  try {
    const form = await getFormByIdDb(formId);
    return form;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in form services:', error);
    return null;
  }
};

const deleteFormByIdService = async (
  formId: string,
): Promise<TUHSForm | null> => {
  try {
    const form = await deleteFormByIdDb(formId);
    return form;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in form services:', error);
    return null;
  }
};

const updateFormByIdService = async (
  formId: string,
  newStatus: 'pending' | 'approved' | 'rejected',
): Promise<TUHSForm | null> => {
  try {
    const form = await updateFormByIdDb(formId, newStatus);
    return form;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in form services:', error);
    return null;
  }
};

const createFormService = async (
  newForm: TUHSForm,
): Promise<TUHSForm | null> => {
  try {
    const form = await createFormDb(newForm);
    return form;
  } catch (error) {
    /* eslint-disable no-console */
    console.error('Error in user services:', error);
    return null;
  }
};

export {
  createFormService,
  deleteFormByIdService,
  getAllFormsService,
  getFormByIdService,
  updateFormByIdService,
};
