import { ConferencePageSection } from '@/components/conferences/ConferencePageSection';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

import {
  ExternalConferences,
  InternalConferences,
} from '@/constant/conferences';

const ExternalConferencesList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 lg:grid-cols-3'>
      {ExternalConferences.map((conference, index) => (
        <ConferencePageSection
          key={index}
          title={conference.title}
          location={conference.location}
          dates={conference.dates}
          delegates={conference.delegates}
          links={conference.links}
          body={conference.body}
          image={conference.image}
        />
      ))}
    </div>
  );
};

const InternalConferencesList = () => {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 lg:grid-cols-3'>
      {InternalConferences.map((conference, index) => (
        <ConferencePageSection
          key={index}
          title={conference.title}
          location={conference.location}
          dates={conference.dates}
          delegates={conference.delegates}
          links={conference.links}
          body={conference.body}
          image={conference.image}
        />
      ))}
    </div>
  );
};

export default function ConferencesPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            title='Conferences'
            preTitle='Get Involved With'
            variant='purple'
          />
          <div className='my-2' />
          <PageSection variant='white' heading='External Conferences'>
            <div className='flex flex-col items-center gap-x-4 gap-y-4 md:flex-row'>
              <div id='text-body' className='flex flex-col'>
                <span className='text-lg'>
                  These are conferences held by external engineering
                  organizations such as ESSCO (Engineering Student Societies’
                  Council of Ontario) and CFES (Canadian Federation of
                  Engineering Students). Engineering students from many
                  different schools come to attend these conferences.
                </span>
              </div>
            </div>
          </PageSection>
          <ExternalConferencesList />
          <PageSection variant='white' heading='Internal Conferences'>
            <div className='flex flex-col items-center gap-x-4 gap-y-4 md:flex-row'>
              <div id='text-body' className='flex flex-col'>
                <span className='text-lg'>
                  These are conferences hosted by McMaster and at McMaster
                  throughout the year. They are a great way to learn about a
                  variety of different topics while staying within the MacEng
                  community!
                </span>
              </div>
            </div>
          </PageSection>
          <InternalConferencesList />
        </section>
      </main>
    </PageLayout>
  );
}
