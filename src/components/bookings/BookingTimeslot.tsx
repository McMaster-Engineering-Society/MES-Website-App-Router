import { Button, Image } from '@nextui-org/react';

type BookingTimeslotProps = {
  imageSrc?: string;
  room: string;
  date: Date;
  variant: 'next' | 'previous' | 'upcoming';
};

export const BookingTimeslot = ({
  imageSrc,
  room,
  date,
  variant,
}: BookingTimeslotProps) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }); // August 14, 2024

  // Assuming you have start and end times
  const startTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }); // 6:00 PM

  const imageColour = (
    imageColour: 'next' | 'previous' | 'upcoming',
  ): string => {
    if (imageColour === 'next') {
      return 'bg-cyan-500';
    } else if (imageColour === 'previous') {
      return 'bg-gray-500';
    } else {
      return 'bg-green-200';
    }
  };

  return (
    <div className='bg-white p-2 rounded-lg outline outline-2 w-2/4 flex justify-between'>
      <div className='flex flex-row items-center justify-between rounded-lg'>
        {formattedDate}
      </div>
      <div className='flex items-center justify-center rounded-lg'>
        {' '}
        {startTime}
      </div>
      <div
        className={` flex items-center justify-start w-1/4 h-full ml-1 rounded-s-3xl ${imageColour(variant)}`}
      >
        <Image
          src={imageSrc}
          alt='Hatch Room Booking Image'
          width={60}
          height={10}
          className='w-full h-full rounded-3xl'
        />
        <div className=' h-full ml-1 flex items-center text-white'> {room}</div>
      </div>

      <Button
        className='outline-cyan-500 outline-2 text-cyan-500  h-4'
        color='primary'
        size='sm'
      >
        {' '}
        Edit{' '}
      </Button>
    </div>
  );
};
