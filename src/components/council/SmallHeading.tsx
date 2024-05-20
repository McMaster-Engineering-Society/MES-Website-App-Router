import { cn } from '@/lib/utils';

import { PageHeadingVariant } from '@/constant/variants';

type SmallHeadingProps = {
  title: string;
  variant?: PageHeadingVariant;
};

const SmallHeading = ({ title, variant = 'default' }: SmallHeadingProps) => {
  return (
    <div className='flex w-full flex-col items-start'>
      <div
        className={cn(
          'w-full px-4 py-2 text-left text-3xl font-bold uppercase',
          [
            (variant === 'red' || variant == 'default') && [
              'bg-[#A6192E] text-white',
            ],
            variant === 'white' && ['bg-white text-black'],
            variant === 'blue' && ['bg-[#8BD3E6] text-black'],
            variant === 'green' && ['bg-[#A1D884] text-black'],
            variant === 'yellow' && ['bg-[#EDE04B] text-black'],
            variant === 'purple' && ['bg-[#8C4799] text-white'],
            variant === 'pink' && ['bg-[#F57EB6] text-black'],
            variant === 'grey' && ['bg-[#E5E7EB] text-black'],
          ]
        )}
      >
        {title}
      </div>
    </div>
  );
};

export default SmallHeading;
