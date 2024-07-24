import { Schema, model, Document } from 'mongoose';

interface UHSForm extends Document {
  formId: string;
  clubId: string;
  createdAt: Date;
  updatedAt: Date;
}

const formSchema = new Schema<UHSForm>({
  formId: { type: String, required: true, unique: true },
  clubId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const UHSForm = model<UHSForm>('HatchBookingUHSForm', formSchema);

export default UHSForm;