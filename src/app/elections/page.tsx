'use client';
import CampaignIcon from '@mui/icons-material/Campaign';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';
import Calendar from '@/components/calendar/Calendar';
import CandidateProfile from '@/components/elections/CandidateProfile';
import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

import { electionInfo, InfoSession } from '@/constant/elections/electionInfo';

import { CalendarId } from '@/types/calendar';

const debug = false;

const API_KEY = 'AIzaSyDg60WsfHReUpNIDTD1KwI0UDDYQP02Yng';
const CALENDAR_IDS: CalendarId[] = [
  {
    name: 'MES Elections',
    id: 'c_a522b273198888566b29017f317d93ec3e12e967d3da55580eb34ce50385f7a3@group.calendar.google.com',
  },
];

type importantDate = {
  name: string;
  date: string;
  icon?: JSX.Element;
  color:
    | 'inherit'
    | 'grey'
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'error'
    | 'info'
    | 'success';
};

const importantDates: importantDate[] = [
  {
    name: 'Nominations Open',
    date: `${electionInfo.nominationsOpen.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
    })}, ${electionInfo.nominationsOpen.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })}`,
    icon: <HistoryEduIcon />,
    color: 'primary',
  },
  {
    name: 'Nominations Closed',
    date: `${electionInfo.nominationsClose.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
    })}, ${electionInfo.nominationsClose.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })}`,
    color: 'primary',
  },
  {
    name: 'Campaigns Open',
    date: `${electionInfo.campaignsOpen.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
    })}, ${electionInfo.campaignsOpen.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })}`,
    icon: <CampaignIcon />,
    color: 'secondary',
  },
  {
    name: 'Campaigns Closed',
    date: `${electionInfo.campaignsClose.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
    })}, ${electionInfo.campaignsClose.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })}`,
    color: 'secondary',
  },
  {
    name: 'Voting Open',
    date: `${electionInfo.votingOpen.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
    })}, ${electionInfo.votingOpen.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })}`,
    icon: <HowToVoteIcon />,
    color: 'warning',
  },
  {
    name: 'Voting Closed',
    date: `${electionInfo.votingClose.toLocaleString('en-us', {
      month: 'long',
      day: 'numeric',
    })}, ${electionInfo.votingClose.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })}`,
    color: 'warning',
  },
];

const howToVote = [
  'Click the MacVote link sent to your McMaster email.',
  'Click "Cast Ballot(s)" and log into the McMaster Online Voting System.',
  'Select the relevant election.',
  <div key='step-4'>
    Rank your choices (
    <i>
      this involves each of the candidates, as well as Abstain and
      Non-Confidance votes
    </i>
    ). You can leave an option as a dash(-) if you are indifferent about the
    option choice.
  </div>,
  'Hit "Submit Ballot".',
];

const howToRun = [
  "Brief yourself on the responsibilities of the role you're interested in, as outlined in the MES Bylaws.",
  'Go through the Election Procedure slides to understand election and campaign rules.',
  'Fill out a Nomination Form with signatures (digital or physical) from students of the constituency you are nominating yourself for.',
  'Complete the Nominee Package Form to officially submit your nomination.',
];

