import Question from '@/components/form/Question';

import { HazardEventsData } from '@/types/uhsForm';

type HazardEventsProps = HazardEventsData & {
  updateFields: (fields: Partial<HazardEventsData>) => void;
};

function HazardEvents({
  equipmentDesc,
  certificateSent,
  sixthAgreement,
  updateFields,
}: HazardEventsProps) {
  return (
    <div className='flex flex-col'>
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        <Question
          title='Describe the equipment and/or materials being used at the event:'
          required={true}
        >
          <input
            required
            className='mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
            placeholder='Describe equipment...'
            name='equipmentDesc'
            value={equipmentDesc}
            onChange={(e) => updateFields({ equipmentDesc: e.target.value })}
          />
        </Question>

        <Question
          title='I have sent the certificate of insurance to VPSL'
          required={true}
        >
          <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
            <input
              required
              className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
              type='checkbox'
              checked={certificateSent}
              onChange={(e) =>
                updateFields({ certificateSent: e.target.checked })
              }
            />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
              Yes
            </div>
          </label>
        </Question>

        <Question
          title='I understand and agree the following are required:'
          description='Do not sign contracts until the event has been approved. Have equipment inspected by a licensed equipment operator. Notify McMaster Conference Services if the event is held on McMaster grounds (not inside buildings) Conference and Event Services. Check condition of extension cords and ensure that they are CSA approved. Also ensure that they do not obstruct egress and do not create a tripping hazard.  Physical activity waivers are required for inflatables. Ensure outside contractors have $5M in Commercial General Liability and name McMaster University as additional insured, in addition to the MSU (for MSU clubs), and GSA (for GSA clubs).'
          required={true}
        >
          <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
            <input
              required
              className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
              type='checkbox'
              checked={sixthAgreement}
              onChange={(e) =>
                updateFields({ sixthAgreement: e.target.checked })
              }
            />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
              Yes
            </div>
          </label>
        </Question>
      </div>
    </div>
  );
}

export default HazardEvents;
