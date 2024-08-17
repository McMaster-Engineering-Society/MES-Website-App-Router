import Question from "@/components/form/Question"

type TravelData = {
  travel: boolean | undefined
}

type TravelProps = TravelData & {
  updateFields: (fields: Partial<TravelData>) => void
}

function Travel({ travel, updateFields }: TravelProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        <Question title="Will participants be traveling a distance greater than 250km from campus (within Ontario)?" required={true}>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='travel' value="travelYes" checked={travel === true} onChange={() => updateFields({ travel: true })}/>
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Yes</div>
          </label>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input className="mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='travel' value="travelNo" checked={travel === false} onChange={() => updateFields({ travel: false })}/>
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">No</div>
          </label>
        </Question>

      </div>
    </div>
  )
};

export default Travel;