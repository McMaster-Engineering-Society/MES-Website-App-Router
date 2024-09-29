import { useCheckbox, VisuallyHidden } from '@nextui-org/react';
import React from 'react';

import { cn } from '@/lib/utils';

import { AdminBookingIndicatorColours } from '@/constant/hatch-bookings/booking-indicator-data';

interface RoomButtonProps {
  children?: React.ReactNode;
  value: string;
}

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const RoomButton = (props: RoomButtonProps) => {
  const { children, getBaseProps, getInputProps } = useCheckbox({
    ...props,
  });

  return (
    <label
      {...getBaseProps()}
      className={cn(
        'flex max-w-md w-full bg-content1 m-0',
        'hover:bg-content2 items-center justify-between',
        'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
        'data-[selected=true]:border-red-600',
        'flex-1',
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        className={`w-2 h-full rounded-xl ${AdminBookingIndicatorColours[props.value]}`}
      />
      <div className='flex-1'>{children}</div>
    </label>
  );
};
