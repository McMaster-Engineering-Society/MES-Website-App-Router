import PageLayout from '@/components/layout/PageLayout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import PageHeading from '@/components/PageHeading';
import PageSection from '@/components/PageSection';

const Bookings = () => {
  return (
    <PageLayout>
      <main className='layout'>
        <PageHeading preTitle='Reservations' title='Hatch Room Booking' />
        <ButtonLink href='/booking-system' className='mt-8'>
          Click Here to Start Booking
        </ButtonLink>
        <PageSection heading='Using Hatch Rooms' variant='white'>
          <div className='flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:items-start'>
            <div>
              Any undergraduate McMaster Engineering Student or MES Club or Team
              is welcome to book one of Hatch's second-floor study rooms. Each
              room has a tables, outlets, a whiteboard and a TV or projector
              that can be connected to wirelessly. If you would like to connect
              to the displays using HDMI rather than the VIA Kramer system,
              please visit the MES office (H202) or The Hub (JHE-216A) to sign
              out an HDMI cable. Please do not rearrange the wiring behind the
              TVs.
              <br />
              <br />
              <b>
                These rooms are for undergraduate students in the Faculty of
                Engineering only. For booking inquiries by other groups, please
                contact the Hatch Coordinator.
              </b>
            </div>
            <NextImage
              src='/images/bookings/the-junction.jpg'
              alt='The Junction'
              width={768}
              height={458}
              className='w-full bg-white p-2'
            />
          </div>
          <div className='mt-8 flex flex-col gap-4 sm:grid sm:grid-cols-2'>
            <ButtonLink href='https://docs.google.com/document/d/1a3_2fyJh-FhZ1T1B80O4mJoMfFFnjmGbhkbhMMi3MAk/edit?usp=sharing'>
              How to Use Hatch TVs
            </ButtonLink>
            <ButtonLink href='https://www.eng.mcmaster.ca/engineering-support-services-hub#Keys-Access-Cards'>
              Engineering Support Services
            </ButtonLink>
            <ButtonLink href='https://docs.google.com/forms/d/e/1FAIpQLSfCu5qtc2_HmYWJfM7aYtO0jcDEoB6rAt9VXJx-Op0k_Gc-kQ/viewform'>
              Report Issues Here
            </ButtonLink>
            <ButtonLink href='mailto:ghc@mcmaster.ca'>
              Email the Hatch Coordinator
            </ButtonLink>
          </div>
        </PageSection>
        <PageSection heading='Accessing Hatch Rooms' variant='white'>
          Students require an <b>access card</b> in order to access the Hatch
          study rooms. A card can be obtained from <b>The Hub, JHE-216A</b> with
          a $10 deposit, charged to your student account. The card will be valid
          for as long as you are a registered engineering undergraduate student,
          and a refund will be applied to your student account when you return
          the card.
          <br />
          <br />
          The Hub is open Monday to Friday from 9:00 AM - 12:00 PM and from 1:00
          PM - 4:00 PM. Please visit the Engineering Support Services website
          for more details.
        </PageSection>
        <PageSection heading='Instructions' variant='white'>
          <p>Instructions here</p>
          {/* <Accordion>
            <AccordionItem title='For Students'>
              Hatch Room Bookings can be made any time between 7:00AM - 11:00
              PM, seven days a week. A user may make multiple bookings for any
              room up to 3 hours per day. Bookings are officially made once you
              submit the form and have received email confirmation.
              <br />
              <br />
              To <b>modify</b> or <b>cancel</b> a booking, use the link in your
              confirmation email.
            </AccordionItem>
            <AccordionItem title='For Clubs & Teams'>
              If your club or team would like to reserve a meeting room to hold
              recurring meetings, please contact{' '}
              <a href='mailto:ghc@mcmaster.ca' className='underline'>
                ghc@mcmaster.ca
              </a>
              .
            </AccordionItem>
            <AccordionItem title='H204A/B Room Divider'>
              If you need the combined rooms of H204A/B, contact{' '}
              <a href='mailto:ghc@mcmaster.ca' className='underline'>
                ghc@mcmaster.ca
              </a>
              , to ensure the room divider will be opened during your booking.
            </AccordionItem>
            <AccordionItem title='Holding Events in Hatch Centre'>
              Bookings for student groups within the Hatch Centre are limited to
              MES clubs, groups, teams & affiliates <b>only</b>.
              <br />
              These rooms are only authorized for use by the McMaster
              Engineering Society and the Faculty of Engineering. <br />
              <br />
              MSU clubs wishing to hold events may not do so in the Hatch Centre
              without explicit permission from the Hatch Centre Coordinator.
              Approval may be granted on a case-by-case basis and is not
              guaranteed to any group external to the MES.
            </AccordionItem>
          </Accordion> */}
        </PageSection>
        <ButtonLink href='/booking-system' className='mt-8'>
          Click Here to Start Booking
        </ButtonLink>
      </main>
    </PageLayout>
  );
};

export default Bookings;
