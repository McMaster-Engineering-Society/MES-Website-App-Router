import PageWrapper from '@/components/form/FormPageWrapper';
import FormQuestion from '@/components/form/FormQuestion';

import { SafetyHazardsProps } from '@/slices/clubs/uhs-forms/types/uhsForm';

function SafetyHazards({
  fifthAgreement,
  involveHazard,
  updateFields,
}: SafetyHazardsProps) {
  return (
    <PageWrapper>
      Safety Hazard Examples
      <br />
      - Electrical equipment or machinery
      <br />
      - RPAS (Remotely Piloted Aircraft Systems)
      <br />
      - Hazardous materials
      <br />
      - Rental of equipment or property (e.g. carnival rides, animals, etc.)
      <br />
      <br />
      <FormQuestion
        title='I understand and agree Firearms, Replica firearms, and Weapons are prohibited'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={fifthAgreement}
            onChange={(e) => updateFields({ fifthAgreement: e.target.checked })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            Yes
          </div>
        </label>
      </FormQuestion>
      <FormQuestion
        title='Does your event involve a safety hazard as outlined above?'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='involveHazard'
            value='involveHazardYes'
            checked={involveHazard === true}
            onChange={() => updateFields({ involveHazard: true })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            Yes
          </div>
        </label>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='involveHazard'
            value='involveHazardNo'
            checked={involveHazard === false}
            onChange={() => updateFields({ involveHazard: false })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            No
          </div>
        </label>
      </FormQuestion>
    </PageWrapper>
  );
}

export default SafetyHazards;
