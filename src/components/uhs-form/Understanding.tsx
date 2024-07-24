type UnderstandingData = {
  firstAgreement: boolean,
  secondAgreement: boolean,
  groupMES: boolean,
  groupDepartment: boolean,
  groupCommittee: boolean,
  groupName: string,
}

type UnderstandingProps = UnderstandingData & {
  updateFields: (fields: Partial<UnderstandingData>) => void
}

function Understanding({ firstAgreement, secondAgreement, groupMES, groupDepartment, groupCommittee, groupName, updateFields }: UnderstandingProps) {
  return (
    <div className="flex flex-col">
        <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
            <div>
              I understand that this form does not equate to a room booking. I understand that this form, when approved, will lead to a code used for room booking. I cannot book a room without an event code. If I am unsure how to book a room after getting a code, 
              I can email {' '}
              <a href='mailto:vp.studentlife@macengsociety.ca' className='underline'>
                vp.studentlife@macengsociety.ca
              </a>
              . I should submit this form 2 weeks prior to my event to be safe. If I do not submit this form 2 weeks prior, I accept the risk that I may not receive event approval or a room booking in time. *
              <br/>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input required className="mr-2 h-6 w-6" type="checkbox" checked={firstAgreement} onChange={e => updateFields({ firstAgreement: e.target.checked })} />
                <div>I have read the above and understand</div>
              </label>
            </div>

            <div>
              (For Groups, Teams, Affiliates and Department Clubs) If you would like your event posted on the MES Calendar, please submit to the link found at the end of the form. *
              <br/>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input required className="mr-2 h-6 w-6" type="checkbox" checked={secondAgreement} onChange={e => updateFields({ secondAgreement: e.target.checked })} />
                <div>I understand</div>
              </label>
            </div>

            <div >
            Which category best describes your group? The MES only provides UHS form submissions for these groups. *
              <br/>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input required className="mr-2 h-6 w-6" type="radio" name='group' value = "groupMES" checked={groupMES} onChange={() => updateFields({ groupMES: true, groupDepartment: false, groupCommittee: false })}/>
                <div>MES Group/Team/Affiliate</div>
              </label>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input className="mr-2 h-6 w-6" type="radio" name='group' value = "groupDepartment" checked={groupDepartment} onChange={() => updateFields({ groupMES: false, groupDepartment: true, groupCommittee: false })} />
                <div>Department Program/Club</div>
              </label>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input className="mr-2 h-6 w-6" type="radio" name='group' value = "groupCommittee" checked={groupCommittee} onChange={() => updateFields({ groupMES: false, groupDepartment: false, groupCommittee: true })} />
                <div>MES Committee and/or MES Council (Not including department/program reps)</div>
              </label>
            </div>

            <label className="flex flex-col">
              Group/Team/Affiliate/Club/Committee Name or Council position for MES *
              <br/>
              <input required className="mt-2  w-[40%] w-min-4" name="name" value={groupName} onChange={e => updateFields({ groupName: e.target.value })} />
            </label>
        </div>
    </div>
  );
};
export default Understanding;