type SafetyHazardsData = {
  fifthAgreement: boolean,
  involveHazardYes: boolean,
  involveHazardNo: boolean
}

type SafetyHazardsProps = SafetyHazardsData & {
  updateFields: (fields: Partial<SafetyHazardsData>) => void
}

function SafetyHazards({ fifthAgreement, involveHazardYes, involveHazardNo, updateFields }: SafetyHazardsProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        Safety Hazard Examples
        <br/>
        - Electrical equipment or machinery
        <br/>
        - RPAS (Remotely Piloted Aircraft Systems)
        <br/>
        - Hazardous materials
        <br/>
        - Rental of equipment or property (e.g. carnival rides, animals, etc.)
        <br/>
        <br/>
        <div>
          I understand and agree the following are prohibited *
          <small className="font-bold">
            <br/>
            - Firearms
            <br/>
            - Replica firearms
            <br/>
            - Weapons
          </small>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="checkbox" checked={fifthAgreement} onChange={e => updateFields({ fifthAgreement: e.target.checked })} />
            <div>Yes</div>
          </label>
        </div>

        <div>
          Does your event involve a safety hazard as outlined above? *
          <br/>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="radio" name='involveHazard' value="involveHazardYes" checked={involveHazardYes} onChange={() => updateFields({ involveHazardYes: true, involveHazardNo: false })}/>
            <div>Yes</div>
          </label>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input className="mr-2 h-6 w-6" type="radio" name='involveHazard' value="involveHazardNo" checked={involveHazardNo} onChange={() => updateFields({ involveHazardYes: false, involveHazardNo: true })}/>
            <div>No</div>
          </label>
        </div>
      </div>
    </div>
  )
};

export default SafetyHazards;