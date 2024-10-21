'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';

export default function BookingInstructions() {
  return (
    <Accordion>
      <AccordionItem key='1' title='For Students' aria-label='For Students'>
        Hatch Room Bookings can be made any time between 7:00AM - 11:00 PM,
        seven days a week. A user may make multiple bookings for any room up to
        3 hours per day. Bookings are officially made once you submit the form
        and have received email confirmation.
        <br />
        <br />
        To <b>modify</b> or <b>cancel</b> a booking, use the link in your
        confirmation email.
      </AccordionItem>
      <AccordionItem
        key='2'
        title='For Clubs & Teams'
        aria-label='For Clubs & Teams'
      >
        If your club or team would like to reserve a meeting room to hold
        recurring meetings, please contact{' '}
        <a href='mailto:engclubs@mcmaster.ca' className='underline'>
          engclubs@mcmaster.ca
        </a>
        .
      </AccordionItem>
      <AccordionItem
        key='3'
        title='H204A/B Room Divider'
        aria-label='H204A/B Room Divider'
      >
        If you need the combined rooms of H204A/B, contact{' '}
        <a href='mailto:ghc@mcmaster.ca' className='underline'>
          ghc@mcmaster.ca
        </a>
        , to ensure the room divider will be opened during your booking.
      </AccordionItem>
      <AccordionItem
        key='4'
        title='Holding Events in Hatch Centre'
        aria-label='Holding Events in Hatch Centre'
      >
        Bookings for student groups within the Hatch Centre are limited to MES
        clubs, groups, teams & affiliates <b>only</b>.
        <br />
        These rooms are only authorized for use by the McMaster Engineering
        Society and the Faculty of Engineering. <br />
        <br />
        MSU clubs wishing to hold events may not do so in the Hatch Centre
        without explicit permission from the Hatch Centre Coordinator. Approval
        may be granted on a case-by-case basis and is not guaranteed to any
        group external to the MES.
      </AccordionItem>
    </Accordion>
  );
}