export default function ElectionsPage() {
  const [filter, setFilter] = useState<string>('all');

  const [today, setToday] = useState<Date>(new Date());

  const [nextInfoSession, setNextInfoSession] = useState<InfoSession>();

  useEffect(() => {
    setToday(new Date());
  }, []);

  useEffect(() => {
    if (electionInfo.infoSessions) {
      const nextInfoSession = electionInfo.infoSessions.find(
        (infoSession) => today < infoSession.dateTimeEnd,
      );

      setNextInfoSession(nextInfoSession);
    }
  }, [today]);

  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            preTitle='MES 2024-25 ELECTIONS'
            title='Shoot Your Shot!'
            variant='pink'
          />
          {nextInfoSession && today < nextInfoSession.dateTimeEnd && (
            <div
              id='election-info-session'
              className='border-mesRed mt-8 flex flex-row rounded-xl border-2 bg-white p-2 text-center'
            >
              <div
                id='election-info-session-spacer'
                className='relative flex h-3 w-3'
              />
              <span className='flex-1 py-2'>
                An <b>info session</b> will be held for the upcoming election on{' '}
                <b>
                  {nextInfoSession.dateTimeStart.toLocaleString('en-us', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </b>
                , from{' '}
                <b>
                  {nextInfoSession.dateTimeStart.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}{' '}
                  to{' '}
                  {nextInfoSession.dateTimeEnd.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </b>{' '}
                at <b>{nextInfoSession.location}</b>!
              </span>
              <span className='relative flex h-3 w-3'>
                <span className='bg-mesRed absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
                <span className='bg-mesRed relative inline-flex h-3 w-3 rounded-full'></span>
              </span>
            </div>
          )}
          {/* Engineering & Management Rep and Chemical Engineering Rep Announcement */}
          {/* <div
            id='election-info-session'
            className='border-mesRed mt-8 flex flex-row rounded-xl border-2 bg-white p-2 text-center'
          >
            <div
              id='election-info-session-spacer'
              className='relative flex h-3 w-3'
            />
            <span className='flex-1 py-2'>
              A <b>By-Election</b> for the <b>Engineering & Management Rep</b>{' '}
              and <b>Chemical Engineering Rep</b> will be held at <b>SAGM</b>!
              More details to come.
            </span>
            <span className='relative flex h-3 w-3'>
              <span className='bg-mesRed absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
              <span className='bg-mesRed relative inline-flex h-3 w-3 rounded-full'></span>
            </span>
          </div> */}
          {/* ============ */}
          {(today <= electionInfo.campaignsOpen || debug) && (
            <PageSection
              variant='white'
              heading='Positions Currently Being Elected'
            >
              <div className='flex flex-col'>
                {today <= electionInfo.votingClose || debug ? (
                  electionInfo.positions.map((position, index) => (
                    <div key={index}>
                      <div className='flex w-full flex-col items-center justify-between gap-y-4 sm:flex-row'>
                        <div className='mr-4 flex w-full flex-row items-center justify-between gap-x-2'>
                          <div className='flex flex-row items-center gap-x-4'>
                            {today < electionInfo.campaignsOpen && (
                              <HistoryEduIcon
                                className='rounded-full bg-blue-600 p-[6px] text-white'
                                fontSize='large'
                              />
                            )}
                            {today >= electionInfo.campaignsOpen &&
                              today < electionInfo.votingOpen && (
                                <CampaignIcon
                                  className='rounded-full bg-purple-700 p-[6px] text-white'
                                  fontSize='large'
                                />
                              )}
                            {today >= electionInfo.votingOpen && (
                              <HowToVoteIcon
                                className='rounded-full bg-orange-500 p-[6px] text-white'
                                fontSize='large'
                              />
                            )}
                            <div className='flex flex-col'>
                              <div className='text-lg'>{position.title}</div>
                              {position.eligibilityRequirements && (
                                <div className='text-sm italic'>
                                  {position.eligibilityRequirements}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className='flex w-full flex-col gap-2 sm:w-auto sm:flex-row'>
                          {today < electionInfo.nominationsOpen && !debug && (
                            <>
                              <ButtonLink
                                target='_blank'
                                href={position.nominationForm}
                                className='min-w-max'
                              >
                                Nomination Form
                              </ButtonLink>
                              <ButtonLink
                                disabled
                                href=''
                                className='min-w-max'
                              >
                                Nominee Package Submission
                              </ButtonLink>
                            </>
                          )}

                          {((today >= electionInfo.nominationsOpen &&
                            today <= electionInfo.nominationsClose) ||
                            debug) && (
                            <>
                              <ButtonLink
                                target='_blank'
                                href={position.nominationForm}
                                className='min-w-max'
                              >
                                Nomination Form
                              </ButtonLink>
                              <ButtonLink
                                target='_blank'
                                href={position.nomineePackageSubmission}
                                className='min-w-max'
                              >
                                Nominee Package Submission
                              </ButtonLink>
                            </>
                          )}

                          {today >= electionInfo.votingOpen && (
                            <ButtonLink
                              href='#candidates'
                              onClick={() =>
                                setFilter(electionInfo.positions[index].title)
                              }
                            >
                              View Candidates
                            </ButtonLink>
                          )}
                        </div>
                      </div>
                      {index !== electionInfo.positions.length - 1 && (
                        <Divider
                          sx={{
                            my: 2,
                          }}
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <div className='text-center'>
                    <div className='text-xl font-bold'>
                      No Positions Are Currently Being Elected
                    </div>
                    <div className='text-lg'>
                      Check the{' '}
                      <a className='underline' href='#election-calendar'>
                        election calendar
                      </a>{' '}
                      for upcoming elections!
                    </div>
                  </div>
                )}
              </div>
            </PageSection>
          )}
          <div className='gap-x-8 sm:grid sm:grid-cols-2'>
            <PageSection variant='white' heading='Important Dates'>
              <Timeline position='alternate-reverse'>
                {importantDates.map((event, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent
                      align='right'
                      variant='body2'
                      color='text.secondary'
                      sx={{ pt: `${event.icon ? '18px' : '7px'}` }}
                    >
                      {event.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color={event.color}>
                        {event.icon}
                      </TimelineDot>
                      {index !== importantDates.length - 1 && (
                        <TimelineConnector />
                      )}
                    </TimelineSeparator>
                    <TimelineContent
                      sx={{
                        pt: `${event.icon ? '12px' : '0px'}`,
                        pb: '24px',
                        px: 2,
                      }}
                    >
                      <Typography
                        variant='h6'
                        component='span'
                        className='hidden sm:block'
                      >
                        {event.name}
                      </Typography>
                      <Typography
                        variant='body1'
                        component='span'
                        className='block sm:hidden'
                      >
                        {event.name}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </PageSection>
            <div className='flex flex-col gap-y-4'>
              <PageSection
                variant='white'
                heading={
                  today <= electionInfo.nominationsClose
                    ? 'Interested in Running?'
                    : 'How to Vote!'
                }
              >
                <div className='flex flex-col gap-y-4'>
                  {today <= electionInfo.nominationsClose &&
                    howToRun.map((step, index) => (
                      <div
                        key={index}
                        className='flex flex-row items-center gap-x-4'
                      >
                        <div className='text-md bg-mesRed flex h-6 w-6 items-center justify-center rounded-full p-4 text-white'>
                          {index + 1}
                        </div>
                        <div>{step}</div>
                      </div>
                    ))}
                  {today > electionInfo.nominationsClose &&
                    howToVote.map((step, index) => (
                      <div
                        key={index}
                        className='flex flex-row items-center gap-x-4'
                      >
                        <div className='text-md bg-mesRed flex h-6 w-6 items-center justify-center rounded-full p-4 text-gray-500'>
                          {index + 1}
                        </div>
                        <div>{step}</div>
                      </div>
                    ))}
                </div>
              </PageSection>
              <PageSection variant='white' heading='Quick Links'>
                <div className='flex w-full flex-col justify-around gap-y-4 sm:flex-row'>
                  <ButtonLink
                    target='_blank'
                    href='/pdfs/governing-documents/bylaws2023.pdf'
                  >
                    Bylaws
                  </ButtonLink>
                  <ButtonLink
                    target='_blank'
                    href='/pdfs/elections/election-procedure-slides.pdf'
                  >
                    Election Procedure Slides
                  </ButtonLink>
                </div>
              </PageSection>
              <PageSection variant='white'>
                <div className='text-center'>
                  Questions? Contact{' '}
                  <a href='mailto:cro@macengsociety.ca' className='underline'>
                    cro@macengsociety.ca
                  </a>
                </div>
              </PageSection>
            </div>
          </div>
          {((today >= electionInfo.campaignsOpen &&
            today <= electionInfo.votingClose) ||
            debug) && (
            <PageSection variant='white' heading='Candidates' id='candidates'>
              <div className='flex flex-col gap-4' id='candidates-list'>
                <div className='flex flex-col gap-4 rounded-lg bg-white p-6'>
                  <div className='text-xl font-bold uppercase'>
                    Filter Positions:{' '}
                  </div>
                  <div className='flex flex-wrap items-center gap-x-2 gap-y-2'>
                    <Button
                      onClick={() => setFilter('all')}
                      className='w-auto sm:w-auto'
                      variant={filter === 'all' ? 'primary' : 'outline'}
                    >
                      All
                    </Button>
                    {electionInfo.positions.map((position, index) => (
                      <Button
                        key={index}
                        onClick={() => setFilter(position.title)}
                        className='w-auto sm:w-auto'
                        variant={
                          filter === position.title ? 'primary' : 'outline'
                        }
                      >
                        {position.title}
                      </Button>
                    ))}
                  </div>
                </div>
                {electionInfo.positions.map((position, index) => {
                  // <div key={index}>
                  if (filter === position.title || filter === 'all') {
                    return (
                      <div className='flex flex-col gap-4' key={index}>
                        {position.candidates &&
                          position.candidates.map((candidate, index) => (
                            <CandidateProfile
                              key={index}
                              profile={{
                                ...candidate,
                                positionSeeking: position.title,
                              }}
                            />
                          ))}
                      </div>
                    );
                  }
                  // </div>
                })}
              </div>
            </PageSection>
          )}
          <div id='election-calendar'>
            <PageSection variant='white' heading='Election Calendar'>
              <Calendar apiKey={API_KEY} calendarIds={CALENDAR_IDS} />
            </PageSection>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
