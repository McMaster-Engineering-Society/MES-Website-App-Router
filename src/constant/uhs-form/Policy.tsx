import PageWrapper from '@/components/form/PageWrapper';
import Question from '@/components/form/Question';

import {
  discriminationPolicy,
  informationPolicy,
  sexualPolicy,
  studentPolicy,
} from '@/constant/uhs-form/UHSPageData';

import { PolicyProps } from '@/types/uhsForm';

function Policy({
  informationSecurityPolicy,
  studentRightsPolicy,
  discriminationHarassmentPolicy,
  sexualViolencePolicy,
  comments,
  finalAgreement,
  updateFields,
}: PolicyProps) {
  return (
    <PageWrapper>
      <Question
        title='I have read the Information Security Policy below'
        required={true}
      >
        <div className="max-h-[20rem] overflow-scroll overflow-x-hidden opacity-50 whitespace-normal border-spacing-1 bg-[#ececec] rounded border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0 text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
          {informationPolicy}
        </div>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={informationSecurityPolicy}
            onChange={(e) =>
              updateFields({ informationSecurityPolicy: e.target.checked })
            }
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            I have read and agree
          </div>
        </label>
      </Question>

      <Question
        title='I have read the Code of Student Rights and Responsibilities below'
        required={true}
      >
        <div className="max-h-[20rem] overflow-scroll overflow-x-hidden opacity-50 whitespace-normal border-spacing-1 bg-[#ececec] rounded border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0 text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
          {studentPolicy}
        </div>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={studentRightsPolicy}
            onChange={(e) =>
              updateFields({ studentRightsPolicy: e.target.checked })
            }
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            I have read and agree
          </div>
        </label>
      </Question>

      <Question
        title='I have read the Discrimination & Harassment Policy below'
        required={true}
      >
        <div className="max-h-[20rem] overflow-scroll overflow-x-hidden opacity-50 whitespace-normal border-spacing-1 bg-[#ececec] rounded border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0 text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
          {discriminationPolicy}
        </div>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={discriminationHarassmentPolicy}
            onChange={(e) =>
              updateFields({
                discriminationHarassmentPolicy: e.target.checked,
              })
            }
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            I have read and agree
          </div>
        </label>
      </Question>

      <Question
        title='I have read the Sexual Violence Policy below'
        required={true}
      >
        <div className="max-h-[20rem] overflow-scroll overflow-x-hidden opacity-50 whitespace-normal border-spacing-1 bg-[#ececec] rounded border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0 text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
          {sexualPolicy}
        </div>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={sexualViolencePolicy}
            onChange={(e) =>
              updateFields({ sexualViolencePolicy: e.target.checked })
            }
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            I have read and agree
          </div>
        </label>
      </Question>

      <Question title='Comments' required={false}>
        <input
          className='mt-2 w-full w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
          placeholder='Enter any comments!'
          name='comments'
          value={comments}
          onChange={(e) => updateFields({ comments: e.target.value })}
        />
      </Question>

      <Question
        title='I confirm that I have answered all of the questions truthfully. I acknowledge that I will be held responsible under the Code of Student Rights & Responsibilities should this event not take place as submitted.'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={finalAgreement}
            onChange={(e) => updateFields({ finalAgreement: e.target.checked })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            I have read and agree
          </div>
        </label>
      </Question>
    </PageWrapper>
  );
}

export default Policy;
