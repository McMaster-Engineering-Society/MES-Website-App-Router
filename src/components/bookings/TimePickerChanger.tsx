import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

import Button from '@/components/buttons/Button';

const TimePickerChanger = () => {
  return (
    <div className='flex justify-between items-center w-full bg-white border-2 border-primary-800 rounded-lg'>
      <Button>
        <ArrowLeft />
      </Button>
      <span className='text-base font-semibold italic text-primary-900'>
        July 14 - July 20
      </span>
      <Button>
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TimePickerChanger;
