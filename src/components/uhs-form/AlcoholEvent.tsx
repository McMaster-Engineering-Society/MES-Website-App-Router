type AlcoholEventData = {
  campusYes: boolean,
  campusNo: boolean,
  eighthAgreementYes: boolean,
  eighthAgreementNo: boolean
}

type AlcoholEventProps = AlcoholEventData & {
  updateFields: (fields: Partial<AlcoholEventData>) => void
}

function AlcoholEvent({ campusYes, campusNo, eighthAgreementYes, eighthAgreementNo, updateFields }: AlcoholEventProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        <div>
          Is the event being held *
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="radio" name='campus' value="campusYes" checked={campusYes} onChange={() => updateFields({ campusYes: true, campusNo: false })}/>
            <div>On Campus</div>
          </label>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input className="mr-2 h-6 w-6" type="radio" name='campus' value="campusNo" checked={campusNo} onChange={() => updateFields({ campusYes: false, campusNo: true })}/>
            <div>Off Campus</div>
          </label>
        </div>

        <div>
        IF THIS EVENT IS BEING HELD ON CAMPUS and involves more than 100 participants, you must advise Security Services by emailing security@mcmaster.ca and have participants complete alcohol waivers. *
          <br/>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="radio" name='eighthAgreement' value="eighthAgreementYes" checked={eighthAgreementYes} onChange={() => updateFields({ eighthAgreementYes: true, eighthAgreementNo: false })}/>
            <div>I have read and agree</div>
          </label>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input className="mr-2 h-6 w-6" type="radio" name='eighthAgreement' value="eighthAgreementNo" checked={eighthAgreementNo} onChange={() => updateFields({ eighthAgreementYes: false, eighthAgreementNo: true })}/>
            <div>My event is not being held on campus</div>
          </label>
        </div>

      </div>
    </div>
  )
};

export default AlcoholEvent;