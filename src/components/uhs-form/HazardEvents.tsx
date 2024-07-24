type HazardEventsData = {
  equipmentDesc: string,
  certificateSent: boolean,
  sixthAgreement: boolean
}

type HazardEventsProps = HazardEventsData & {
  updateFields: (fields: Partial<HazardEventsData>) => void
}

function HazardEvents({ equipmentDesc, certificateSent, sixthAgreement, updateFields }: HazardEventsProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        <label className="flex flex-col">
          Describe the equipment and/or materials being used at the event: *
          <br/>
          <input required className="mt-2  w-[40%] w-min-4" name="equipmentDesc" value={equipmentDesc} onChange={e => updateFields({ equipmentDesc: e.target.value })}/>
        </label>

        <div>
          I have sent the certificate of insurance to VPSL *
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="checkbox" checked={certificateSent} onChange={e => updateFields({ certificateSent: e.target.checked })} />
            <div>Yes</div>
          </label>
        </div>

        <div>
          I understand and agree the following are required: *
          <small className="font-bold">
            <br/>
            Do not sign contracts until the event has been approved.
            <br/>
            <br/>
            Have equipment inspected by a licensed equipment operator.
            <br/>
            <br/>
            Notify McMaster Conference Services if the event is held on McMaster grounds (not inside buildings) Conference and Event Services.
            <br/>
            <br/>
            Check condition of extension cords and ensure that they are CSA approved. Also ensure that they do not obstruct egress and do not create a tripping hazard.
            <br/>
            <br/>
            Physical activity waivers are required for inflatables.
            <br/>
            <br/>
            Ensure outside contractors have $5M in Commercial General Liability and name McMaster University as additional insured, in addition to the MSU (for MSU clubs), and GSA (for GSA clubs).
          </small>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="checkbox" checked={sixthAgreement} onChange={e => updateFields({ sixthAgreement: e.target.checked })} />
            <div>Yes</div>
          </label>
        </div>
      </div>
    </div>
  )
};

export default HazardEvents;