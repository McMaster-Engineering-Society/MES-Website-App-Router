import PageWrapper from '@/components/form/PageWrapper';
import Question from '@/components/form/Question';

import { IntroProps } from '@/types/uhsForm';

function Intro({ email, updateFields }: IntroProps) {
  return (
    <PageWrapper>
      {/* This is an example of an email based question */}
      <Question title='McMaster Email (example@mcmaster.ca)' required={true}>
        <input
          required
          type='email'
          className='mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
          placeholder='username@mcmaster.ca'
          pattern='.+@mcmaster\.ca'
          name='email'
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </Question>
    </PageWrapper>
  );
}

export default Intro;
