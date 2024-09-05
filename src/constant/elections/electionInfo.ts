import { CandidateInfo } from '@/constant/elections/candidates';

export type InfoSession = {
  dateTimeStart: Date;
  dateTimeEnd: Date;
  location: string;
};

type ElectionInfo = {
  nominationsOpen: Date;
  nominationsClose: Date;
  campaignsOpen: Date;
  campaignsClose: Date;
  votingOpen: Date;
  votingClose: Date;
  infoSessions?: InfoSession[];
  positions: {
    title: string;
    nominationForm: string;
    nomineePackageSubmission: string;
    eligibilityRequirements?: string;
    candidates?: CandidateInfo[];
  }[];
  previousWinners?: {
    name: string;
    position: string;
    picture: string;
  }[];
};

export const electionInfo: ElectionInfo = {
  // Date format is YYYY-MM-DDTHH:MM:SS, where:
  //    YYYY is the four-digit year
  //    MM is the two-digit month (01-12)
  //    DD is the two-digit day (01-31)
  //    T is the literal character T
  //    HH is the two-digit hour (00-23)
  //    MM is the two-digit minute (00-59)
  //    SS is the two-digit second (00-59)
  nominationsOpen: new Date('2024-09-04T00:00:00'),
  nominationsClose: new Date('2024-09-17T23:59:59'),
  campaignsOpen: new Date('2024-09-18T00:00:00'),
  campaignsClose: new Date('2024-09-24T23:59:59'),
  votingOpen: new Date('2024-09-25T09:00:00'),
  votingClose: new Date('2024-09-27T23:59:59'),
  infoSessions: [
    // {
    //   dateTimeStart: new Date('2024-02-07T17:30:00'),
    //   dateTimeEnd: new Date('2024-02-07T19:00:00'),
    //   location: 'GHC H203',
    // },
    // ...
  ],
  positions: [
    {
      title: 'First Year Representative',
      nominationForm: '/pdfs/elections/first_year_rep_nomination_form.pdf',
      nomineePackageSubmission:
        'https://docs.google.com/forms/d/e/1FAIpQLSc6BLq0q0iAKmcpxcYGP4QVD3SPCW4epEd8sxgVoqyG0fdajA/viewform?usp=sf_link',
      //   candidates: vpStudentLife,
      eligibilityRequirements: 'Candidates must be in Level 1 to apply',
    },
  ],
  previousWinners: [
    // {
    //   name: 'John Doe',
    //   position: 'Eng 1 Rep',
    //   picture: '/images/elections/john-doe.jpg',
    // },
    // ...
  ],
};
