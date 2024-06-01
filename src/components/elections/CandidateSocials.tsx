'use client';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

import ButtonLink from '@/components/links/ButtonLink';

import CandidateDetails from '@/types/candidateDetails';

const Socials = (profile: CandidateDetails) => {
  if (!profile.socials) {
    return null;
  }

  return (
    <div id='socials' className='flex flex-row gap-x-2'>
      {profile.socials &&
        ((profile.socials.facebook && (
          <a href={profile.socials.facebook} target='_blank'>
            <FacebookOutlinedIcon />
          </a>
        )) ||
          (profile.socials.instagram && (
            <a href={profile.socials.instagram} target='_blank'>
              <InstagramIcon />
            </a>
          )) ||
          (profile.socials.linkedin && (
            <a href={profile.socials.linkedin} target='_blank'>
              <LinkedInIcon />
            </a>
          )) ||
          (profile.socials.twitter && (
            <a href={profile.socials.twitter} target='_blank'>
              <TwitterIcon />
            </a>
          )) ||
          (profile.socials.email && (
            <a href={`mailto:${profile.socials.email}`} target='_blank'>
              <EmailOutlinedIcon />
            </a>
          )) ||
          (profile.socials.website && (
            <a href={profile.socials.website} target='_blank'>
              <InsertLinkOutlinedIcon />
            </a>
          )) ||
          (profile.socials.campaignPage && (
            <ButtonLink
              href={profile.socials.campaignPage}
              target='_blank'
              size='sm'
            >
              Campaign Page
            </ButtonLink>
          )))}
    </div>
  );
};

export default Socials;
