import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

import { cn } from '@/lib/utils';

import { PageHeadingVariant } from '@/constant/variants';

type PageSectionProps = {
  heading?: string;
  headingSize?: 'sm' | 'md';
  headingVariant?: PageHeadingVariant;
  headingCapitalize?: boolean;
  leftIcon?: IconType | LucideIcon;
  capitalize?: boolean;
  children: React.ReactNode;
  variant?: PageHeadingVariant;
  solid?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const PageSection = ({
  heading,
  headingSize = 'md',
  headingVariant = 'default',
  headingCapitalize = false,
  leftIcon: Icon,
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
              'inline-flex items-center w-max bg-gray-900 px-3 py-1 font-bold uppercase text-white',
              headingSize === 'sm' && ['text-sm'],
              headingSize === 'md' && ['text-md'],
              headingVariant === 'default' && ['bg-gray-900'],
              headingVariant === 'lavendar' && ['bg-[#988ED7] text-white'],
              headingVariant === 'cyan' && ['bg-cyan-400 text-white'],
              headingVariant === 'light-green' && ['bg-[#A1D884] text-white'],
              headingVariant === 'slate' && ['bg-slate-400 text-white'],
              headingCapitalize && ['capitalize'],
            ])}
          >
            {Icon && <Icon size='1em' className='mr-1.5' />}
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
          variant === 'lavendar' && ['bg-[#988ED7] text-white'],
          variant === 'cyan' && ['bg-cyan-400 text-white'],
          variant === 'light-green' && ['bg-[#A1D884] text-white'],
          variant === 'slate' && ['bg-slate-400 text-white'],
          solid && ['bg-opacity-100'],
        ])}
      >
        {children}
      </div>
    </div>
  );
};

export default PageSection;
