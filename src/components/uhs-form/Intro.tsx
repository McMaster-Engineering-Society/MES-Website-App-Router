type IntroData = {
  email: string
}

type IntroProps = IntroData & {
  updateFields: (fields: Partial<IntroData>) => void
}

function Intro({ email, updateFields }: IntroProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        {/* This is an example of an email based question */}
        <label className="flex flex-col">
          Email *
          <br/>
          <input required type="email" className="mt-2  w-[40%] w-min-4" name="email" value={email} onChange={e => updateFields({ email: e.target.value })}/>
        </label>
      </div>
    </div>
  )
};

export default Intro;