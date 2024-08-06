import Question from "@/components/form/Question";
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
        <Question title="McMaster Email (example@mcmaster.ca)" required={true}>
          <input 
            required 
            type="email"
            className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" 
            placeholder="username@mcmaster.ca"
            pattern=".+@mcmaster\.ca"
            name="email" 
            value={email} 
            onChange={e => updateFields({ email: e.target.value })}
          />
        </Question>
      </div>
    </div>
  )
};

export default Intro;