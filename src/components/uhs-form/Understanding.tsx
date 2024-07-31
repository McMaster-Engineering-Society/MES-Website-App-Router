import Question from "@/components/form/Question";

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
//page for understanding section
function Understanding({ firstAgreement, secondAgreement, groupMES, groupDepartment, groupCommittee, groupName, updateFields }: UnderstandingProps) {
  return (
    <div className="flex flex-col">
        <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
            {/* This is an example of a single checkbox question */}
            <Question title="I understand that this form does not equate to a room booking. I understand that this form, when approved, will lead to a code used for room booking. I cannot book a room without an event code. If I am unsure how to book a room after getting a code, I can email vp.studentlife@macengsociety.ca. I should submit this form 2 weeks prior to my event to be safe. If I do not submit this form 2 weeks prior, I accept the risk that I may not receive event approval or a room booking in time." required={true}>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input required className="mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="checkbox" checked={firstAgreement} onChange={e => updateFields({ firstAgreement: e.target.checked })} />
                <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">I have read the above and understand</div>
              </label>
            </Question>
            
            <Question title="(For Groups, Teams, Affiliates and Department Clubs) If you would like your event posted on the MES Calendar, please submit to the link found at the end of the form." required={true}>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input required className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="checkbox" checked={secondAgreement} onChange={e => updateFields({ secondAgreement: e.target.checked })} />
                <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">I understand</div>
              </label>
            </Question>

            {/* This is an example of a multiple choice question */}
            <Question title="Which category best describes your group? The MES only provides UHS form submissions for these groups." required={true}>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input required className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='group' value = "groupMES" checked={groupMES} onChange={() => updateFields({ groupMES: true, groupDepartment: false, groupCommittee: false })}/>
                <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">MES Group/Team/Affiliate</div>
              </label>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='group' value = "groupDepartment" checked={groupDepartment} onChange={() => updateFields({ groupMES: false, groupDepartment: true, groupCommittee: false })} />
                <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Department Program/Club</div>
              </label>
              <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
                <input className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='group' value = "groupCommittee" checked={groupCommittee} onChange={() => updateFields({ groupMES: false, groupDepartment: false, groupCommittee: true })} />
                <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">MES Committee and/or MES Council (Not including department/program reps)</div>
              </label>
            </Question>

            {/* This is an example of a text input question */}
            <Question title="Group/Team/Affiliate/Club/Committee Name or Council position for MES" required={true}>
              <input required className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter your group name..." name="name" value={groupName} onChange={e => updateFields({ groupName: e.target.value })}/>
            </Question>
        </div>
    </div>
  );
};
export default Understanding;