import { TextFieldProps } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import React from 'react';

import Question from "@/components/form/Question";



type EventData = {
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
  movie: boolean | undefined
}

type EventProps = EventData & {
  updateFields: (fields: Partial<EventData>) => void
}

function Event({ eventName, eventDesc, organizerName, organizerNumber, organizerEmail, location, numberOfParticipants, emergencyName, startDate, startTime, endDate, endTime, repeat, repeatInfo, execMeeting, thirdAgreement, virtual, movie, updateFields }: EventProps) {
  return (
    <div className="flex flex-col">
        <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>

          <Question title="Event Name" required={true}>
            <input required className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter your event name..." name="eventName" value={eventName} onChange={e => updateFields({ eventName: e.target.value })} />
          </Question>

          <Question title="Event Description (description = be descriptive!)" description="Please describe how you will address each guideline and the details of your event. What are people doing during your event? Who is it geared towards? What is expected from attendees? What type of event is this?" required={true}>
            <textarea required className="mt-2 w-full w-min-4 h-[10rem] opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Describe the event..." name="eventDesc" value={eventDesc} onChange={e => updateFields({ eventDesc: e.target.value })}/>
          </Question>

          <Question title="Name of primary event organizer" required={true}>
          <input required className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter organizer name..." name="organizerName" value={organizerName} onChange={e => updateFields({ organizerName: e.target.value })} />
          </Question>

          <Question title="Phone number of primary event organizer" required={true}>
            <input required className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter organizer phone number..." name="organizerNumber" value={organizerNumber} onChange={e => updateFields({ organizerNumber: e.target.value })} />
          </Question>

          <Question title="Email address of primary event organizer" required={true}>
            <input required type="email" className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter organizer email..." name="organizerEmail" value={organizerEmail} onChange={e => updateFields({ organizerEmail: e.target.value })} />
          </Question>

          <Question title="Intended location of the event (including address)" required={true}>
            <input required className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter location..." name="location" value={location} onChange={e => updateFields({ location: e.target.value })}/>
          </Question>

          <Question title="Expected Number of Participants (Whole numbers only)" required={true}>
            <input required type="number" min="2" max="10000" className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter number of participants..." name="numberParticipants" value={numberOfParticipants} onChange={e => updateFields({ numberOfParticipants: e.target.value })} />
          </Question>

          <Question title="Name of individual not attending the event who stays back as an emergency contact (if needed)" required={true}>
            <input required className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Enter emergency contact..." name="emergencyName" value={emergencyName} onChange={e => updateFields({ emergencyName: e.target.value })} />
          </Question>

          <Question title="Start Date" required={true}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="mt-2 w-[40%] w-min-4 opacity-50"
                name="startDate"
                value={dayjs(startDate)}
                onChange={(date) => updateFields({ startDate: date?.toString() })}
                slotProps={{
                  textField: { sx: textFieldProps } as TextFieldProps,
                  layout: {
                    sx: {
                      backgroundColor: '#ececec', // Background color of the calendar itself
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </Question>

          <Question title="Start Time" required={true}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                className="mt-2 w-[40%] w-min-4 opacity-50"
                name="startTime"
                views={['hours', 'minutes']}
                format="hh:mm a"
                value={dayjs(startTime)}
                onChange={(time) => updateFields({ startDate: time?.toString() })}
                slotProps={{
                  textField: { sx: textFieldProps } as TextFieldProps,
                  layout: {
                    sx: {
                      backgroundColor: '#ececec', // Background color of the calendar itself
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </Question>

          <Question title="End Date" description="If it's a repeating event, please put the end date of the first repeat (Eg for 1h weekly meetings starting on Feb 1 and ending Mar 1, the end date would be Feb 1 not Mar 1)" required={true}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="mt-2 w-[40%] w-min-4 opacity-50"
                name="endDate"
                value={dayjs(endDate)}
                onChange={(date) => updateFields({ endDate: date?.toString() })}
                slotProps={{
                  textField: { sx: textFieldProps } as TextFieldProps,
                  layout: {
                    sx: {
                      backgroundColor: '#ececec', // Background color of the calendar itself
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </Question>

          <Question title="End Time" required={true}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                className="mt-2 w-[40%] w-min-4 opacity-50"
                name="endTime"
                views={['hours', 'minutes']}
                format="hh:mm a"
                value={dayjs(endTime)}
                onChange={(time) => updateFields({ endDate: time?.toString() })}
                slotProps={{
                  textField: { sx: textFieldProps } as TextFieldProps,
                  layout: {
                    sx: {
                      backgroundColor: '#ececec', // Background color of the calendar itself
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </Question>

          <Question title="Does this event repeat?" required={true}>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='repeat' value="repeatYes" checked={repeat === true} onChange={() => updateFields({ repeat: true})} />
              <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Yes</div>
            </label>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='repeat' value="repeatNo" checked={repeat === false} onChange={() => updateFields({ repeat: false })} />
              <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">No</div>
            </label>
          </Question>

          <Question title="If it does repeat, please specify." description="(Weekly and ends on Sept 20), (Daily and ends after 2 days/occurances) , (monthly and ends on Oct. 31). *Keep it within a semester" required={false}>
            <input className="mt-2 w-[40%] w-min-4 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40 focus:border-[#a8b3c9] focus:outline-none focus:ring-0" placeholder="Explain more..." name="repeat" value={repeatInfo} onChange={e => updateFields({ repeatInfo: e.target.value })}/>
          </Question>

          <Question title="Is this a student group executive meeting?" required={true}>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='exec' value="execYes" checked={execMeeting === true} onChange={() => updateFields({ execMeeting: true })} />
              <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Yes</div>
            </label>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='exec' value="execNo" checked={execMeeting === false} onChange={() => updateFields({ execMeeting: false})} />
              <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">No</div>
            </label>
          </Question>

          <Question title="I understand that the following is prohibited:  events involving alcohol, events involving travel (outside the province of Ontario)." required={true}>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="checkbox" name="thirdAgreement" checked={thirdAgreement} onChange={e => updateFields({ thirdAgreement: e.target.checked })}/>
              <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Yes</div>
            </label>
          </Question>

          <Question title="Is this a virtual event?" required={true}>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='virtual' value="virtualYes" checked={virtual === true} onChange={() => updateFields({ virtual: true })}/>
              <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Yes</div>
            </label>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='virtual' value="virtualNo" checked={virtual === false} onChange={() => updateFields({ virtual: false })}/>
              <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">No</div>
            </label>
          </Question>

          <Question title="Are you planning an event that includes screening a movie?" description="MSU Criterion license: http://www.criterionpic.com/cpl/qsearch.htx. (Search for your movie title here) Films not found here i.e. documentaries or independent films can only be shown with permission from the director or film/distribution company. Please complete the film waiver and submit with your event request." required={true}>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='movie' value="movieYes" checked={movie === true} onChange={() => updateFields({ movie: true })}/>
              <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">Yes, and my movie is approved under the MSU Criterion License</div>
            </label>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input className="mr-2 h-6 w-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40" type="radio" name='movie' value="movieNo" checked={movie === false} onChange={() => updateFields({ movie: false})}/>
              <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">No</div>
            </label>
          </Question>

        </div>
    </div>
  );
};

const textFieldProps: SxProps = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px', // Set border radius
    borderWidth: '2px', // Set border width
    height: '3rem',
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderWidth: '2px', // Set border width for fieldset
    },
    '&:hover fieldset': {
      borderColor: '#a8b3c9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a8b3c9',
    },
    '&.Mui-error fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.4)', // Same as normal state
    },
    '& input': {
      backgroundColor: '#ececec', // Background color of the input field
      outline: 'none', // Remove the default outline
      boxShadow: 'none', // Remove the default box-shadow (ring)
      borderRadius: '10px', // Set border radius for input
      color: '#4b4b4b',
    },
  },
  '& .MuiInputBase-input': {
    backgroundColor: '#ececec', // Background color of the input field
    outline: 'none', // Remove the default outline
    boxShadow: 'none', // Remove the default box-shadow (ring)
    borderRadius: '10px', // Set border radius for input
    color: '#4b4b4b',
  },
}

export default Event;