import { cn } from '@/lib/utils';

type InfoCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  animate?: boolean;
  learnMore?: boolean;
  className?: string;
};

const InfoCard = ({
  title,
  description,
  icon,
  animate = false,
  learnMore = false,
  className,
}: InfoCardProps) => {
  return (
    <div
      className={cn([
        'info-card relative flex flex-col overflow-clip rounded-lg border-2 border-red-100 bg-white drop-shadow-2xl transition hover:opacity-100 md:hover:scale-105',
        className,
      ])}
    >
      <div className='flex flex-row justify-between'>
        <div className='info-card-icon text-mesRed aspect-square max-w-min rounded-br-[2.5rem] rounded-tl-lg border-b-2 border-r-2 border-red-100 bg-red-50 p-6'>
          {icon}
        </div>
        {animate && (
          <div className='p-2'>
            <span className='ping-icon relative flex h-3 w-3'>
              <span className='bg-mesRed absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
              <span className='bg-mesRed relative inline-flex h-3 w-3 rounded-full'></span>
            </span>
          </div>
        )}
      </div>
      <div className='info-card-info flex flex-col p-4'>
        <span className='info-card-info-title text-lg font-bold'>{title}</span>
        <span className='info-card-info-description mt-2 text-sm'>
          {description}
          {learnMore && (
            <span className='text-mesRed italic'> More info down below.</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
