import PageWrapper from '@/components/form/FormPageWrapper';
import FormQuestion from '@/components/form/FormQuestion';

import { AlcoholEventProps } from '@/slices/clubs/uhs-forms/types/uhsForm';

function AlcoholEvent({
  campus,
  eighthAgreement,
  updateFields,
}: AlcoholEventProps) {
  return (
    <PageWrapper>
      <FormQuestion title='Is the event being held' required={true}>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='campus'
            value='campusYes'
            checked={campus === true}
            onChange={() => updateFields({ campus: true })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            On Campus
          </div>
        </label>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='campus'
            value='campusNo'
            checked={campus === false}
            onChange={() => updateFields({ campus: false })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            Off Campus
          </div>
        </label>
      </FormQuestion>

      <FormQuestion
        title='IF THIS EVENT IS BEING HELD ON CAMPUS and involves more than 100 participants, you must advise Security Services by emailing security@mcmaster.ca and have participants complete alcohol waivers.'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='eighthAgreement'
            value='eighthAgreementYes'
            checked={eighthAgreement === true}
            onChange={() => updateFields({ eighthAgreement: true })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            I have read and agree
          </div>
        </label>
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='radio'
            name='eighthAgreement'
            value='eighthAgreementNo'
            checked={eighthAgreement === false}
            onChange={() => updateFields({ eighthAgreement: false })}
          />
          <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
            My event is not being held on campus
          </div>
        </label>
      </FormQuestion>
    </PageWrapper>
  );
}

export default AlcoholEvent;
