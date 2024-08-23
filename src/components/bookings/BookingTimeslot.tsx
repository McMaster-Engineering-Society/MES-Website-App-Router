import { format } from 'date-fns';
import { Clock, Ellipsis, LayoutPanelLeft, Pencil } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

type BookingTimeslotProps = {
  startTime: Date;
  endTime: Date;
  room: string;
  variant: 'next' | 'previous';
  handleEdit?: () => void;
  handleExpand?: () => void;
};

export const BookingTimeslot = ({
  startTime,
  endTime,
  room,
  variant,
  handleEdit,
  handleExpand,
}: BookingTimeslotProps) => {
  const formattedDate = format(startTime, 'MMM. d, yyyy');
  const bgColour = variant === 'next' ? 'bg-cyan-400' : 'bg-slate-400';
  const borderColour =
    variant === 'next' ? 'border-cyan-400' : 'border-slate-400';
  const textColour = variant === 'next' ? 'text-cyan-400' : 'text-slate-400';
  const hoverBgColour =
    variant === 'next' ? 'hover:bg-cyan-500' : 'hover:bg-slate-500';
  const hoverTextColour =
    variant === 'next' ? 'hover:text-cyan-500' : 'hover:text-slate-500';

  return (
    <div
      className={cn(
        'flex items-center rounded-full text-black border-2',
        bgColour,
        borderColour,
      )}
    >
      <div className='flex-1 font-semibold flex justify-center text-white'>
        {formattedDate}
      </div>
      <div
        className={cn(
          'flex items-center flex-1 bg-white border-2',
          borderColour,
        )}
      >
        <Clock className={cn('w-4 h-4 mx-2', textColour)} />
        <span className='w-full text-center'>
          {format(startTime, 'h:mm a')} – {format(endTime, 'h:mm a')}
        </span>
      </div>
      <div
        className={cn(
          'flex items-center flex-1 bg-white border-2',
          borderColour,
        )}
      >
        <LayoutPanelLeft className={cn('w-4 h-4 mx-2', textColour)} />
        <span className='w-full text-center'>{room}</span>
      </div>
      <div
        className={cn(
          'flex items-center bg-white rounded-r-full border-2',
          borderColour,
        )}
      >
        {handleEdit && (
          <button
            className={cn(
              'p-1 bg-white border-r-2 transition-colors duration-200',
              borderColour,
              hoverBgColour,
            )}
            onClick={handleEdit}
          >
            <Pencil
              className={cn(
                'w-4 h-4',
                textColour,
                `group-hover:${hoverTextColour}`,
              )}
            />
          </button>
        )}
        <button
          onClick={handleExpand}
          className={cn(
            'p-1 rounded-r-full border-l-2 text-white transition-colors duration-200',
            borderColour,
            bgColour,
            hoverBgColour,
          )}
        >
          <Ellipsis className='w-4 h-4 mr-2' />
        </button>
      </div>
    </div>
  );
};
