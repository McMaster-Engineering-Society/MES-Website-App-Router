import Calendar from '@/components/calendar/Calendar';
import PageLayout from '@/components/layout/PageLayout';
import DropdownLink from '@/components/links/DropdownLink';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

import { googleLinks, outlookLinks } from '@/constant/events/CalendarLinks';

import { CalendarId } from '@/types/calendar';

const API_KEY = process.env.NEXT_PUBLIC_CALENDAR_API_KEY || '';
const CALENDAR_IDS: CalendarId[] = [
  {
    name: 'MES Events',
    id: 'macengsociety.ca_1287bevihgvppm0boumra7eb6c@group.calendar.google.com',
  },
];

export default function EventsPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <PageHeading
          title='MES Events Calendar'
          preTitle='Check out the'
          variant='blue'
        />

        <DropdownLink
          title='Subscribe to Calendar'
          dropdownItems={[...googleLinks, ...outlookLinks]}
          className='mt-8'
        />

        <PageSection variant='white' heading='Click an event for more info'>
          <Calendar apiKey={API_KEY} calendarIds={CALENDAR_IDS} />
        </PageSection>
      </main>
    </PageLayout>
  );
}
