import * as React from 'react';

import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

import budgetArray from '@/constant/finances/budget';
import getMoneyArray from '@/constant/finances/getMoney';
import howToGetMoneyArray from '@/constant/finances/howToGetMoney';

const BudgetArray = () => {
  return (
    <div>
      {/* Current year budget */}
      <div id='button-links' className='mt-4 flex justify-center gap-y-7'>
        <ButtonLink href={budgetArray[0].link} className='w-full'>
          {budgetArray[0].year}
        </ButtonLink>
      </div>

      {/* Render past budgets as smaller buttons */}
      <div className='mt-4 flex flex-wrap justify-center gap-x-3 gap-y-3'>
        {budgetArray.map((item, index) => {
          if (index === 0) return;
          return (
            <ButtonLink
              key={index}
              href={item.link}
              className='flex-grow p-1 px-5'
            >
              {item.year}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
};

const GetMoneyArray = () => {
  return (
    <div className='mt-4 flex w-full flex-wrap justify-between gap-x-3 gap-y-3'>
      {getMoneyArray.map((item, index) => (
        <ButtonLink
          key={index}
          href={item.link}
          variant='primary'
          className={`${item.colour} flex-grow p-1 px-3 text-black hover:text-black`}
        >
          {item.title}
        </ButtonLink>
      ))}
    </div>
  );
};

const HowToGetMoneyArray = () => {
  return (
    <div className='mt-4 flex flex-wrap justify-center gap-x-3 gap-y-3'>
      {howToGetMoneyArray.map((item, index) => (
        <ButtonLink
          key={index}
          href={item.link}
          className={`flex-grow p-1 px-5 ${
            !item.disabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-30'
          } disabled={!item.disabled}`}
        >
          {item.title}
        </ButtonLink>
      ))}
    </div>
  );
};

export default function FinancesPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading title='Finances' preTitle='MES Funding' variant='red' />
          <PageSection heading='Get Money' variant='white'>
            <div className='mb-3 flex flex-col-reverse items-center gap-x-4 gap-y-4 sm:flex-row'>
              <GetMoneyArray />
            </div>
            These forms may be found as appendices in the{' '}
            <a
              href='/pdfs/governing-documents/policy-manual.pdf'
              className='underline'
            >
              MES Policy Manual
            </a>
            .
          </PageSection>
          <PageSection heading='How to Get Money' variant='white'>
            <div>
              The following documents detail the differing processes for
              deparment clubs, clubs and teams, etc.
            </div>
            <HowToGetMoneyArray />
          </PageSection>
          <PageSection heading='MES Budgets' variant='white'>
            <div>
              Take a look at how student funds have been allocated for the
              current year as well as past years’ finances! If you have any
              questions, comments or concerns related to the MES Finances, feel
              free to send an email to{' '}
              <a href='vp.finance@macengsociety.ca' className='underline'>
                vp.finance@macengsociety.ca
              </a>
              .
            </div>
            <BudgetArray />
          </PageSection>
        </section>
      </main>
    </PageLayout>
  );
}
