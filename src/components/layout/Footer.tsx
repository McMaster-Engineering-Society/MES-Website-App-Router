'use client';

import * as React from 'react';
import { IconType } from 'react-icons';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchatGhost,
  FaTwitter,
} from 'react-icons/fa';

import { cn } from '@/lib/utils';

import IconButton from '@/components/buttons/IconButton';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

type SocialMedia = {
  icon: IconType;
  href: string;
}[];

// List of social media links with respective Icons
const socialMedia: SocialMedia = [
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/company/mcmaster-engineering-society/',
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/macengsociety/',
  },
  {
    icon: FaTwitter,
    href: 'https://twitter.com/macengsociety/',
  },
  {
    icon: FaFacebookF,
    href: 'https://www.facebook.com/MacEngSociety/',
  },
  {
    icon: FaSnapchatGhost,
    href: 'https://www.snapchat.com/add/macengsociety/',
  },
];

// List of links and column sections
const links = [
  {
    header: 'Services',
    sublinks: [
      {
        href: '/bookings',
        label: 'Hatch Rooms',
      },
      {
        href: '/hatch-lockers',
        label: 'Hatch Lockers',
      },
      {
        href: '/mes-card',
        label: 'MES Card',
      },
      {
        href: '/special-projects',
        label: 'Special Projects',
      },
      {
        href: '/wellness',
        label: 'Wellness',
      },
      {
        href: '/tutoring',
        label: 'Tutoring',
      },
    ],
  },
  {
    header: 'Resources',
    sublinks: [
      {
        href: '/events',
        label: 'Events',
      },
      {
        href: '/conferences',
        label: 'Conferences',
      },
      {
        href: '/elections',
        label: 'Elections',
      },
      {
        href: '/maclab',
        label: 'macLAB Funding',
      },
      {
        href: '/council-resources',
        label: 'Council Resources',
      },
      {
        href: '/clubs-and-teams',
        label: 'Clubs and Teams',
      },
    ],
  },
];

type FooterProps = {
  darkMode?: boolean;
};

export default function Footer({ darkMode = false }: FooterProps) {
  return (
    <footer
      className={cn([
        'flex flex-col pb-8 pt-8 lg:pt-16',
        darkMode ? 'bg-[#220000] text-gray-300' : 'bg-gray-100 text-gray-700',
      ])}
    >
      <div className='footer-info layout flex min-h-0 flex-col py-4 text-center lg:flex-row'>
        <div
          id='footer-about'
          className='flex flex-1 flex-col text-center lg:text-start'
        >
          <div id='footer-logo' className='font-bold'>
            McMaster Engineering Society
          </div>
          {/* TODO: Change to include MES contact info */}
          <span id='footer-description' className='px-16 lg:px-0'>
            The McMaster Engineering Society recognizes that McMaster University
            sits on the traditional Territories of the Haudenosaunee Confederacy
            and the Anishinaabe Nations, which is recognized by the "Dish With
            One Spoon" wampum agreement.
          </span>
          <div id='contact-us' className='flex flex-col pt-4'>
            <span className='font-bold'>Questions/Feedback?</span>
            <UnderlineLink href='/executives' className='w-fit'>
              Contact our Executive team
            </UnderlineLink>
          </div>
          <div id='divider' className='py-8 text-center lg:text-start'>
            ———
          </div>
          <div
            id='footer-social-media'
            className='flex flex-row justify-center space-x-2 pb-8 lg:justify-start'
          >
            {socialMedia.map(({ icon, href }, index) => (
              <IconButton
                key={`social-media-${index}`}
                id={`footer-social-media-icon-${index}`}
                variant={darkMode ? 'dark' : 'light'}
                className='rounded-full'
                icon={icon}
                onClick={() => window.open(href, '_blank')}
              />
            ))}
          </div>
        </div>
        <div id='footer-spacer' className='flex-[1]' />
        <div
          id='footer-links'
          className='flex flex-[1] flex-col justify-around px-8 text-start sm:flex-row lg:px-0'
        >
          {links.map(({ header, sublinks }, index) => (
            <div
              key={index}
              id={`footer-links-${index}`}
              className='flex flex-col items-center pb-8 sm:items-start lg:pr-8'
            >
              <div
                id={`footer-links-${index}-title`}
                className='mb-6 text-xs font-bold uppercase'
              >
                {header}
              </div>
              {sublinks.map(({ href, label }) => (
                <UnstyledLink
                  key={`${href}${label}`}
                  id={`footer-links-${index}-${label}`}
                  href={href}
                >
                  {label}
                </UnstyledLink>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div id='footer-copyright' className='text-center'>
        {/* Sets the Copyright year to the current year */}©{' '}
        {new Date().getFullYear()} McMaster Engineering Society
      </div>
    </footer>
  );
}
