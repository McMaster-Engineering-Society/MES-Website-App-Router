import PageWrapper from '@/components/form/FormPageWrapper';
import FormQuestion from '@/components/form/FormQuestion';

import { TravelEventsProps } from '@/slices/clubs/uhs-forms/types/uhsForm';

function TravelEvents({
  busName,
  busMonitor,
  safetyPlan,
  ninthAgreement,
  tenthAgreement,
  updateFields,
}: TravelEventsProps) {
  return (
    <PageWrapper>
      <FormQuestion
        title='Name of the bus company that is providing transportation to and from the event'
        required={true}
      >
        <input
          required
          className='mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
          placeholder='Enter bus company...'
          name='busName'
          value={busName}
          onChange={(e) => updateFields({ busName: e.target.value })}
        />
      </FormQuestion>

      <FormQuestion title='Name of Bus Monitor' required={true}>
        <input
          required
          className='mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
          placeholder='Enter bus monitor...'
          name='busMonitor'
          value={busMonitor}
          onChange={(e) => updateFields({ busMonitor: e.target.value })}
        />
      </FormQuestion>

      <FormQuestion
        title='Describe the Safety Plan'
        description='For example: missing participants, vehicle breakdown, accidents, illness'
        required={true}
      >
        <textarea
          required
          className='mt-2 w-full h-[10rem] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
          placeholder='Describe safety plan...'
          name='safetyPlan'
          value={safetyPlan}
          onChange={(e) => updateFields({ safetyPlan: e.target.value })}
        />
      </FormQuestion>

      <FormQuestion
        title='I understand and agree that the following travel items are prohibited'
        description='Intoxicated individuals will not be allowed to board a vehicle. Alcohol is not allowed in a vehicle. Travel by vans with seating for 12 or more passengers.'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={ninthAgreement}
            onChange={(e) => updateFields({ ninthAgreement: e.target.checked })}
          />
          <div>Yes</div>
        </label>
      </FormQuestion>

      <FormQuestion
        title='I understand and agree that the following travel items are required'
        description='Bus waivers must be provided when participants are traveling by bus. Waivers for participation in competitions, athletic or recreational activities will be required. Appropriate transportation must be hired if there will be more than 50 participants.'
        required={true}
      >
        <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
          <input
            required
            className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
            type='checkbox'
            checked={tenthAgreement}
            onChange={(e) => updateFields({ tenthAgreement: e.target.checked })}
          />
          <div>Yes</div>
        </label>
      </FormQuestion>
    </PageWrapper>
  );
}

export default TravelEvents;
