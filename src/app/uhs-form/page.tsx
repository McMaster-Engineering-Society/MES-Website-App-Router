<<<<<<< HEAD
/* eslint-disable react/jsx-key */
"use client"
import { FormEvent, useState } from 'react';
=======
'use client';
import { FormEvent, useState } from 'react';
import React from 'react';
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4

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
import Intro from '@/constant/uhs-form/Intro';
import Policy from '@/constant/uhs-form/Policy';
import SafetyHazards from '@/constant/uhs-form/SafetyHazards';
import Travel from '@/constant/uhs-form/Travel';
import TravelEvents from '@/constant/uhs-form/TravelEvents';
import Understanding from '@/constant/uhs-form/Understanding';

export default function UHSFormPage() {
  const [isSubmitted, setSubmit] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  //updates the values in the state from outside this file
  function updateFields(fields: Partial<FormData>) {
<<<<<<< HEAD
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const { currentStepIndex, step, isFirstStep, isLastStep, back1, back2, next1, next2, goTo } = useMultistepForm([
    //list of pages for the form as components
    <Intro {...data} updateFields={updateFields} />,
    <Understanding {...data} updateFields={updateFields} />,
    <Event {...data} updateFields={updateFields} />,
    <BestPractices {...data} updateFields={updateFields} />,
    <Danger {...data} updateFields={updateFields} />,
    <SafetyHazards {...data} updateFields={updateFields} />,
    <HazardEvents {...data} updateFields={updateFields} />,
    <FoodAlcohol {...data} updateFields={updateFields} />,
    <AlcoholEvent {...data} updateFields={updateFields} />,
    <Travel {...data} updateFields={updateFields} />,
    <TravelEvents {...data} updateFields={updateFields} />,
    <Policy {...data} updateFields={updateFields} />
  ])

=======
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
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4

  title = titles[currentStepIndex];

  //this is the next or submit button, sometimes skipping pages if an option is picked
  async function onSubmit(e: FormEvent) {
<<<<<<< HEAD
    e.preventDefault()
    //This handles what happens after the form is submitted
    if (isLastStep) {
      try {

=======
    e.preventDefault();
    //This handles what happens after the form is submitted
    if (isLastStep) {
      try {
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
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
<<<<<<< HEAD
        console.error('An error occurred while submitting the form');
      }

    } else {
      if ((currentStepIndex === 3 && !data.danger) || (currentStepIndex === 5 && !data.involveHazard) || (currentStepIndex === 7 && !data.alcohol) || (currentStepIndex === 9 && !data.travel)) {
=======
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
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
        return next2();
      } else {
        return next1();
      }
    }
  }

  //this goes back a page and sometimes goes back twice if an option is picked
  function back() {
<<<<<<< HEAD
    if ((currentStepIndex === 5 && !data.danger) || (currentStepIndex === 7 && !data.involveHazard) || (currentStepIndex === 9 && !data.alcohol) || (currentStepIndex === 11 && !data.travel)) {
=======
    if (
      (currentStepIndex === 5 && !data.danger) ||
      (currentStepIndex === 7 && !data.involveHazard) ||
      (currentStepIndex === 9 && !data.alcohol) ||
      (currentStepIndex === 11 && !data.travel)
    ) {
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
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
<<<<<<< HEAD

          <PageHeading
            title='UHS Form For In-Person Events '
            variant='blue'
          />
=======
          <PageHeading title='UHS Form For In-Person Events ' variant='blue' />
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4

          <PageSection variant='white'>
            <div className='flex flex-col items-center gap-x-4 gap-y-4 md:flex-row'>
              <div id='text-body' className='flex flex-col'>
                <div className="text-[#4b4b4b] text-lg font-medium font-['Inter'] ">
<<<<<<< HEAD
                  Hello dear planner, welcome to the UHS (FORMERLY EOHSS) form for in-person events.
                  Once you fill this out, I will put it into the portal and
                  let you know both if there is anything else we need and when it gets approved via email!
                  <br />
                  <br />
                  If you have any other documents to be submitted with the forms or any contracts, budget, or itinerary please email them to {' '}
                  <a href='mailto:vp.studentlife@macengsociety.ca' className='underline'>
=======
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
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
                    vp.studentlife@macengsociety.ca
                  </a>
                  .
                  <br />
<<<<<<< HEAD
                  <br />
                  A '*' beside a question means that question needs to be answered.
=======
                  <br />A '*' beside a question means that question needs to be
                  answered.
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
                </div>
              </div>
            </div>
          </PageSection>

          {/* {once form is submitted, it will change to submitted change by checking isSubmitted state} */}
<<<<<<< HEAD
          {isSubmitted ?
            <PageSection variant='rounded'>
              <form className="flex flex-col place-content-center" onSubmit={restart}>
                <div className="flex place-self-center w-[80%] h-fit py-5 place-content-center text-center">
                  Your form has been successfully submitted. You will be notified once a decision has been made. Please click continue if you would like to submit another form.
                </div>
                <div className="flex flex-row justify-center content-end gap-x-4">
                  <Button type="submit" className='flex mb-5 place-self-center'>
=======
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
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
                    Continue
                  </Button>
                </div>
              </form>
            </PageSection>
<<<<<<< HEAD
            :
=======
          ) : (
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
            <PageSection variant='rounded' heading={title}>
              <form onSubmit={onSubmit}>
                {step}

<<<<<<< HEAD
                <div className="flex flex-row place-content-end gap-x-4">
                  {!isFirstStep &&
                    <Button type="button" onClick={back} className='flex place-self-end'>
                      Back
                    </Button>
                  }

                  <Button type="submit" className='flex place-self-end'>
                    {isLastStep ? "Submit" : "Next"}
=======
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
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
                  </Button>
                </div>
              </form>
            </PageSection>
<<<<<<< HEAD
          }

=======
          )}
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
        </section>
      </main>
    </PageLayout>
  );
}

Array;
const titles = [
<<<<<<< HEAD
  "Enter your Email",
  "Understanding",
  "Event Details",
  "Best Practices",
  "Serious Bodily Harm/Death",
  "Safety Hazards",
  "Events with Safety Hazards",
  "Food and Alcohol",
  "Events with Alcohol",
  "Travel",
  "Events with Travel",
  "Policies"
=======
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
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
];

let title: string;

//the types for all the data
type FormData = {
<<<<<<< HEAD
  email: string,
  firstAgreement: boolean,
  secondAgreement: boolean,
  groupCategory: string,
  groupName: string,
  eventName: string,
  eventDesc: string,
  organizerName: string,
  organizerNumber: string,
  organizerEmail: string,
  location: string,
  numberOfParticipants: string,
  emergencyName: string,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
  repeat: boolean | undefined,
  repeatInfo: string,
  execMeeting: boolean | undefined,
  thirdAgreement: boolean,
  virtual: boolean | undefined,
  movie: boolean | undefined,
  danger: boolean | undefined,
  activityDesc: string,
  nameOfFirstAidIndividual: string,
  nameOfEmergencyIndividual: string,
  fourthAgreement: boolean,
  fifthAgreement: boolean,
  involveHazard: boolean | undefined,
  equipmentDesc: string,
  certificateSent: boolean,
  sixthAgreement: boolean,
  food: boolean | undefined,
  alcohol: boolean | undefined,
  place: boolean | undefined,
  seventhAgreement: boolean,
  campus: boolean | undefined,
  eighthAgreement: boolean | undefined,
  travel: boolean | undefined,
  busName: string,
  busMonitor: string,
  safetyPlan: string,
  ninthAgreement: boolean,
  tenthAgreement: boolean,
  informationSecurityPolicy: boolean,
  studentRightsPolicy: boolean,
  discriminationHarassmentPolicy: boolean,
  sexualViolencePolicy: boolean,
  comments: string,
  finalAgreement: boolean
}

//the intialization for all the data
const INITIAL_DATA: FormData = {
  email: "",
  firstAgreement: false,
  secondAgreement: false,
  groupCategory: "",
  groupName: "",
  eventName: "",
  eventDesc: "",
  organizerName: "",
  organizerNumber: "",
  organizerEmail: "",
  location: "",
  numberOfParticipants: "",
  emergencyName: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  repeat: undefined,
  repeatInfo: "",
=======
  email: string;
  firstAgreement: boolean;
  secondAgreement: boolean;
  groupCategory: string;
  groupName: string;
  eventName: string;
  eventDesc: string;
  organizerName: string;
  organizerNumber: string;
  organizerEmail: string;
  location: string;
  numberOfParticipants: string;
  emergencyName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  repeat: boolean | undefined;
  repeatInfo: string;
  execMeeting: boolean | undefined;
  thirdAgreement: boolean;
  virtual: boolean | undefined;
  movie: boolean | undefined;
  danger: boolean | undefined;
  activityDesc: string;
  nameOfFirstAidIndividual: string;
  nameOfEmergencyIndividual: string;
  fourthAgreement: boolean;
  fifthAgreement: boolean;
  involveHazard: boolean | undefined;
  equipmentDesc: string;
  certificateSent: boolean;
  sixthAgreement: boolean;
  food: boolean | undefined;
  alcohol: boolean | undefined;
  place: boolean | undefined;
  seventhAgreement: boolean;
  campus: boolean | undefined;
  eighthAgreement: boolean | undefined;
  travel: boolean | undefined;
  busName: string;
  busMonitor: string;
  safetyPlan: string;
  ninthAgreement: boolean;
  tenthAgreement: boolean;
  informationSecurityPolicy: boolean;
  studentRightsPolicy: boolean;
  discriminationHarassmentPolicy: boolean;
  sexualViolencePolicy: boolean;
  comments: string;
  finalAgreement: boolean;
};

//the intialization for all the data
const INITIAL_DATA: FormData = {
  email: '',
  firstAgreement: false,
  secondAgreement: false,
  groupCategory: '',
  groupName: '',
  eventName: '',
  eventDesc: '',
  organizerName: '',
  organizerNumber: '',
  organizerEmail: '',
  location: '',
  numberOfParticipants: '',
  emergencyName: '',
  startDate: '',
  startTime: '',
  endDate: '',
  endTime: '',
  repeat: undefined,
  repeatInfo: '',
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
  execMeeting: undefined,
  thirdAgreement: false,
  virtual: undefined,
  movie: undefined,
  danger: undefined,
<<<<<<< HEAD
  activityDesc: "",
  nameOfFirstAidIndividual: "",
  nameOfEmergencyIndividual: "",
  fourthAgreement: false,
  fifthAgreement: false,
  involveHazard: undefined,
  equipmentDesc: "",
=======
  activityDesc: '',
  nameOfFirstAidIndividual: '',
  nameOfEmergencyIndividual: '',
  fourthAgreement: false,
  fifthAgreement: false,
  involveHazard: undefined,
  equipmentDesc: '',
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
  certificateSent: false,
  sixthAgreement: false,
  food: undefined,
  alcohol: undefined,
  place: undefined,
  seventhAgreement: false,
  campus: undefined,
  eighthAgreement: undefined,
  travel: undefined,
<<<<<<< HEAD
  busName: "",
  busMonitor: "",
  safetyPlan: "",
=======
  busName: '',
  busMonitor: '',
  safetyPlan: '',
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
  ninthAgreement: false,
  tenthAgreement: false,
  informationSecurityPolicy: false,
  studentRightsPolicy: false,
  discriminationHarassmentPolicy: false,
  sexualViolencePolicy: false,
<<<<<<< HEAD
  comments: "",
  finalAgreement: false
}

=======
  comments: '',
  finalAgreement: false,
};
>>>>>>> 766e2139ad39514ea6a1e64700ebef83d800b9b4
