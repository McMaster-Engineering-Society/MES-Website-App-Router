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
        <label className="flex flex-col">
          Describe the activity the participants will be taking part in: *
          <br/>
          <input required className="mt-2  w-[40%] w-min-4" name="activityDesc" value={activityDesc} onChange={e => updateFields({ activityDesc: e.target.value })}/>
        </label>

        <label className="flex flex-col">
          Name of individual responsible for ensuring a first aid kit is available at the event: *
          <br/>
          <input required className="mt-2  w-[40%] w-min-4" name="nameOfFirstAidIndividual" value={nameOfFirstAidIndividual} onChange={e => updateFields({ nameOfFirstAidIndividual: e.target.value })}/>
        </label>

        <label className="flex flex-col">
          Name of individual responsible for contacting emergency services if the activity is in a remote area: *
          <br/>
          <input required className="mt-2  w-[40%] w-min-4" name="nameOfEmergencyIndividual" value={nameOfEmergencyIndividual} onChange={e => updateFields({ nameOfEmergencyIndividual: e.target.value })}/>
        </label>

        <div>
          I have read and agree to the following *
          <small className="font-bold">
            <br/>
            Required:
            <br/>
            Advise participants to bring Health Cards and IDs.
            <br/>
            The individual facilitating the activity must be experienced and trained (certified) in the activity.
            <br/>
            Waivers (Participation in competitions, athletic sport or recreational activity) are required for all participants
          </small>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="checkbox" checked={fourthAgreement} onChange={e => updateFields({ fourthAgreement: e.target.checked })} />
            <div>Yes</div>
          </label>
        </div>
      </div>
    </div>
  )
};

export default Danger;