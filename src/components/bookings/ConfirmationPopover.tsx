import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import React, { ReactNode } from 'react';
type Props = {
  children: ReactNode;
};

function ConfirmationPopover({ children }: Props) {
  return (
    <Popover placement='bottom' showArrow={true}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <div className='mx-0.5 my-1 '>
          <Button
            className='m-1 font-semibold bg-green-400 w-[130px]'
            size='sm'
            color='success'
          >
            Confirm Booking
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ConfirmationPopover;
