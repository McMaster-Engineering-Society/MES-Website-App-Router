import React from 'react';

import { Form } from '@/types/form';

type FormEventProps = {
  form: Form;
};
const FormEvent = ({ form }: FormEventProps) => {
  const date = new Date(form.year, form.month - 1, form.day);
  const time = form.startTime + ' - ' + form.endTime;

  return (
    <div
      key={form.id}
      className='flex flex-row items-center justify-between pr-4 p-1 py-2 border-3 border-gray-200 rounded-lg mb-3 gap-7 text-center'
    >
      <span
        className={`basis-full font-medium ${
          form.type === 'UHS Form' ? 'text-[#607BB0]' : 'text-[#5F7C5B]'
        }`}
      >
        {form.type}
      </span>
      <span className='basis-full underline underline-offset-4'>
        {form.name}
      </span>
      <span className='basis-1/4'>{form.building + ' #' + form.room}</span>
      <span className='basis-full'>
        {date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }) +
          ' @ ' +
          time}
      </span>
      <button className='basis-1/4 bg-[#A6192E] text-white font-medium rounded-lg p-1'>
        View Form
      </button>
    </div>
  );
};

export default FormEvent;
