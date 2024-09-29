import * as React from 'react';

type FormQuestionProps = {
  title: string;
  required: boolean;
  description?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<'label'>;

const FormQuestion = React.forwardRef<HTMLLabelElement, FormQuestionProps>(
  ({ title, required, description, children }) => {
    return (
      <label className='flex flex-col'>
        <div className='flex flex-row gap-x-1'>
          <div className="text-[#4b4b4b] text-lg font-medium font-['Inter'] ">
            {' '}
            {title}{' '}
          </div>
          <div className="text-[#a6192e] text-[22.40px] font-medium font-['Inter']">
            {required ? ' *' : ''}
          </div>
        </div>
        {description && (
          <small className="text-[#4b4b4b] text-medium font-sm font-['Inter']">
            {description}
          </small>
        )}
        {children}
      </label>
    );
  },
);
export default FormQuestion;
