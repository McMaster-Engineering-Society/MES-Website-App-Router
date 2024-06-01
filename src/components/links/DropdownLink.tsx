'use client';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react';
import { GoTriangleDown } from 'react-icons/go';

import Button from '@/components/buttons/Button';

import DropdownLinkItem from '@/types/dropdownLinkItem';

type DropdownLinkProps = {
  title: string;
  dropdownItems: DropdownLinkItem[];
  className?: string;
};

const DropdownLink = ({
  title,
  dropdownItems,
  className,
}: DropdownLinkProps) => {
  return (
    <div className={className}>
      <Dropdown>
        <DropdownTrigger>
          <Button leftIcon={GoTriangleDown}>{title}</Button>
        </DropdownTrigger>
        <DropdownMenu variant='solid' aria-label='Dynamic Actions'>
          <DropdownSection title={title}>
            {dropdownItems.map((item, index) => (
              <DropdownItem key={item.text + '_' + index}>
                <a
                  className={className}
                  style={{ display: 'block' }}
                  href={item.url}
                  target='_blank'
                >
                  {item.text}
                </a>
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownLink;
