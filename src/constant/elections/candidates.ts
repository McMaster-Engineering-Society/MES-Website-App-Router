import CandidateDetails from '@/types/candidateDetails';

export type CandidateInfo = Omit<CandidateDetails, 'positionSeeking'>;

export const vpStudentLife: CandidateInfo[] = [
  {
    name: 'Pedro Cordeiro',
    picture: '/images/elections/candidates/pedro-cordeiro.jpg',
    programLevel: 'Engineering Physics, Level 4',
    introduction: `Howdy. My name is Pedro. I love shits and giggles and will do anything for the bit. The bit being doing swell, incredulous, even flabberghasting moves in the name of the McMaster Engineering community. I have served as VP Pranks and Culture Coordinator for the MES so boy do I know the ropes. I cannot wait to take you to the beautiful and sexy world of all your wildest dreams coming true`,
    platform: `Greater emphasis on funny and overall swell events and traditions in McMaster Engineering. As an exec I would put my voice into advocating for the average student. Personally, I would like to make the MES and the community as inclusive as possible while maintaining the cultish and niche aspects of the engineering society. I will be using my expertise to submit the UHS as fast as humanly possible, while maintaining effective communication with the clubs and individuals putting them in. Also leading fan favorite events, while bringing in more shits and giggles, also using the significant VPSL budget efficiently and for the people. For example, rallying for water balloon fights during frosh week (if it all goes well and global warming keeps going stronger than ever) and other shenanigans.`,
    anythingElseFunFact: `Above is a picture of my child. I love him. I found him in abandoned in front of my door step. I now raise him as my own.`,
  },
];

// export const chemRepCandidates: CandidateInfo[] = [];

// export const managementRepCandidates: CandidateInfo[] = [];
