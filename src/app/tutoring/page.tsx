import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import DiscountIcon from '@mui/icons-material/Discount';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from 'react';

import { timeout } from '@/lib/helper';

import Button from '@/components/buttons/Button';
import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/tutoring-service/InfoCard';
import LearningSvg from '@/components/tutoring-service/LearningSvg';

const TutoringService = () => {
  const [viewDiscount, setViewDiscount] = useState(false);

  const onViewDiscountClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setViewDiscount(true);
    const hero = document.getElementById('discount-card');
    e.preventDefault();
    hero &&
      hero.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

    await timeout(5000);

    setViewDiscount(false);
  };

  return (
    <PageLayout noBackground>
      <main className='layout'>
        <section
          id='header'
          className='flex flex-col items-center justify-between'
        >
          <div className='flex flex-col-reverse items-center justify-between gap-8 md:flex-row'>
            <div id='header-info' className='flex flex-col gap-6 md:w-7/12'>
              <span className='hidden text-5xl font-bold leading-snug md:block'>
                Learn Anything From
                <br />
                Our{' '}
                <a
                  className=' decoration-mesRed text-mesRed hover:underline'
                  href='https://mcmaster.tutorocean.com/search'
                >
                  Peer Tutors
                </a>
              </span>
              <span className='block text-4xl font-bold leading-snug md:hidden'>
                Learn Anything From
                <br />
                Our{' '}
                <a
                  className=' decoration-mesRed text-mesRed hover:underline'
                  href='https://mcmaster.tutorocean.com/search'
                >
                  Peer Tutors
                </a>
              </span>
              <span>
                The Undergrad Peer Tutoring Network (UPTN) makes it easy for you
                to find a tutor who can help with specific course content. Peer
                tutors are McMaster undergraduate students who have completed
                and earned at least an A- (10.0) grade in the course(s) they are
                tutoring.
              </span>
              <div className='flex flex-row gap-4'>
                <ButtonLink
                  href='https://mcmaster.tutorocean.com/search'
                  target='_blank'
                  className='drop-shadow-2xl'
                >
                  Find Tutors
                </ButtonLink>
                {/* <Link href='#discount-card'> */}
                <Button variant='outline' onClick={onViewDiscountClick}>
                  Get 50% Discount
                </Button>
                {/* </Link> */}
              </div>
            </div>
            <LearningSvg width={600} className='hidden md:block' />
            <LearningSvg width={300} className='block md:hidden' />
          </div>
          <div id='discount-card' />
          <span className='mb-12 mt-12 text-sm text-gray-400 md:mt-24'>
            Note: Tutors are self-employed and not employees of McMaster
            University. As such, we cannot guarantee the performance of your
            tutor. The service agreement is between yourself and the tutor. SSC
            staff have access to read messages between students and tutors on
            TutorOcean to ensure policies are met.
          </span>
        </section>
        <section
          id='feature-cards'
          className='flex flex-col gap-8 md:grid md:grid-cols-3'
        >
          <InfoCard
            title='Engineering Student Discount'
            description='As an engineering student, you have access to a subsidy from the McMaster Engineering Society (MES). This includes seven sessions at half price. This discount will be automatically applied when you pay for the session.'
            icon={<DiscountIcon fontSize='large' />}
            animate={viewDiscount}
          />
          <InfoCard
            title='Find 200+ Tutors'
            description='Search through our list of 200+ tutors to find the perfect tutor for you. Our tutors offer help in a variety of courses, based on which are being currently offered. Learn either in a 1-on-1 or a group session.'
            icon={<SchoolIcon fontSize='large' />}
            className={viewDiscount ? 'opacity-60' : undefined}
            learnMore
          />
          <InfoCard
            title='Become a Tutor'
            description='To provide tutoring services through the (UPTN), you must be a McMaster undergraduate student, and have completed & earned at least an A- (10.0) in the course(s) you want to tutor'
            icon={<CastForEducationIcon fontSize='large' />}
            className={viewDiscount ? 'opacity-60' : undefined}
            learnMore
          />
        </section>
        <section
          id='more-info'
          className='mt-8 flex flex-col gap-8 md:grid md:grid-cols-2'
        >
          <div className='flex flex-col justify-between'>
            <PageSection heading='Find a Tutor' variant='white'>
              <div id='find-a-tutor' />
              <ol className='list-decimal pl-6'>
                <li>
                  Access the Undergrad Peer Tutoring Network on the TutorOcean
                  platform
                </li>
                <li>Search for a tutor by course code (i.e. MATH 1A03)</li>
                <li>
                  Read the tutor profiles that appear in the results. Tip: Find
                  tutors who are “McMaster certified,” which means that they’ve
                  completed our academics training workshop.
                </li>
                <li>
                  Choose and chat with a tutor. If you feel comfortable that
                  they can help you, set up an online or in-person tutoring
                  session.
                </li>
              </ol>
            </PageSection>
            <PageSection
              heading='Feedback?'
              variant='white'
              className='hidden md:block'
            >
              Your feedback on how we can enhance our program is always
              important to us. Contact the Writing and Academic Skills team at{' '}
              <a className='underline' href='mailto:skills@mcmaster.ca'>
                skills@mcmaster.ca
              </a>
              .
            </PageSection>
          </div>
          <PageSection heading='Become a Tutor' variant='white'>
            <div id='become-a-tutor' />
            <ol className='list-decimal pl-6'>
              <li>
                Access the Undergrad Peer Tutoring Network on the TutorOcean
                platform
              </li>
              <li>Create a profile that includes codes for the courses</li>
              <li>
                Click to give our academic skills team access to your grades.
                We&apos;ll verify that you received at least an A- (10.0) grade
                in the course you want to tutor.
              </li>
              <li>
                Get familiar with the TutorOcean platform and wait to be
                contacted by students for a tutoring session. Once you&apos;ve
                connected with a student, you&apos;ll be able to set up an
                online session that works for both of you.
              </li>
              <li>
                All tutors associated with the Undergrad Peer Tutoring Network
                agree to charge $15–$20 per hour. Every two weeks, TutorOcean
                will deposit the money you&apos;ve earned to your credit card,
                PayPal or Stripe account. Please note that TutorOcean receives a
                10% session fee.
              </li>
            </ol>
          </PageSection>
          <PageSection
            heading='Feedback?'
            variant='white'
            className='block md:hidden'
          >
            Your feedback on how we can enhance our program is always important
            to us. Contact the Writing and Academic Skills team at{' '}
            <a className='underline' href='mailto:skills@mcmaster.ca'>
              skills@mcmaster.ca
            </a>
            .
          </PageSection>
        </section>
      </main>
    </PageLayout>
  );
};

export default TutoringService;
