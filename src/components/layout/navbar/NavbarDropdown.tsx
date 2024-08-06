import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';

export const NavbarDropdown = ({ ...props }) => {
  const [isOnDropdown, setIsOnDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsOnDropdown(true);
      }}
      onMouseLeave={() => {
        setIsOnDropdown(false);
      }}
      className='relative'
    >
      <div className='absolute w-full h-8 top-8 border-solid'>
        {/**
         * dropdowns that open on hover -> they close when the mouse moves outside of the component
         * gap between dropdown button and menu -> dropdown closes when cursor moves between button and menu
         *
         * * This empty div bridges the gap between the dropdown button and menu to allow for hover dropdowns to function properly.
         */}
      </div>
      <Dropdown isOpen={isOnDropdown}>
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className='bg-transparent p-0 data-[hover=true]:bg-transparent'
              endContent={
                <ArrowDropDownIcon
                  className={cn(['text-black', props.darkMode && 'text-white'])}
                />
              }
              radius='sm'
              variant='light'
            >
              <span
                className={cn([
                  'text-sm font-medium text-black',
                  props.darkMode && 'text-white',
                ])}
              >
                {props.title}
              </span>
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        <DropdownMenu
          aria-label={`${props.title} Menu`}
          itemClasses={{
            base: 'gap-4',
          }}
          variant='light'
        >
          {(props.dropdownItems || []).map(
            (dropdownItem: DropdownItem, idx: number) => (
              // Temporary fix: onClick & <Link> both required for dropdown items to work
              <DropdownItem
                key={`${dropdownItem.title}-${idx}`}
                color='default'
                textValue={`${dropdownItem.title}`}
                onClick={() => {
                  props.onDropdownClick(dropdownItem.link ?? '');
                }}
              >
                <Link color='foreground' href={dropdownItem.link ?? ''}>
                  <span className='text-sm font-medium'>
                    {dropdownItem.title}
                  </span>
                </Link>
              </DropdownItem>
            ),
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

type DropdownItem = {
  title: string;
  link: string;
};
