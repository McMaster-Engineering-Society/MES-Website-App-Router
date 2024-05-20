type CandidateDetails = {
  name: string;
  positionSeeking: string;
  picture: string;
  introduction: string;
  platform: string;
  programLevel?: string;
  anythingElseFunFact: string;
  socials?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
    email?: string;
    campaignPage?: string;
  };
};

export default CandidateDetails;
