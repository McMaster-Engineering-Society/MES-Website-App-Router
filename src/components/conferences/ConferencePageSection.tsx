import { Divider } from '@nextui-org/react';

import PageSection from '@/components/PageSection';

import { ConferencePageSectionType } from '@/constant/conferences';

export const ConferencePageSection: React.FC<ConferencePageSectionType> = ({
  title,
  location,
  dates,
  delegates,
  body,
}) => {
  return (
    <PageSection variant='white'>
      {/* <span className='text-xl font-bold uppercase'>{title}</span> */}
      <div className='conference-details mb-4 flex flex-col'>
        <span className='text-xl font-bold'>{title}</span>
        <Divider className='my-2' />
        <span>
          <b>Location:</b> {location}
        </span>
        <span>
          <b>Dates:</b> {dates}
        </span>
        <span>
          <b>Delegates:</b> {delegates}
        </span>
      </div>
      <span>{body}</span>
    </PageSection>
  );
};
