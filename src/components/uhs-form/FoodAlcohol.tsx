type FoodAlcoholData = {
  foodYes: boolean,
  foodNo: boolean,
  alcoholYes: boolean,
  alcoholNo: boolean,
  placeYes: boolean,
  placeNo: boolean,
  seventhAgreement: boolean
}

type FoodAlcoholProps = FoodAlcoholData & {
  updateFields: (fields: Partial<FoodAlcoholData>) => void
}

function FoodAlcohol({ foodYes, foodNo, alcoholYes, alcoholNo, placeYes, placeNo, seventhAgreement, updateFields }: FoodAlcoholProps) {
  return (
    <div className="flex flex-col">
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        <div>
          Does your event include food & beverages? *
          <br/>
          <small>
            Please note that if your event is at a venue where food and beverages can be purchased by attendees (eg Boston Pizza), that would be included under an event including food/beverages. 
            <br/>
            <br/>
            Campus Food and Beverage 
            <br/>
            Policy: https://vpof.mcmaster.ca/app/uploads/2021/04/Campus-Food-Beverage-Policy.pdf
          </small>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="radio" name='food' value="foodYes" checked={foodYes} onChange={() => updateFields({ foodYes: true, foodNo: false })}/>
            <div>Yes, and I've read, acknowledge I understand the McMaster Campus Food and Beverage Policy, and my event follows these guidelines</div>
          </label>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input className="mr-2 h-6 w-6" type="radio" name='food' value="foodNo" checked={foodNo} onChange={() => updateFields({ foodYes: false, foodNo: true })}/>
            <div>No</div>
          </label>
        </div>

        <div>
          Is alcohol being served at this event? *
          <br/>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="radio" name='alcohol' value="alcoholYes" checked={alcoholYes} onChange={() => updateFields({ alcoholYes: true, alcoholNo: false })}/>
            <div>Yes</div>
          </label>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input className="mr-2 h-6 w-6" type="radio" name='alcohol' value="alcoholNo" checked={alcoholNo} onChange={() => updateFields({ alcoholYes: false, alcoholNo: true })}/>
            <div>No</div>
          </label>
        </div>

        <div>
          Is the event being held at: *
          <br/>
          - TwelveEighty
          <br/>
          - The Phoenix
          <br/>
          - Paradise Catering venue
          <br/>
          - Ron Joyce Centre
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="radio" name='place' value="placeYes" checked={placeYes} onChange={() => updateFields({ placeYes: true, placeNo: false })}/>
            <div>Yes</div>
          </label>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input className="mr-2 h-6 w-6" type="radio" name='place' value="placeNo" checked={placeNo} onChange={() => updateFields({ placeYes: false, placeNo: true })}/>
            <div>No</div>
          </label>
        </div>

        <div>
          Required: *
          <small>
            <br/>
            New: $10M commercial general liability is now required when buses are used for events. 
            <br/>
            One non-drinking McMaster student volunteer must be designated for every 25 participants.
            <br/>
            Alcohol Waivers are required for all alcohol-related Events. 
            <br/>
            Event Security must be present if the number of participants for an off-campus event involving alcohol is expected to exceed 100.
            <br/>
            Hamilton Police Services must be notified if the number of participants for an off-campus event, not being held at a bar or nightclub and involving alcohol is expected to exceed 300.
            <br/>
            A certificate of Insurance is required for all off-campus events involving alcohol. 
          </small>
          <label className="flex flex-row mt-2 h-fit justify-items-start content-center">
            <input required className="mr-2 h-6 w-6" type="checkbox" checked={seventhAgreement} onChange={e => updateFields({ seventhAgreement: e.target.checked })} />
            <div>I have read and agree</div>
          </label>
        </div>


      </div>
    </div>
  )
};

export default FoodAlcohol;