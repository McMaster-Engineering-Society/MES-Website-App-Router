/* eslint-disable react/jsx-key */
"use client"
import { FormEvent, useState } from 'react';

//import { useAsyncList } from '@react-stately/data';
import Button from '@/components/buttons/Button';
import { useMultistepForm } from '@/components/form/useMultistepForm';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';
import AlcoholEvent from '@/components/uhs-form/AlcoholEvent';
import BestPractices from '@/components/uhs-form/BestPractices';
import Danger from '@/components/uhs-form/Danger';
import Event from '@/components/uhs-form/Event';
import FoodAlcohol from '@/components/uhs-form/FoodAlcohol';
import HazardEvents from '@/components/uhs-form/HazardEvents';
import Intro from '@/components/uhs-form/Intro';
import Policy from '@/components/uhs-form/Policy';
import SafetyHazards from '@/components/uhs-form/SafetyHazards';
import Travel from '@/components/uhs-form/Travel';
import TravelEvents from '@/components/uhs-form/TravelEvents';
import Understanding from '@/components/uhs-form/Understanding';

export default function UHSFormPage() {
  const [isSubmitted, setSubmit] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  //updates the values in the state from outside this file
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }


  // //use it to fetch form data
  // const fetchFormData = async () => {
  //   const response = await fetch('/api/forms');
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch form data');
  //   }
  //   const data = await response.json();
  //   return data;
  // };

  // const list = useAsyncList({
  //   async load() {
  //     const data = await fetchFormData();
  //     return { items: data };
  //   },
  // });

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


  title = titles[currentStepIndex];

  //this is the next or submit button, sometimes skipping pages if an option is picked
  console.log('Before fetch request...');
  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    //This handles what happens after the form is submitted
    console.log('Submitting form...');
    if (isLastStep) {
      console.log('Is last step:', isLastStep);
      console.log('Last step reached, submitting data...');
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
        console.error('An error occurred while submitting the form');
      }

    } else {
      console.log('Not the last step, navigating to next step...');
      if ((currentStepIndex === 3 && data.dangerNo) || (currentStepIndex === 5 && data.involveHazardNo) || (currentStepIndex === 7 && data.alcoholNo) || (currentStepIndex === 9 && data.travelNo)) {
        return next2();
      } else {
        return next1();
      }
    }
  }

  //this goes back a page and sometimes goes back twice if an option is picked
  function back() {
    if ((currentStepIndex === 5 && data.dangerNo) || (currentStepIndex === 7 && data.involveHazardNo) || (currentStepIndex === 9 && data.alcoholNo) || (currentStepIndex === 11 && data.travelNo)) {
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

          <PageHeading
            title='UHS Form For In-Person Events '
            variant='blue'
          />

          <PageSection variant='white'>
            <div className='flex flex-col items-center gap-x-4 gap-y-4 md:flex-row'>
              <div id='text-body' className='flex flex-col'>
                <div className="text-[#4b4b4b] text-lg font-medium font-['Inter'] ">
                  Hello dear planner, welcome to the UHS (FORMERLY EOHSS) form for in-person events.
                  Once you fill this out, I will put it into the portal and
                  let you know both if there is anything else we need and when it gets approved via email!
                  <br />
                  <br />
                  If you have any other documents to be submitted with the forms or any contracts, budget, or itinerary please email them to {' '}
                  <a href='mailto:vp.studentlife@macengsociety.ca' className='underline'>
                    vp.studentlife@macengsociety.ca
                  </a>
                  .
                  <br />
                  <br />
                  A '*' beside a question means that question needs to be answered.
                </div>
              </div>
            </div>
          </PageSection>

          {/* {once form is submitted, it will change to submitted change by checking isSubmitted state} */}
          {isSubmitted ?
            <PageSection variant='rounded'>
              <form className="flex flex-col place-content-center" onSubmit={restart}>
                <div className="flex place-self-center w-[80%] h-fit py-5 place-content-center text-center">
                  Your form has been successfully submitted. You will be notified once a decision has been made. Please click continue if you would like to submit another form.
                </div>
                <div className="flex flex-row justify-center content-end gap-x-4">
                  <Button type="submit" className='flex mb-5 place-self-center'>
                    Continue
                  </Button>
                </div>
              </form>
            </PageSection>
            :
            <PageSection variant='rounded' heading={title}>
              <form onSubmit={onSubmit}>
                {step}

                <div className="flex flex-row place-content-end gap-x-4">
                  {!isFirstStep &&
                    <Button type="button" onClick={back} className='flex place-self-end'>
                      Back
                    </Button>
                  }

                  <Button type="submit" className='flex place-self-end'>
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </div>
              </form>
            </PageSection>
          }

        </section>
      </main>
    </PageLayout>
  );
}

Array;
const titles = [
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
];

let title: string;

//the types for all the data
type FormData = {
  email: string,
  firstAgreement: boolean,
  secondAgreement: boolean,
  groupMES: boolean,
  groupDepartment: boolean,
  groupCommittee: boolean,
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
  repeatYes: boolean,
  repeatNo: boolean,
  repeatInfo: string,
  execMeetingYes: boolean,
  execMeetingNo: boolean,
  thirdAgreement: boolean,
  virtualYes: boolean,
  virtualNo: boolean,
  movieYes: boolean,
  movieNo: boolean,
  dangerYes: boolean,
  dangerNo: boolean,
  activityDesc: string,
  nameOfFirstAidIndividual: string,
  nameOfEmergencyIndividual: string,
  fourthAgreement: boolean,
  fifthAgreement: boolean,
  involveHazardYes: boolean,
  involveHazardNo: boolean,
  equipmentDesc: string,
  certificateSent: boolean,
  sixthAgreement: boolean,
  foodYes: boolean,
  foodNo: boolean,
  alcoholYes: boolean,
  alcoholNo: boolean,
  placeYes: boolean,
  placeNo: boolean,
  seventhAgreement: boolean,
  campusYes: boolean,
  campusNo: boolean,
  eighthAgreementYes: boolean,
  eighthAgreementNo: boolean,
  travelYes: boolean,
  travelNo: boolean,
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
  groupMES: false,
  groupDepartment: false,
  groupCommittee: false,
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
  repeatYes: false,
  repeatNo: false,
  repeatInfo: "",
  execMeetingYes: false,
  execMeetingNo: false,
  thirdAgreement: false,
  virtualYes: false,
  virtualNo: false,
  movieYes: false,
  movieNo: false,
  dangerYes: false,
  dangerNo: false,
  activityDesc: "",
  nameOfFirstAidIndividual: "",
  nameOfEmergencyIndividual: "",
  fourthAgreement: false,
  fifthAgreement: false,
  involveHazardYes: false,
  involveHazardNo: false,
  equipmentDesc: "",
  certificateSent: false,
  sixthAgreement: false,
  foodYes: false,
  foodNo: false,
  alcoholYes: false,
  alcoholNo: false,
  placeYes: false,
  placeNo: false,
  seventhAgreement: false,
  campusYes: false,
  campusNo: false,
  eighthAgreementYes: false,
  eighthAgreementNo: false,
  travelYes: false,
  travelNo: false,
  busName: "",
  busMonitor: "",
  safetyPlan: "",
  ninthAgreement: false,
  tenthAgreement: false,
  informationSecurityPolicy: false,
  studentRightsPolicy: false,
  discriminationHarassmentPolicy: false,
  sexualViolencePolicy: false,
  comments: "",
  finalAgreement: false
}