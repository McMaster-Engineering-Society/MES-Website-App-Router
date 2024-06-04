import Calendar from '@/components/calendar/Calendar';
import PageLayout from '@/components/layout/PageLayout';
import DropdownLink from '@/components/links/DropdownLink';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

import { googleLinks, outlookLinks } from '@/constant/events/CalendarLinks';

import { CalendarId } from '@/types/calendar';

const API_KEY = 'AIzaSyDg60WsfHReUpNIDTD1KwI0UDDYQP02Yng';
const CALENDAR_IDS: CalendarId[] = [
  {
    name: 'MES Events',
    id: 'macengsociety.ca_1287bevihgvppm0boumra7eb6c@group.calendar.google.com',
  },
];

export default function XPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <PageHeading
          title='MES Events Calendar'
          preTitle='Check out the'
          variant='blue'
        />
        <PageSection variant='white'>
          <div className='flex flex-col items-center justify-around gap-y-4 text-center sm:flex-row'>
            <DropdownLink
              title='Subscribe on Google Calendar'
              dropdownItems={googleLinks}
            />
            <DropdownLink
              title='Subscribe on Outlook'
              dropdownItems={outlookLinks}
            />
          </div>
        </PageSection>
        <PageSection variant='white' heading='Click an event for more info'>
          <Calendar apiKey={API_KEY} calendarIds={CALENDAR_IDS} />
        </PageSection>
      </main>
    </PageLayout>
  );
}
