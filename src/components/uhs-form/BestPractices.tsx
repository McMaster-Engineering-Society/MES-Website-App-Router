type BestData = {
  dangerYes: boolean,
  dangerNo: boolean
}

type BestProps = BestData & {
  updateFields: (fields: Partial<BestData>) => void
}

function BestPractices({ dangerYes, dangerNo, updateFields }: BestProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        Will participants be involved in an Event that could result in serious bodily injury or death? *
        <small> 
          Examples: concrete toboggan racing, rock climbing, skiing, sky diving, swimming
          <br/>
          For injuries occurring off-campus, please call 911. 
          For injuries occurring on-campus, please call McMaster Security at extension 88 or 905-522-4135. Do not attempt to move an injured person. Know the location of the nearest hospital.
        </small>
        <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
          <input required className="mr-2 h-6 w-6" type="radio" name='danger' value="dangerYes" checked={dangerYes} onChange={() => updateFields({ dangerYes: true, dangerNo: false })}/>
          <div>Yes</div>
        </label>
        <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
          <input className="mr-2 h-6 w-6" type="radio" name='danger' value="dangerNo" checked={dangerNo} onChange={() => updateFields({ dangerYes: false, dangerNo: true })}/>
          <div>No</div>
        </label>
      </div>
    </div>
  )
};

export default BestPractices;