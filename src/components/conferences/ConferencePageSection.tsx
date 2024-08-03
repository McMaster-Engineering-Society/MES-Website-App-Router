import {
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from '@nextui-org/react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGlobe, FaInstagram, FaLink } from 'react-icons/fa6';

import IconButton from '@/components/buttons/IconButton';
import PageSection from '@/components/PageSection';

import { ConferencePageSectionType } from '@/constant/conferences';

const socialMediaIcon: Record<string, IconType> = {
  Instagram: FaInstagram,
  Website: FaGlobe,
};

export const ConferencePageSection: React.FC<ConferencePageSectionType> = ({
  title,
  location,
  dates,
  delegates,
  CFESESSCO,
  links,
  body,
}) => {
  return (
    <PageSection variant='white'>
      <div className='conference-details mb-4 flex flex-col'>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-bold'>{title}</span>
          {/**
           * CFESESSCO exists => conference is external => render link to CFES/ESSCO page
           * CFESESSCO doesn't exist => conference is internal => render popdown for the event's links
           */}
          {CFESESSCO ? (
            <Link key={CFESESSCO} href={CFESESSCO} target='_blank'>
              <Tooltip showArrow content='CFES/ESSCO Page' placement='bottom'>
                <IconButton
                  variant='ghost'
                  className='rounded-full'
                  icon={FaGlobe}
                  rel='noreferrer'
                  classNames={{
                    icon: 'text-gray-700',
                  }}
                />
              </Tooltip>
            </Link>
          ) : (
            <Popover placement='left'>
              <PopoverTrigger>
                <div className='flex items-center justify-center rounded-full p-2 text-gray-600 transition-all hover:bg-gray-200/25 hover:shadow-md active:translate-y-[2px] active:bg-gray-400/25 active:shadow-none'>
                  <FaLink />
                </div>
              </PopoverTrigger>
              <PopoverContent>
                {links ? (
                  <div>
                    {Object.entries(links).map(([key, value]) => {
                      return (
                        <Link key={key} href={value} target='_blank'>
                          <Tooltip showArrow content={key} placement='bottom'>
                            <IconButton
                              variant='ghost'
                              className='rounded-full'
                              icon={socialMediaIcon[key]}
                              rel='noreferrer'
                              classNames={{
                                icon: 'text-gray-700',
                              }}
                            />
                          </Tooltip>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <span className='select-none text-sm italic text-gray-600'>
                    No social media
                  </span>
                )}
              </PopoverContent>
            </Popover>
          )}
        </div>

        <Divider className='my-2' />

        <span>
          <b>Location:</b> {location}
        </span>
        <span>
          <b>Dates:</b> {dates}
        </span>
        <span>
          <b>Delegates:</b> {delegates}
        </span>
      </div>
      <span>{body}</span>
    </PageSection>
  );
};
