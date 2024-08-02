// Type declaration for a page section in conferences.
export type ConferencePageSectionType = {
  title: string;
  location: string;
  dates: string;
  delegates: string;
  body: string;
};

export const ExternalConferences: ConferencePageSectionType[] = [
  {
    title: "President's Meeting (PM)",
    location: 'Conestoga College (Waterloo Campus)',
    dates: 'June 7th - 9th, 2024',
    delegates: 'VPX and President',
    body: "The ESSCO President's Meeting cultivates an environment for VP Externals and Presidents to create a personal connection with each other and plan ahead for the coming year. The meeting aims to enrich the provincial community by facilitating a space for information sharing between our member schools.",
  },
  {
    title: "President's Meeting (PM)",
    location: 'McMaster University',
    dates: 'September 20th - 22nd, 2024',
    delegates: 'VPX and President',
    body: 'The CFES President’s meeting is an intimate retreat-style gathering between the CFES Board of Directors, the National Executive, and members. Every Fall, this meeting brings together engineering student leaders from across Canada to discuss, engage, and share ideas and experiences. This meeting serves as an introduction to the CFES and a chance to deeply understand your role as a member and stakeholder of the organization, a chance to network with fellow engineering societies, informational sessions, and preparation for CELC.',
  },
  {
    title: 'Professional Engineers of Ontario - Student Conference (PEO-SC)',
    location: 'University of Waterloo',
    dates: 'October 4th - 6th, 2024',
    delegates: '2 Students',
    body: 'The Professional Engineers of Ontario Student Conference is primarily focused towards preparing students in their final year of schooling for taking on the engineering workforce, starting to work towards their P-Eng and all the opportunities that are available to them.',
  },
  {
    title: 'First Year Integration Conference (FYIC)',
    location: 'University of Toronto',
    dates: 'November 1st - 3rd, 2024',
    delegates: 'VPX and 4 First Year Students',
    body: 'The First Year Integration Conference is intended to help integrate engineering students into their first year of university. The Conference is entirely organized and run by engineering students and is attended by over 100 first years from 16 universities across Ontario.',
  },
  {
    title: 'Conference on Diversity in Engineering (CDE)',
    location: 'Western University',
    dates: 'November 15th - 18th, 2024',
    delegates: '3 Students',
    body: 'The CFES is proud to offer the Conference on Diversity in Engineering as a valuable service to its members. Previously known as the National Conference on Women in Engineering, CDE aims to develop knowledge surrounding the variety of individuals, cultures and perspectives found within engineering communities. CDE further aims to instill a notion of positivity and togetherness in creating spaces that value the differences between groups of engineering students and professionals.',
  },
  {
    title: 'Canadian Engineering Leadership Conference (CELC)',
    location: 'University of New Brunswick – Fredericton',
    dates: 'January 1st - 7th, 2025',
    delegates: 'VPX, Exec Member, and 4 Students',
    body: 'The Canadian Engineering Leadership Conference is an annual, bi-lingual, student-run conference that has two primary objectives. The first is that CELC is the annual general meeting of the CFES and the second is that it provides a platform from which students can collaborate with and learn from our industry partners, sponsors and fellow students. Attracting between 150 and 200 delegates from over 40 engineering schools, CELC is a great opportunity to reach out and engage engineering student leaders from every institution and field of engineering.',
  },
  {
    title: 'Ontario Engineering Competition (OEC)',
    location: 'McMaster University',
    dates: 'January 24th - 26th, 2025',
    delegates: 'All MEC Winners',
    body: 'The Ontario Engineering Competition is the culmination of the winners from local university based engineering competitions across Ontario. The Ontario Engineering Competition covers a wide array of topics related to the engineering discipline and other important skills.',
  },
  {
    title: 'Conference on Advocacy and Leadership in Engineering (ESSCO CALE)',
    location: 'Toronto Metropolitan University',
    dates: 'February 2025',
    delegates: 'VPX and 4 Students',
    body: 'ESSCOs Conference on Advocacy & Leadership in Engineering is centered around promoting leadership from attendees as well as summing up the work of the current ESSCO teams term and electing those who will lead ESSCO in the next term. Attendees can expect to take part in elections, meet student leaders from across the province and find themselves inspired to continue seeking leadership opportunities in their member schools. This conference also includes the Annual General Meeting for ESSCO.',
  },
  {
    title: 'Conference on Sustainability in Engineering (CSE)',
    location: 'University of Guelph',
    dates: 'February 20th - 23rd, 2025',
    delegates: '4 Students',
    body: 'The Conference on Sustainability in Engineering is the CFES’ newest conference, ratified at Congress 2018. The conference aims to raise awareness about issues in sustainability and environmental engineering, and encourage students to discuss and design solutions to counter them.',
  },
  {
    title: 'Canadian Engineering Competition (CEC)',
    location: 'Dalhousie University – Sexton',
    dates: 'March 14th - 17th, 2025',
    delegates: 'All OEC Winners',
    body: 'Each year, the Canadian Engineering Competition brings together over 200 of the most innovative and creative engineering undergraduate students from across the nation to compete against each other in eight categories (Junior Design, Senior Design, Innovative Design, Engineering Consulting, Parliamentary Debate, Re-engineering, Programming, and Engineering Communication). Each competition category at CEC challenges its participants to expand their frame of reference and to identify solutions to problems experienced by our profession.',
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
    dates: 'November 15th - 17th, 2024',
    delegates: 'Unlimited McMaster Students',
    body: 'MEC is an annual student-run competition organized by the MES in partnership with the McMaster Faculty of Engineering. Every year, MEC brings together the best and brightest engineering students across all years and disciplines. MEC is an excellent opportunity for students to gain practical experience in all facets of engineering, including both technical and transferable skills. This competition is meant to encourage students to be resourceful and creative in high-pressure situations in order to solve complex problems.',
  },
  // {
  //   title: 'Leadership Development Conference (LDC)',
  //   location: 'McMaster Univserity',
  //   dates: 'February - March, 2023',
  //   body: 'The Leadership Development Conference focuses on the development of professional skills to prepare students to take on the engineering workforce. This event will feature student panels, guest speakers and networking opportunities. The skills gained from this conference can help to boost your confidence and professional attitude when applying for co-op and jobs after graduation!',
  // },
];
