import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';

import CouncilDetails from '@/types/CouncilDetails';

type CouncilProfileProps = {
  profile: CouncilDetails;
};

const romanNumeral = (num: number) => {
  switch (num) {
    case 1:
      return ', Level I';
    case 2:
      return ', Level II';
    case 3:
      return ', Level III';
    case 4:
      return ', Level IV';
    case 5:
      return ', Level V';
    case 6:
      return ', Level VI';
    default:
      return '';
  }
};

const ProfileImage = (profile: CouncilDetails) => {
  return (
    <div id='profile-image' className='max-w-fit'>
      <NextImage
        src={profile.image}
        alt={`${profile.firstName} ${profile.lastName}'s profile picture`}
        width={162}
        height={162}
        className='border-primary-700 overflow-hidden rounded-lg border-4'
      />
    </div>
  );
};

const Title = (profile: CouncilDetails) => {
  return (
    <div id='title' className='flex flex-1 flex-col'>
      <h2 id='position' className='uppercase'>
        {profile.position}
      </h2>
      <div id='name-and-program' className='flex flex-row items-center'>
        <h4 id='name' className='text-md flex flex-col uppercase lg:flex-row'>
          <div className='text-primary-700 min-w-max'>
            {profile.firstName} {profile.lastName}
          </div>
          <div className='flex flex-row lg:ml-2'>
            <div className='mr-2 hidden lg:block'>|</div>
            {/* Two different layouts for mobile and desktop, shown or hidden depending on screen size */}
            <div className='flex flex-col'>
              {/* Mobile View */}
              <div className='flex-row md:hidden'>
                {profile.program.length < 28 || profile.program.length > 33 ? (
                  <div>
                    <span className='max-w-[15rem] text-sm'>
                      {profile.program}
                    </span>
                    <span className='min-w-max text-sm'>
                      {romanNumeral(profile.level)}
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className='max-w-[15rem] text-sm'>
                      {profile.program}
                    </span>
                    <div />
                    <span className='min-w-max text-sm'>
                      {romanNumeral(profile.level)}
                    </span>
                  </div>
                )}
              </div>
              {/* Desktop View */}
              <div className='hidden md:block'>
                {profile.program.length > 33 ? (
                  <div>
                    <span className='max-w-[27rem] pb-1 pt-0 text-sm'>
                      {profile.program}
                    </span>
                    <span className='min-w-max pb-1 pt-0 text-sm'>
                      {romanNumeral(profile.level)}
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className='max-w-[27rem] truncate'>
                      {profile.program}
                    </span>
                    <span className='min-w-max '>
                      {romanNumeral(profile.level)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </h4>
      </div>
    </div>
  );
};

const SendEmailButton = (profile: CouncilDetails) => {
  return (
    <div id='send-email'>
      <ButtonLink
        href={`mailto:${profile.email}`}
        className='w-48 justify-center uppercase italic'
      >
        Email {profile.firstName}
      </ButtonLink>
    </div>
  );
};

const Description = (profile: CouncilDetails) => {
  return (
    <div id='description' className='mt-2 text-sm'>
      {profile.description}
    </div>
  );
};

const CompactCouncilProfile = ({ profile }: CouncilProfileProps) => {
  return (
    <div className='flex flex-row'>
      <div
        id='details'
        className='flex flex-col gap-y-4 rounded-lg bg-white p-6'
      >
        <ProfileImage {...profile} />
        <div>
          <Title {...profile} />
          <Description {...profile} />
        </div>
        <SendEmailButton {...profile} />
      </div>
    </div>
  );
};

const FullCouncilProfile = ({ profile }: CouncilProfileProps) => {
  return (
    <div className='flex flex-row items-center rounded-lg bg-white p-6'>
      <ProfileImage {...profile} />
      <div id='details' className='flex w-full flex-col pl-6'>
        <div id='header' className='flex flex-row'>
          <Title {...profile} />
          <SendEmailButton {...profile} />
        </div>
        <Description {...profile} />
      </div>
    </div>
  );
};

const CouncilProfile = ({ profile }: CouncilProfileProps) => {
  return (
    // Two different layouts for mobile and desktop, shown or hidden depending on screen size
    <div className='flex flex-col'>
      <div className='block md:hidden'>
        <CompactCouncilProfile profile={profile} />
      </div>
      <div className='hidden md:block'>
        <FullCouncilProfile profile={profile} />
      </div>
    </div>
  );
};

export default CouncilProfile;
