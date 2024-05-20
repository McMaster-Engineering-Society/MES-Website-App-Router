type FormSection = {
  title: string;
  forms: {
    title: string;
    link: string;
  }[];
  description: string;
  contactEmail: string;
};

export const councilForms: FormSection[] = [
  {
    title: 'Requesting Advertising or Web Update?',
    forms: [
      {
        title: 'Ad Request Form',
        link: 'https://forms.gle/whC5zyWGeFjrmoK18',
      },
      {
        title: 'Website Update Form',
        link: 'https://forms.gle/DyEaiSUYxLvT7j6P7',
      },
    ],
    description:
      'Use these forms if you would like to request advertising on our website and/or social media, or if you would like to request a new page or update to an existing page on this website.',
    contactEmail: 'vp.communications@macengsociety.ca',
  },
  {
    title: 'Requesting Reimbursements?',
    forms: [
      {
        title: 'Expense Report: PDF',
        link: '/pdfs/council-resources/expense-report.pdf',
      },
      {
        title: 'Expense Report: Google Form',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSeG-pjzdVEXAuYhoB2scI93P_Oafy0vEQXsZhWzVT5HpyhLfg/viewform',
      },
    ],
    description:
      'To request reimbursements for MES-related expenses, please fill out the PDF and submit it via the Google Form.',
    contactEmail: 'vp.finance@macengsociety.ca',
  },
  {
    title: 'Requesting EOHSS Approval?',
    forms: [
      {
        title: 'In-Person Event UHS/EOHSS Form',
        link: 'https://forms.gle/34xbLbiXVQtLA2eL9',
      },
    ],
    description:
      'Use the appropriate form to request EOHSS approval for your event. This form must be completed for event health and safety Approval.',
    contactEmail: 'vp.studentlife@macengsociety.ca',
  },
  {
    title: 'Equity, Diversity & Inclusion Training',
    forms: [
      {
        title: 'EDI Training Booking Form',
        link: 'https://calendly.com/equityofficer',
      },
    ],
    description:
      'Use this link to book a training session for your club/committee.',
    contactEmail: 'equityofficer@macengsociety.ca',
  },
];
