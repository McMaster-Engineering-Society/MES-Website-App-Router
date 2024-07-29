import PageWrapper from '@/components/form/PageWrapper';
import Question from '@/components/form/Question';

import { UnderstandingProps } from '@/types/uhsForm';

//page for understanding section
function Understanding({
  firstAgreement,
  secondAgreement,
  groupCategory,
  groupName,
  updateFields,
}: UnderstandingProps) {
  return (
    <PageWrapper>
      {/* This is an example of a single checkbox question */}
      <Question
        title='I understand that this form does not equate to a room booking. I understand that this form, when approved, will lead to a code used for room booking. I cannot book a room without an event code. If I am unsure how to book a room after getting a code, I can email vp.studentlife@macengsociety.ca. I should submit this form 2 weeks prior to my event to be safe. If I do not submit this form 2 weeks prior, I accept the risk that I may not receive event approval or a room booking in time.'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={firstAgreement}
            onChange={(e) => updateFields({ firstAgreement: e.target.checked })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            I have read the above and understand
          </div>
        </label>
      </Question>

      <Question
        title='(For Groups, Teams, Affiliates and Department Clubs) If you would like your event posted on the MES Calendar, please submit to the link found at the end of the form.'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={secondAgreement}
            onChange={(e) =>
              updateFields({ secondAgreement: e.target.checked })
            }
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            I understand
          </div>
        </label>
      </Question>

      {/* This is an example of a multiple choice question */}
      <Question
        title='Which category best describes your group? The MES only provides UHS form submissions for these groups.'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='group'
            value='groupMES'
            checked={groupCategory === 'MES Group/Team/Affiliate'}
            onChange={() =>
              updateFields({ groupCategory: 'MES Group/Team/Affiliate' })
            }
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            MES Group/Team/Affiliate
          </div>
        </label>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            className='mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='group'
            value='groupDepartment'
            checked={groupCategory === 'Department Program/Club'}
            onChange={() =>
              updateFields({ groupCategory: 'Department Program/Club' })
            }
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            Department Program/Club
          </div>
        </label>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            className='mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='group'
            value='groupCommittee'
            checked={groupCategory === 'MES Committee and/or MES Council'}
            onChange={() =>
              updateFields({
                groupCategory: 'MES Committee and/or MES Council',
              })
            }
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            MES Committee and/or MES Council (Not including department/program
            reps)
          </div>
        </label>
      </Question>

      {/* This is an example of a text input question */}
      <Question
        title='Group/Team/Affiliate/Club/Committee Name or Council position for MES'
        required={true}
      >
        <input
          required
          className='mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
          placeholder='Enter your group name...'
          name='name'
          value={groupName}
          onChange={(e) => updateFields({ groupName: e.target.value })}
        />
      </Question>
    </PageWrapper>
  );
}
export default Understanding;