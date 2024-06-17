import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

export default function PlumblinePage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            preTitle='Publications'
            title='The Infamous Mac Plumbline'
            variant='green'
          />
          <PageSection heading='What is the Plumbline?' variant='green'>
            The Plumbline is a satirical publication intended to make light of
            our experiences as McMaster Engineering students—it will surely keep
            you entertained while you procrastinate those dreaded assignments.
            You can look forward to two editions per semester!
          </PageSection>
          <PageSection heading='How can I contribute?' variant='green'>
            If you have any ideas for content or memes that you'd like to see in
            the next edition of the Plumbline, shoot an email to our
            publications editor at{' '}
            <a
              href='mailto:publications@macengsociety.ca'
              className='underline'
            >
              publications@macengsociety.ca
            </a>
            ! We are happy to hear your ideas and include them in our
            publications!
          </PageSection>
          <div
            id='buttons'
            className='mt-8 flex flex-col gap-8 sm:grid sm:grid-cols-2'
          >
            <span className='text-bold border-mesRed border-2 bg-white px-4 py-2 text-center'>
              Current under maintenance. Check back soon!
            </span>
            {/* <ButtonLink
              href='/pdfs/plumbline/The_Plumbline_Winter_2023_Issue_1.pdf'
              target='_blank'
              className='justify-center'
            >
              Read the Winter 2023 Issue 1 Here!
            </ButtonLink>
            <ButtonLink
              href='/pdfs/plumbline/The_Plumbline_Winter_2023_Issue_2.pdf'
              target='_blank'
              className='justify-center'
            >
              Read the Winter 2023 Issue 2 Here!
            </ButtonLink>
            <ButtonLink
              href='/pdfs/plumbline/The_Plumbline_Winter_2023_Issue_3.pdf'
              target='_blank'
              className='justify-center'
            >
              Read the Winter 2023 Issue 3 Here!
            </ButtonLink>
            <ButtonLink
              href='/pdfs/plumbline/The_Plumbline_Fall_2023_Issue_1.pdf'
              target='_blank'
              className='justify-center'
            >
              Read the Fall 2023 Issue 1 Here!
            </ButtonLink>
            <ButtonLink
              href='/pdfs/plumbline/The_Plumbline_Fall_2023_Issue_2.pdf'
              target='_blank'
              className='justify-center'
            >
              Read the Fall 2023 Issue 2 Here!
            </ButtonLink> */}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
