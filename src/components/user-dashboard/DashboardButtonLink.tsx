import React from 'react';

const ButtonLinkVariant = ['green', 'blue', 'purple'] as const;

const ButtonLinkSize = ['sm', 'base'] as const;

import { cn } from '@/lib/utils';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

type DashboardButtonLinkProps = {
  isDarkBg?: boolean;
  variant?: (typeof ButtonLinkVariant)[number];
  size?: (typeof ButtonLinkSize)[number];
} & UnstyledLinkProps;

const DashboardButtonLink = React.forwardRef<
  HTMLAnchorElement,
  DashboardButtonLinkProps
>(
  (
    { children, className, variant = 'primary', size = 'base', ...rest },
    ref,
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        type='button'
        className={cn(
          'inline-flex items-center justify-center rounded-2xl',
          'border-1',
          'disabled:bg-opacity-75',
          'font-light',
          //#region  //*=========== Size ===========
          [
            size === 'base' && ['px-4', 'text-sm md:text-base'],
            size === 'sm' && ['px-2', 'text-xs md:text-sm'],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'green' && [
              'text-[#A1D884]',
              'border-[#A1D884] border',
              'hover:bg-[#A1D884] hover:text-white',
            ],
            variant === 'purple' && [
              'text-[#988ED7]',
              'border-[#988ED7] border',
              'hover:bg-[#988ED7] hover:text-white',
            ],
          ],
          //#endregion  //*======== Variants ===========
          className,
        )}
      >
        {children}
      </UnstyledLink>
    );
  },
);

export default DashboardButtonLink;
