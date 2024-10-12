import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { IoAdd } from 'react-icons/io5';
import { SiGooglecalendar, SiMicrosoftoutlook } from 'react-icons/si';

import { CalendarEvent } from '@/types/calendar';

type AddToCalendarDropdownProps = {
  event: CalendarEvent;
};

const AddEventToCalendarDropdown = ({ event }: AddToCalendarDropdownProps) => {
  // returns a link to create a Google Calendar event
  const getGoogleAddEventUrl = (event: CalendarEvent) => {
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title || '',
    )}&dates=${(event.start?.toISOString() || '').replace(/-|:|\.\d\d\d/g, '')}/${(
      event.end?.toISOString() || ''
    ).replace(
      /-|:|\.\d\d\d/g,
      '',
    )}&details=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(
      event.location || '',
    )}&sf=true&output=xml`;

    return googleCalendarUrl;
  };

  // returns a link to create an Outlook Calendar event
  const getOutlookAddEventUrl = (event: CalendarEvent) => {
    const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
      event.title || '',
    )}&body=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(
      event.location || '',
    )}&startdt=${event.start?.toISOString()}&enddt=${event.end?.toISOString()}&path=/calendar/view/Month`;

    return outlookCalendarUrl;
  };

  return (
    <Dropdown closeOnSelect={false}>
      <DropdownTrigger>
        <Button startContent={<IoAdd />} variant='bordered'>
          Add to calendar
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        id={event.description}
        aria-label='Dropdown menu for adding events to personal calendars'
      >
        <DropdownItem
          textValue='Google Calendar'
          key='google'
          startContent={<SiGooglecalendar />}
          href={getGoogleAddEventUrl(event)}
        >
          Google Calendar
        </DropdownItem>
        <DropdownItem
          textValue='Outlook Calendar'
          key='outlook'
          startContent={<SiMicrosoftoutlook />}
          href={getOutlookAddEventUrl(event)}
        >
          Outlook Calendar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AddEventToCalendarDropdown;
