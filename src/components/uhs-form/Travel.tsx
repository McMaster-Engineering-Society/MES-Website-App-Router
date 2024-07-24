type TravelData = {
  travelYes: boolean,
  travelNo: boolean
}

type TravelProps = TravelData & {
  updateFields: (fields: Partial<TravelData>) => void
}

function Travel({ travelYes, travelNo, updateFields }: TravelProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        <div>
          Will participants be traveling a distance greater than 250km from campus (within Ontario)? *
          <br/>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="radio" name='travel' value="travelYes" checked={travelYes} onChange={() => updateFields({ travelYes: true, travelNo: false })}/>
            <div>Yes</div>
          </label>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input className="mr-2 h-6 w-6" type="radio" name='travel' value="travelNo" checked={travelNo} onChange={() => updateFields({ travelYes: false, travelNo: true })}/>
            <div>No</div>
          </label>
        </div>
      </div>
    </div>
  )
};

export default Travel;