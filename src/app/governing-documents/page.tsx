import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

import { documents } from '@/constant/government-documents/documents';

export default function GoverningDocsPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading preTitle='2023-2024' title='Governing Documents' />
          {documents.map((section) => (
            <PageSection
              key={section.heading}
              heading={section.heading}
              variant='white'
            >
              <div className='flex flex-col justify-between gap-y-4 lg:flex-row'>
                <div className='lg:w-9/12'>{section.description}</div>
                <div className='flex flex-col items-end justify-center lg:w-2/12'>
                  <ButtonLink
                    href={section.buttonLink}
                    target='_blank'
                    className='w-full'
                  >
                    {section.buttonLabel}
                  </ButtonLink>
                </div>
              </div>
            </PageSection>
          ))}
        </section>
      </main>
    </PageLayout>
  );
}
