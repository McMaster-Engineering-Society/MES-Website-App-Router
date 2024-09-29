import PageWrapper from '@/components/form/FormPageWrapper';
import FormQuestion from '@/components/form/FormQuestion';

import { BestProps } from '@/slices/clubs/uhs-forms/types/uhsForm';

function BestPractices({ danger, updateFields }: BestProps) {
  return (
    <PageWrapper>
      <FormQuestion
        title='Will participants be involved in an Event that could result in serious bodily injury or death?'
        description='Examples: concrete toboggan racing, rock climbing, skiing, sky diving, swimming. For injuries occurring off-campus, please call 911. For injuries occurring on-campus, please call McMaster Security at extension 88 or 905-522-4135. Do not attempt to move an injured person. Know the location of the nearest hospital.'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='danger'
            value='dangerYes'
            checked={danger === true}
            onChange={() => updateFields({ danger: true })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            Yes
          </div>
        </label>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            className='mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='danger'
            value='dangerNo'
            checked={danger === false}
            onChange={() => updateFields({ danger: false })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            No
          </div>
        </label>
      </FormQuestion>
    </PageWrapper>
  );
}

export default BestPractices;
