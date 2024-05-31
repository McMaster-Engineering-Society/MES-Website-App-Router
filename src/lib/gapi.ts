import { CalendarEvent, GoogleCalendarEvent } from '../types/calendar';

export const listGoogleEvents = async (
  calendarId: string,
  apiKey: string,
): Promise<GoogleCalendarEvent[]> => {
  return (
    fetch(
      'https://www.googleapis.com/calendar/v3/calendars/' +
        calendarId +
        '/events?key=' +
        apiKey,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error.message);
        }

        return data.items;
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
  );
};

export const instancesGoogleEvents = async (
  calendarId: string,
  apiKey: string,
  eventId: string,
): Promise<GoogleCalendarEvent[]> => {
  return (
    fetch(
      'https://www.googleapis.com/calendar/v3/calendars/' +
        calendarId +
        '/events/' +
        eventId +
        '/instances?key=' +
        apiKey,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error.message);
        }

        return data.items;
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
  );
};

export const formatEvents = async (
  googleCalendarEvents: GoogleCalendarEvent[],
  calendarId: string,
  apiKey: string,
  accentColours: string,
  calendarName: string,
): Promise<CalendarEvent[]> => {
  const resultCalendarEvents: CalendarEvent[] = [];

  // console.log('googleCalendarEvents:', googleCalendarEvents);

  for (const event of googleCalendarEvents) {
    if (!event.start) continue;
    if (event.status !== 'confirmed') continue;

    let start: Date = new Date();
    let end: Date = new Date();
    let allDay = false;
    let numDays = 1;
    let multiDay = false;

    if (event.start.dateTime) {
      start = new Date(event.start.dateTime);
      end = new Date(event.end.dateTime);

      numDays = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
      );
    } else if (event.start.date) {
      start = new Date(`${event.start.date}`);
      end = new Date(`${event.end.date}`);

      // Move start date forward one day to account for all-day events
      start.setDate(start.getDate() + 1);

      allDay = true;

      numDays = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) + 1,
      );
    }

    if (numDays > 1) {
      multiDay = true;
    }

    if (event.recurrence) {
      await instancesGoogleEvents(calendarId, apiKey, event.id).then(
        async (data) => {
          const formattedInstances: CalendarEvent[] = await formatEvents(
            data,
            calendarId,
            apiKey,
            accentColours,
            calendarName,
          );

          resultCalendarEvents.push(...formattedInstances);
        },
      );
    } else {
      resultCalendarEvents.push({
        id: parseInt(event.id),
        day: start.getDate(),
        month: start.getMonth() + 1,
        year: start.getFullYear(),
        spacer: false,
        title: event.summary,
        description: event.description,
        location: event.location,
        start,
        end,
        allDay,
        numDays,
        multiDay,
        accentColours,
        calendarName,
      });
    }
  }

  return resultCalendarEvents;
};
