import { cn } from '@/lib/utils';

import NextImage from '@/components/NextImage';

import { OfficeHour } from '@/constant/council-resources/officeHours';

type OfficeHourProfileProps = {
  officeHour: OfficeHour;
};

const OfficeHourProfile = ({ officeHour }: OfficeHourProfileProps) => {
  return (
    <div className='shadow-primary-400 flex flex-row items-center overflow-hidden rounded-full bg-white shadow-md'>
      <div
        id='profile-picture'
        className='border-primary-800 m-1 h-fit min-w-fit overflow-hidden rounded-full border-[5px]'
      >
        <NextImage
          src={officeHour.image}
          alt={`${officeHour.name}'s picture`}
          width={125}
          height={125}
          className='h-[75px] w-[75px] lg:h-[125px] lg:w-[125px]'
        />
      </div>
      <div
        id='details'
        className='ml-2 flex h-full flex-col justify-center lg:justify-between py-2'
      >
        <div id='heading' className='flex flex-col'>
          <h3
            className={cn([
              'pr-12 text-xl md:max-lg:text-lg uppercase text-gray-800',
            ])}
          >
            {officeHour.name}
          </h3>
          <div
            className={cn([
              'text-primary-700 text-sm lg:text-base font-bold uppercase',
            ])}
          >
            {officeHour.position}
          </div>
        </div>
        <div id='office-hours' className='flex flex-col'>
          <div className='text-sm font-bold text-black'>Office Hours:</div>
          {officeHour.officeHours.map((timing) => (
            <div
              key={timing.day}
              className='text-xs lg:text-sm text-black'
            >{`${timing.day} @ ${timing.time}`}</div>
          ))}
          {officeHour.officeHours.length === 0 && (
            <div className='text-sm text-black'>By appointment only</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfficeHourProfile;
