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
        <div className='mx-1 my-2'>
          <Button
            className='m-1 font-semibold bg-green-300'
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
