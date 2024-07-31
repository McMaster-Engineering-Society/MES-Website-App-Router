import { cn } from '@/lib/utils';

import { PageHeadingVariant } from '@/constant/variants';

type PageSectionProps = {
  heading?: string;
  headingSize?: 'sm' | 'md';
  children: React.ReactNode;
  variant?: PageHeadingVariant;
  solid?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const PageSection = ({
  heading,
  headingSize = 'md',
  children,
  variant = 'default',
  solid = false,
  className,
}: PageSectionProps) => {
  return (
    <div
      className={cn(['mt-8 flex w-full flex-col drop-shadow-2xl', className])}
    >
      {heading ? (
        <div>
          <div
            className={cn([
              'w-max bg-gray-900 px-3 py-1 font-bold uppercase text-white',
              headingSize === 'sm' && ['text-sm'],
              headingSize === 'md' && ['text-md'],
            ])}
          >
            {heading}
          </div>
        </div>
      ) : null}
      <div
        className={cn('bg-opacity-75 p-4 text-left text-white', [
          variant === 'default' && ['bg-gray-800 text-white'],
          variant === 'red' && ['bg-[#A6192E] text-white'],
          variant === 'white' && ['bg-white text-black'],
          variant === 'blue' && ['bg-[#8BD3E6] text-black'],
          variant === 'green' && ['bg-[#A1D884] text-black'],
          variant === 'yellow' && ['bg-[#EDE04B] text-black'],
          variant === 'purple' && ['bg-[#8C4799] text-white'],
          variant === 'pink' && ['bg-[#F57EB6] text-black'],
          variant === 'rounded' && ['bg-[#ececec] text-black rounded-lg'],
          solid && ['bg-opacity-100'],
        ])}
      >
        {children}
      </div>
    </div>
  );
};

export default PageSection;
