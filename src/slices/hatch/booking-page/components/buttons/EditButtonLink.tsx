'use client';

import { Pencil } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

const EditButtonLinkVariant = ['lavendar', 'cyan', 'light-green'] as const;
const ButtonLinkSize = ['sm', 'base'] as const;

type EditButtonLinkProps = {
  href: string;
  isDarkBg?: boolean;
  variant?: (typeof EditButtonLinkVariant)[number];
  size?: (typeof ButtonLinkSize)[number];
  disabled?: boolean;
  className?: string;
};

const EditButtonLink = ({
  href,
  className,
  variant = 'lavendar',
  size = 'base',
}: EditButtonLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded font-medium',
        'focus:outline-none focus-visible:ring',
        'transition-colors duration-75',
        //#region  //*=========== Size ===========
        [
          size === 'base' && ['px-3 py-1.5', 'text-sm md:text-base'],
          size === 'sm' && ['px-2 py-1', 'text-xs md:text-sm'],
        ],
        //#endregion  //*======== Size ===========
        //#region  //*=========== Variants ===========
        [
          variant === 'lavendar' && [
            'bg-[#988ED7]/[0.17] text-[#988ED7]',
            'border-[#988ED7] border',
            'hover:bg-[#988ED7] hover:text-white',
          ],
          variant === 'cyan' && [
            'bg-cyan-400/[0.17] text-cyan-400',
            'border-cyan-400 border',
            'hover:bg-cyan-400 hover:text-white',
          ],
          variant === 'light-green' && [
            'bg-[#A1D884]/[0.17] text-[#A1D884]',
            'border-[#A1D884] border',
            'hover:bg-[#A1D884] hover:text-white',
          ],
        ],
        //#endregion  //*======== Variants ===========
        className,
      )}
    >
      <Pencil />
    </a>
  );
};

export default EditButtonLink;
