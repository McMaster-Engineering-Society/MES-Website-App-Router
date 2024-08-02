// Type declaration for a page section in conferences.
/**
 * * CFESESSCO contains a link to a conference's CFES or ESSCO page. Exclusive to external conferences.
 */
export type ConferencePageSectionType = {
  title: string;
  location: string;
  dates: string;
  delegates: string;
  CFESESSCO?: string;
  links?: object;
  body: string;
};

export const ExternalConferences: ConferencePageSectionType[] = [
  {
    title: "ESSCO President's Meeting (PM)",
    location: 'Conestoga College (Waterloo Campus)',
    dates: 'June 7th - 9th, 2024',
    delegates: 'VPX and President',
    CFESESSCO: 'https://www.essco.ca/pm/',
    body: "The ESSCO President's Meeting cultivates an environment for VP Externals and Presidents to create a personal connection with each other and plan ahead for the coming year. The meeting aims to enrich the provincial community by facilitating a space for information sharing between our member schools.",
  },
  {
    title: "CFES President's Meeting (PM)",
    location: 'McMaster University',
    dates: 'September 20th - 23rd, 2024',
    delegates: 'VPX and President',
    CFESESSCO: 'https://cfes.ca/pm/',
    body: 'The CFES President’s meeting is an annual, intimate, retreat-style, student-run gathering between the CFES Board of Directors, the National Executive, and members. Every Fall, this meeting brings together engineering student leaders from across Canada to discuss, engage, and share ideas and experiences. This meeting serves as an introduction to the CFES and a chance to deeply understand your role as a member and stakeholder of the organization, a chance to network with fellow engineering societies, informational sessions, and preparation for the CELC.',
  },
  {
    title: 'Professional Engineers of Ontario - Student Conference (PEO-SC)',
    location: 'University of Waterloo',
    dates: 'October 4th - 6th, 2024',
    delegates: '2 Students',
    CFESESSCO: 'https://www.essco.ca/peo-sc/',
    body: 'The Professional Engineers of Ontario Student Conference is primarily focused towards preparing students in their final year of schooling for taking on the engineering workforce, starting to work towards their P-Eng and all the opportunities that are available to them.',
  },
  {
    title: 'First Year Integration Conference (FYIC)',
    location: 'University of Toronto',
    dates: 'November 1st - 3rd, 2024',
    delegates: 'VPX and 4 First Year Students',
    CFESESSCO: 'https://www.essco.ca/fyic/',
    body: 'The First Year Integration Conference is intended to help integrate engineering students into their first year of university. The Conference is entirely organized and run by engineering students and is attended by over 100 first years from 16 universities across Ontario.',
  },
  {
    title: 'Conference on Diversity in Engineering (CDE)',
    location: 'Western University',
    dates: 'November 22nd - 25th, 2024',
    delegates: '3 Students',
    CFESESSCO: 'https://cfes.ca/cde/',
    body: 'The Conference on Diversity in Engineering (CDE), formerly known as the National Conference on Women in Engineering (NCWIE) is an annual student-run conference of the CFES. CDE aims to develop knowledge surrounding the variety of individuals, cultures and perspectives found within engineering communities. CDE further aims to instill a notion of positivity and togetherness in creating spaces that value the differences between groups of engineering students and professionals.',
  },
  {
    title: 'Canadian Engineering Leadership Conference (CELC)',
    location: 'University of New Brunswick – Fredericton',
    dates: 'January 1st - 7th, 2025',
    delegates: 'VPX, Exec Member, and 4 Students',
    CFESESSCO: 'https://cfes.ca/celc/',
    body: 'The Canadian Engineering Leadership Conference (CELC) is the CFES’ largest annual student-run conference of the year at that year’s respective host school and is the perfect way for engineering students from across the country to ring in the new year! CELC has two primary objectives. The first is that CELC is the annual general meeting of the CFES and the second is that it provides a platform from which students can collaborate with and learn from our industry partners, sponsors and fellow students. CELC also hosts the platform in which the new CFES executive team members are elected.',
  },
  {
    title: 'Ontario Engineering Competition (OEC)',
    location: 'McMaster University',
    dates: 'January 24th - 26th, 2025',
    delegates: 'All MEC Winners',
    CFESESSCO: 'https://www.essco.ca/oec/',
    body: 'The Ontario Engineering Competition is the culmination of the winners from local university based engineering competitions across Ontario. The Ontario Engineering Competition covers a wide array of topics related to the engineering discipline and other important skills.',
  },
  {
    title: 'Conference on Advocacy and Leadership in Engineering (CALE)',
    location: 'Toronto Metropolitan University',
    dates: 'February 2025',
    delegates: 'VPX and 4 Students',
    CFESESSCO: 'https://www.essco.ca/agm/',
    body: 'ESSCOs Conference on Advocacy & Leadership in Engineering is centered around promoting leadership from attendees as well as summing up the work of the current ESSCO teams term and electing those who will lead ESSCO in the next term. Attendees can expect to take part in elections, meet student leaders from across the province and find themselves inspired to continue seeking leadership opportunities in their member schools. This conference also includes the Annual General Meeting (AGM) for ESSCO.',
  },
  {
    title: 'Conference on Sustainability in Engineering (CSE)',
    location: 'University of Guelph',
    dates: 'February 20th - 23rd, 2025',
    delegates: '4 Students',
    CFESESSCO: 'https://cfes.ca/cse/',
    body: 'The Conference on Sustainability in Engineering (CSE) is an annual student-run conference at that year’s respective host school and is the CFES’ newest conference. CSE aims to raise awareness about issues in sustainability and environmental engineering, and encourage students to discuss and design solutions to counter them.',
  },
  {
    title: 'Canadian Engineering Competition (CEC)',
    location: 'Dalhousie University – Sexton',
    dates: 'March 14th - 17th, 2025',
    delegates: 'All OEC Winners',
    CFESESSCO: 'https://cfes.ca/cec/',
    body: 'Each year, the Canadian Engineering Competition (CEC) brings together over 200 of the most innovative and creative engineering undergraduate students from across the nation to compete against each other in eight categories (Junior Design, Senior Design, Innovative Design, Engineering Consulting, Parliamentary Debate, Re-engineering, Programming, and Engineering Communication). Each competition category at CEC challenges its participants to expand their frame of reference and to identify solutions to problems experienced by our profession.',
  },
];

