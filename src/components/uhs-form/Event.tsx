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
  repeatYes: boolean,
  repeatNo: boolean,
  repeatInfo: string,
  execMeetingYes: boolean,
  execMeetingNo: boolean,
  thirdAgreement: boolean,
  virtualYes: boolean,
  virtualNo: boolean,
  movieYes: boolean,
  movieNo: boolean
}

type EventProps = EventData & {
  updateFields: (fields: Partial<EventData>) => void
}

function Event({ eventName, eventDesc, organizerName, organizerNumber, organizerEmail, location, numberOfParticipants, emergencyName, startDate, startTime, endDate, endTime, repeatYes, repeatNo, repeatInfo, execMeetingYes, execMeetingNo, thirdAgreement, virtualYes, virtualNo, movieYes, movieNo, updateFields }: EventProps) {
  return (
    <div className="flex flex-col">
        <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
          <label className="flex flex-col">
            Event Name *
            <br/>
            <input required className="mt-2  w-[40%] w-min-4" name="eventName" value={eventName} onChange={e => updateFields({ eventName: e.target.value })} />
          </label>

          <label className="flex flex-col">
            Event Description (description = be descriptive!)  *
            <br/>
            Please describe how you will address each guideline and the details of your event.
            <br/>
            <div className="text-sm">
              What are people doing during your event? Who is it geared towards? What is expected from attendees? What type of event is this? 
            </div>
            <input required className="mt-2  w-full w-min-4 h-[10rem]" name="eventDesc" value={eventDesc} onChange={e => updateFields({ eventDesc: e.target.value })}/>
          </label>

          <label className="flex flex-col">
            Name of primary event organizer *
            <br/>
            <input required className="mt-2  w-[40%] w-min-4" name="organizerName" value={organizerName} onChange={e => updateFields({ organizerName: e.target.value })} />
          </label>

          <label className="flex flex-col">
            Phone number of primary event organizer *
            <br/>
            <input required className="mt-2  w-[40%] w-min-4" name="organizerNumber" value={organizerNumber} onChange={e => updateFields({ organizerNumber: e.target.value })} />
          </label>

          <label className="flex flex-col">
            Email address of primary event organizer *
            <br/>
            <input required type="email" className="mt-2  w-[40%] w-min-4" name="organizerEmail" value={organizerEmail} onChange={e => updateFields({ organizerEmail: e.target.value })} />
          </label>

          <label className="flex flex-col">
            Intended location of the event (including address) *
            <br/>
            <input required className="mt-2  w-[40%] w-min-4" name="location" value={location} onChange={e => updateFields({ location: e.target.value })}/>
          </label>

          <label className="flex flex-col">
            Expected Number of Participants (Whole numbers only) *
            <br/>
            <input required type="number" min="2" max="10000" className="mt-2  w-[40%] w-min-4" name="numberParticipants" value={numberOfParticipants} onChange={e => updateFields({ numberOfParticipants: e.target.value })} />
          </label>

          <label className="flex flex-col">
            Name of individual not attending the event who stays back as an emergency contact (if needed) *
            <br/>
            <input required className="mt-2  w-[40%] w-min-4" name="emergencyName" value={emergencyName} onChange={e => updateFields({ emergencyName: e.target.value })} />
          </label>

          <label className="flex flex-col">
            Start date *
            <br/>
            <input required className="mt-2  w-[40%] w-min-4" type='date' name="startDate" value={startDate} onChange={e => updateFields({ startDate: e.target.value })} />
          </label>

          <label className="flex flex-col">
            Start time (military time) *
            <br/>
            <input required className="mt-2  w-[40%] w-min-4" type='time' name="startTime" value={startTime} onChange={e => updateFields({ startTime: e.target.value })} />
          </label>

          <label className="flex flex-col">
            End date * {' '}
            <small>*If it's a repeating event, please put the end date of the first repeat (Eg for 1h weekly meetings starting on Feb 1 and ending Mar 1, the end date would be Feb 1 not Mar 1)</small>
            <input required className="mt-2  w-[40%] w-min-4" type='date' name="endDate" value={endDate} onChange={e => updateFields({ endDate: e.target.value })} />
          </label>

          <label className="flex flex-col">
            End time (military time) *
            <br/>
            <input required className="mt-2  w-[40%] w-min-4" type='time' name="endTime" value={endTime} onChange={e => updateFields({ endTime: e.target.value })}/>
          </label>

          <div>
            Does this event repeat? *
            <br/>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6" type="radio" name='repeat' value="repeatYes" checked={repeatYes} onChange={() => updateFields({ repeatYes: true, repeatNo: false })} />
              <div>Yes</div>
            </label>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input className="mr-2 h-6 w-6" type="radio" name='repeat' value="repeatNo" checked={repeatNo} onChange={() => updateFields({ repeatYes: false, repeatNo: true })} />
              <div>No</div>
            </label>
          </div>

          <label className="flex flex-col">
            If it does repeat, please specify.
            <small> (Weekly and ends on Sept 20), (Daily and ends after 2 days/occurances) , (monthly and ends on Oct. 31). *Keep it within a semester*</small>
            <input className="mt-2  w-[40%] w-min-4" name="repeat" value={repeatInfo} onChange={e => updateFields({ repeatInfo: e.target.value })}/>
          </label>
          
          <div>
            Is this a student group executive meeting? *
            <br/>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6" type="radio" name='exec' value="execYes" checked={execMeetingYes} onChange={() => updateFields({ execMeetingYes: true, execMeetingNo: false })} />
              <div>Yes</div>
            </label>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input className="mr-2 h-6 w-6" type="radio" name='exec' value="execNo" checked={execMeetingNo} onChange={() => updateFields({ execMeetingYes: false, execMeetingNo: true })} />
              <div>No</div>
            </label>
          </div>

          <div>
            I understand that the following is prohibited:  events involving alcohol, events involving travel (outside the province of Ontario). *
            <br/>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6" type="checkbox" name="thirdAgreement" checked={thirdAgreement} onChange={e => updateFields({ thirdAgreement: e.target.checked })}/>
              <div>Yes</div>
            </label>
          </div>

          <div>
            Is this a virtual event? *
            <br/>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6" type="radio" name='virtual' value="virtualYes" checked={virtualYes} onChange={() => updateFields({ virtualYes: true, virtualNo: false })}/>
              <div>Yes</div>
            </label>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input className="mr-2 h-6 w-6" type="radio" name='virtual' value="virtualNo" checked={virtualNo} onChange={() => updateFields({ virtualYes: false, virtualNo: true })}/>
              <div>No</div>
            </label>
          </div>

          <div>
            Are you planning an event that includes screening a movie? *
            <br/>
            <small>
              MSU Criterion license: http://www.criterionpic.com/cpl/qsearch.htx.
              (Search for your movie title here)
              <br/>
              Films not found here i.e. documentaries or independent films can only be shown with permission from the director or film/distribution company.
              Please complete the film waiver and submit with your event request.
            </small>
            <br/>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input required className="mr-2 h-6 w-6" type="radio" name='movie' value="movieYes" checked={movieYes} onChange={() => updateFields({ movieYes: true, movieNo: false })}/>
              <div>Yes, and my movie is approved under the MSU Criterion License</div>
            </label>
            <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
              <input className="mr-2 h-6 w-6" type="radio" name='movie' value="movieNo" checked={movieNo} onChange={() => updateFields({ movieYes: false, movieNo: true })}/>
              <div>No</div>
            </label>
          </div>
        </div>
    </div>
  );
};
export default Event;