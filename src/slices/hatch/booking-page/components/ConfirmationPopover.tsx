import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import React, { ReactNode, useState } from 'react';

type Props = {
  children: ReactNode;
  handleConfirmBookingWithMessage: () => void;
};

function ConfirmationPopover({
  children,
  handleConfirmBookingWithMessage,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: connect to backend to send booking request, and receive response on whether the request was successful or not
  // TODO (amend): should receive the message whether it was a success or failure, needs to be handled in the backend as a next step
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
            className='m-1 font-semibold bg-[#28a745] w-[130px]'
            size='sm'
            color='success'
            onClick={handleConfirmBookingWithMessage}
          >
            Confirm Booking
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ConfirmationPopover;
