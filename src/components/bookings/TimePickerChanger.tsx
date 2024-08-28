import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';

import Button from '@/components/buttons/Button';

const TimePickerChanger = () => {
  return (
    <div className='flex justify-between ml-[36px] w-full bg-white border-2 border-primary-800 rounded-lg'>
      <Button>
        <ArrowLeft />
      </Button>
      <h2 className='text-2xl font-semibold'>2024-08-23T04:59:51.392Z</h2>
      <Button>
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TimePickerChanger;
