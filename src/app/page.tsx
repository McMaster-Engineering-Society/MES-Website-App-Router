'use client';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import {
  IoChatbubblesOutline,
  IoDocumentTextOutline,
  IoNewspaperOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import '@mui/material/styles';

import Calendar from '@/components/calendar/Calendar';
import HeroSectionColumn from '@/components/home/HeroSectionColumn';
import PageLayout from '@/components/layout/PageLayout';
import ArrowLink from '@/components/links/ArrowLink';

import { councilForms } from '@/constant/council-resources/councilForms';
import { electionInfo } from '@/constant/elections/electionInfo';
import {
  containerMotionVariants,
  itemMotionVariants,
} from '@/constant/home/animations';

import { CalendarId } from '@/types/calendar';

const API_KEY = 'AIzaSyDg60WsfHReUpNIDTD1KwI0UDDYQP02Yng';
const CALENDAR_IDS: CalendarId[] = [
  {
    name: 'MES Events',
    id: 'macengsociety.ca_1287bevihgvppm0boumra7eb6c@group.calendar.google.com',
  },
];
const quickLinks: { icon: IconType; label: string; href: string }[] = [
  {
    icon: IoChatbubblesOutline,
    label: 'Attend Conferences',
    href: '/conferences',
  },
  {
    icon: IoPeopleOutline,
    label: 'Affiliated Clubs & Teams',
    href: '/clubs-and-teams',
  },
  {
    icon: IoDocumentTextOutline,
    label: 'Council Resources',
    href: '/council-resources',
  },
  {
    icon: IoNewspaperOutline,
    label: 'Advertisement Request',
    href: councilForms[0].forms[0].link,
  },
];

export default function HomePage() {
  const [today, setToday] = useState<Date>(new Date());

  const [electionStatus, setElectionStatus] = useState<string>('');

  useEffect(() => {
    setToday(new Date());
  }, []);

  useEffect(() => {
    let status: string;
    if (today < electionInfo.nominationsClose) {
      status = 'Run for candidacy';
    } else if (
      today >= electionInfo.nominationsClose &&
      today < electionInfo.campaignsOpen
    ) {
      const timeUntilCampaignsOpen =
        (electionInfo.campaignsOpen.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24);

      status = `Campaigns open in ${timeUntilCampaignsOpen.toFixed(0)} day${
        timeUntilCampaignsOpen.toFixed(0) !== '1' ? 's' : ''
      }`;
    } else if (
      today >= electionInfo.campaignsOpen &&
      today < electionInfo.campaignsClose
    ) {
      status = 'Check out the candidates';
    } else if (
      today >= electionInfo.campaignsClose &&
      today < electionInfo.votingOpen
    ) {
      const timeUntilVotingOpen =
        (electionInfo.votingOpen.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24);

      status = `Voting opens in ${timeUntilVotingOpen.toFixed(0)} day${
        timeUntilVotingOpen.toFixed(0) !== '1' ? 's' : ''
      }`;
    } else if (
      today >= electionInfo.votingOpen &&
      today < electionInfo.votingClose
    ) {
      status = 'Vote for our next execs';
    } else {
      status = 'Stay tuned for results';
    }
    setElectionStatus(status);
  }, [today]);

  const [buttonSize, setButtonSize] = useState<'sm' | 'md' | 'lg' | undefined>(
    'lg',
  );

  const updateSize = () => {
    if (window.innerWidth < 768) {
      // 768px is the breakpoint for md in Tailwind CSS
      setButtonSize('sm');
    } else {
      setButtonSize('lg');
    }
  };

  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <PageLayout
      noBackground
      transparentNav
      className='bg-gradient-to-b from-[#420a1b] to-[#121212]'
      darkMode
    >
      <main className='layout gap-y-16'>
        <div className='flex flex-col items-center'>
          <motion.section
            id='hero-section'
            className='mt-12 flex max-h-fit w-full max-w-[15rem] flex-col gap-x-8 gap-y-20 md:max-w-[30rem] lg:aspect-[5/2] lg:max-w-none lg:flex-row'
            variants={containerMotionVariants}
            initial='hidden'
            animate='visible'
          >
            {/* Next MES President */}
            <HeroSectionColumn
              img='/images/homepage/alexis-moutafis-tymcio-faded.png'
              classname='transition-all ease-in-out hover:flex-grow-[3] flex-grow-[1] duration-500 bg-gradient-to-br from-slate-50 to-slate-200'
            >
              <div className='flex h-full w-full flex-col items-center justify-end text-center uppercase'>
                <h1 className='text-3xl font-medium md:text-5xl'>2024/25</h1>
                <div className='mt-6 flex flex-col text-xs font-medium md:text-sm'>
                  <p>Our next MES President</p>
                  <p className='font-bold'>Alexis Moutafis-Tymcio</p>
                </div>
              </div>
            </HeroSectionColumn>

            {/* SAGM */}
            {/* <HeroSectionColumn
              classname='transition-all ease-in-out hover:flex-grow-[3] flex-grow-[1] duration-500 bg-cover bg-center'
              style={{
                backgroundImage:
                  "url('/images/sagm/winter-2024/sagm-winter-poster.png')",
              }}
            >
              <div className='flex h-full w-full flex-col items-center justify-end px-12 pb-12 text-center text-white'>
                <div className='rounded-lg bg-black/25 px-4 py-2'>
                  <UnderlineLink href='https://docs.google.com/document/d/1QaIAWM7mOgybsFd9vRMkOPbnNJZivPf3EMqFYivPw-0/edit?usp=sharing'>
                    Agenda
                  </UnderlineLink>
                </div>
              </div>
            </HeroSectionColumn> */}

            {/* Appointed Positions */}
            {/* <HeroSectionColumn
              classname='transition-all ease-in-out hover:flex-grow-[3] flex-grow-[1] duration-500 bg-cover bg-center'
              style={{
                backgroundImage:
                  "url('/images/homepage/appointed-positions-poster.png')",
              }}
            >
              <div className='flex h-full w-full flex-row items-end justify-center gap-2 px-12 pb-6 text-center text-white sm:pb-16'>
                <div className='rounded-lg bg-black/25 px-4 py-2'>
                  <UnderlineLink href='https://docs.google.com/forms/d/e/1FAIpQLSc7xm0UmdFyNBIkI6KhrFicwFiBsswCiFXNhy6O24Slzei0dw/viewform'>
                    Application
                  </UnderlineLink>
                </div>
                <div className='rounded-lg bg-black/25 px-4 py-2'>
                  <UnderlineLink href='https://docs.google.com/document/d/1NdPlxGh0xF0qYdg7peFhktVLaoPCEcMl-D7In0uRaXU/edit?usp=sharing'>
                    Positions
                  </UnderlineLink>
                </div>
              </div>
            </HeroSectionColumn> */}

            {/* Mac Eng Musical */}
            {/* <HeroSectionColumn
              img='/images/homepage/maceng-musical-faded.png'
              classname='transition-all ease-in-out hover:flex-grow-[3] flex-grow-[1] duration-500 bg-gradient-to-br from-slate-50 to-slate-200'
            >
              <div className='flex h-full w-full flex-col items-center justify-end text-center'>
                <div className='flex flex-row gap-x-1 text-sm font-medium uppercase'>
                  <span className='flex'>Mac Eng Musical</span>
                  <span className='hidden md:flex'>Presents</span>
                </div>
                <Image
                  src='/images/homepage/mem-beetlejoules.png'
                  alt='BeetleJoules Logo'
                  width={500}
                  height={346}
                  className='md:w-2/3'
                />
                <span className='mt-6 text-[10px] leading-[14px] text-gray-600 md:text-sm'>
                  March 14, 15, 16th @ 7pm
                </span>
                <div>
                  <UnderlineLink href='https://www.eventbrite.ca/e/mcmaster-engineering-musical-presents-beetlejoules-tickets-828623955557?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl'>
                    <p>Buy tickets today!</p>
                  </UnderlineLink>
                </div>
              </div>
            </HeroSectionColumn> */}

            {/* Hatch Room Booking */}
            <HeroSectionColumn
              img='/images/homepage/gerald-hatch-centre-faded.png'
              classname='transition-all ease-in-out hover:flex-grow-[3] flex-grow-[1] duration-500 bg-gradient-to-br from-slate-50 to-slate-200'
            >
              <div className='flex h-full w-full flex-col justify-end'>
                <div className='flex flex-col uppercase'>
                  <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-5xl'>Room</h1>
                    <h1 className='text-3xl md:text-5xl'>Booking</h1>
                  </div>
                  <p className='mt-4 text-xs font-medium md:text-sm'>
                    Gerald Hatch Centre
                  </p>
                </div>
                <div className='mt-14'>
                  <ArrowLink href='/bookings'>
                    <p>Book now</p>
                  </ArrowLink>
                </div>
              </div>
            </HeroSectionColumn>

            {/* MES Elections */}
            <HeroSectionColumn
              img='/images/homepage/mes-elections-faded.png'
              imgLocation='bottom'
              classname='transition-all ease-in-out hover:flex-grow-[3] flex-grow-[2] duration-500 bg-gradient-to-br from-[#ff2842] to-[#c70e24]'
            >
              <div className='flex h-full w-full flex-col justify-between'>
                <div className='flex flex-col uppercase'>
                  <p className='text-xs font-medium md:text-sm'>
                    {electionStatus}
                  </p>
                  <h1 className='text-2xl md:text-5xl'>MES</h1>
                  <h1 className='text-2xl md:text-5xl'>Elections</h1>
                </div>
                <Button
                  radius='full'
                  size={buttonSize}
                  className='w-2/3 bg-black text-sm font-bold text-[#ff2842] sm:w-1/2'
                  onPress={() => {
                    window.location.href = '/elections';
                  }}
                >
                  <Link href='/elections'>Learn More</Link>
                </Button>
              </div>
            </HeroSectionColumn>
          </motion.section>
        </div>
        <motion.section
          id='quick-links'
          className='grid w-full grid-cols-2 gap-y-8 sm:flex sm:flex-row sm:justify-around sm:gap-x-8'
          variants={containerMotionVariants}
          initial='hidden'
          animate='visible'
        >
          {quickLinks.map(({ icon: Icon, label, href }) => (
            <Link
              href={href}
              key={label}
              target={!href.startsWith('/') ? '_blank' : undefined}
            >
              <motion.div
                id={`quick-link-${label.toLowerCase().replace(' ', '-')}`}
                className='flex flex-col items-center gap-y-4 text-white'
                variants={itemMotionVariants}
                initial='hidden'
                animate='visible'
              >
                <div className='quick-link-icon rounded-full bg-white p-4 text-black transition-all hover:scale-105 hover:bg-gray-300'>
                  <Icon size={30} />
                </div>
                <span className='max-w-[100px] text-center text-sm'>
                  {label}
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.section>
        <section id='calendar'>
          <Calendar apiKey={API_KEY} calendarIds={CALENDAR_IDS} darkMode />
        </section>
      </main>
    </PageLayout>
  );
}
