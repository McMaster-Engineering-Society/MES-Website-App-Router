import NextImage from '@/components/NextImage';

import CoordinatorDetails from '@/types/coordinatorDetails';

const AppointedCoordinatorProfile = ({
  name,
  role,
  image,
}: CoordinatorDetails) => {
  return (
    <div className=' mb-8 mt-4 items-center'>
      <div className='items-center px-14'>
        <NextImage
          src={image}
          alt={`${name}'s profile picture`}
          width={300}
          height={300}
          className='overflow-hidden rounded-full border-4 border-white'
        />
      </div>
      <div className='mt-4'>
        <div className=' px-6 text-center text-2xl font-bold uppercase italic text-black'>
          {name}
        </div>
        <div className=' px-6 text-center text-2xl font-bold uppercase italic text-red-800'>
          {role}
        </div>
      </div>
    </div>
  );
};

export default AppointedCoordinatorProfile;
