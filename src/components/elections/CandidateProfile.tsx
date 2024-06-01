import Socials from '@/components/elections/CandidateSocials';
import NextImage from '@/components/NextImage';

import CandidateDetails from '@/types/candidateDetails';
type CandidateProfileProps = {
  profile: CandidateDetails;
};

const textWithBreaks = (text: string) => {
  return text.split('\n').map((paragraph: string, index: number) => (
    <div key={index}>
      {paragraph}
      <br />
    </div>
  ));
};

const ProfileImage = (profile: CandidateDetails) => {
  return (
    <div id='profile-image' className='max-w-fit'>
      <NextImage
        src={profile.picture}
        alt={`${profile.name}'s profile picture`}
        width={162}
        height={162}
        className='border-primary-700 aspect-square overflow-hidden rounded-lg border-4'
      />
    </div>
  );
};

const Title = (profile: CandidateDetails) => {
  return (
    <div id='title' className='flex flex-1 flex-col'>
      <div className='flex flex-row items-center gap-x-4'>
        <h2 id='position' className='uppercase'>
          {profile.name}
        </h2>
        <Socials {...profile} />
      </div>
      <div id='name-and-program' className='flex flex-col'>
        <h4
          id='program'
          className='text-md flex flex-col uppercase lg:flex-row'
        >
          <div className='text-gray-700'>{profile.programLevel}</div>
        </h4>
        <h4 id='name' className='text-md flex flex-col uppercase lg:flex-row'>
          <div className='text-gray-500'>Running for </div>
          <div className='text-primary-700 md:ml-2'>
            {profile.positionSeeking}
          </div>
        </h4>
      </div>
    </div>
  );
};

const Introduction = (profile: CandidateDetails) => {
  return (
    <div id='introduction' className='mt-2 text-sm'>
      {textWithBreaks(profile.introduction)}
    </div>
  );
};

const MoreDetails = (profile: CandidateDetails) => {
  return (
    <div id='more-details' className='mt-2 text-sm'>
      <div className='text-lg font-bold'>Platform</div>
      {textWithBreaks(profile.platform)}
      <br />
      <br />
      <div className='text-lg font-bold'>More About Me</div>
      {textWithBreaks(profile.anythingElseFunFact)}
    </div>
  );
};

const CompactCandidateProfile = ({ profile }: CandidateProfileProps) => {
  return (
    <div id='details' className='flex flex-col gap-y-4 rounded-lg bg-white p-6'>
      <ProfileImage {...profile} />
      <div>
        <div id='header' className='flex flex-row'>
          <Title {...profile} />
        </div>
        <Introduction {...profile} />
      </div>
      <MoreDetails {...profile} />
    </div>
  );
};

const FullCandidateProfile = ({ profile }: CandidateProfileProps) => {
  return (
    <div className='flex flex-col rounded-lg bg-white p-6'>
      <div className='mb-4 flex flex-row items-center'>
        <ProfileImage {...profile} />
        <div id='details' className='flex w-full flex-col pl-6'>
          <div id='header' className='flex flex-row'>
            <Title {...profile} />
          </div>
          <Introduction {...profile} />
        </div>
      </div>
      <MoreDetails {...profile} />
    </div>
  );
};

const CandidateProfile = ({ profile }: CandidateProfileProps) => {
  return (
    // Two different layouts for mobile and desktop, shown or hidden depending on screen size
    <div className='flex flex-col'>
      <div className='block md:hidden'>
        <CompactCandidateProfile profile={profile} />
      </div>
      <div className='hidden md:block'>
        <FullCandidateProfile profile={profile} />
      </div>
    </div>
  );
};

export default CandidateProfile;
