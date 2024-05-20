type DocumentSection = {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
};

export const documents: DocumentSection[] = [
  {
    heading: 'MES Policy Manual',
    description:
      'The MES Policy Manual dictates the processes and procedures that the MES and its members must follow. If you’re looking for how to get reimbursed, how to become an MES Affiliate or what the roles of each MES member are, here is where you’ll find it!',
    buttonLabel: 'Policy Manual',
    buttonLink: '/pdfs/governing-documents/policy-manual2023.pdf',
  },
  {
    heading: 'MES Constitution',
    description:
      'The Constitution defines the responsibilities of the MES to you, its members, and provides the mission statement that guides day-to-day MES operations and decisions. To see what the MES is all about and what we strive to do for you, take a look!',
    buttonLabel: 'Constitution',
    buttonLink: '/pdfs/governing-documents/constitution.pdf',
  },
  {
    heading: '2020-2021 Action Plan',
    description:
      'As part of the MES Long Term Plan the Executive is required to outline how their plans for the year will be impacting the pillars and strategic pathways to achieve the MES’s vision.',
    buttonLabel: 'Action Plan',
    buttonLink: '/pdfs/governing-documents/action-plan.pdf',
  },
  {
    heading: 'MES Bylaws',
    description:
      'The Bylaws were developed in 2020 in an effort to solidify the activities and policies of the MES, separate from the Policy Manual. The policies documented here are intended to accompany the Constitution and Policy Manual of the McMaster Engineering Society and are binding terms of reference.',
    buttonLabel: 'Bylaws',
    buttonLink: '/pdfs/governing-documents/bylaws2023.pdf',
  },
  {
    heading: 'MES Long Term Plan',
    description:
      'This document is updated yearly by the MES President, in cooperation with the Executive. It defines the long-term vision of the MES through pillars of growth and service that we, as an organisation, aim to emulate.',
    buttonLabel: 'Long Term Plan',
    buttonLink: '/pdfs/governing-documents/long-term-plan.pdf',
  },
];
