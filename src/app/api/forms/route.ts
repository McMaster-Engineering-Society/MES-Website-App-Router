import { Router, Request, Response } from 'express';
import UHSForm from './UHSForm';

const router = Router();

router.get('/forms/club/:clubId', async (req: Request, res: Response) => {
  try {
    const clubId = req.params.clubId;
    const forms = await UHSForm.find({ clubId });
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: "error!" });
  }
});


export default router;