export const InternalConferences: ConferencePageSectionType[] = [
  // {
  //   title: 'First Year experiential Conference (FYEC)',
  //   location: 'McMaster University',
  //   dates: 'September, 2022',
  //   body: 'The First Year Experiential Conference is a conference designed to introduce students in the Faculty of Engineering at McMaster to the many amazing opportunities and resources available to them. Sessions include those focused on Academic Advising, ECCS, CFES, MSU, ESSCO, MES clubs and teams, undergraduate research, entrepreneurship, and mental wellness.',
  // },
  {
    title: 'McMaster Engineering Competition (MEC)',
    location: 'McMaster University',
    dates: 'November 16th - 17th, 2024',
    delegates: 'Unlimited McMaster Students',
    links: {
      Instagram: 'https://www.instagram.com/macengcomp/',
      Website: 'https://macengcomp.weebly.com/',
    },
    body: 'MEC is an annual student-run competition organized by the MES in partnership with the McMaster Faculty of Engineering. Every year, MEC brings together the best and brightest engineering students across all years and disciplines. MEC is an excellent opportunity for students to gain practical experience in all facets of engineering, including both technical and transferable skills. This competition is meant to encourage students to be resourceful and creative in high-pressure situations in order to solve complex problems.',
  },
  // {
  //   title: 'Leadership Development Conference (LDC)',
  //   location: 'McMaster Univserity',
  //   dates: 'February - March, 2023',
  //   body: 'The Leadership Development Conference focuses on the development of professional skills to prepare students to take on the engineering workforce. This event will feature student panels, guest speakers and networking opportunities. The skills gained from this conference can help to boost your confidence and professional attitude when applying for co-op and jobs after graduation!',
  // },
];
