import { ConferencePageSection } from '@/components/conferences/ConferencePageSection';
import PageLayout from '@/components/layout/PageLayout';

export default function TestPage() {
  return (
    <PageLayout>
      <main className='layout'>
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
      </main>
    </PageLayout>
  );
}
