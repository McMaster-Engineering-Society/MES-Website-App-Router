import Question from '@/components/form/Question';

import { FoodAlcoholData } from '@/types/uhsForm';

type FoodAlcoholProps = FoodAlcoholData & {
  updateFields: (fields: Partial<FoodAlcoholData>) => void;
};

function FoodAlcohol({
  food,
  alcohol,
  place,
  seventhAgreement,
  updateFields,
}: FoodAlcoholProps) {
  return (
    <div className='flex flex-col'>
      <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
        <Question
          title='Does your event include food & beverages?'
          description='Please note that if your event is at a venue where food and beverages can be purchased by attendees (eg Boston Pizza), that would be included under an event including food/beverages. Campus Food and Beverage Policy: https://vpof.mcmaster.ca/app/uploads/2021/04/Campus-Food-Beverage-Policy.pdf'
          required={true}
        >
          <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
            <input
              required
              className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
              type='radio'
              name='food'
              value='foodYes'
              checked={food === true}
              onChange={() => updateFields({ food: true })}
            />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
              Yes, and I've read, acknowledge I understand the McMaster Campus
              Food and Beverage Policy, and my event follows these guidelines
            </div>
          </label>
          <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
            <input
              className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
              type='radio'
              name='food'
              value='foodNo'
              checked={food === false}
              onChange={() => updateFields({ food: false })}
            />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
              No
            </div>
          </label>
        </Question>

        <Question
          title='Is alcohol being served at this event?'
          required={true}
        >
          <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
            <input
              required
              className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
              type='radio'
              name='alcohol'
              value='alcoholYes'
              checked={alcohol === true}
              onChange={() => updateFields({ alcohol: true })}
            />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
              Yes
            </div>
          </label>
          <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
            <input
              className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
              type='radio'
              name='alcohol'
              value='alcoholNo'
              checked={alcohol === false}
              onChange={() => updateFields({ alcohol: false })}
            />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
              No
            </div>
          </label>
        </Question>

        <Question
          title='Is the event being held at TwelveEighty, The Pheonix, Paradaise Catering, or Ron Joyce Centre'
          required={true}
        >
          <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
            <input
              required
              className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
              type='radio'
              name='place'
              value='placeYes'
              checked={place === true}
              onChange={() => updateFields({ place: true })}
            />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
              Yes
            </div>
          </label>
          <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
            <input
              className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
              type='radio'
              name='place'
              value='placeNo'
              checked={place === false}
              onChange={() => updateFields({ place: false })}
            />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
              No
            </div>
          </label>
        </Question>

        <Question
          title='Required:'
          description='New: $10M commercial general liability is now required when buses are used for events. One non-drinking McMaster student volunteer must be designated for every 25 participants. Alcohol Waivers are required for all alcohol-related Events. Event Security must be present if the number of participants for an off-campus event involving alcohol is expected to exceed 100. Hamilton Police Services must be notified if the number of participants for an off-campus event, not being held at a bar or nightclub and involving alcohol is expected to exceed 300. A certificate of Insurance is required for all off-campus events involving alcohol. '
          required={true}
        >
          <label className='flex flex-row mt-2 h-fit justify-items-start content-center'>
            <input
              required
              className='mr-2 w-6 h-6 opacity-50 bg-[#ececec] rounded-[10px] border-2 border-black/40'
              type='checkbox'
              checked={seventhAgreement}
              onChange={(e) =>
                updateFields({ seventhAgreement: e.target.checked })
              }
            />
            <div className="text-[#4b4b4b] h-fit text-lg font-medium font-['Inter']">
              I have read and agree
            </div>
          </label>
        </Question>
      </div>
    </div>
  );
}

export default FoodAlcohol;
