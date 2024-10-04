import {
  btechRep,
  CandidateInfo,
  compSciRep,
  eng1MESLiaison,
  eventsTeamLeader,
  firstYearCouncilChair,
  iBioMedRep,
  outreachTeamLeader,
} from '@/constant/elections/candidates';

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
      title: 'Engineering 1 MES Liaison',
      nominationForm: '/pdfs/elections/first_year_rep_nomination_form.pdf',
      nomineePackageSubmission:
        'https://docs.google.com/forms/d/e/1FAIpQLSc6BLq0q0iAKmcpxcYGP4QVD3SPCW4epEd8sxgVoqyG0fdajA/viewform?usp=sf_link',
      candidates: eng1MESLiaison,
      eligibilityRequirements: 'Candidates must be in Level 1 to apply',
    },
    {
      title: 'iBioMed Representative',
      nominationForm: '/pdfs/elections/first_year_rep_nomination_form.pdf',
      nomineePackageSubmission:
        'https://docs.google.com/forms/d/e/1FAIpQLSc6BLq0q0iAKmcpxcYGP4QVD3SPCW4epEd8sxgVoqyG0fdajA/viewform?usp=sf_link',
      candidates: iBioMedRep,
      eligibilityRequirements: 'Candidates must be in Level 1 to apply',
    },
    {
      title: 'Computer Science Representative',
      nominationForm: '/pdfs/elections/first_year_rep_nomination_form.pdf',
      nomineePackageSubmission:
        'https://docs.google.com/forms/d/e/1FAIpQLSc6BLq0q0iAKmcpxcYGP4QVD3SPCW4epEd8sxgVoqyG0fdajA/viewform?usp=sf_link',
      candidates: compSciRep,
      eligibilityRequirements: 'Candidates must be in Level 1 to apply',
    },
    {
      title: 'B.Tech Representative',
      nominationForm: '/pdfs/elections/first_year_rep_nomination_form.pdf',
      nomineePackageSubmission:
        'https://docs.google.com/forms/d/e/1FAIpQLSc6BLq0q0iAKmcpxcYGP4QVD3SPCW4epEd8sxgVoqyG0fdajA/viewform?usp=sf_link',
      candidates: btechRep,
      eligibilityRequirements: 'Candidates must be in Level 1 to apply',
    },
    {
      title: 'First Year Council Chair',
      nominationForm: '/pdfs/elections/first_year_rep_nomination_form.pdf',
      nomineePackageSubmission:
        'https://docs.google.com/forms/d/e/1FAIpQLSc6BLq0q0iAKmcpxcYGP4QVD3SPCW4epEd8sxgVoqyG0fdajA/viewform?usp=sf_link',
      candidates: firstYearCouncilChair,
      eligibilityRequirements: 'Candidates must be in Level 1 to apply',
    },
    {
      title: 'Outreach Team Leader',
      nominationForm: '/pdfs/elections/first_year_rep_nomination_form.pdf',
      nomineePackageSubmission:
        'https://docs.google.com/forms/d/e/1FAIpQLSc6BLq0q0iAKmcpxcYGP4QVD3SPCW4epEd8sxgVoqyG0fdajA/viewform?usp=sf_link',
      candidates: outreachTeamLeader,
      eligibilityRequirements: 'Candidates must be in Level 1 to apply',
    },
    {
      title: 'Events Team Leader',
      nominationForm: '/pdfs/elections/first_year_rep_nomination_form.pdf',
      nomineePackageSubmission:
        'https://docs.google.com/forms/d/e/1FAIpQLSc6BLq0q0iAKmcpxcYGP4QVD3SPCW4epEd8sxgVoqyG0fdajA/viewform?usp=sf_link',
      candidates: eventsTeamLeader,
      eligibilityRequirements: 'Candidates must be in Level 1 to apply',
    },
  ],
  previousWinners: [
    // {
    //   position: 'Eng 1 Representative',
    //   name: 'John Doe',
    //   picture: '/images/elections/candidates/john-doe.jpg',
    // },
    // ...
    {
      position: 'iBioMed Representative',
      name: 'Agnes Kung',
      picture: '/images/elections/candidates/agnes-kung.jpg',
    },
    {
      position: 'Computer Science Representative',
      name: 'Grady Rueffer',
      picture: '/images/elections/candidates/grady-rueffer.png',
    },
    {
      position: 'B.Tech Representative',
      name: 'Faith Law',
      picture: '/images/elections/candidates/faith-law.jpeg',
    },
    {
      position: 'Outreach Team Leader',
      name: 'Nicolas Tran',
      picture: '/images/elections/candidates/nicolas-tran.jpg',
    },
    {
      position: 'Events Team Leader',
      name: 'Mitchell Fong',
      picture: '/images/elections/candidates/mitchell-fong.jpeg',
    },
    {
      position: 'First Year Council Chair',
      name: `Rian Sen Majumder`,
      picture: '/images/elections/candidates/rian-senmajumder.jpg',
    },
    {
      position: 'Engineering 1 MES Liaison',
      name: `Ifeyinwa Mbielu`,
      picture: '/images/elections/candidates/ifeyinwa-mbielu.jpeg',
    },
  ],
};
