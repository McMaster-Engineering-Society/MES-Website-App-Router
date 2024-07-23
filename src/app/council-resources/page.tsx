import Calendar from '@/components/calendar/Calendar';
import OfficeHourProfile from '@/components/council-resources/OfficeHourProfile';
import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

import { councilForms } from '@/constant/council-resources/councilForms';
import { officeHours } from '@/constant/council-resources/officeHours';

import { CalendarId } from '@/types/calendar';

const API_KEY = 'AIzaSyDg60WsfHReUpNIDTD1KwI0UDDYQP02Yng';
const CALENDAR_IDS: CalendarId[] = [
  {
    name: 'MES Office Hours',
    id: 'c_a1ad624fe5a076c0319214cc2372d40b0802024a0b525ba0d245fb505672f0b6@group.calendar.google.com',
  },
  {
    name: 'MES Council Meetings',
    id: 'c_f9c692fd91c8d2e027f9c77cb9ea223aff4e3b9d18a5cc834df99565759f0100@group.calendar.google.com',
  },
];

const CouncilResources = () => {
  return (
    <PageLayout>
      <main className='layout'>
        <section id='info' className='flex flex-col'>
          <PageHeading preTitle='Learn About' title='Council Resources' />
          <PageSection
            heading='Attend Council Meetings & Office Hours'
            variant='white'
          >
            <div>
              MES Office Hours are your opportunities to talk one-on-one with
              the MES Executives, Directors, and administrators to get answers
              to your burning questions or voice your concerns. The Fall
              schedule for office hours will be posted in September, so stay
              tuned until then!
              <br />
              <br />
              For more information contact the MES Administrator, at{' '}
              <a
                href='mailto:administrator@macengsociety.ca'
                className='underline'
              >
                administrator@macengsociety.ca
              </a>
              .
              <div
                id='office-hours-list'
                className='my-8 grid gap-x-4 gap-y-4 md:grid-cols-2'
              >
                {/* List of office hours from constant/officeHours.ts */}
                {officeHours.map((officeHour) => (
                  <OfficeHourProfile
                    key={officeHour.name}
                    officeHour={officeHour}
                  />
                ))}
              </div>
            </div>
          </PageSection>
        </section>
        <section id='calendar'>
          <PageSection variant='white' heading='Council Calendar'>
            <Calendar apiKey={API_KEY} calendarIds={CALENDAR_IDS} />
          </PageSection>
        </section>
        <section id='forms' className='flex flex-col'>
          {/* List of forms from constant/councilForms.ts */}
          {councilForms.map((formSection) => (
            <PageSection key={formSection.title} heading={formSection.title}>
              <div className='flex flex-col gap-x-4 gap-y-4 sm:flex-row'>
                <div className='flex flex-[2] flex-col gap-y-4'>
                  {formSection.forms.map((form) => (
                    <ButtonLink key={form.title} href={form.link}>
                      {form.title}
                    </ButtonLink>
                  ))}
                </div>
                <div className='flex flex-[3] flex-col'>
                  {formSection.description}
                  <br />
                  <br />
                  Contact{' '}
                  <a
                    href={`mailto:${formSection.contactEmail}`}
                    className='underline'
                  >
                    {formSection.contactEmail}
                  </a>{' '}
                  for more details.
                </div>
              </div>
            </PageSection>
          ))}
        </section>
        <section>
          <PageSection heading='Council Meetings'>
            <div>
              MES Council consists of voting members - all Department & Program
              Representatives, Associate Vice Presidents, and Executives - and
              non -voting appointed officials. General MES Council meetings
              occur periodically throughout the academic year, while the Exec
              and AVPs meet weekly over the summer and during the year. MES
              Council exists to serve students, and our meetings are public for
              general students to attend and provide input from different
              perspectives.
              <br />
              <br />
              Below, you can check out what the MES Council discusses and
              debates at our council meetings, or use the form to request a
              discussion topic. Any student in the Faculty of Engineering is
              welcome to join the meetings. Contact{' '}
              <a
                href='mailto:administrator@macengsociety.ca'
                className='underline'
              >
                administrator@macengsociety.ca
              </a>{' '}
              for more information.
            </div>
            <div
              id='council-meeting-links'
              className='flex flex-col gap-x-4 sm:flex-row'
            >
              <ButtonLink
                href='https://forms.gle/SQgFEp5sLYFWvGB6A'
                className='mt-8'
              >
                Request a Motion/Presentation
              </ButtonLink>
              <ButtonLink
                href='https://docs.google.com/document/d/10fzymt-P4Uhj9X5B8-AlW94VEXKqhvpTyjrcixdTN2s/edit?usp=drive_link'
                className='mt-8'
              >
                Meeting Minutes
              </ButtonLink>
            </div>
          </PageSection>
        </section>
      </main>
    </PageLayout>
  );
};

export default CouncilResources;
