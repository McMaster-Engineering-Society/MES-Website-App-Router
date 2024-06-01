import { ConferencePageSection } from '@/components/conferences/ConferencePageSection';
import CandidateProfile from '@/components/elections/CandidateProfile';
import PageLayout from '@/components/layout/PageLayout';

export default function TestPage() {
  return (
    <PageLayout>
      <main className='layout space-y-8'>
        <h1>
          This is a test page. All new components that haven't been added before
          2024-06-01 will be here
        </h1>
        <br />
        <ConferencePageSection
          title='Conf'
          location='Mac'
          dates='Some time'
          delegates='Us'
          body='Body'
        />
        <CandidateProfile
          profile={{
            name: 'Joe',
            positionSeeking: 'President',
            picture: '/images/council/alexis-moutafis-tymcio.jpg',
            introduction: 'Hola',
            platform: 'Vote me',
            anythingElseFunFact: 'I`m president!',
            socials: {
              facebook: 'facebook.com',
            },
          }}
        />
      </main>
    </PageLayout>
  );
}
