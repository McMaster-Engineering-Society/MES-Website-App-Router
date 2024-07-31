import { Schema, model, Document } from 'mongoose';

interface UHSForm extends Document {
  formId: string;
  clubId: string;
  createdAt: Date;
  updatedAt: Date;
  formInfo: string;
  formStatus: 'status1' | 'status2' | 'status3'; //make it the required enum vlaues
}

const formSchema = new Schema<UHSForm>({
  formId: { type: String, required: true, unique: true },
  clubId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  formInfo: { type: String, required: true },
  formStatus: { type: String, required: true, enum: ['status1', 'status2', 'status3'] }
});

const UHSForm = model<UHSForm>('HatchBookingUHSForm', formSchema);

export default UHSForm;