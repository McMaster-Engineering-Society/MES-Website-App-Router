import { Divider } from '@nextui-org/react';

import Button from '@/components/buttons/Button';
import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

type rubricItem = {
  heading: string;
  points: string;
  descriptions: string[];
};

const rubric: rubricItem[] = [
  {
    heading: 'Alignment with Faculty',
    points: '(Yes/No)',
    descriptions: ['Project is related to engineering.'],
  },
  {
    heading: 'Cost effectiveness',
    points: '3',
    descriptions: [
      'Project budget is detailed and reasonable for materials/equipment needed.',
      'Applicant has shown reasonable effort in finding cost-effective options.',
    ],
  },
  {
    heading: 'Necessity of Funding',
    points: '3',
    descriptions: [
      'Applicant has demonstrated lack of access to existing resources to complete project.',
    ],
  },
  {
    heading: 'Purpose and Impact',
    points: '3',
    descriptions: [
      'Project has a clear purpose and project outcomes will provide applicant with valuable skills or serve a wider community need.',
    ],
  },
  {
    heading: 'Feasibility',
    points: '3',
    descriptions: [
      'Project plan and timeline are realistic and achievable.',
      'Applicant has necessary knowledge, skills, and capacity to execute project OR has showcased sufficient interest in learning required skills.',
    ],
  },
];

export default function SpecialProjectsPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            preTitle='Student Funding'
            title='Special Projects'
            variant='blue'
          />
          <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 sm:items-center sm:gap-x-4'>
            <div>
              <PageSection heading='What is special projects?' variant='white'>
                <div>
                  A new initiative is underway! Special Projects, run by AJ
                  Kourabi and Hannah Fabik, is where you can ask for funding on
                  personal side projects and online certificates.
                  <br />
                  <br />
                  No more getting stuck in your goals because of pesky money
                  problems! The MES encourages students to achieve their dreams,
                  and this is one way we can help you with it.
                </div>
                <div id='button-links' className='mt-4 flex flex-col gap-y-4'>
                  <ButtonLink href='https://airtable.com/appeTdwccCOeO23yY/shrmdllXw1LJo1BYg'>
                    Special Projects Funding Application
                  </ButtonLink>
                  {/* <ButtonLink href='https://loving-scowl-73e.notion.site/MES-Special-Projects-3bbff7fcf00e4de6ac5cc3a11e7f9e80'>
                    Notion & Past Recipients
                  </ButtonLink> */}
                  <Button disabled>
                    Notion & Past Recipients (Coming Soon)
                  </Button>
                </div>
              </PageSection>
              <PageSection heading='Questions?' variant='white'>
                For more information or any questions you may have, contact{' '}
                <a href='mailto:sp@macengsociety.ca' className='underline'>
                  sp@macengsociety.ca
                </a>
                .
              </PageSection>
            </div>
            <NextImage
              src='/images/special-projects/special-projects-image.png'
              alt='Special Projects Image'
              width={611}
              height={473}
              className='mt-8 w-full'
            />
          </div>
          <PageSection heading='Project Rubric' variant='white'>
            <div className='flex flex-col gap-x-4 sm:flex-row'>
              {rubric.map((item, index) => (
                <div key={`criteria-${index}`} className='flex w-full flex-col'>
                  <div className='font-bold'>{item.heading}</div>
                  <div className='text-primary-500 font-medium'>
                    {item.points === '(Yes/No)'
                      ? `${item.points}`
                      : `${item.points} Points`}
                  </div>
                  <Divider className='invisible sm:visible sm:my-4' />
                  <ul className='mt-2 list-inside sm:mt-0'>
                    {item.descriptions.map((description, index) => (
                      <li key={`description-${index}`}>{description}</li>
                    ))}
                  </ul>
                  {index !== rubric.length - 1 && (
                    <Divider className='visible mb-4 sm:invisible' />
                  )}
                </div>
              ))}
            </div>
          </PageSection>
          <PageSection heading='Disclaimer'>
            Applications will be reviewed in 1 week, 2 weeks in exceptional
            cases. We will reply to all applicants.
            <br />
            <br />
            <i>
              Please spend all the money granted to you in the academic year to
              receive all reimbursements.
            </i>
          </PageSection>
        </section>
      </main>
    </PageLayout>
  );
}
