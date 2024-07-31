import { Router, Request, Response } from 'express';
import { deleteFormByIdService, getAllFormsService } from '@/lib/services/formServices';
import { UHSForm } from '@/lib/types';

const router = Router();

// Get all forms
router.get('/forms', async (req: Request, res: Response) => {
  try {
    const formList = await getAllFormsService();
    res.status(200).json({ data: formList, message: 'Forms fetched successfully' });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ message: 'Failed to fetch forms' });
  }
});

// Delete a form by form ID
router.delete('/forms/:formId', async (req: Request, res: Response) => {
  const { formId } = req.params;

  try {
    const deletedForm = await deleteFormByIdService(formId);
    if (!deletedForm) {
      return res.status(404).json({ message: 'Form not found' });
    }
    return res.status(200).json({ message: 'Form deleted successfully' });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ message: 'Failed to delete form' });
  }
});

export default router;