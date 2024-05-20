import { cn } from '@/lib/utils';

import { PageHeadingVariant } from '@/constant/variants';

type PageHeadingProps = {
  title: string;
  preTitle?: string;
  variant?: PageHeadingVariant;
};

const PageHeading = ({
  title,
  preTitle,
  variant = 'default',
}: PageHeadingProps) => {
  return (
    <div className='flex flex-col items-start drop-shadow-2xl'>
      {preTitle && (
        <div className='bg-gray-900 px-4 py-2 text-lg font-bold uppercase text-white'>
          {preTitle}
        </div>
      )}
      <div
        className={cn('px-5 py-3 text-4xl font-bold uppercase italic', [
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
        ])}
      >
        {title}
      </div>
    </div>
  );
};

export default PageHeading;
