import Question from "@/components/form/Question"

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
      <div id='text-body' className="flex flex-col gap-x-4 gap-y-4 text-[#4b4b4b] text-lg font-medium font-['Inter']">
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
        <Question title="I understand and agree Firearms, Replica firearms, and Weapons are prohibited" required={true}>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="checkbox" checked={fifthAgreement} onChange={e => updateFields({ fifthAgreement: e.target.checked })} />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Yes</div>
          </label>
        </Question>
          
        <Question title="Does your event involve a safety hazard as outlined above?" required={true}>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='involveHazard' value="involveHazardYes" checked={involveHazardYes} onChange={() => updateFields({ involveHazardYes: true, involveHazardNo: false })}/>
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Yes</div>
          </label>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input className="mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='involveHazard' value="involveHazardNo" checked={involveHazardNo} onChange={() => updateFields({ involveHazardYes: false, involveHazardNo: true })}/>
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">No</div>
          </label>
        </Question>
        
      </div>
    </div>
  )
};

export default SafetyHazards;