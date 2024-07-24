type TravelEventsData = {
  busName: string,
  busMonitor: string,
  safetyPlan: string,
  ninthAgreement: boolean,
  tenthAgreement: boolean
}

type TravelEventsProps = TravelEventsData & {
  updateFields: (fields: Partial<TravelEventsData>) => void
}

function TravelEvents({ busName, busMonitor, safetyPlan, ninthAgreement, tenthAgreement, updateFields }: TravelEventsProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        <label className="flex flex-col">
          Name of the bus company that is providing transportation to and from the event *
          <br/>
          <input required className="mt-2  w-[40%] w-min-4" name="busName" value={busName} onChange={e => updateFields({ busName: e.target.value })}/>
        </label>

        <label className="flex flex-col">
          Name of Bus Monitor: *
          <br/>
          <input required className="mt-2  w-[40%] w-min-4" name="busMonitor" value={busMonitor} onChange={e => updateFields({ busMonitor: e.target.value })}/>
        </label>

        <label className="flex flex-col">
          Describe the Safety Plan *
          <br/>
          <small>
            for example:
            <br/>
            - missing participants
            <br/>
            - vehicle breakdown
            <br/>
            - accidents
            <br/>
            - illness
          </small>
          <input required className="mt-2  w-[40%] w-min-4" name="safetyPlan" value={safetyPlan} onChange={e => updateFields({ safetyPlan: e.target.value })}/>
        </label>

        <div>
          I understand and agree that the following travel items are prohibited *
          <small className="font-bold">
            <br/>
            - Intoxicated individuals will not be allowed to board a vehicle.
            <br/>
            - Alcohol is not allowed in a vehicle.
            <br/>
            - Travel by vans with seating for 12 or more passengers.
          </small>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="checkbox" checked={ninthAgreement} onChange={e => updateFields({ ninthAgreement: e.target.checked })} />
            <div>Yes</div>
          </label>
        </div>

        <div>
          I understand and agree that the following travel items are required *
          <small className="font-bold">
            <br/>
            - Bus waivers must be provided when participants are traveling by bus.
            <br/>
            - Waivers for participation in competitions, athletic or recreational activities will be required.
            <br/>
            - Appropriate transportation must be hired if there will be more than 50 participants.
          </small>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="checkbox" checked={tenthAgreement} onChange={e => updateFields({ tenthAgreement: e.target.checked })} />
            <div>Yes</div>
          </label>
        </div>
      </div>
    </div>
  )
};

export default TravelEvents;