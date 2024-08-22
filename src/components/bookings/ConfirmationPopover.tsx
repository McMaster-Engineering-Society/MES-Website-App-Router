import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import React, { ReactNode, useState } from 'react';
import { toast } from 'sonner';

type Props = {
  children: ReactNode;
};

function ConfirmationPopover({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  // TODO: connect to backend to send booking request, and receive response on whether the request was successful or not
  const handleConfirmBooking = () => {
    toast('Room has been successfully booked!');
    // toast('Room booking was unsuccessful!');
    setIsOpen(false); // Close the popover after clicking the button
  };
  return (
    <Popover
      placement='bottom'
      showArrow={true}
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <PopoverTrigger onClick={() => setIsOpen(true)}>
        {children}
      </PopoverTrigger>
      <PopoverContent>
        <div className='mx-0.5 my-1 '>
          <Button
            className='m-1 font-semibold bg-green-400 w-[130px]'
            size='sm'
            color='success'
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ConfirmationPopover;
