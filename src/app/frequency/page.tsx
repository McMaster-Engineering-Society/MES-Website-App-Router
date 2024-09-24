import * as React from 'react';

import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

export default function FrequencyPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <PageHeading
          title='The Frequency'
          preTitle='Publications'
          variant='green'
        />
        <PageSection heading='What is the Frequency?' variant='green'>
          The Frequency is a publication intended to communicate events and
          announcements related to McMaster Engineering! Readers can find
          details about upcoming academic and social events, as well as
          announcements from the MES and affiliated clubs and teams.
        </PageSection>
        <div
          id='buttons'
          className='mt-8 flex flex-col gap-8 sm:grid sm:grid-cols-2'
        >
          <ButtonLink
            href='/pdfs/frequency/TheFrequency_December_2021.pdf'
            target='_blank'
            className='justify-center'
          >
            Read The December 2021 Edition Here!
          </ButtonLink>
          <ButtonLink
            href='/pdfs/frequency/TheFrequency_October_2022.pdf'
            target='_blank'
            className='justify-center'
          >
            Read The October 2022 Edition Here!
          </ButtonLink>
          <ButtonLink
            href='/pdfs/frequency/TheFrequency_January_2023.pdf'
            target='_blank'
            className='justify-center'
          >
            Read The January 2023 Edition Here!
          </ButtonLink>
          <ButtonLink
            href='/pdfs/frequency/TheFrequency_December_2023.pdf'
            target='_blank'
            className='justify-center'
          >
            Read The December 2023 Edition Here!
          </ButtonLink>
          <ButtonLink
            href='/pdfs/frequency/Frequency_winter_2024.pdf'
            target='_blank'
            className='justify-center'
          >
            Read The Winter 2024 Edition Here!
          </ButtonLink>
        </div>
      </main>
    </PageLayout>
  );
}
