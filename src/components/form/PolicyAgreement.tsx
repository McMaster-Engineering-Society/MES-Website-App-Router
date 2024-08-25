import React from 'react';

import Question from '@/components/form/Question';

interface PolicyQuestionProps {
  title: string;
  policyContent?: React.ReactNode;
  isChecked: boolean;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  htmlFor: string;
  required?: boolean;
}

const PolicyQuestion = ({
  title,
  policyContent,
  isChecked,
  onChangeHandler,
  htmlFor,
  required = true,
}: PolicyQuestionProps) => (
  <Question title={title} required={required}>
    {policyContent && (
      <div className="max-h-[20rem] overflow-scroll overflow-x-hidden opacity-50 whitespace-normal border-spacing-1 bg-[#ececec] rounded border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0 text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
        {policyContent}
      </div>
    )}
    <label
      htmlFor={htmlFor}
      className='flex flex-row mt-2 h-fit justify-items-start content-center'
    >
      <input
        id={htmlFor} // Set the id so the label associated properly with this input.
        required={required}
        className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
        type='checkbox'
        checked={isChecked}
        onChange={onChangeHandler}
      />
      <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
        I have read and agree
      </div>
    </label>
  </Question>
);

export default PolicyQuestion;
