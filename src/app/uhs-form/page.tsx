'use client';
import { FormEvent, useState } from 'react';
import React from 'react';

import Button from '@/components/buttons/Button';
import { useMultistepForm } from '@/components/form/useMultistepForm';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

import AlcoholEvent from '@/constant/uhs-form/AlcoholEvent';
import BestPractices from '@/constant/uhs-form/BestPractices';
import Danger from '@/constant/uhs-form/Danger';
import Event from '@/constant/uhs-form/Event';
import FoodAlcohol from '@/constant/uhs-form/FoodAlcohol';
import HazardEvents from '@/constant/uhs-form/HazardEvents';
import { INITIAL_UHS_DATA } from '@/constant/uhs-form/InitialData';
import Intro from '@/constant/uhs-form/Intro';
import Policy from '@/constant/uhs-form/Policy';
import SafetyHazards from '@/constant/uhs-form/SafetyHazards';
import Travel from '@/constant/uhs-form/Travel';
import TravelEvents from '@/constant/uhs-form/TravelEvents';
import Understanding from '@/constant/uhs-form/Understanding';

import { UHSFormData } from '@/types/uhsForm';

export default function UHSFormPage() {
  const [isSubmitted, setSubmit] = useState(false);
  const [data, setData] = useState(INITIAL_UHS_DATA);

  //updates the values in the state from outside this file
  function updateFields(fields: Partial<UHSFormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const {
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back1,
    back2,
    next1,
    next2,
    goTo,
  } = useMultistepForm([
    //list of pages for the form as components
    <React.Fragment key='intro'>
      <Intro {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='understanding'>
      <Understanding {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='event'>
      <Event {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='best-practices'>
      <BestPractices {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='danger'>
      <Danger {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='safety-hazards'>
      <SafetyHazards {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='hazard-events'>
      <HazardEvents {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='food-alcohol'>
      <FoodAlcohol {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='alcohol-event'>
      <AlcoholEvent {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='travel'>
      <Travel {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='travel-events'>
      <TravelEvents {...data} updateFields={updateFields} />
    </React.Fragment>,
    <React.Fragment key='policy'>
      <Policy {...data} updateFields={updateFields} />
    </React.Fragment>,
  ]);

  title = titles[currentStepIndex];

  //this is the next or submit button, sometimes skipping pages if an option is picked
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    //This handles what happens after the form is submitted
    if (isLastStep) {
      try {
        const response = await fetch('/api/forms/create-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSubmit(true);
        } else {
          const errorResponse = await response.json();
          throw new Error(errorResponse.message || 'Form submission failed');
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('An error occurred while submitting the form: ', error);
      }
    } else {
      if (
        (currentStepIndex === 3 && !data.danger) ||
        (currentStepIndex === 5 && !data.involveHazard) ||
        (currentStepIndex === 7 && !data.alcohol) ||
        (currentStepIndex === 9 && !data.travel)
      ) {
        return next2();
      } else {
        return next1();
      }
    }
  }

  //this goes back a page and sometimes goes back twice if an option is picked
  function back() {
    if (
      (currentStepIndex === 5 && !data.danger) ||
      (currentStepIndex === 7 && !data.involveHazard) ||
      (currentStepIndex === 9 && !data.alcohol) ||
      (currentStepIndex === 11 && !data.travel)
    ) {
      return back2();
    } else {
      return back1();
    }
  }

  //this function restarts the form after submitting
  function restart() {
    setSubmit(false);
    return goTo(0);
  }

  return (
    <PageLayout>
      <main className='layout'>
        <section className='flex flex-col justify-between'>
          <PageHeading title='UHS Form For In-Person Events ' variant='blue' />

          <PageSection variant='white'>
            <div className='flex flex-col items-center gap-x-4 gap-y-4 md:flex-row'>
              <div id='text-body' className='flex flex-col'>
                <div className="text-[#4b4b4b] text-lg font-medium font-['Inter'] ">
                  Hello dear planner, welcome to the UHS (FORMERLY EOHSS) form
                  for in-person events. Once you fill this out, I will put it
                  into the portal and let you know both if there is anything
                  else we need and when it gets approved via email!
                  <br />
                  <br />
                  If you have any other documents to be submitted with the forms
                  or any contracts, budget, or itinerary please email them to{' '}
                  <a
                    href='mailto:vp.studentlife@macengsociety.ca'
                    className='underline'
                  >
                    vp.studentlife@macengsociety.ca
                  </a>
                  .
                  <br />
                  <br />A '*' beside a question means that question needs to be
                  answered.
                </div>
              </div>
            </div>
          </PageSection>

          {/* {once form is submitted, it will change to submitted change by checking isSubmitted state} */}
          {isSubmitted ? (
            <PageSection variant='rounded'>
              <form
                className='flex flex-col place-content-center'
                onSubmit={restart}
              >
                <div className='flex place-self-center w-[80%] h-fit py-5 place-content-center text-center'>
                  Your form has been successfully submitted. You will be
                  notified once a decision has been made. Please click continue
                  if you would like to submit another form.
                </div>
                <div className='flex flex-row justify-center content-end gap-x-4'>
                  <Button type='submit' className='flex mb-5 place-self-center'>
                    Continue
                  </Button>
                </div>
              </form>
            </PageSection>
          ) : (
            <PageSection variant='rounded' heading={title}>
              <form onSubmit={onSubmit}>
                {step}

                <div className='flex flex-row place-content-end gap-x-4'>
                  {!isFirstStep && (
                    <Button
                      type='button'
                      onClick={back}
                      className='flex place-self-end'
                    >
                      Back
                    </Button>
                  )}

                  <Button type='submit' className='flex place-self-end'>
                    {isLastStep ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </form>
            </PageSection>
          )}
        </section>
      </main>
    </PageLayout>
  );
}

Array;
const titles = [
  'Enter your Email',
  'Understanding',
  'Event Details',
  'Best Practices',
  'Serious Bodily Harm/Death',
  'Safety Hazards',
  'Events with Safety Hazards',
  'Food and Alcohol',
  'Events with Alcohol',
  'Travel',
  'Events with Travel',
  'Policies',
];

let title: string;
