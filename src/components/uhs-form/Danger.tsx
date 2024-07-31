import Question from "@/components/form/Question"

type DangerData = {
  activityDesc: string,
  nameOfFirstAidIndividual: string,
  nameOfEmergencyIndividual: string,
  fourthAgreement: boolean
}

type DangerProps = DangerData & {
  updateFields: (fields: Partial<DangerData>) => void
}

function Danger({ activityDesc, nameOfFirstAidIndividual, nameOfEmergencyIndividual, fourthAgreement, updateFields }: DangerProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        <Question title="Describe the activity the participants will be taking part in:" required={true}>
          <textarea required className="mt-2 w-full w-min-4 h-[10rem] opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Describe the activity..." name="activityDesc" value={activityDesc} onChange={e => updateFields({ activityDesc: e.target.value })}/>
        </Question>

        <Question title="Name of individual responsible for ensuring a first aid kit is available at the event:" required={true}>
          <input required className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter responsible individual..." name="nameOfFirstAidIndividual" value={nameOfFirstAidIndividual} onChange={e => updateFields({ nameOfFirstAidIndividual: e.target.value })}/>
        </Question>
          
        <Question title="Name of individual responsible for contacting emergency services if the activity is in a remote area:" required={true}>
         <input required className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter responsible individual..." name="nameOfEmergencyIndividual" value={nameOfEmergencyIndividual} onChange={e => updateFields({ nameOfEmergencyIndividual: e.target.value })}/>
        </Question>

        <Question title="I have read and agree to the following" description="Required: Advise participants to bring Health Cards and IDs. The individual facilitating the activity must be experienced and trained (certified) in the activity. Waivers (Participation in competitions, athletic sport or recreational activity) are required for all participants" required={true}>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="checkbox" checked={fourthAgreement} onChange={e => updateFields({ fourthAgreement: e.target.checked })} />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Yes</div>
          </label>
        </Question>

      </div>
    </div>
  )
};

export default Danger;