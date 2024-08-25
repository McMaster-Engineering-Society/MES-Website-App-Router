//the intialization for all the data
import { SxProps } from '@mui/material/styles';

import { UHSFormData } from '@/types/uhsForm';

export const INITIAL_UHS_DATA: UHSFormData = {
  email: '',
  firstAgreement: false,
  secondAgreement: false,
  groupCategory: '',
  groupName: '',
  eventName: '',
  eventDesc: '',
  organizerName: '',
  organizerNumber: '',
  organizerEmail: '',
  location: '',
  numberOfParticipants: '',
  emergencyName: '',
  startDate: '',
  startTime: '',
  endDate: '',
  endTime: '',
  repeat: undefined,
  repeatInfo: '',
  execMeeting: undefined,
  thirdAgreement: false,
  virtual: undefined,
  movie: undefined,
  danger: undefined,
  activityDesc: '',
  nameOfFirstAidIndividual: '',
  nameOfEmergencyIndividual: '',
  fourthAgreement: false,
  fifthAgreement: false,
  involveHazard: undefined,
  equipmentDesc: '',
  certificateSent: false,
  sixthAgreement: false,
  food: undefined,
  alcohol: undefined,
  place: undefined,
  seventhAgreement: false,
  campus: undefined,
  eighthAgreement: undefined,
  travel: undefined,
  busName: '',
  busMonitor: '',
  safetyPlan: '',
  ninthAgreement: false,
  tenthAgreement: false,
  informationSecurityPolicy: false,
  studentRightsPolicy: false,
  discriminationHarassmentPolicy: false,
  sexualViolencePolicy: false,
  comments: '',
  finalAgreement: false,
};

//This are the style specifications for the date picker from material UI
export const textFieldProps: SxProps = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px', // Set border radius
    borderWidth: '2px', // Set border width
    height: '3rem',
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.4)',
      borderWidth: '2px', // Set border width for fieldset
    },
    '&:hover fieldset': {
      borderColor: '#a8b3c9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a8b3c9',
    },
    '&.Mui-error fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.4)', // Same as normal state
    },
    '& input': {
      backgroundColor: '#ececec', // Background color of the input field
      outline: 'none', // Remove the default outline
      boxShadow: 'none', // Remove the default box-shadow (ring)
      borderRadius: '10px', // Set border radius for input
      color: '#4b4b4b',
    },
  },
  '& .MuiInputBase-input': {
    backgroundColor: '#ececec', // Background color of the input field
    outline: 'none', // Remove the default outline
    boxShadow: 'none', // Remove the default box-shadow (ring)
    borderRadius: '10px', // Set border radius for input
    color: '#4b4b4b',
  },
};

export const informationPolicy = `
Information Security Policy
INTRODUCTION
1. In order to maintain business continuity and the University’s reputation, it is critical to protect the confidentiality, integrity, and availability of:
a) information that supports the operation of the University
b) personally identifiable information, including health information
c) intellectual property and copyrighted information
Purpose
2. The purpose of this Policy is to provide direction for the appropriate use of computing resources, including communication and collaboration services and accounts.
Scope
3. This Policy applies to all University Constituents who are able to create and share information using University computing resources, and to any person or organization that handles University information and data regardless of their affiliation with or function within the University.
Definitions
4. University Constituents are individuals that have an existing relationship with the University, including but not limited to adjunct professors, affiliates, alumni, external contractors, faculty, graduate students, guests, librarians, partners, postdoctoral fellows, retirees, staff, undergraduate students, visiting professors, visitors, and volunteers.
5. A computing resource is any type of computer that is connected to the University data or telephony network. This includes but is not limited to servers, workstations, laptops, mobile devices, network appliances, telecommunication and teleconferencing devices, printers, automation hardware, and industrial control systems.
6. Communication and collaboration services are defined as digital technologies with which Constituents collaborate, communicate, share opinions, files, or other information. Services may include, but are not limited to: email, network storage, telephone, instant messaging, University managed, sponsored, or branded social networks, cloud services, printers, and online comments. The service owner is the department head who is accountable for the service, and computing resources required to provide the service, within the organization.
Information Security Policy
April 19, 2016 - 3 -
7. Accounts are the full record of activity, communication, and content accessible to a Constituent who is a customer of a service. This includes, but is not limited to, email mailboxes, home directories, computer profiles, telephone voicemail, and University managed, sponsored, or branded social networking profiles.
8. The account holder is the individual for whom the account was provisioned, and the individual who is responsible for the account. A delegate is an individual for whom the account holder has authorized and arranged access to use the account. A sponsored account is any account for which the holder is not identifiable by the account name. Examples of sponsored accounts include, but are not limited to, shared accounts, role based accounts, generic accounts, and guest accounts.
9. Credentials are the mechanism used to authenticate an individual in order to provide access to an account. Credentials usually consist of a user identifier (e.g., MacID) and a password.
10. Information Security enterprise standards are general statements outlining technical requirements that must be met in order to remain in compliance with this Policy.
11. Canadian Anti-Spam Legislation (CASL) protects Canadians from the threats related to digital communications, including spam, phishing and malware. (https://www.mcmaster.ca/privacy/casl/ and http://crtc.gc.ca/eng/internet/anti.htm)
12. The Canadian Copyright Modernization Act (CMA) protects copyright owners from inappropriate access to their materials, and defines the responsibilities and liabilities of internet service providers. (http://laws-lois.justice.gc.ca/eng/annualstatutes/2012_20/FullText.html)
13. A complete glossary of definitions can be found in the Information Security Glossary.
    
Information Security Policy
April 19, 2016 - 4 -
POLICY: ACCEPTABLE USE OF COMPUTING RESOURCES Intended Use
14. University computing resources, services, and accounts are intended for use by University Constituents for activities outlined within and supported by the mission and vision of McMaster University. Such activities include, but are not limited to education, research, health care, University business, student life, community engagement, health and safety, and public service.
Incidental Use
15. It is accepted that Constituents may use University computing resources, services, and accounts for incidental personal purposes. Constituents are required to exercise good judgment and conduct themselves professionally regarding incidental personal use of University accounts. Use of University accounts for the benefit of a private business or commercial enterprise is restricted by existing University policies, including but not limited to the Conflict of Interest Policy for Employees, Code of Student Rights and Responsibilities, and Statement on Conflict of Interest in Research.
Constituent Rights, Privileges, and Responsibilities
16. Constituents are responsible for observing all applicable laws, University policies, and contractual agreements while using computing resources, services, and accounts.
17. Constituents have the right to access only the accounts, information, and computing resources to which they have been granted explicit authorization, or to which authorization is implied by the disposition of the account, information, or resource. Constituents are responsible for safeguarding computing resources, accounts, and information in their care.
18. Each Constituent will be assigned unique credentials with which to access University managed accounts. These credentials must not be shared, even with a supervisor or among co-workers. It is the responsibility of each Constituent to ensure that their assigned credentials comply with this Policy and related Standards, including the Password Standard. It is the responsibility of each Constituent to protect and prevent the misuse of the credentials that have been assigned to them.
19. Credentials will not change if a Constituent changes roles. If the credential unique identifier (i.e., account name, user name, or MacID) does not adequately identify the account holder, they are encouraged to use an alias. Reasonable requests to change credential unique identifiers will be accommodated.
20. Account holders have the authority to delegate access to their account as reasonably required within their role at the University. Delegate access should be granted using unique credentials rather than shared common credentials; exceptions may be made where there are technical constraints preventing delegation to another unique account. Delegates are required to adhere to
      
Information Security Policy
April 19, 2016 - 5 -
the same standards of acceptable use as they would in any account which they hold or to which they have access. Account holders retain responsibility for the actions of their delegates.
21. Constituents are responsible for managing the content of their account(s). Any backups or redundancy provided by the service provider is in support of disaster recovery and business continuity only. There may be limitations on the ability for technical administrators to recover content that has been deleted. Modification and deletion of content should be undertaken responsibly and in accordance with legal and record retention policies.
22. Constituents are encouraged to use alternatives to shared accounts, such as electronic distribution lists, contact groups, delegation, aliases, etc. Where shared accounts are necessary, they should not have active credentials related to them; Constituents should access the shared account using their unique credentials. All shared accounts must have an explicitly identified holder.
23. Electronic distribution lists and contact groups must have an explicitly identified holder. The holder may delegate authority to send messages to list members. The holder and their delegate are responsible for all content sent using the electronic distribution list, and for ensuring that the list is not used to send unsolicited or inappropriate messages. Messages sent using electronic distribution lists must comply with Canadian Anti-Spam Legislation (CASL). List holders are responsible for maintaining the list membership, and offering a mechanism by which members can unsubscribe from the list where applicable.
24. Constituents are responsible for reporting violations of this policy, and known information security events, incidents or breaches in accordance with the Information Security Incident Reporting procedure. Breaches of personal information must be reported without delay to the University Privacy Officer.
Information Classification
25. Information that is transmitted or stored using University computing resources, services, and accounts must be handled in accordance with the Information Classification Matrix, in order to maintain appropriate confidentiality, integrity and availability. Information must be re-classified when necessary during its lifecycle to ensure it is appropriately handled and protected. Where possible, information should be labelled to promote appropriate handling and protection.
26. Constituents must comply with the University Privacy Governance and Accountability Framework while using computing resources, services, and accounts. Faculties, research units and groups, departments, and business units should:
a) Use internally managed services to handle information;
b) Assess the risk of sharing information with external services and accounts;
c) Create standard operating procedures to supplement this Policy, and mitigate risks to sensitive information; and
     
Information Security Policy
April 19, 2016 - 6 -
d) Educate users on their responsibilities and liabilities.
27. All unauthorized or accidental disclosures of information classified as confidential or restricted must be reported to the University Privacy Office (University Secretariat).
POLICY COMPLIANCE
28. The University reserves the right to monitor service and account activity, excluding content, and to audit computing resources on the University data and telephony networks in order to ensure compliance with this Policy. All violations of this Policy will be handled according the “Policy Violations” section below.
Breach of Acceptable Use
29. Constituents are prohibited from accessing another individual’s account without appropriate authorization.
30. Constituents are prohibited from using services and accounts to access, read, copy, delete, or use University data, information, or resources without authorization. Intentional or involuntary unauthorized release of confidential information is considered a breach of confidence and a violation of this Policy.
31. Constituents are prohibited from engaging in activities that prevent or impede the ability of others to exercise their rights and privileges. This includes, but is not limited to:
a) the transmission of unsolicited or malicious messages, or installation of unwanted or malicious software, including those defined by the Canadian Anti-Spam Legislation (CASL);
b) accessing copyrighted material to which they are not authorized, including that defined by the
Copyright Modernization Act (CMA);
c) limiting or denying access to services and / or accounts without authorization; and
d) unauthorized or unwarranted monitoring or surveillance of computing activities.
Service Owner Responsibilities
32. Service owners are responsible for ensuring that their service is configured in compliance with this Policy and are responsible for information technology security within the service.
  
Information Security Policy
April 19, 2016 - 7 -
33. Service owners are responsible for reporting privacy breaches to the University Privacy Office. Known information technology security incidents must be reported to the UTS IT Security team. Suspected and potential information technology security incidents should be reported to the UTS IT Security team.
34. Service administrators and technical administrators will not access Constituent accounts without proper authorization. Where the technology exists to control accounts or the devices upon which accounts are accessed, such technology will only be employed when necessary to remediate violations of this Policy, and will not be employed without notifying the Constituent, after consultation with the University Privacy Officer. Unauthorized access by an administrator will be investigated by the Chief Internal Auditor.
35. Access to an account by someone other than the account holder, or delegate, will be provided upon presentation of a legal search warrant or subpoena. Access may also be provided in the event of imminent physical threat; under such circumstances there must be reasonable belief that access to the account is required in order to prevent harm to one or many individuals.
36. For business continuity purposes, and other legitimate business reasons, it may sometimes be necessary for someone other than the account holder or delegate to access an account. Examples could include termination of employment, sudden leave of absence, or fraud.
a) Access to staff and sponsored accounts must be authorized by the appropriate Vice-President, or in their absence, the authorized delegate or the Vice-President Administration.
b) Access to faculty accounts must be authorized by the Provost / Vice-President Academic, or in their absence, the authorized delegate or the President.
c) Requests for access to an account by someone other than the account holder, or a delegate, should be reviewed and approved by the University Privacy Officer. The Privacy Officer, at their discretion, may recommend administrative, technical, or physical constraints to access. For example, the Privacy Officer may recommend that access be granted for less time than requested, that access logging be enabled for the duration of access, or that access be monitored by another party.
d) Service providers will be responsible for verifying that access constraints are applied appropriately, and that access is properly revoked.
e) Account holders will be notified by the authorizing VP as soon as possible without compromising any investigation.
37. Faculties, research units and groups, departments, and business units which oversee or manage an information technology function, whether internal or external, are responsible for securing the information and technology under their responsibility. To this end, they must:

Information Security Policy
April 19, 2016 a)
b) c)
- 8 -
Assure that computing resources, services, and accounts in their area are in compliance with this Policy and related Standards;
Identify and communicate with owners of data that is stored or processed on computers in their area; and
Report incidents of known information technology security breaches to the UTS IT Security team, and to the University Privacy Officer when personal information is involved.
Policy Violations
38. All potential violations of this Policy will be investigated by the appropriate internal authority, and may result in disciplinary actions as per relevant University policies.
39. All potential violations of this Policy could result in the removal of access to services and account privileges for the violator for the duration of the investigation or as directed by the appropriate internal authority.
40. Information technology security incidents that violate any of the above listed policies or legislation is considered violations of this Policy and will be escalated to the internal authority responsible for the policies and/or legislation. For example, violations of this policy that involve systems used to process payments will be escalated to the CFO, or appropriate delegate. Violations may be escalated to external authorities, such as police forces or the Canadian Radio-Television and Telecommunications Commission (CRTC), at the discretion of the internal authorities.
Related Policies and Legislation
41. This document is to be read in conjunction with relevant policies, statements, regulations, and legislation, including:
a) Code of Student Rights and Responsibilities
b) Code of Conduct for Faculty and Procedure for Taking Disciplinary Action
c) Statement on Conflict of Interest in Research
d) Privacy Governance and Accountability Framework
e) Tri-Council Policy Statement: Ethical Conduct for Research Involving Humans (TCPS2)
f) Freedom of Information and Protection of Privacy Act (FIPPA)
g) Personal Health Information Protection Act (PHIPA)
h) Personal Information Protection and Electronic Document Act (PIPEDA)
        
Information Security Policy
April 19, 2016
i)
j) k) l) m)
- 9 -
Canadian Anti-Spam Legislation (CASL) Copyright Modernization Act (CMA)
Payment Card Industry - Data Security Standard (PCI-DSS) Ontario Human Rights Code
Criminal Code of Canada
`;

export const studentPolicy = `
Code of Student Rights and Responsibilities
PREAMBLE
1. The University values integrity, inclusiveness and teamwork, and strives to support the personal and collective growth of the McMaster student community. The University is committed to providing educational initiatives and learning opportunities to help students conduct themselves in accordance with the Code.
2. The University recognizes the complexity of student life at a post-secondary institution and understands that students may have differing levels of experience addressing conflict, however, students will be responsible for their interactions with others. Students are expected conduct themselves responsibly, in accordance with this Code, and to be individually responsible for their actions whether acting on their own or in a group.
3. A full glossary of terms and definitions may be found in Appendix A. For the purpose of interpreting this document:
a) words in the singular may include the plural and words in the plural may include the singular;
b) Decision-Makers in this Code may, where appropriate, delegate their authority (this includes the Dean of Students, Case Managers, Directors, and the Provost);
c) Athletics and Recreation means the Department of Athletics and Recreation;
d) Case Manager means the Dispute Resolution Case Managers in Student Support & Case Management;
e) Dean of Students means the Associate Vice-President (Students and Learning) and Dean of Students;
f) Director (A&R) means the Director, Athletics and Recreation;
g) Director (HCS) means the Director, Housing and Conference Services;
h) Director (HRDR) means the Director, Human Rights & Dispute Resolution Program;
i) Director (SVPRO) means the Director, Sexual Violence Prevention and Response Office;
j) Director (SSCM) means the Director, Student Support & Case Management Office;
k) Student Groups means University Recognized Student Groups;
l) Security Services means McMaster University Security and Parking Services; and
m) StudentAffairsmeanstheStudentAffairsOffice.
SCOPE
4. All McMaster students have an obligation to familiarize themselves with this Code as it applies to their particular role as a student, student-athlete, Residence Student, Student Leader and/or student group member, in order to ensure that they are aware of their Rights and Responsibilities to the University Community.
5. All students are responsible for respecting the rights of others, contributing to an environment that is free of Discrimination, Harassment, and Sexual Violence, and for conducting themselves in a manner that contributes positively to the University and the University Community.
6. By enrolling at the University students agree to abide by the Rights, Responsibilities, and Expectations in this Code.
   December 11, 2019, effective January 1, 2020 Page 1 of 32
CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION I: INTRODUCTION
7. Behaviour dealt with under this Code includes any action that violates the Responsibilities of Students or negatively effects any member of the University Community, and arises:
a) on University premises, or at a University authorized event occurring on or off University premises, or when representing the University;
b) at a non-authorized event off University premises and where there is a clear connection to the University community. Incidents without a clear connection (nexus), but where the student(s) in question potentially pose a significant risk to community or workplace safety or where the University has reasonable grounds to be concerned with a risk of future violence, also fall within the scope;
c) arises elsewhere in the course of activities sponsored by the University, or where the conduct is alleged to adversely affect, disrupt or interfere with another person’s reasonable participation in University programs or activities;
d) through electronic media, where there is a clear connection to the University Community; and/or
e) occurs in the context of a relationship between the student and a third party and involves the student’s standing, status or academic record at the University.
8. Residence Students are also required to abide by the additional expectations outlined in clauses 26-28.
9. Student-Athletes are also required to abide by the additional expectations outlined in clauses 29-30.
10. Student Leaders, and Student Groups (including their executives, and any member operating in their capacity
as a Primary Event Organizer) are also required to abide by the expectations outlined in clauses 31-32.
11. A student host is responsible for supervising their guests’ and ensuring their guests actions are not violations
of the behaviour standards outlined in this Code.
AUTHORITY AND JURISDICTION
12. The Senate of McMaster University has set out in this Code, the expectations for acceptable conduct of students and the procedures for dealing with conduct that does not meet these expectations. Senate has delegated to the Dean of Students the authority to administer this Code and impose sanctions, including suspension or expulsion. The Dean of Students may delegate certain responsibilities to the Director (HCS), the Director (A&R), or other Student Affairs Staff.
INVOLVEMENT OF CIVIL AUTHORITIES
13. The existence of this Code does not preclude any individual from proceeding under applicable laws against another individual, nor does it preclude Security Services from carrying out its responsibilities. Proceedings under this Code may be carried out prior to, simultaneously with, or following other off-campus proceedings, including civil or criminal proceedings, at the discretion of the Dean of Students.
14. In cases where the Dean of Students determines that processing an allegation under this Code might prejudice another internal or external process they may suspend these proceedings indefinitely or pause the investigation pending the outcome of these non-Code proceedings. Interim measures may be used at any point to ensure the safety of all students and the University Community. See Appendix B: Interim Measures and Ongoing Support of All Parties.
         December 11, 2019, effective January 1, 2020 Page 2 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION II: CONFIDENTIALITY SECTION II: CONFIDENTIALITY
15. The University and its employees and agents will protect personal information and handle records in accordance with the Freedom of Information and Protection of Privacy Act and the Personal Health Information Protection Act, where applicable in the circumstances, and in the case of health care providers, in keeping with any professional obligations.
16. The University will share identifying information only in circumstances where it is necessary in order to administer the Code, to address safety concerns, or to satisfy a legal reporting requirement. In such circumstances, the minimum amount of information needed to allow such concerns to be addressed, or to meet such requirements, will be disclosed. Such circumstances include those where:
a) an individual is at risk of harm to self;
b) an individual is at risk of harming others;
c) there are reasonable grounds to be concerned with risk of future violence or the safety of the University and/or broader community;
d) disclosure is required by law; for instance, suspected abuse of someone under the age of 16; or, to comply with legislation;
e) it is necessary to comply with the reporting requirements of regulatory bodies;
f) it is necessary to share information between the Director (SSCM), the Director (HCS), the Director (A&R), and/or other appropriate staff within their offices for the purpose of supporting the student (e.g. when behaviour that occurred within Residence may affect the student in their role as a Student-Athlete); and/or
g) there are reasonable grounds to believe that it is necessary to contact a student’s parents or other appropriate contacts.
17. Some offices and Community Members have additional limitations to confidentiality because of their particular reporting requirements or professional obligations. For example:
a) all regulated health professionals are obligated to report suspected sexual abuse of a patient by a regulated health professional to that professional’s governing body if this information is acquired during the course of their practice; and
b) Special Constables in Security Services are required to investigate reports of abuse of someone under the age of 16, and reports of intimate partner/domestic violence and to lay charges in all cases when there are reasonable grounds to believe a criminal offence has been committed, regardless of whether the target of the violence wishes to have further involvement with the legal process.
18. For matters involving allegations under the Discrimination & Harassment Policy, and/or the Sexual Violence Policy, any additional confidentiality requirements under the relevant policy will apply.
19. Procedural limits to confidentiality may also occur if the University is subject to legal proceedings that, in the opinion of the Provost and Vice-President (Academic) or the Vice-President (Administration), (in consultation with the President), require the disclosure of information.
20. The importance of preserving the confidentiality of Complaints and any related proceedings will be explained to all parties as a necessary measure to protect the integrity of the proceedings.
           December 11, 2019, effective January 1, 2020 Page 3 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION III: RIGHTS, RESPONSIBILITIES, AND EXPECTATIONS SECTION III: RIGHTS, RESPONSIBILITIES, AND EXPECTATIONS
21. McMaster University is a student-centered community committed to excellence, integrity, inclusiveness and teamwork. Membership in this community implies acceptance of the principle of mutual respect for the rights, responsibilities, dignity, and well-being of others, and a readiness to support an environment conducive to the intellectual and personal growth of all who study, work and live within it. Student rights, and the responsibilities that accompany them, include, but are not limited to those listed below.
Rights
22. All students have the right to:
a) protection under the law and this Code;
b) fair procedures and process under this Code;
c) participate unhindered in their academic pursuits which includes the opportunity to participate in respectful dialogue that examines diverse views and ideas;
d) live and work in an environment free from discrimination, harassment, intimidation,, sexual violence, and violence; and
e) have their personal privacy appropriately respected by other students.
Responsibilities
23. All students are responsible for:
a) acting in accordance with the law and this Code;
b) being acquainted with the relevant related policies as they apply to all students as well as to their specific role(s) within the University;
c) supporting an environment free from discrimination, harassment, intimidation, assault, sexual violence, and violence;
d) treating others in a way that does not harm them physically and/or threaten or intimidate them emotionally or mentally;
e) appropriately respecting the personal privacy of other students;
f) consuming legal substances in a safe and responsible manner; and
g) complying with any disciplinary measures assigned under this Code, and respecting the authority of University officials in the course of their duties.
   24. For
a list of behaviours that may be considered a violation of this Code, refer to Section IV: Violations.
 25. The University recognizes that unusual situations may arise that are not necessarily covered by the above Rights and Responsibilities, but still raise concern for the safety or well-being of students or the University community. In such cases, the Dean of Students reserves the right to use the procedures outlined in this Code to ensure the safety and security of students and the University Community as a whole.
 December 11, 2019, effective January 1, 2020 Page 4 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION III: RIGHTS, RESPONSIBILITIES, AND EXPECTATIONS RESIDENCE STUDENTS: ADDITIONAL EXPECTATIONS
26. Students living in Residence are part of a unique and interconnected community on campus. As such, there are additional, contextual expectations for Residence Students, and their guests.
27. These expectations are identified and agreed upon by every Residence Student in the Residence Agreement Contract and apply to any behaviour that occurs in Residence and/or at an approved Residence event held either on or off campus and/or which occurs on the internet or through social media.
28. By requesting to live in Residence, students agree to:
Community Standards
a) avoid creating significant nuisances for, or infringe on, a resident’s peaceful use of their room/space (e.g. excessive noise, indoor sporting activity, pranks, etc.);
b) take reasonable steps to prevent a problem situation from occurring or, if it occurs, to prevent it from escalating to a more serious level;
c) refrain from possessing prohibited items as defined by Housing and Conference Services in the Residence Agreement Contract Appendix: Prohibited Items and Alcohol Regulations;
Policy
d) abide by University policies, procedures, or protocols (e.g. Residence Agreement/Contract, Guest/Escort Protocol, Decorating Protocol, etc.);
Personal and Community Safety
e) refrain from actions that compromise fire safety standards (e.g. propping doors, lighting candles, smoking inside, failing to evacuate, tampering with fire safety equipment, causing a false alarm, etc.);
f) refrain from actions that compromise the safety of an individual(s) (e.g. tampering with building systems, fabricating or building structures, accessing restricted areas, etc.) or are considered unsafe practices by Housing and Conference Services;
g) refrain from actions that compromise the safety of the Residence community (e.g. loaning keys, fraudulently gaining entry to a building, misusing identification, etc.);
Substance Use Standards
h) abide by the Residence Agreement Contract Appendix: Prohibited Items and Alcohol Regulations and the Liquor License Act, including refraining from underage consumption/service, excessive consumption/ public intoxication, open alcohol in a public space, drinking games, or alcohol practises considered unsafe by Housing and Conference Services; and
i) refrain from the possession, use, sale or being under the influence of illegal drugs (including drug traces, paraphernalia, and smell) and/or use of medication for purposes other than those for which it was prescribed.
       December 11, 2019, effective January 1, 2020 Page 5 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION III: RIGHTS, RESPONSIBILITIES, AND EXPECTATIONS STUDENT ATHLETES: ADDITIONAL EXPECTATIONS
29. The University recognizes that Student-Athletes participate in distinctive settings on and off campus and are part of a unique community within the University. Playing and competing for the University is a privilege, not a right. Therefore, there are additional, contextual expectations for Student-Athletes that are identified and agreed upon during their registration process. These expectations apply to any member of an athletic inter- university team, and to their behaviour at any Athletics and Recreation sanctioned event, or a team related function held either on or off campus and/or which occurs on the internet or through social media.
30. Student-Athletes are expected to:
a) represent the University and portray themselves, their team, and the University in a positive manner at all times;
b) be an ambassador for the University at all times and avoid engaging in activities likely to cause personal injury, intimidation or harassment;
c) treat everyone with courtesy and respect within the context of their sport;
d) refrain from any form of hazing, which includes, but is not limited to: any action or activity which does not contribute to the positive development of a person; which inflicts or intends to cause physical or mental harms; and which may demean, degrade or disgrace any person, regardless of location, intent or consent of participants;
e) abide by the rules and regulations of their sport, as set out by Ontario University Athletics, the Canadian Interuniversity Sport and the sport governing body;
f) refrain from the use of anabolic steroids or other illegal performance enhancing drugs and techniques (e.g. blood doping), as outlined by the Centre for Ethics in Sport;
g) avoid any negative interaction or conflict with members of opposing teams and/or officials except as they occur in the actual course of competition and which constitute the legitimate expression of the competitive spirit of their teams or team members;
h) refrain from willfully damaging the property of others which includes, but is not limited to, hotel rooms, facilities at other universities, and/or transportation vehicles; and
i) refrain from the consumption or transportation of any alcoholic beverages on team vehicles.
STUDENT LEADERS AND STUDENT GROUPS: ADDITIONAL EXPECTATIONS
31. Student Groups have a responsibility to respect the rights of others and to conduct themselves in a responsible manner that contributes positively to the University Community while on University premises and/or at events off-campus organized by the group.
32. Student Group executives and/or the primary event organizer may be held responsible for violations of this Code. All Student Leaders and Student Groups are expected to:
a) follow the expectations and risk management procedures as contained in the Policy on Student Groups (Recognition, Risk Assessment and Event Planning); and
b) comply with a directive of the Dean of Students, or their delegate.
   December 11, 2019, effective January 1, 2020 Page 6 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION IV: VIOLATIONS SECTION IV: VIOLATIONS
33. Violations of this Code include, but are not limited to:
Safety of Oneself and the Community
a) engaging in Sexual Violence as defined in the Sexual Violence Policy and this Code;
b) engaging in physical actions which are threatening, physically abusive and/or compromise the safety and
security of any individual and/or group;
c) engaging in verbal or non-verbal behaviour or communication toward any individual or group that may be perceived to be intimidating, degrading, harassing and/or discriminatory (that may violate the Discrimination & Harassment Policy);
d) failing to comply with fire safety regulations, e.g. setting unauthorized fires, tampering with fire and emergency equipment, failing to exit a building during an alarm, etc.;
e) possessing, storing, or using a hazardous material, explosive substance or weapon, including any item that can be reasonably perceived to be a weapon by others e.g. replica guns, air soft guns, etc.;
Personal or University Property
f) vandalising, stealing, or being in possession of property that is not one’s own e.g. intellectual property, digital files, property of the university and personal property, etc.;
Community Standards
g) failing to cooperate with Security Services, or a University official who is performing their duties under this Code, e.g. including furnishing false information, etc.;
h) assisting with or conspiring in any conduct that violates this Code;
i) trespassing and/or fraudulently gaining, or attempting to gain entry to University property;
j) engaging in disruptive behaviour in or out of class e.g. making excessive noise at any time of the day, causing a disturbance in class, or interrupting the daily functions of the University;
k) sharing the private information of any individual without consent;
l) fraud of any kind, including misusing University issued keys or identification, passwords, meal cards;
m) publiclydisplayingand/ormakingpornographymaterialanywhereonUniversitycampus;
n) smoking, or the use of tobacco products, in any University owned or leased building and/or vehicle, on University property, or in any vehicle while on University property, in violation of the Tobacco & Smoke Free University Policy;
o) failing to adhere to their responsibilities and expectations as identified in this Code;
p) breaching any contract under this Code that outlines specific parameters for a student’s behaviour (e.g. behavioural contract, probation) and/or failing to complete an educational outcome or sanction on time;
Legal and Illegal Substances
q) possessing, consuming, trafficking or being under the influence of any illegal substance;
r) possessing or consuming alcohol when under 19 years of age, or distributing alcohol to those under 19 years of age;
s) consuming or being impaired by any legal controlled substance, in a public space regardless of age.
December 11, 2019, effective January 1, 2020 Page 7 of 32
          
CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION V: PROCEDURAL GUIDELINES
SECTION V: ROLES AND RESPONSIBILITIES STUDENT AFFAIRS ADMINISTRATORS
34. Student Affairs Administrators are the:
a) Dispute Resolution Case Managers “Case Managers” in the Student Support & Case Management Office
(SSCM), for all students;
b) Support Case Manager (SSCM), Residence Life Area Coordinator, or the Manager (Residence Life), for
Residence Students; and
c) Associate Director (A&R), or the Athletic Services Coordinator for Student-Athletes.
35. Student Affairs Administrators are responsible for the:
a) intake and preliminary assessment of allegations of Code violations;
b) investigations and determinations of violation of the Code, when the potential sanctions are within their authority to assign;
c) referral of Disclosures to the Sexual Violence Prevention and Response Office; and
d) notification/referral to the appropriate Intake Office for allegations of discrimination, harassment and/or
sexual violence.
CASE MANAGERS
36. The Case Managers in the Student Support and Case Management Office have additional responsibilities which include:
a) conducting investigations of allegations of Code violations, including discrimination, harassment and/or sexual violence allegations (when they have been appointed as Investigators under the Discrimination & Harassment Policy and/or Sexual Violence Policy)
b) making a finding of violation for minor violations (that do not include allegations of discrimination, harassment and/or Sexual Violence);
c) referring cases directly to Adjudication when it is warranted by the severity of the alleged conduct, the potential sanctions, and/or the number of violations in the student’s record;
d) determine whether a violation of the Code has occurred and, when appropriate or where there are extenuating medical circumstances, determine whether corrective action might be taken without proceeding to Adjudication.
INVESTIGATORS
37. Investigators for the Code may include external investigators or an alternate internal investigator, as deemed appropriate by the Student Support and Case Management Office.
38. Investigators appointed under the Discrimination & Harassment Policy, and/or the Sexual Violence Policy, whether internal or external to the University, will have training and expertise in compliance with the relevant policy.
39. Investigators will follow the mandate and scope of the investigation as determined by the University.
December 11, 2019, effective January 1, 2020 Page 8 of 32
      
CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION VI: INVESTIGATIONS
SECTION VI: INTAKE AND INVESTIGATIONS INTAKE THROUGH STUDENT AFFAIRS
40. Allegations from members of the University Community that a student’s behaviour may be a violation of this Code should be reported to the appropriate Student Affairs Administrator (see clause 34) who shall determine whether the alleged behaviour is within the scope of the Code.
41. Individuals may consult with Student Support and Case Management to seek guidance on the application of the Code and the appropriate Administrator and/or Office that inquiries and complaints should be directed to.
42. If the matter is determined to not be within the scope of the Code, the matter may be dismissed and/or referred to another applicable University policy, or appropriate authorities.
43. If at any stage of a process under this Code it is determined that the behaviour is related to a health condition, it may be referred to Section X for alternate procedures, when appropriate in the circumstances.
Burden and Standard of Proof
44. At each stage of decision-making the onus of establishing that there has been a violation of the Code shall be on the University authority. Decisions are made on the balance of probabilities (the evidence shows it is more likely than not that the violation of the Code occurred).
Preliminary Assessment
45. Student Affairs Administrators shall conduct a preliminary assessment to determine whether:
a) the potential sanctions for the alleged violation are within their authority to assign, and if so, if it is also within their authority to investigate the allegation;
b) the number of violations in the student’s record warrants referral directly to Adjudication before relevant Director (SSCM, HCS, A&R);
c) the matter involves serious allegations of violations of the Code, that require referral to a Case Manager; and/or
d) the matter involves allegations of Discrimination, Harassment, and/or Sexual Violence that require a
referral to the Director (SSCM), the Director (HRDR) and/or the Director (SVPRO).
REFERRAL FROM AN INTAKE OFFICE
46. Allegations of discrimination, harassment and/or sexual violence involving a Student Respondent will be investigated and adjudicated under this Code and may be referred to the Code from one of the Intake Offices.
a) Human Rights & Dispute Resolution Program, Equity and Inclusion Office (All Community Members)
b) Student Support & Case Management Office (SSCM) (Students)
c) Employee and Labour Relations (ELR) (Faculty or Staff members)
d) Faculty of Health Sciences (FHS) Professionalism Office (FHS Community Members)
Response Team
47. For allegations under the Discrimination & Harassment Policy and/or Sexual Violence Policy, there is a Response Team, which is activated by the relevant Intake Office Director, where a case potentially presents
              December 11, 2019, effective January 1, 2020 Page 9 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION VI: INVESTIGATIONS
community risk and/or requires consultation with multiple partners for a coordinated response. The Response Team will act in compliance with the Discrimination & Harassment Policy and/or Sexual Violence Policy.
DECISION TO NOT INVESTIGATE
48. In some circumstances a decision may be made not to investigate allegations of discrimination, harassment and/or sexual violence. The decision will be communicated in writing, with reasons, to the Complainant by the Dean of Students. The Complainant will be informed of their right to make a written appeal of the decision to the Provost and Vice-President (Academic).
VOLUNTARY RESOLUTION
49. In certain circumstances, a Complainant and Respondent may be interested in attempting a resolution of a Complaint at any time before the completion of an Investigation. Voluntary Resolution is not mandatory and may not be appropriate in all Code related matters.
50. The following conditions must be present before considering if Voluntary Resolution is a viable option:
a) the University is able to meet its legal responsibilities pursuant to relevant legislation; and
b) the Complainant and the Respondent both agree to:
(i) attempt to reach a resolution in good faith;
(ii) the methods to be used to seek resolution; and
(iii) the terms of what would constitute resolution.
51. A meeting between the Complainant and the Respondent will not be a requirement for Voluntary Resolution.
52. A Voluntary Resolution may be facilitated by the appropriate Student Affairs Office, and the methods may include fact-finding discussions, clarification of the issues, facilitated conversations, mediation, coaching, voluntary no contact agreements, reconciliation, and restoration processes.
INVESTIGATIONS
53. Investigations conducted under this Code will follow the principles of procedural fairness. Respondents have the right to know the case against them, and to produce any relevant documentation, evidence, or other information, and identify witnesses to the Investigator in response to any allegations.
54. Investigations of allegations of discrimination, harassment and/or sexual violence shall be conducted in compliance with the investigation procedures of the Discrimination & Harassment Policy and/or the Sexual Violence Policy.
55. The Student Affairs Administrator, Case Manager, and/or Investigator, will impartially collect evidence and interview witnesses in relation to the allegation. In consultation with the appropriate Director, they may adjust the scope and the manner in which the investigation will be conducted in compliance with this Code.
56. All Community Members are expected to meet with the Student Affairs Administrator, Case Manager, and/or Investigator if requested to do so. All those who attend such a meeting are expected to keep confidential the meeting and any information shared to ensure the integrity of the proceedings.
        December 11, 2019, effective January 1, 2020 Page 10 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION VI: INVESTIGATIONS Contacting the Respondent
57. The Student Affairs Administrator shall contact the Respondent by phone and/or McMaster email to schedule a meeting. The Respondent will be informed of the following:
a) that an investigation has been initiated, the nature of the allegation, and the procedures to be followed;
b) the time and location of the meeting;
a) the parties attending the meeting (when possible);
c) that should they fail to attend without contacting the Student Affairs Administrator, the Administrator will proceed to gather information in their absence; and
d) if contacted via email, that they must reply within three (3) business days.
58. If there is no response from the Respondent within three (3) business days of the initial contact, a meeting will be assigned, and scheduled at least three (3) business days after delivery of the notification. The Respondent will be notified by phone, via McMaster email and/or by letter (e.g. delivered under their Residence door; registered mail). These timelines may be expedited, in some cases, when the situation is deemed significant and/or when the Respondent agrees to an expedited timeline.
Identification of Additional Respondents
59. A student who was not previously identified as a Respondent but who, during the course of an investigation, is identified as a potential Respondent must be notified and given an opportunity for a meeting to respond to any allegations.
Meeting with the Respondent
60. During the meeting, the allegation shall be reviewed with the Respondent. The Respondent will be made aware of all relevant information pertaining to the matter that is available at the time of the meeting and will be given the chance to respond to the information presented, provide evidence, and identify any relevant witnesses.
61. Should new information be received from other parties and/or witnesses, the Respondent will be provided another opportunity to meet and respond to the new information.
62. The Student Affairs Administrator may seek to resolve the matter through one-on-one meetings or through a facilitated group dialogue which may include but is not limited to: mediation, restorative processes, and/or intervention on behalf of another.
63. The Student Affairs Administrator may discuss possible sanctions with the Respondent to determine whether the Respondent is interested in accepting the possible sanctions. This may include specific educational sanctions that will help the Respondent, while protecting the safety and integrity of the University Community (e.g. behavioural contract, loss of privileges etc.).
     December 11, 2019, effective January 1, 2020 Page 11 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION VII: ADJUDICATION SECTION VII: ADJUDICATION
64. Following the investigation, the Student Affairs Administrator shall determine whether there is sufficient evidence to support a finding that the student has been found in violation of the Code, and if so, will determine which option will be most appropriate in the circumstances:
a) decision by the Student Affairs Administrator;
b) referral to Adjudication before the relevant Director; or
c) direct the case to Section X where a Respondent has established that they have medical circumstances that may have contributed to the behaviour.
65. If the Student Affairs Administrator refers the matter to Adjudication, the student will be so informed in writing.
Student Affairs Administrator Decision
66. The Student Affairs Administrator makes a finding and imposes sanctions, in accordance with the Code. The student shall be provided with written notice of the finding and sanctions, and any appeal options they may have (Appendix A: Appeals)
67. If the Student Affairs Administrator concludes that there is insufficient evidence to proceed, or that there is no violation of the Code, the matter shall be closed. The student will be informed in writing.
ADJUDICATION
68. In some circumstances, for Residence Students or Student-Athletes, the matter may be referred for adjudication before the Director (A&R), or the Director (HCS), when the potential sanctions are within their authority to assign.
69. Adjudication is normally before the Director (Student Support and Case Management Office), or the Dean of Students, as appropriate in the circumstances.
70. Students may request Peer Conduct Board Adjudication. The Peer Conduct Board will not be used in cases of Discrimination, Harassment and/or Sexual Violence, or where it is determined that the behaviour in question has resulted in significant harms to an individual and it would be inappropriate or unfair to those affected by the behaviour for information to be shared beyond the normal participants of an Adjudication Process.
Procedural Guidelines
71. Every reasonable effort will be made to arrange an Adjudication date within seven (7) business days of the
decision being made to proceed to Adjudication.
72. Prior to the adjudication, either verbally or in writing, the Student Affairs Administrator will inform the Respondent that should they be absent from a scheduled Adjudication without first contacting the Student Affairs Administrator to reschedule, and demonstrating reasonable grounds, the matter may proceed in their absence.
73. The Respondent shall have the opportunity to bring a support person and bring witnesses. Respondents shall provide, as soon as possible, the names of any relevant witnesses that have agreed to testify. If new information arises the Respondent will have a chance to speak to it prior to the Adjudication
        December 11, 2019, effective January 1, 2020 Page 12 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION VII: ADJUDICATION Parties
74. Parties to an Adjudication shall include the Student Affairs Administrator presenting the allegation and the Respondent against whom the allegation has been made.
Closed Hearings
75. Hearings shall be held in camera (closed) unless one or both of the parties requests that the hearing, or some part of the hearing, should be held in public. In the event of such a request, representations shall be heard from all parties on whether matters of an intimate financial or personal nature are to be raised, whether there is an issue of public safety involved, the desirability of holding an open hearing and other relevant circumstances.
Scheduling
76. An attempt shall be made to schedule the Adjudication hearing at a time and place convenient for all parties. However, if a party, who has been notified of an Adjudication date, is absent without contacting Student Affairs or without providing a satisfactory explanation, the Adjudication hearing may proceed in their absence.
Similar Questions of Fact/Policy
77. If two or more proceedings before the Peer Conduct Board (PCB) or the Adjudicator involve the same or similar questions of fact or policy, the PCB or the Adjudicator may:
a) combine the proceedings or any part of them;
b) hear the proceedings at the same time; or
c) hear the proceedings one immediately after the other.
Advisor
78. The Respondent shall have the right to have an Advisor or Support Person present at the adjudication hearing. Such individual may consult with the Respondent but shall not be allowed to speak at the Adjudication hearing.
Evidence
79. The Respondent is entitled to receive, prior to the adjudication meeting, detailed information regarding the allegation against them.
80. Parties have the right to present evidence, including written statements, in support of their case, prior to and at the hearing, and to see any written evidence presented at the hearing.
81. The Decision-Maker may admit as evidence any oral testimony and any document, written statement or other thing, relevant to the subject matter of the proceeding.
82. The Decision-Maker may require the production of written or documentary evidence by the parties or by other sources.
83. The Decision-Maker must not hear evidence or receive representations regarding the substance of the case outside of the hearing.
          December 11, 2019, effective January 1, 2020 Page 13 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION VII: ADJUDICATION Witnesses
84. Parties have the right to call, question and cross-examine witnesses. Parties are responsible for producing their own witnesses and paying for any costs associated with their appearance.
85. Parties may submit witness statements as evidence. In the event that a party wishes to cross-examine a witness on their statement, the adjudication may be adjourned to permit the witness to appear. Alternatively, the Parties may consent to contacting the witness by telephone; provided that all Parties and Decision-Maker can hear one another throughout the cross-examination of the witness.
86. The Decision-Maker may limit testimony and the questioning of witnesses to those matters it considers relevant to the disposition of the case.
87. The witnesses will stay in the adjudication meeting only while they are testifying and responding to questions.
University Representative
88. For the purposes of the Adjudication Hearing, the person responsible for presenting the case shall be referred to as the University Representative. The University Representative may include the Student Affairs Administrators, the Case Managers, and Investigators.
Order of Adjudication Hearing
89. The order of the Adjudication hearing shall be as follows:
a) the University Representative shall present the findings of their investigation and shall call any witnesses. The Respondent and the Decision-Maker shall be permitted to question each witness at the end of their testimony. The University Representative shall be permitted to clarify any new points arising from such questioning;
b) the Respondent shall present their evidence and shall call any witnesses. The University Representative and the Decision-Maker shall be permitted to question each witness at the end of their testimony. The Respondent shall be permitted to clarify any new points arising from such questioning;
c) the University Representative may respond to any evidence presented by the Respondent in (b) above;
d) the parties will be permitted an opportunity to summarize their respective cases. The summary should address both the substance of the alleged violation and the appropriate sanction in the event that the allegation is determined to be valid; and
e) the Decision-Maker may alter the order described above in the interests of fairness to any or all parties.
Adjournment
90. The Decision-Maker may grant an adjournment at any time during the adjudication hearing to ensure a fair hearing.
Appropriate Procedures
91. Where any procedural matter is not dealt with specifically in this Code, the Decision-Maker may, after hearing submissions from the parties and considering the principles of fairness, establish an appropriate procedure.
92. Any procedural requirement contained in this Code may be waived with the consent of the Decision-Maker, and all the Parties to the Hearing so long as basic procedural fairness is maintained.
      December 11, 2019, effective January 1, 2020 Page 14 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION VIII: DECISIONS SECTION VIII: DECISIONS
93. A decision takes effect immediately and filing an appeal will not stay the implementation of any sanction imposed.
94. It is the responsibility of the Adjudicator to ensure the implementation of the sanction.
Respondent
95. Respondents will receive a written decision from the relevant Decision-Maker, that will include:
a) the decision with respect to a Finding or No Finding of Violation of the Policy;
b) reasons for the decision; and
c) a summary outlining the findings.
96. If the outcome is no finding of violation of the Code the matter will be closed.
97. If the outcome is a finding of violation of the Code, the Respondent will be informed of the sanction(s) and/or
remedies that have been ordered, and will be informed of their appeal rights (Appendix A: Appeals).
98. Notification shall normally occur within ten (10) business days of an adjudication/hearing.
Professional Licensing Bodies
99. Where required by a professional licensing body, the relevant findings will be communicated to that professional licensing body, after any sanctions/remedies have been implemented.
Affected parties
100. Affected parties will receive information about the findings and/or any sanctions/remedies that have a direct impact on them, within the constraints of relevant legislation.
Complainants
101. Within the constraints of relevant legislation, the Complainant will be informed of the findings, and will be provided a brief summary of the decision and reasons that are directly related to their complaint.
102. In all cases, information about any sanctions/remedies that have a direct impact on the Complainant will be provided to them.
APPEALS
103. If the Respondent wishes to appeal the decision they may follow the Appeal procedures outlined in Appendix A: Appeals.
          December 11, 2019, effective January 1, 2020 Page 15 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION IX: SANCTIONS AND REMEDIES SECTION IX: SANCTIONS AND REMEDIES
SANCTIONS
104. Sanctions may be used independently or in combination for any single offence and shall be proportional to the severity of the offence. In the event that previous findings exist, the severity of sanctions may be greater.
105. Whenever appropriate, sanctions will be assigned with an emphasis on education and restorative practices; however, in certain circumstances, punitive sanctions may be assigned.
106. Sanctions include, but are not limited to:
a) oral warning: an oral warning is notification given to a student;
b) written warning: a notice given to a student indicating the date, time, and nature of the violation. Such behaviour must stop and repeat offences may result in more severe sanctions;
c) educational sanctions: completion of specific educational or developmental activities as deemed appropriate. These may include, but are not limited to, service to the University or greater community, participation in educational seminars, written assignments, and written or oral apologies;
d) restitution: requirement that restitution to be made to another individual or the University for any loss or damage to personal or University property;
e) behavioural contract: a set of behavioural expectations, terms, and conditions. Any breach of this contract constitutes a violation offence and may result in more serious sanctions, including suspension or expulsion from the University;
f) no contact order: the student is required to have no direct or indirect contact (including but not limited to in- person, phone, email, text, social media, through a third party, etc.) with a specific individual or group as outlined in a behavioural contract;
g) behavioural bond: the student is required to provide a sum of money up to a maximum of $500.00 for a specific period of time [maximum one (1) academic year] and sign and abide by a contract. If, at the end of that time, the student has not breached the contract, the money will be returned. If they do breach the contract, any money collected will be used by Student Affairs for educational purposes and more severe sanctions may be imposed;
h) fines up to $500.00: fines may be applied for the following purposes:
(i) violations related to fire and fire safety, including smoking or tobacco use in violation of the Tobacco &
Smoke Free University Policy;
(ii) some examples of fines for first time violations include:
• $50.00 - Late Move out of Residence (per day)
• $60.00 - Setting off Fire Alarms/Failure to exit the building during a fire alarm
• $100.00 - Tampering with Fire Safety equipment
i) loss of privileges: loss of specified privileges for a designated time period. The lost privileges may include, but are not limited to, parking privileges, unrestricted access to the library, access to athletic facilities, and extra-curricular activities;
j) persona non grata (PNG): persona non grata is the designation given to an individual who is denied the privilege of entering specific parts of the University. If PNG individuals are found or seen in the area they are denied, then they will be subject to a charge by Security Services under the Trespass to Property Act;
 December 11, 2019, effective January 1, 2020 Page 16 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION IX: SANCTIONS AND REMEDIES
k) suspension (academic): loss of all academic privileges at the University for a specified period of time and/or until imposed conditions are met. The student is eligible to return after this time but may be required to fulfill specified non-academic conditions upon return. The suspension is noted on the student's transcript (see Appendix D for further details); and
l) expulsion: loss of all academic privileges at the University for an indefinite period. The expulsion is noted on the student's transcript (see Appendix D for further details).
Athletics Specific
107. In addition to the above sanctions, the following sanctions are only applicable to Student Athletes:
a) athletic financial awards: financial awards offered through Athletics and Recreation may be rescinded for a period of time or permanently;
b) community service (competitive teams): community service by the individual or team;
c) removal of funding (competitive teams): removal of funding for the team; and/or
d) suspension (competitive teams): suspension of the individual or team for one or more competitions or an entire season.
Residence Specific
108. In addition to the above sanctions, the following sanctions are only applicable to students living in Residence:
a) guest restrictions: restriction of a student’s right to host guests in Residence for a specified period of time;
b) Residence notice: notification that any kind of further offence will result in a formal process and may result in eviction. The notice may include a loss of privileges (e.g. access to space, attendance at Residence programs, etc.). This status is in place for the balance of the academic year in which it is assigned;
c) Residence probation: a formal notice informing the student that any kind of further offence will result in eviction. The Adjudicator normally writes the letter citing the reason(s), the terms, and the length of time it will be in place. The length and terms of the probation will be determined based on the circumstances;
d) room transfer: a student may be transferred to another hall when their behaviour is disruptive to their hall but does not warrant eviction from the Residence system. A room transfer under these circumstances is normally accompanied by a declaration that the Student is persona non grata in their original hall and an automatic probationary status for the remainder of the academic year;
e) denial of readmission: denial of readmission to Residence or participation in the lotteries to return to Residence are outcomes levied in serious cases at the discretion of the Director (HCS). This will be communicated in writing to the Student, indicating the reason(s) and the period of time for which it will be in effect; and
f) eviction: a student who is evicted from Residence must leave Residence within a time period determined by Housing and Conference Services. The time period will be commensurate with the seriousness of the offence, normally 24 hours, and reflect Housing and Conference Services’ assessment of the risk to persons and property within the hall if the student were to remain. Students evicted from Residence will not be eligible for readmission to Residence. Eviction from Residence is always accompanied by a declaration that the student is persona non grata (PNG) in all University Residences. Eviction does not affect nor will it appear on the student’s academic record. The student will receive a letter outlining the reason(s) for the eviction as well as any terms and conditions related to their removal from Residence. A copy of this letter will be forwarded to Security Services.
     December 11, 2019, effective January 1, 2020 Page 17 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION IX: SANCTIONS AND REMEDIES Roles, Sanctions, and Appeal Rights specific to Residence Students
109. The following chart illustrates the specific roles, sanctions, and appeal rights applicable to Residence Students.
          SANCTIONS
APPEALS
      Community Advisors (i.e. Student Affairs Staff)
• OralWarning
• EducationalOutcome
Sanctions appealable to the Residence Life Area
             • WrittenWarning
Coordinator, who has final decision
        Residence Life Area Coordinators (i.e. Student Affairs Administrators)
All Sanctions listed above, and: • Restitution
• Fineupto$500.00
• BehaviouralContract
• NoContact*
• RoomTransfer*
• GuestRestrictions*
• ResidenceNotice* *Asapprovedbythe Residence Life Coordinator
Violation and Sanctions appealable to the Student Affairs Adjudicator, who has final decision
                  Director (Student Support and Case Management Office), Case Managers
All Sanctions listed above, and:
• PersonaNonGrata(PNG) • Eviction*
*As approved by the Director (HCS)
Violation and Sanctions appealable to Director (HCS) who
           • Probation • DenialofReadmission*
has final decision
Eviction or Denial of Readmission appealable to the Dean of Students
           Director, Housing and Conference Services
All Sanctions listed above
Eviction or Denial of Readmission appealable to the Dean of Students
Appeals of PNG status reconsideration from residence(s) can be submitted after one year from time of issue
              REMEDIES
110. Remedies may be applied in addition to sanctions or may be a process by which appropriate sanctions are applied. Remedies may include but are not limited to:
a) mandated counselling;
b) training or coaching; and/or c) Restoration processes.
FAILURE TO COMPLY
111. Failure or refusal to comply/participate in any of the following, may result in an initiation of the Code procedures to determine sanctions for non-compliance.:
a) comply with the terms of a Voluntary Resolution (No Finding);
b) comply with the terms of a Resolution Agreement (with a Finding);
c) comply with the outcomes of Restorative Justice; and/or
d) participate in or complete outcomes and or sanctions.
December 11, 2019, effective January 1, 2020
Page 18 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION X: BEHAVIOUR PRIMARILY RELATED TO A HEALTH CONDITION SECTION X: BEHAVIOUR RELATED TO A HEALTH CONDITION
112. An alternative process is appropriate when there is reason to believe that behavior may be related to a health condition. These procedures do not preclude the University from responding to and addressing the student’s behaviour; but rather, outline an alternate approach with distinct procedures to support the student as well as to further understand how the health condition may have contributed to the behaviour. The intention of this approach is to enhance the understanding of the contributing factors that may have caused the behavior and to ensure access to supports and treatment, with the hope of reducing the likelihood of further behavior. In cases where it is determined that the behaviour is in violation of the Code and is directly related to a health condition, alternate outcomes/sanctions may be utilized as part of the resolution in recognition of the mitigating factors.
113. Where a Student Affairs Administrator who has referred a situation to this section has identified that there may be reason to believe that a student’s behaviour is related to a Health Condition (including a physical or mental disability, as defined by the Ontario Human Rights Code), the Student Affairs Administrator will review the option to proceed under this section with the student.
114. The student will be given an opportunity to review and respond to a document outlining the concerns raised, including the options available to proceed under this Code.
115. This section applies to the following:
a) behaviour prohibited under this Code;
b) behaviour prohibited under any other University code of behaviour where the Dean of Students determines that the student’s behaviour should be considered under this process;
c) behaviour giving rise to a reasonable apprehension of a risk of harm to the student or others; and/or
d) behaviour that suggests a student is unable to function in a University setting, even with accommodation(s), if required, and/or the University’s reasonable assistance.
Information Gathering Meeting
116. In non-imminent matters, Student Affairs reserves the right to meet with the student (if a meeting has not taken place already) in order to provide an overview of the Inquiry process and to inform the student of the behaviour that has been reported to be a violation of the Code.
117. If a meeting is not feasible, other forms of communication with the student will be utilized to ensure that the student has an opportunity to respond to the allegations, and to understand the procedures and explore the options available to the student.
Determination to Enact Procedures for a Student with a Health Condition
118. Based on the information available the Dean of Students shall review the information that has been gathered and determine if there are reasonable grounds to believe that the behavior is likely related to a health condition.
119. If the Dean of Students determines that it is reasonable to believe that the behaviour is likely related to a health condition, the situation will be considered if the following conditions are met:
a) it is determined there is no imminent risk posed by the student being on campus, or that the risk has been mitigated with interim measures;
     December 11, 2019, effective January 1, 2020 Page 19 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION X: BEHAVIOUR PRIMARILY RELATED TO A HEALTH CONDITION
 b) the student is deemed by the Dean of Students to be fit to adequately participate in these procedures; and
c) the student agrees to the matter proceeding under this section of the Code.
120. If the Dean of Students determines that there are no reasonable grounds to believe that the behaviour is relatedtoaHealthCondition,thecasewillberedirectedbacktotheappropriateprocess. Thisdeterminationdoes not preclude the student from raising their health condition as a consideration in the determination of any subsequent outcome/sanction.
Response to a Student with a Health Condition as it Pertains to the Code
121. When enacting these procedures, the following will be considered:
a) where a student’s behaviour is determined to be primarily related to a health condition, the University will make every reasonable effort to enable the student to continue their studies;
b) for students with a disability (as outlined by the Ontario Human Rights Code), the University shall ensure that the student is appropriately accommodated; and
c) in determining an appropriate response to a student’s behavior, the Dean of Students may review any previous, relevant, decisions under this Code or any other behavioural Code.
Review Meeting
122. If it is determined that it is appropriate to proceed under this section, a review meeting will be scheduled. The Review Meeting will include the student and may include; healthcare professionals or other experts as deemed appropriate. The student may bring a support person. If the student does not bring a support person, the University may appoint a support person if it determines that the student is in need of assistance.
123. The purpose of the Review Meeting is to review all relevant information and consider whether there are reasonable grounds to believe that the behavior in question is primarily related to a disability under the Human Rights Code and/or whether a health condition may be a mitigating factor related to the situation/behaviour. Consultations with appropriate professionals, supporting documentation and/or additional information provided by the student may further assist in this determination.
124. In addition, the review meeting may be used to:
a) more fully understand the contributing factors that caused the behaviour;
b) create a plan to support the student with the intent of making every reasonable effort to enable the student to continue their studies; and/or
c) ensure that necessary steps have been taken to appropriately accommodate the student through the process.
125. The student does not have to provide supporting medical documentation. However, the student may be requested to submit, in confidence, additional relevant documentation (e.g. a letter from the student’s health provider establishing that the behavior is related to a health condition). The absence of sufficient supporting documentation may affect the Dean of Students’ ability to conclude that the behaviour in question is primarily related to a health condition.
126. If there are sufficient grounds to believe that the behaviour may be related to a health condition, the Dean of Students may, at their discretion, consult with appropriate professionals and/or offices (e.g. Student Accessibility Services, Independent Medical Evaluation (IME)). The purpose of such consultations will be to
  December 11, 2019, effective January 1, 2020 Page 20 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES SECTION X: BEHAVIOUR PRIMARILY RELATED TO A HEALTH CONDITION
 identify whether it is reasonable to conclude that the health condition is contributing to the behaviour, including a determination of the health condition as a mitigating factor or a primary cause of the behavior.
127. In responding to the student’s behaviour the Dean of Students will consider the following:
a) the effect of the behaviour on the campus community;
b) any previous and/or concurrent violations of the Code;
c) the possibility of allowing the student to continue their studies; and
d) any accommodations or supports that could be put in place to assist the student, e.g. a behavior contract, wellness agreement, a mental health assessment by a regulated health professional, restriction to parts of campus, no-contact agreements, reduced course load, modified privileges, or, a voluntary or involuntary leave on compassionate grounds.
INVOLUNTARY OR VOLUNTARY WITHDRAWAL
128. Voluntary or involuntary leave withdrawal occurs when a student agrees or is required to temporarily discontinue studies at the University for either a specified time and/or until imposed conditions are met.
129. Once the withdrawal period has expired and/or the conditions have been met, the student is not required to re- apply for admission unless the Faculty can establish, to the satisfaction of the Dean of Students, that it is reasonable to do so as a result of the lapse of time. The withdrawal will not be noted on their transcript.
130. Students who return after a withdrawal may be required to fulfill other specified academic and non-academic conditions. One such condition may require the student to provide corroborating evidence that the health condition has sufficiently improved or is being managed.
131. If the student wishes to appeal the decision they may follow the Appeal procedures outlined in Appendix A: Appeals.
  December 11, 2019, effective January 1, 2020 Page 21 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES
APPENDIX A: APPEALS
 APPENDIX A: APPEALS
1. The decision from a lower level stays in effect unless and until it is overturned on an appeal by the Respondent. This means that submitting an appeal will not prevent the decision/sanctions being appealed from being carried out.
2. A Respondent who has been evicted must leave Residence before they are permitted to commence an appeal. If the appeal is successful, the Respondent will be considered for readmission to Residence in the first available space deemed appropriate for that Respondent by the Director (HCS).
3. Appeals for findings of violations of the Code that relate to the Discrimination & Harassment Policy and/or the Sexual Violence Policy shall be adjudicated as per clauses 13 and 14 below.
DECISIONS NOT RELATED TO DISCRIMINATION, HARASSMENT, AND SEXUAL VIOLENCE
4. Appeals by a Respondent are to be filed in letter format and are to be submitted to Student Affairs within 15
business days of receipt of the decision. The appeal must contain:
a) a copy of the decision;
b) a full statement of the grounds for the appeal;
c) the outcome sought; and
d) any relevant supporting documentation.
5. Grounds for an appeal may include but are not limited to:
a) the evidence did not warrant the finding;
b) the procedures in this Code were not properly followed;
c) new evidence was found which could not reasonably have been presented earlier; and/or
d) the sanction was not appropriate for the behaviour which occurred.
6. Parties to the appeal shall include the Appellant who shall be the student against whom a finding has been made (i.e. the Respondent during the Adjudication process), and the Respondent who shall be the University authority whose decision is being appealed.
7. Appeals shall be heard as follows:
a) decisions of the Student Affairs Administrator may be appealed to the appropriate Adjudicator:
(i) Case Manager decision appealed to the Director (SSCM);
(ii) Information on Residence specific appeals can be found in Appendix G (Roles, Sanctions, and Appeal
Rights specific to Residence Students);
(iii) Associate Director (A&R) appealed to the Director (A&R);
b) decisions of the Adjudicator may be appealed to the Dean of Students.
December 11, 2019, effective January 1, 2020 Page 22 of 32
         
CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX A: APPEALS
 8. The Appeal Adjudicator/Dean of Students may, after reviewing the case:
a) uphold the findings and/or sanctions;
b) reverse the finding and/or sanctions; and/or
c) modify the sanctions.
9. The Appeal Adjudicator/Dean of Students will normally provide written confirmation to the Appellant of the receipt of the appeal within 2 business days.
10. The Adjudicator will normally have 15 business days to conduct their investigation, which may include meeting with the parties, and shall then inform the Appellant in writing of their decision with reasons and any further right to appeal.
11. The decision of the Dean of Students is final unless the decision imposes a sanction of suspension, expulsion or involuntary withdrawal, or involuntary withdrawal.
12. Decisions of the Dean of Students that impose a sanction of suspension, expulsion or involuntary withdrawal (for violations that do not involve Sexual Violence) may be appealed to the Senate Board for Student Appeals within three weeks of receipt of the decision. Refer to the Student Appeal Procedures.
DISCRIMINATION, HARASSMENT, AND SEXUAL VIOLENCE RELATED DECISIONS
13. For sanctions that do not include suspension, expulsion, or withdrawal, the decision made by a Student Affairs Administrator may be appealed to the Dean of Students. When the Decision-Maker is the Dean of Students, the appeal will be to the Provost.
14. For sanctions that include suspension, expulsion, or withdrawal, the Decision made by Dean of Students may be appealed to the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence within three weeks of receipt of the decision. (see Hearing Procedures).
       December 11, 2019, effective January 1, 2020 Page 23 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX B: INTERIM MEASURES AND ONGOING SUPPORT OF ALL PARTIES APPENDIX B: INTERIM MEASURES AND ONGOING SUPPORT OF ALL PARTIES
132. At any stage in this Code it may be necessary to take interim measures in order to safeguard the environment of Complainants, Respondents, and/or Community Members who are involved or may be affected. Interim measures shall not be construed as evidence of either guilt or a finding of violation of this Code, or as an affirmation of innocence/finding of non-violation of this Code.
133. Interim measures will be reviewed on an ongoing basis throughout the process to ensure the measures remain necessary and appropriate in the circumstances. Interim measures are temporary and do not extend beyond the final resolution of a complaint.
134. Interim measures include, but are not limited to:
a) the rearrangement of academic/employment responsibilities or oversight;
b) the rearrangement of residence location (where possible);
c) adjustments in University activities (e.g. attendance at guest lectures, social events);
d) implementation of a No Contact Order; and/or
e) implementation of a Persona Non Grata designation.
135. When interim measures are in place, the person may continue to access relevant University support services, in compliance with the conditions of the interim measures.
136. For All Students the Director (SSCM), or the Dean of Students, may enact interim measures, in writing.
137. For Student-Athletes, the Director (A&R) may enact interim measures, in writing; this could include but is not
limited to suspension from games, practices, athletics facilities or athletic related events and/or functions.
138. For a Student Group event or activity, the Dean of Students may implement interim measures, in writing, including suspending the operations, and/or any planned events or functions, of a group until the situation is resolved.
139. For Residence Students the Director (HCS) may enact any combination of the following measures, in writing;
a) assign a Persona Non Grata (PNG) status, Guest Restrictions or a No Contact contract;
b) negotiate a Letter of Understanding with the Student, that outlines a plan for access to Residence while the process is ongoing;
c) transfer the Student to another Residence building. The Student will be deemed to be PNG from their original Residence building and any other Residence buildings as identified by the Director (HCS) until after the case has been heard. Every effort will be made to have the case adjudicated as expeditiously as possible;
d) provide alternate accommodation off campus; or
e) issue a suspension from Residence, citing a specific timeline and plan for the student to leave and return to Residence.
      December 11, 2019, effective January 1, 2020 Page 24 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX B: INTERIM MEASURES AND ONGOING SUPPORT OF ALL PARTIES Health Condition
140. In circumstances where there is a risk of harm to the student and/or community and the behaviour is believed to be linked to a Health Condition, or the student is not able to participate fully in the process, the Dean of Students may implement an interim leave of absence on compassionate grounds, until the student is able to demonstrate that they are able to fully engage in the process. If there are safety concerns, the onus will be on the student to provide assurance (e.g. medical assessment and/or documentation provided by a regulated health professional) to confirm they are ready to participate in the academic and social life of the University.
For Complaints of Discrimination, Harassment and/or Sexual Violence
141. The Response Team will consider and coordinate appropriate interim measures under the Discrimination & Harassment Policy and/or the Sexual Violence Policy, as they relate to all parties involved in the matter.
Exceptional Circumstances (Interim Suspension)
142. In exceptional circumstances, e.g. where the health and safety of the student or members of the University Community are compromised or at risk, the Provost may implement Interim Suspension, in writing, including altering or suspending the right of a student to be present on campus or to attend classes for an interim period before the case is resolved.
143. Within seventy-two (72) hours following the imposition of an interim suspension, the student shall be informed in writing of the reasons for the suspension. The student shall also be afforded the opportunity to respond to the allegations being made against them. Following that opportunity to respond, the Provost will then reassess the decision to suspend, and either revoke or continue it.
144. The alleged violation that led to the interim suspension shall be investigated and heard in accordance with the procedures contained within this Code. An assessment to determine a student’s readiness to return to studies may be required in some cases.
    December 11, 2019, effective January 1, 2020 Page 25 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX C: PEER CONDUCT BOARD
APPENDIX C: PEER CONDUCT BOARD PEER CONDUCT BOARD MEMBERSHIP
1. The Peer Conduct Board is made up of undergraduate and graduate students in good academic standing. Members are normally selected annually by a selection process to be determined each year by the Director (SSCM). The process shall include advertising the positions in appropriate student publications.
2. Each Peer Conduct Board member shall be appointed for a renewable one-year term. Members shall receive appropriate training to discharge their responsibilities.
PEER CONDUCT BOARD PANEL SELECTION
3. The Hearing of a case referred to the Peer Conduct Board shall be before a panel of a minimum of three members (the Panel). The Panel shall choose one member as the Chair (the Chair), who shall be responsible for the conduct of the deliberation portion of the hearing and for ensuring that a decision is made in a timely fashion.
4. In cases where the Respondent is an undergraduate student, every reasonable effort will be made for the Peer Conduct Board hearing, to consist of at least two undergraduate students.
5. In cases where the Respondent is a graduate student, every reasonable effort will be made for the Peer Conduct Board hearing, to consist of at least two graduate students.
6. No one shall serve on a Panel who has any direct interest or prior involvement in the case under consideration. Both the Respondent and the Panel member who feels there is a conflict are expected to express this to the Director (SSCM), prior to the beginning of the hearing.
PEER CONDUCT BOARD VOTING PROCEDURES
7. The Panel shall attempt to work on a consensus basis, failing which a majority vote will govern.
8. If the Panel has determined that a violation of the Code has occurred, before making a final decision on sanctions, the Panel shall consult with the Adjudicator regarding whether the Panel’s proposed sanctions are consistent with the sanctions imposed in similar cases.
    December 11, 2019, effective January 1, 2020 Page 26 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX D: RECORDS, TRANSCRIPTS, REGISTRATION, AND NOTATIONS
 APPENDIX D: RECORDS, TRANSCRIPTS, REGISTRATION, AND NOTATIONS RECORDS
1. Student Affairs shall maintain a confidential record of any finding of violation and related sanctions. These records include the documents and notes of the Administrator, Adjudicator and Dean of Students. The record shall be retained for five years after last use. The records involving transcript notations for suspensions and expulsions shall be retained permanently, or until the student’s petition to delete the transcript notation has been granted by Senate (the record shall be destroyed when the transcript notation is deleted). At the Dean of Student’s discretion, and after written notice to the student, a record may be retained longer than five years. Such notice shall cite the reasons for this decision and the extended retention date.
2. The purpose of this record, which shall be kept separate from any other of the student’s records, is to determine whether there has been a previous offence, before a sanction is levied. Records may be taken into consideration should a student seek a position of responsibility within Student Affairs only. Students will be asked to consent to a records check when applying for a position (e.g. when a student applies to be a Community Advisor, Welcome Week Representative etc.).
3. In the event that the case is dismissed or overturned on appeal, all records of the proceeding shall be removed from the student’s file.
4. Decisions of the Adjudicator and the Dean of Students, including a commentary on the type of misconduct occurring in a particular year and the sanctions applied, shall be reported in anonymized form, annually to Senate. No individuals will be identified in such a report. The University does not release confidential records regarding violations of the Code.
5. All records of Voluntary Resolution agreements for matters involving Sexual Violence will be retained by the Equity and Inclusion Office in compliance with the Office’s records retention schedule. The record is not a finding of Sexual Violence and shall not be reported as a violation of the Sexual Violence Policy or this Code.
6. Data gathering and record keeping for matters involving Sexual Violence will adhere to the requirements set out in the Sexual Violence Policy.
RESIDENCE SPECIFIC RECORDS
7. Housing and Conference Services shall maintain a record of each finding against a resident until the end of the current academic year. When probation, eviction, persona non grata (PNG), or denial of readmission outcomes are issued, these records will be retained by Student Affairs for a period of five years from the end of the academic year in which the decision was made.
8. Residence specific findings against the Student does not result in a notation on the Student’s academic transcript. All residence records may be taken into consideration in the event that a Student seeks a position of responsibility with Housing and Conference Services.
    December 11, 2019, effective January 1, 2020 Page 27 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX D: RECORDS, TRANSCRIPTS, REGISTRATION, AND NOTATIONS STUDENT’S STATUS - TRANSCRIPTS, REGISTRATION, AND NOTATIONS
9. While under investigation for an alleged violation of the Code a student may be permitted to withdraw formally from the University. However, this will not prevent the continuation of the process under this Code.
10. When an allegation of a Code violation is made against a student, and until the case has been resolved, the student will not be issued transcripts directly but, at the student’s request, transcripts will be sent to institutions or potential employers. If the student is subsequently found in violation of the Code and the conviction results in a transcript notation, the recipients of any transcripts will be so informed by the Registrar.
11. In the case of suspension the notation will read: "Suspended for Student Code of Conduct Violation by the Senate for ___ months (Date)." A student may petition Senate to remove the transcript notation after the minimum time specified by the Dean of Students or Senate Board for Student Appeals, as the case may be, when the suspension was imposed has elapsed.
12. In the case of expulsion the notation will read: "Expelled by the Senate for Student Code of Conduct Violation." If the Senate at some later date reinstates the student, this will be followed by the notation: "Reinstated by the Senate (Date)." Such a notation may be removed from a student’s transcript on petition to Senate, but not before five (5) years after the penalty commences.
 December 11, 2019, effective January 1, 2020 Page 28 of 32

CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX E: GLOSSARY OF TERMS APPENDIX E: GLOSSARY OF TERMS
Accommodations are adjustments to individuals’ academic or residence arrangements made to support them and/ or enhance their safety (e.g. a change in assignment deadlines or tutorial group, a change in residence location).
Advisor: A person of the individual’s choice who acts in an advisory role during the investigation and adjudication process (e.g. friend, family member, legal counsel). The Advisor may be present during investigation interviews and adjudication hearings. At the adjudication hearing the Advisor may consult with the student but shall not be allowed to speak.
Balance of Probabilities is the test to be met to show, by the weight of the evidence presented, that all of the facts necessary to make a finding of violation of the Code have a greater likelihood of being true than not.
Community Members include, but are not limited to: students (graduate, undergraduate, and continuing education), staff, faculty, medical residents, volunteers, visitors (including visiting professors), and institutional administrators and officials representing McMaster University.
Complainant is an individual identifying a violation of the Code for the University’s response.
Consent 1, in the context of sexual activity, is defined as the voluntary agreement of an individual to engage in the
sexual activity in question. The law also says that there is NO CONSENT where:
• the agreement is expressed by the words or conduct of a person other than the individual;
• the individual is incapable of consenting to the activity;
• the Respondent induces the individual to engage in the activity by abusing a position of trust, power or authority;
• the individual expresses, by words or conduct, a lack of agreement to engage in the activity;
• the individual, having consented to engage in sexual activity, expresses, by words or conduct, a lack of
agreement to continue to engage in the activity;
• the individual may be bodily harmed or is threatened with bodily harm; or
• the individual is under the age of consent.
Event (Authorized): Authorized events are University scheduled or University approved activities, occurring on or off University premises, e.g. public lectures, performances, placements (co-op or clinical), athletic events, work or study-related conferences/training sessions, etc. These events can include work or study-related travel. Events that are approved under the Policy on Students Groups (Recognition, Risk Assessment and Event Planning) are also authorized events.
Event (Non-authorized): Non-authorized events are events that are not scheduled or approved by the University and may occur on or off University premises e.g. group trips that have not been approved under the Policy on Student Groups (Recognition, Risk Assessment and Event Planning), drinking games in residence, house parties, etc.
Guest means a person who is visiting a student on campus.
1 This language is from the Sexual Violence Policy and will be revised as required to remain consistent with that Policy
December 11, 2019, effective January 1, 2020 Page 29 of 32
    
CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX E: GLOSSARY OF TERMS
Harassment means engagement in a course of vexatious comment or conduct that is known or ought reasonably to be known to be unwelcome. "Vexatious" comment or conduct is comment or conduct made without reasonable cause or excuse. Harassment includes Sexual and/or Gender-Based Harassment and Workplace Sexual Harassment.
Interim Measures are steps that are taken where the health and safety of the student or members of the University Community are compromised or at risk, and/or in order to safeguard the environments of individuals alleging violations of the Code and of individuals whose conduct is being questioned. Interim measures shall not be construed as evidence of either guilt or a finding of violation of the Code, or as an affirmation of innocence or finding that no violation of the Code has occurred.
No Contact Order includes restrictions on: registration for specific classes, other academic or non-academic activities, or attendance at specific meetings or events; direct or indirect contact (including but not limited to in person, by phone, email, text, social media, through a third party etc.) with a specific individual or group of individuals.
Persona Non Grata (PNG) is a designation, which is given to an individual who is denied the privilege of entering designated portion(s) of the University's buildings or grounds. If PNG individuals are found or seen in the area they are denied, they will be subject to a charge by Security Services under the Trespass to Property Act.
Peer Conduct Board Hearing means the adjudication process carried out by the Peer Conduct Board.
Primary Event Organizer means the individual who is leading the planning and implementation of an Event under
the Policy on Student Groups (Recognition, Risk Assessment and Event Planning).
Respondent is the individual about whom allegations have been made. For the purpose of Appendix A: Appeals,
the Respondent is the University authority whose decision is being appealed.
Restoration Processes: Processes focusing on restoring the losses suffered by Complainants, holding Respondents accountable for the harm they have caused, and building peace within communities. Restoration Processes are premised on the voluntary and cooperative participation of all parties in the resolution process. This process, which may not be appropriate or viable in all cases.
Sexual Assault 2 is an assault committed in circumstances of a sexual nature such that the sexual integrity of an individual is violated, and it includes, but is not limited to, any unwanted, non-consensual, sexual activity, such as unwanted kissing, fondling, sexual grabbing, and/or intercourse/rape.
Sexual Harassment3 means engaging in a course of vexatious comment or conduct against an individual because of sex, sexual orientation, gender identity or gender expression, where the course of comment or conduct is known or ought reasonably to be known to be unwelcome, or making a sexual solicitation or advance to an individual where the person making the solicitation or advance is in a position to confer, grant or deny a benefit or advancement to the individual and the person knows or ought reasonably to know that the solicitation or advance is unwelcome.
2 This language is from the Sexual Violence Policy and will be revised as required to remain consistent with that Policy 3 This language is from the Sexual Violence Policy and will be revised as required to remain consistent with that Policy
December 11, 2019, effective January 1, 2020 Page 30 of 32
   
CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX E: GLOSSARY OF TERMS
Sexual Violence 4 means any sexual act or act targeting a person’s sexuality, gender identity or gender expression, whether the act is physical or psychological in nature, that is committed, threatened or attempted against a person without a person’s consent, and includes sexual assault, sexual harassment, stalking, indecent exposure, voyeurism and sexual exploitation.
Student means any individual recorded by the University Registrar as enrolled in an educational course of study recognised by the Senate and for whom the University maintains education records.
Student Affairs Administrator means an individual appointed by the Dean of Students with authority to hear allegations of misconduct under the Code. Student Affairs Administrators include, but are not limited to: Case Managers, Residence Life Area Coordinators, the Residence Life Coordinator, the Associate Director of Athletics and Recreation, and the Athletic Services Coordinator.
Student Affairs Adjudicators are those in the position to adjudicate Administrative Formal Resolution Meetings and facilitate Peer Conduct Board Formal Resolution Meetings. They may also hear appeals of decisions made by Student Affairs Administrators. In most cases, this will be the Manager of Student Conduct and Community Standards.
Student Affairs Staff are those responsible for reporting violations, and collecting information at the time the situation takes place. This includes, but is not limited to, Community Advisors, Inter-University Athletic Coaches, etc.
Student-Athlete is defined as a student who has been selected to be a member of a varsity team or extramural competitive program. Students who belong to extramural competitive programs which do not have a selection process will be considered to be Student-Athletes once they have registered for the program.
Student Host means a person who has a Guest on campus.
Student Leader is defined as an executive member of a University Recognized Student Group or any member of
such a group operating in their capacity as a Primary Event Organizer.
Support Person is a person of the individual’s choice who acts in a supportive role but is not an active participant in the process (e.g. friend, Elder, parent, religious advisor).
University Premises means buildings and lands owned, leased, operated, controlled or supervised by the University and includes places or facilities used for the provision of the University’s courses, programs or services or for University approved or sponsored events or activities.
University Recognized Student Group includes organizations and student groups that have been recognized under the McMaster University Policy on the Recognition of Student Groups.
Voluntary Resolution are steps that are taken (e.g. arrangement of academic, work or living environment / conditions) to which both the Complainant and Respondent have agreed to.
4 This language is from the Sexual Violence Policy and will be revised as required to remain consistent with that Policy
December 11, 2019, effective January 1, 2020 Page 31 of 32
  
CODE OF STUDENT RIGHTS AND RESPONSIBILITIES APPENDIX G: FLOWCHARTS APPENDIX F: RELATED POLICIES AND LEGISLATION
This Code is to be read in conjunction with the following policies, statements, and collective agreements. Normally the policies listed below act independently of one another. However, they may intersect with the application of other University policies or procedures regarding the same matter. Any question of the application of this Code or related policies shall be determined by the Associate Vice-President (Students and Learning) and Dean of Students, in consultation with the administrator of the other policy or policies. The University reserves the right to amend or add to the University’s policies and statements from time to time (this is not a comprehensive list):
• Academic Accommodation for Religious, Indigenous and Spiritual Observances, Policy on
• Academic Accommodation of Students with Disabilities
• Academic Integrity Policy
• Alcohol Policy
• Conflict of Interest Guidelines- Undergraduate Studies and Graduate Studies
• Discrimination and Harassment Policy
• Employee/Labour Relations – Collective Agreements (students acting in their role as Teaching Assistants are acting as University employees and should refer to their collective agreement.)
• First Year Experience (Orientation and Transition) for Undergraduate Students, Policy on the
• Fraternities, Sororities and Honor Societies, Policy on
• Freedom of Information and Protection of Privacy Act
• Group Conflict and Senate Mediation Procedures
• Ontario Human Rights Code
• Personal Health Information Protection Act
• Professional Behavior Code for Graduate Learners, Health Sciences
• Professional Behavior Code for Undergraduate Learners, Health Sciences
• Sexual Violence Policy
• Statement on Building an Inclusive Community with a Shared Purpose
• Statement and Guidelines on Inclusive Communications
• Students Groups (Recognition, Risk Assessment and Event Planning), Policy on
• University Technology Services (UTS) – Policies and Procedures
• Violence in the Workplace, Policy on
`;

export const discriminationPolicy = `
Discrimination & Harassment Policy
PREAMBLE
1. All members of the University Community (“Community Members” see clause 5 below) have a right to study, work, and live in an environment that is free of Discrimination and Harassment.
2. The purpose of this Policy is to:
a) articulate McMaster University's commitment to Discrimination and Harassment prevention and response;
b) identify services and resources related to Discrimination and Harassment that are available to all members of the McMaster University Community (“University Community”); and
c) explain the complaint and reporting options, supports, and accommodations that are available to all members of the University Community who experience Discrimination and/or Harassment.
SCOPE
3. This Policy prohibits Discrimination and/or Harassment on the grounds articulated in the Ontario Human Rights Code: age; ancestry, colour, race; citizenship; ethnic origin; place of origin; creed; disability; family status; marital status (including single status); gender identity, gender expression; receipt of public assistance (in housing only); record of offences (in employment only); sex (including pregnancy and breastfeeding); and sexual orientation.
4. This Policy prohibits Harassment which is a course of vexatious comment or conduct that is known or ought reasonably to be known to be unwelcome. Harassment may include Sexual and/or Gender-Based Harassment, Workplace Sexual Harassment, as well as Harassment on any one or more of the grounds articulated in the Human Rights Code.
5. This Policy expressly prohibits any discriminatory or harassing action and/or conduct, verbal or non-verbal, directed at or about one or more individuals or groups, that creates a poisoned environment which interferes with academic or work performance, in a manner that exceeds academic freedom.
6. The Policy applies to:
a) all Members of the University Community (“Community Members”) include: students (graduate, undergraduate, and continuing education), staff, faculty, medical residents, volunteers, visitors (including visiting professors), and institutional administrators and officials representing McMaster University; and
b) all University-related activities, which are activities (authorized and non-authorized) where there is a clear nexus to the working or learning environment at the University (on and off University premises).
7. When allegations of Sexual Harassment are to be processed under the Sexual Violence Policy, there may be circumstances where the allegations in a Complaint necessitate following the procedures under both this Policy and the Sexual Violence Policy.
8. Where a Complaint is filed that involves behaviour prohibited by this Policy, as well as behaviour more appropriately dealt with under the Sexual Violence Policy, the Complaint may be processed under the Sexual Violence Policy. However, any proceedings related to the Complaint will determine if there has
         Effective January 1, 2020 Page 1 of 30
Discrimination & Harassment Policy Section I: Introduction
 been a violation of the Sexual Violence Policy, in addition to any findings related to this Policy. The decision regarding which policy or policies are most appropriate will be made by the University.
9. Unless otherwise specified in this Policy, the Policy and its provisions apply where the University has the jurisdiction to pursue, adjudicate, or take steps to safeguard the University community.
MCMASTER’S COMMITMENT
10. The University upholds a fundamental commitment to freedom of expression and association for all its members and to academic freedom for faculty. In exercising those freedoms, all its members are required to respect the rights and freedoms of others, including the right to freedom from Discrimination and Harassment.
11. The University recognizes that supporting an environment free of Discrimination and Harassment is important for the well-being and dignity of individuals as well as for the overall climate and welfare of the University community. Accordingly, the University is committed to providing the policies, resources, and organizational structures required to support an environment free from Discrimination and Harassment.
12. As part of this commitment the University provides a range of educational and community-building activities that foster understanding of human rights issues and of the harm incurred by their violation and communicate the expectation of and support for a work, study and living environment free from Discrimination and Harassment.
13. When a University complaint process is initiated, the University is committed to providing an intake, investigation, and adjudication process that is timely and follows the principles of procedural fairness.
14. The University has a legal and ethical responsibility to address Complaints of Discrimination and Harassment, to enable accessible processes for resolution, and to provide support to all Community Members involved in such processes. The Administration may also respond when it is identified that there is Systemic Discrimination and/or Harassment that needs to be addressed.
POLICY REVIEW
15. The Policy will be reviewed annually for compliance with the Occupational Health and Safety Act.
16. For all other purposes, the Policy be reviewed every three years at the same time as the Sexual Violence
Policy.
TERMS AND DEFINITIONS
17. A full glossary of terms and definitions may be found in Appendix A.
18. For the purpose of interpreting this document:
a) words in the singular may include the plural and words in the plural may include the singular;
b) Directors, members of the Administration, and Decision-Makers in this Policy may, where appropriate, delegate their authority;
c) AVP Equity and Inclusion means the Associate Vice-President, Equity and Inclusion;
Effective January 1, 2020 Page 2 of 30
      
Discrimination & Harassment Policy Section I: Introduction
d) Chief Human Resources Officer means the Assistant Vice-President & Chief Human Resources
Officer;
e) Dean of Students means the Associate Vice-President (Students and Learning) and Dean of Students;
f) Director (ELR) means the Executive Director, Employee & Labour Relations;
g) Director (HRDR) means the Director, Human Rights & Dispute Resolution Program;
h) Director (SVPRO) means the Director, Sexual Violence Prevention and Response Office;
i) Director (SSCM) means the Director, Student Support & Case Management Office;
j) Hearing Procedures means the Hearing Procedures for the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence;
k) Provost means the Provost and Vice-President (Academic);
l) Tenure and Promotion Policy means the McMaster University Revised Policy and Regulations with
Respect to Academic Appointment, Tenure and Promotion; and
m) SecurityServicesmeansSecurityandParkingServices.
 Effective January 1, 2020 Page 3 of 30

Discrimination & Harassment Policy
Section II: Options
 SECTION II: OPTIONS
OPTIONS
19. Community Members who believe there has been a violation of the Policy have a number of options available to them: Dispute Resolution, Reporting (under the Policy and includes filing a Complaint, and/or Voluntary Resolution), making a Criminal Report, or Other External Options.
20. Prior to pursuing one of the options below, Community Members should read Section III: Confidentiality. It is important to be aware that, depending on the circumstances and nature of the incident disclosed, the University may be obliged to:
a) conduct a triage of violence risk;
b) initiate a University-led investigation of the incident regardless of whether or not the individual making the disclosure chooses to participate in the process; and/or
c) notify Hamilton Police Services of the allegation and name of the individual who is the subject of the allegation and/or contact other relevant agencies to fulfill legal obligations.
21. Community Members who have experienced unwelcome comment or conduct by another person are encouraged, although not obliged, to make it known to the other person that their behaviour is unwelcome. In situations where it is believed that addressing the other person could lead to an escalation of the comment or conduct, or to safety risks, this approach is not recommended. If the problem is not resolved, or if the Community Member feels they cannot speak directly to the other person, they should notify an appropriate Supervisor within the University of the matter.
DISPUTE RESOLUTION
22. Individuals may inform/seek assistance from their Supervisor (or person who has formal oversight of their area), or from an Intake Office, to help address the situation.
23. Options for dispute resolution may include some fact-finding discussion, clarification of the issues, facilitated conversations, coaching, reconciliation, workplace restoration, settlement conferences, restoration processes, and mediation.
REPORTING
24. A Report occurs when an individual determines that they wish to pursue an official Complaint through one or more of the following avenues: a Complaint to the University under this Policy, Voluntary Resolution under this Policy, a Criminal Report through the justice system, or other reporting options external to this Policy. Reporting options are not mutually exclusive.
25. Individuals who file a Report may ultimately be required to attend/participate in a hearing, either internal to the University, or external through arbitration, or criminal court, etc.
26. Community Members may choose to contact any one of the Intake Offices to make a Complaint pursuant to the Policy.
        Effective January 1, 2020 Page 4 of 30

Discrimination & Harassment Policy Section II: Options Complaint
27. A Complaint is made when an individual submits an Incident Report to their Supervisor, or a written statement of Complaint to an Intake Office, making an allegation of Discrimination and/or Harassment because they wish to initiate a formal University process, which may require an investigation into the allegations and finding of facts.
Voluntary Resolution
28. In certain circumstances, a Complainant and Respondent may be interested in attempting a resolution of a Complaint at any time before the completion of an Investigation.
29. The following conditions must be present before considering if Voluntary Resolution is a viable option:
a) the University is able to meet its responsibilities pursuant to the Occupational Health & Safety Act; and
b) the Complainant and the Respondent both agree to:
(i) attempt to reach a resolution in good faith;
(ii) the methods to be used to seek resolution; and
(iii) the terms of what would constitute resolution.
30. A meeting between the Complainant and the Respondent will not be a requirement for Voluntary Resolution.
31. A Voluntary Resolution may be facilitated by an Intake Office, and the methods may include fact-finding discussions, clarification of the issues, facilitated conversations, mediation, coaching, voluntary no contact agreements, reconciliation, restoration processes, workplace restoration processes.
CRIMINAL REPORT
32. A Criminal Report is made when an individual files a report of an incident with a police service or with Security Services. Filing a Criminal Report with Security Services will result in a report to Hamilton Police Service.
OTHER EXTERNAL OPTIONS
33. Individuals may exercise other University options external to this Policy (e.g. the grievance provisions of applicable collective agreements, or other options external to the University (e.g. through civil litigation or Ontario Human Rights Code provisions).
           Effective January 1, 2020 Page 5 of 30

Discrimination & Harassment Policy OPTIONS CHART
Section II: Options
  Complaint Intake Offices
Human Rights & Dispute Resolution Program, Equity and Inclusion Office (All Community Members) Student Support & Case Management Office (SSCM), Student Affairs (Students)
Employee and Labour Relations (ELR), Human Resources Services (Faculty and Staff members) Faculty of Health Sciences (FHS) Professionalism Office (FHS Community Members)
      DISPUTE RESOLUTION
Individuals may seek assistance from their Supervisor (or person who has formal oversight of their area) or from an Intake Office to help address the situation.
CRIMINAL REPORT
When an individual files a criminal report with a police service or with Security Services. Filing a criminal report with Security Services will result in a report to Hamilton Police Services.
OTHER EXTERNAL OPTIONS
Options external to the University (e.g. civil litigation or Ontario Human Rights Code provisions) or other options external to this Policy (e.g. grievance provisions of applicable collective agreements)
COMPLAINT
A Complaint can be initiated through completion of an Incident Report submitted to a Supervisor, or through submitting a written Complaint through one of the Intake Offices (listed above) making an allegation of Discrimination and/or Harassment because they wish to initiate a University process, which may require an investigation and finding of facts.
VOLUNTARY
RESOLUTION
Attempting a resolution of a Complaint at any time before the completion of an Investigation.
       Effective January 1, 2020
Page 6 of 30

Discrimination & Harassment Policy
Section III: Confidentiality
 SECTION III: CONFIDENTIALITY
CONFIDENTIALITY (LIMITATIONS)
34. The University recognizes the importance of confidentiality both for individuals coming forward to seek Dispute Resolution, or Report an experience of Discrimination and/or Harassment, and for individuals who are the subject of a Complaint, and will take steps to protect the confidentiality of both parties to the extent permitted by its legal obligations outlined below.
35. The University and its employees and agents will protect personal information and handle records in accordance with the Freedom of Information and Protection of Privacy Act and the Personal Health Information Protection Act, where applicable in the circumstances, with the provisions of applicable collective agreements and, in the case of health care providers, in keeping with any professional obligations.
36. When making a Report to any University office individuals shall receive clear and transparent information about the level of, and limits to, confidentiality that apply.
37. Individuals may speak in confidence to an Intake Coordinator, subject to the provisions of this section and the limitations below. The University will share identifying information only in circumstances where it is necessary in order to administer this Policy, to address safety concerns, or to satisfy a legal reporting requirement. In such circumstances, the minimum amount of information needed to allow such concerns to be addressed, or to meet such requirements, will be disclosed. Such circumstances include those where:
a) an individual is at risk of harm to self;
b) an individual is at risk of harming others;
c) there are reasonable grounds to be concerned about risk of future violence or the safety of the University and/or broader community;
d) disclosure is required by law, for instance, suspected abuse of someone under the age of 16, reports of intimate partner/domestic violence or to comply with the Occupational Health and Safety Act, the Workplace Safety and Insurance Act, or with human rights legislation; and/or
e) to comply with the reporting requirements of regulatory bodies and/or professional licensing bodies.
38. Where there are reasonable grounds to be concerned about risk of future violence or the safety of the broader community or the public, or where the University is otherwise obligated to do so, the University may report the incident to Hamilton Police Services. In these situations:
a) the relevant Decision-Maker will be responsible for making the decision to disclose information to Hamilton Police Services;
b) the name of the Respondent, if known, will be shared; and
c) the name of the Complainant will not be shared without their consent, unless doing so would address a reporting obligation or mitigate a safety risk.
39. Some offices and Community Members have additional limitations to confidentiality because of their particular reporting requirements or professional obligations. For example:
a) those faculty and staff etc. who are regulated health care providers (such as those in the Student Wellness Centre) are required to maintain the confidentiality of patient information disclosed during a
Effective January 1, 2020 Page 7 of 30

Discrimination & Harassment Policy Section III: Confidentiality
 medical interaction. These health care providers are not permitted to share information except in very limited circumstances, such as with the express permission of the patient, or if the health care provider believes that disclosure is necessary to eliminate or reduce a significant risk of serious harm to a person or group of persons, in accordance with their professional obligations; and
b) Special Constables in Security Services are required to investigate reports of abuse of someone under the age of 16 and reports of intimate partner/domestic violence and to lay charges in all cases when there are reasonable grounds to believe a criminal offence has been committed, regardless of whether the target of the violence wishes to have further involvement with the legal process.
40. As part of the University’s internal responsibility to maintain an environment free from Discrimination and Harassment, information shall be shared on a need-to-know basis.
41. Procedural limits to confidentiality may also occur if the University is subject to legal proceedings that, in the opinion of the Provost or the Vice-President (Administration), require the disclosure of information.
42. The importance of preserving the confidentiality of Complaints and any related proceedings will be explained to all parties as a necessary measure to protect the integrity of the proceedings.
Effective January 1, 2020 Page 8 of 30

Discrimination & Harassment Policy Section IV: Procedural Guidelines SECTION IV: PROCEDURAL GUIDELINES
ADVISOR / SUPPORT PERSON
43. An Individual who is a party to a Complaint may be accompanied by an Advisor or Support Person, or legal counsel at any stage of any of the procedures outlined in this Policy. Any costs of any accompaniment are to be borne by the party.
TIME LIMITATIONS FOR BRINGING FORWARD A COMPLAINT
44. Individuals are encouraged to report a Complaint at the earliest opportunity but must do so within one year of the date on which the incident of Discrimination and/or Harassment is alleged to have occurred. If there was a series of incidents it must be reported within one year of the date of the last event. However, if the Response Team is satisfied there are compelling reasons and/or extenuating circumstances, or where a Complainant engages this Policy and the Sexual Violence Policy and the allegations cannot be separated from one another, Complaints may be pursued outside of this timeframe. When the Complainant is no longer a Community Member, the Response Team will review the Complaint and determine whether it is within the scope of the Policy and may decide to initiate a University Investigation.
REPRISAL
45. The University prohibits reprisal or threats of reprisal against any person who, sincerely and in good faith, makes use of this Policy or participates in any process held under its jurisdiction. Any individual who is concerned that they are the subject of reprisals or threats should report their concerns to an Intake Office. Where appropriate, sanctions under the relevant policy (including this Policy, Sexual Violence Policy, and/or the Code of Student Rights and Responsibilities) legislation or contract, may be applied against the individual(s) responsible for the reprisal.
INTERIM MEASURES AND ONGOING SUPPORT OF ALL PARTIES
46. At any stage in the proceedings under this Policy it may be necessary to take Interim Measures in order to safeguard the environment of Community Members who are involved or may be affected. Interim Measures shall not be construed as evidence of either guilt or a finding of violation of this Policy, or as an affirmation of innocence/finding of non-violation of this Policy.
47. The authority to approve Interim Measures will rest with the relevant Decision-Maker in line with the Respondent’s reporting structure.
48. Interim Measures will be reviewed on an ongoing basis by the Director of the appropriate Intake Office throughout the process to ensure the measures remain necessary and appropriate in the circumstances. Interim Measures are temporary and do not extend beyond the final resolution of a Complaint.
49. Interim Measures may include, but are not limited to, the rearrangement of academic/employment responsibilities or oversight, an administrative leave of absence, the rearrangement of residence location (where possible), adjustments in University activities (e.g. attendance at guest lectures, social events), implementation of a no contact order, or implementation of a persona non grata declaration.
50. In the event an Employee is directed to take an administrative leave as an Interim Measure, the conditions of the administrative leave shall accord with the terms of any applicable collective agreement. In the absence of
       Effective January 1, 2020 Page 9 of 30

Discrimination & Harassment Policy Section IV: Procedural Guidelines
 an applicable collective agreement, (e.g. where the employee is faculty or The Management Group (TMG)) the leave shall be without loss of pay or benefits. It is understood that an administrative leave as an Interim measure is non-disciplinary and is designed to separate a person from a situation or another person until the matter has been resolved. During such period, the person can continue to access relevant University Support Services.
51. Should an Investigation extend beyond six months, there will be a full review by the Response Team in consultation with the Decision-Maker to assess progress, considering fairness to all parties, thoroughness, timeliness, and confidentiality, and to consider any necessary next steps.
DATA GATHERING & RECORD KEEPING
52. The Equity and Inclusion Office is responsible for collecting and reporting annual anonymized, aggregate data on Consultations, Complaints, Dispute Resolution, Investigations, and all Outcomes and Sanctions, to the Senate and the Board of Governors.
53. Data for the annual report is collected and maintained by the Equity and Inclusion Office and includes data provided to that office by Employee & Labour Relations, the Student Support & Case Management Office, the Faculty of Health Sciences Professionalism Office, and Security Services. The purpose of the annual report is to inform education and training initiatives.
54. In developing the annual report, the utmost care will be taken to ensure that individuals’ identities remain confidential and that data gathering does not discourage individuals who wish to disclose from coming forward.
55. All notes, materials, investigation reports, and decisions, pertaining to Complaints will be kept by the relevant Intake Office for seven years. These records may be retained longer, subject to the discretion of the appropriate Director.
  Effective January 1, 2020 Page 10 of 30

Discrimination & Harassment Policy Section V: Roles and Responsibilities SECTION V: ROLES AND RESPONSIBILITIES
SENIOR ADMINISTRATION
56. The Senior Administration has overarching responsibility for maintaining a University environment in which Discrimination and Harassment are unacceptable, for providing the resources required to support such an environment, and for ensuring the timely development and review of relevant policies through Senate and Board of Governors procedures.
57. In addition, the Senior Administration is responsible for enabling Community Members to function with the highest standards of integrity, accountability, and responsibility. Activities may include disseminating information about the University’s expectations and providing education to all Community Members on issues related to Discrimination and Harassment.
ASSOCIATE VICE-PRESIDENT, EQUITY AND INCLUSION
58. The AVP Equity and Inclusion oversees the Equity and Inclusion Office, which houses the Human Rights and Dispute Resolution Program.
DIRECTOR, HUMAN RIGHTS & DISPUTE RESOLUTION
59. The Director (HRDR) is responsible for working in close partnership with individuals and offices involved in administering this Policy, as may be appropriate, including but not limited to: the Response Team, Investigators, Intake Offices, Decision-Makers, Senior Administrators, the University Secretariat, and University Counsel, to ensure the effective administration of this Policy and the Sexual Violence Policy.
60. The Director (HRDR) is responsible for providing guidance to Community Members who consult on requests for dispute resolution that they have received, providing information on how to support the individual and facilitate a referral, and assessing whether the limits of confidentiality apply.
EQUITY AND INCLUSION OFFICE
61. Prevention through education is a fundamental aspect of the University’s commitment to addressing Discrimination and Harassment. The Equity and Inclusion Office, with the support of the Senior Administration, is responsible for coordinating the University's proactive educational and training initiatives and programs, which include:
a) educational initiatives for the campus community on issues related to discrimination and/or harassment; and
b) training initiatives for frontline campus community and student-facing service providers, and for those with particular responsibilities related to this Policy.
62. The Equity and Inclusion Office is also responsible for promoting the Health & Safety Training Program’s Violence & Harassment Prevention training, that is coordinated by Environmental & Occupational Health Support Services, as well as other relevant training programs designed and delivered by campus partners.
63. The University Secretary, in consultation with the Equity and Inclusion Office will ensure that the members of the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence receive appropriate education and training on Discrimination and Harassment.
 Effective January 1, 2020 Page 11 of 30

Discrimination & Harassment Policy Section V: Roles and Responsibilities INTAKE OFFICES
64. The Intake Offices share responsibility for assisting with Dispute Resolution, and the intake of Complaints relating to Discrimination and/or Harassment. There are four Intake Offices:
a) Human Rights & Dispute Resolution Program (HRDR), Equity and Inclusion Office (All Community Members)
b) Student Support & Case Management Office (SSCM), Student Affairs (Students)
c) Employee and Labour Relations (ELR), Human Resources Services (Faculty or Staff members)
d) Faculty of Health Sciences (FHS) Professionalism Office (FHS Community Members)
65. Intake Coordinators are responsible for ensuring the Complainant fully understands the procedures of the Policy and what may result from the decision to file a Complaint.
66. The statement of Complaint will be reviewed by the respective Intake Office Director, who may consult with the Director (HRDR), to determine the applicability of this Policy, the Sexual Violence Policy, and/or other University policies.
67. The Director of the relevant Intake Office will review any Interim Measures on an ongoing basis throughout the process to ensure they remain necessary and appropriate in the circumstances.
RESPONSE TEAM
68. The Response Team is activated by the relevant Intake Office Director, where a case potentially presents community risk and/or requires consultation with multiple partners for a coordinated response.
69. The Response Team will be chaired by the relevant Intake Office Director, and may include the Director (SVPRO), as a consultant, and as appropriate in the circumstances, the Directors of other relevant campus partners.
70. As necessary the relevant Intake Office Director may draw upon representatives of other key services and/or departments (e.g. Director of Housing and Conference Services, Director of the Student Wellness Centre, etc.), disclosing identities only on a need-to-know basis in order to appropriately respond to the matter.
71. When the allegations include the potential for an ongoing/further risk of violence, the relevant Intake Office Director may, on behalf of the Response Team, consult with the Director of Security Services, disclosing identities on a need-to know basis.
INVESTIGATORS
72. All Investigators, whether internal or external to the University, will have training and expertise in the area of Discrimination and Harassment, and in using an intersectional, anti-oppressive, and a trauma-informed approach to Investigation processes. Investigators will follow the mandate and scope of the investigation as determined by the University.
      Effective January 1, 2020 Page 12 of 30

Discrimination & Harassment Policy Section V: Roles and Responsibilities DECISION-MAKERS FOR INTAKE AND INVESTIGATIONS
73. The Decision-Makers are, as applicable, the:
a) Assistant Vice President & Chief Human Resources Officer for staff Respondents;
b) Associate Vice-President (Students and Learning) & Dean of Students for student Respondents;
c) Provost and Vice-President (Academic) for faculty Respondents; and
d) Executive Vice-Dean & Associate Vice-President (Academic) for faculty Respondents in the Faculty of Health Sciences.
74. More than one Decision-Maker may be involved in cases where a Respondent has more than one type of relationship with the University (such as a student who also holds a staff appointment).
75. When the Respondent is a Community Member but is not currently a student, staff, or faculty member, the investigation report will be reviewed by the Decision-Maker related to the Respondent’s area of activity at the University.
76. Decision-Makers are responsible for reviewing and responding to Investigation Reports (see Investigation Procedures), and authorizing appropriate Interim Measures.
77. When the line of authority is unclear, the Provost and Vice-President (Academic) or the Vice-President (Administration), as appropriate, will determine the appropriate individual in the line of authority.
78. Should there be a conflict of interest with a Decision-Maker, the appropriate Vice-President shall assume the responsibilities of the Decision-Maker under this Policy. Similarly, if that Vice-President is in a conflict then another Vice-President or the President shall act.
79. Decision-Makers are responsible for determining whether Hamilton Police Services need to be notified and for authorizing that notification, as specified in clauses 37 - 38.
SECURITY SERVICES SPECIAL CONSTABLES
80. All Special Constables will receive training on intersectional, anti-oppressive, and trauma-informed response to Reports of Discrimination and/or Harassment.
81. When a Community Member elects to make a Criminal Report, Security Services will report the incident to Hamilton Police Services, liaise with the person and police, and refer the individual to the relevant Intake Office Director.
   Effective January 1, 2020 Page 13 of 30

Discrimination & Harassment Policy Section V: Roles and Responsibilities SUPERVISORS
82. Within the University Community it is recognized that there are various types of supervisors:
Academic Supervisors, Academic Administrators, and Workplace Supervisors. All such supervisors are responsible for:
a) modeling acceptable standards of behavior;
b) supporting any employee or student who, in good faith, reports a potential violation of the Policy;
c) contacting one of the Intake Offices for guidance and advice to address the matter as appropriate in the circumstances, and cooperating with Intake Offices during Investigations, and/or in the implementation of Interim Measures, and/or sanctions;
d) completing all required training and ensuring that the people they are supervising are trained appropriately on the Policy and RMM 300 Health and Safety Training Program; and
e) being aware of their roles and responsibilities as set out in the Occupational Health and Safety Act with respect to Workplace Violence and Workplace Harassment.
EMPLOYEES
83. Employees are required to complete initial and periodic refresher training in Violence and Harassment Prevention, in accordance with the Health & Safety Training Program.
84. Employees have additional legal obligations when they become aware of incidents of Workplace Harassment and Workplace Violence as follows:
a) in accordance with the Occupational Health and Safety Act, all employees of the University must report any incident of Workplace Harassment and/or Workplace Violence to their Supervisor or to an Intake Office. Any immediate or urgent incidents should also be reported to Security Services.
b) Workplace Supervisors must take every reasonable precaution to protect the safety of an employee. Supervisors are expected to consult with either the Director (HRDR) or Employee and Labour Relations (ELR) office when they become aware of an incident of Workplace Harassment and/or Workplace Violence. Any immediate or urgent incidents should be reported to Security Services.
COMMUNITY MEMBERS
85. All Community Members are responsible for contributing to and maintaining an environment that is free of Discrimination and Harassment, and for participating in education and training programs.
             Effective January 1, 2020 Page 14 of 30

Discrimination & Harassment Policy
Section VI: Investigations
 SECTION VI: INVESTIGATIONS
INTAKE OF COMPLAINTS
86. If an individual wishes to file a Complaint of Discrimination and/or Harassment for the University to address, they must contact an Intake Coordinator in one of the Intake Offices (refer to page 6).
87. Any Community Member who is the subject of an allegation under the Policy will be assisted by an Intake Office Director who will ensure that they receive support and guidance, and are in receipt of relevant information, services and supports relating to the Policy and Procedures.
88. The Intake Coordinators are responsible for:
a) ensuring that Complainants are aware of the options available to them in seeking a response;
b) assisting Complainants in understanding what may be involved in, and what may result from, each of the options; and
c) assisting a Complainant who wishes to move forward with completing a Complaint Intake Form, which includes a description of: what happened; who was involved in the incident; when and where the incident occurred; who (if anyone) saw or heard the incident, or saw or heard something of relevance prior to or after the alleged incident(s) of Discrimination and/or Harassment.
89. Complaint Intake Forms will be reviewed by the relevant Intake Office Director, who will review and assess the Complaint on an immediate and priority basis in order to, as appropriate:
a) confirm that it fits within the scope of the Policy;
b) consider requirements pursuant to the Occupational Health and Safety Act
c) conduct a triage of violence risk, and may consult with the Director of Security Services;
d) consider whether the matter may be resolved through Dispute Resolution and whether the parties are interested in voluntary resolution, and whether it is feasible/appropriate in the circumstances;
e) determine if an investigation is required, and, if so, set parameters accordingly, in consultation with the appropriate Decision-Maker (including, for example, which University office will be involved; internal or external investigator; timelines, mandate and scope for the investigation);
f) convene the Response Team, as needed, to provide consultation;
g) consider and coordinate appropriate Accommodations and/or Interim Measures as they relate to all parties
involved in the matter; and
h) as necessary, draw upon representatives of relevant services or departments in order to appropriately respond to the matter.
90. At any time during proceedings under this Policy, the Response Team, when convened, may determine it is necessary to disclose identities on a need-to know basis in order to administer the Policy.
Decision to Not Investigate
91. In some circumstances a decision may be made to not investigate. The decision will be communicated in writing, with reasons, to the Complainant by the relevant Decision-Maker. The Complainant will be informed of their right to make a written request for review of the decision to the Vice-President to whom the Decision- Maker reports.
    Effective January 1, 2020 Page 15 of 30

Discrimination & Harassment Policy Section VI: Investigations UNIVERSITY INITIATED INVESTIGATION
92. The University may become aware of situations where a University-initiated Investigation may be warranted, including, but not limited to circumstances where:
a) allegations are made about the conduct of a Community Member by an individual who is not, or is no longer, a Community Member;
b) one or more individuals disclose experiences of Discrimination and/or Harassment involving one individual or multiple individuals within a group/organizational environment;
c) the University has a duty to investigate pursuant to the Occupational Health and Safety Act;
d) the power differential in the alleged incident indicates the potential for a pattern of repeated
Discrimination and/or Harassment; and/or
e) situations reveal broader issues to be addressed, including concerns for a Poisoned Environment.
93. The Intake Office Director, in collaboration with the Director (HRDR) and other appropriate members of the Response Team, will consult with the appropriate Decision-Maker(s) to determine whether an investigation is warranted, on the basis of both the circumstances and nature of the allegations.
94. Individuals have the right not to participate as a Complainant in any University-Initiated Investigation that may occur.
INVESTIGATION PROCEDURES
95. Respondents have the right to know the case against them, and to produce any relevant documentation, evidence, or other information, and identify witnesses to the Investigator in response to any allegations.
96. The Investigator will impartially collect evidence and interview those witnesses they deem relevant in relation to the Complaint. The Investigator may request that the appropriate authority at the University adjust the scope and the manner in which the investigation will be conducted in order to ensure a thorough and fair investigation process.
97. All Community Members are expected to meet with the Investigator if requested to do so and to participate in good faith.
98. Complainants and Respondents have the option of being accompanied by a Support Person or Advisor.
99. All those who meet with an Investigator are required to keep confidential the Investigation and any information shared, to ensure the integrity of the proceedings. Failure to do so could be considered a breach of privacy and could be subject to a sanction under the relevant University policy.
100. An individual who was not previously identified as a Respondent but who, during the course of an Investigation, is identified as a potential Respondent (by the Investigator and with the approval of the University) will be notified and given an opportunity to meet with the Investigator and to respond to any allegations.
101. If during the course of the Investigation the Investigator believes the Complaint is frivolous (it does not have any serious purpose or value; is of little or no weight, worth, or importance), or is vexatious (instituted without sufficient grounds and only to cause annoyance) the Investigator shall refer the matter back to the Response Team to determine the next steps.
  Effective January 1, 2020 Page 16 of 30

Discrimination & Harassment Policy
Section VI: Investigations
  COMPLAINT
Written Complaint through one of the Intake Offices making an allegation of Discrimination and/or Harassment because they wish to initiate a University process, which may require an investigation and finding of facts.
REVIEW AND CONSULTATION
Complaint Intake Forms will be reviewed by the relevant Intake Office Director who may consult with the Director (HRDR), on an immediate and priority basis to assess the Complaint. Intake Office Directors may convene, in consultation with the Director (HRDR), the Response Team, to provide consultation.
        DECISION TO NOT INVESTIGATE
APPEAL
Complainant may make a written appeal to the appropriate VP to decide.
DECISION TO INVESTIGATE
         STUDENT RESPONDENT
INVESTIGATION & ADJUDICATION
FACULTY RESPONDENT
INVESTIGATION & ADJUDICATION
VOLUNTARY
RESOLUTION
Attempting a resolution of a Complaint at any time before the completion of an Investigation.
STAFF RESPONDENT
INVESTIGATION & ADJUDICATION
Effective January 1, 2020
Page 17 of 30

Discrimination & Harassment Policy Section VII: Adjudication and Decisions SECTION VII: ADJUDICATION AND DECISIONS
ADJUDICATION
102. Decision-Makers shall decide, on a balance of probabilities, whether the alleged Violation of the Policy has occurred.
103. Where a Respondent has more than one type of relationship with the University (such as a student who also holds a staff appointment) the relevant Decision-Makers may decide to adjudicate the matter jointly and any sanctions and remedies may be administered under one or both of the processes relevant to the Respondent’s status.
STUDENT RESPONDENT
104. The Investigation Report will be provided to the Director (SCCM) or Dean of Students as appropriate, to consider and decide upon the findings and recommendations contained in the report and adjudicate the outcome.
105. Sanctions and remedies will be processed in accordance with the procedures in the Code of Student Rights and Responsibilities ("the Code").
106. In matters where the sanctions do not include suspension, expulsion, or withdrawal (voluntary or involuntary), the Respondent may appeal the outcome to the Dean of Students. When the Decision-Maker is the Dean of Students, the appeal will be to the Provost.
107. In matters where the sanctions include a suspension, expulsion, or withdrawal (voluntary or involuntary), the Respondent may appeal the decision made by the Dean of Students to the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence. (see Hearing Procedures).
        STUDENT RESPONDENT INVESTIGATION AND ADJUDICATION
under the Code of Student Rights and Responsibilities
      FINDING OF NO VIOLATION
Sanctions
Do Not Include Suspension, Expulsion, or Withdrawal
APPEAL
to the Dean of Students
FINDING OF VIOLATION
Sanctions
Includes Suspension, Expulsion, or Withdrawal
APPEAL
Hearing Before a DHSV Tribunal
           Effective January 1, 2020
Page 18 of 30

Discrimination & Harassment Policy Section VII: Adjudication and Decisions FACULTY RESPONDENT
108. The Investigation Report will be provided to the Decision-Maker (the Provost or the Executive Vice-Dean & Associate Vice-President (Academic) as appropriate) to consider the findings and recommendations contained in the report.
109. When considering the findings and recommendations, the Decision-Maker may consult with relevant offices (e.g. the Equity and Inclusion Office, Employee & Labour Relations, etc.) to ensure that outcomes are consistently applied, and are appropriate to relevant legislation, professional standards and regulations, and/or licensing bodies.
110. If the Decision-Maker makes a finding of violation of the Policy, the Decision-Maker will recommend the appropriate sanctions and/or remedies.
111. If the Respondent accepts the findings and the sanctions and/or remedies recommended by the Decision- Maker, the sanctions and/or remedies will be implemented, and the matter will be closed.
Referral to Hearing
112. If the Respondent does not accept the recommendations, or the Decision-Maker believes that suspension
from the University is the appropriate sanction, the matter will be referred to a DHSV Tribunal for a hearing.
113. If it is determined by the Decision-Maker that Removal Proceedings should be initiated, the matter will be
referred directly to the Procedures for Removal under the Tenure and Promotion Policy. FACULTY RESPONDENT INVESTIGATION & ADJUDICATION
       Decision-Maker
      FINDING OF NO VIOLATION
FINDING OF VIOLATION AND DETERMINATION OF SANCTIONS/REMEDIES
          Referral Directly to a
REMOVAL HEARING
under the Tenure and Promotion Policy
Recommendation of
SUSPENSION
Referral to Hearing
RESPONDENT DOES NOT ACCEPT finding, sanctions/remedies. Referral to Hearing
HEARING
RESPONDENT ACCEPTS finding and sanctions/remedies
   before a Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence
Effective January 1, 2020 Page 19 of 30

Discrimination & Harassment Policy Section VII: Adjudication and Decisions STAFF RESPONDENT
114. The Investigation Report will be provided to the Chief Human Resources Officer to consider the findings and recommendations contained in the report.
115. If the Chief Human Resources Officer makes a finding of violation of the Policy, the matter will be referred to the Director (ELR) to support the Workplace Supervisor in the processes to determine appropriate remedies and/or sanctions to ensure that outcomes are consistently applied, and are appropriate to relevant legislation, professional standards and regulations, collective agreements and/or licensing bodies.
116. In the case of a staff member who is a member of a union, the right to appeal the remedies and/or sanctions is within the grievance and arbitration processes of the collective agreement, as may be applicable.
117. In the case of a staff member who is not a member of a union (e.g., members of The Management Group, interim employees), and except in the case of termination, the staff member may submit a written appeal of the remedies and/or sanctions imposed by the Workplace Supervisor to the Chief Human Resources Officer.
118. In the case where the Respondent’s reporting line is through to the Chief Human Resources Officer, the appeal will be made to the Vice-President (Administration).
STAFF RESPONDENT INVESTIGATION & ADJUDICATION
Chief Human Resources Officer
FINDING OF NO FINDING OF VIOLATION VIOLATION
DETERMINATION OF SANCTIONS/REMEDIES
Governed by the collective agreement where applicable, and in accordance with labour and employment laws.
                   NON-UNION
(e.g., TMG, interim employees), and except in the case of termination, the staff member may submit a written appeal of the sanctions and/or remedies to the Chief Human Resources Officer.
UNION
The right to appeal a disciplinary decision is within the grievance and arbitration processes of the applicable collective agreement.
Effective January 1, 2020
Page 20 of 30

Discrimination & Harassment Policy Section VII: Adjudication and Decisions COMMUNITY MEMBER RESPONDENT
119. When the Respondent is a Community Member but is not currently a student, staff, or faculty member, the relevant Decision-Maker (related to the Respondent’s area of activity at the University) will consider the recommendations contained in the report.
120. If the Decision-Maker makes a finding of violation of the Policy, the Decision-Maker will decide on the appropriate sanctions/remedies.
NOTIFICATION OF OUTCOME
Respondent
121. Respondents will receive a written decision from the relevant Decision-Maker, that will include:
a) the decision with respect to a Finding or No Finding of Violation of the Policy;
b) reasons for the decision;
c) a summary outlining the findings;
d) if the outcome is no finding of violation of the Policy the matter will be closed;
e) if the outcome is a finding of violation of the Policy, the Respondent will be informed of the process by which sanction(s) and/or remedies will be recommended or ordered (as per the relevant adjudication process related to the Respondent); and
f) where relevant, confirmation of any Interim Measures that will remain in place until sanctions are imposed.
Complainant
122. If the matter has been referred to a Hearing the Complainant will be informed of the referral.
123. Within the constraints of relevant legislation, the Complainant will be informed of the findings and reasons that are directly related to their complaint.
124. In all cases, information about any sanctions/remedies that have direct relevance to the Complainant will be provided to them.
Regulatory / Professional Licensing Bodies
125. Where required by a regulatory / professional licensing body, the relevant findings will be communicated to that professional licensing body.
Affected parties
126. Other affected parties will be informed about the findings and/or any sanctions/remedies that have a direct impact on them, within the constraints of relevant legislation.
SYSTEMIC AND PREVENTIVE INTERVENTIONS
127. Investigations may reveal broader systemic issues to be addressed as a future preventative measure, regardless of whether or not there has been a finding of Discrimination and/or Harassment. In such instances, appropriate intervention measures may be recommended by Decision-Makers and /or the AVP Equity and Inclusion.
          Effective January 1, 2020 Page 21 of 30

Discrimination & Harassment Policy Section VIII: Sanctions and Remedies SECTION VIII: SANCTIONS AND REMEDIES
SANCTIONS
128. Sanctions shall be proportional to the severity of the offence, considering any aggravating, mitigating and/or contextual factors. Previous findings of a violation of this Policy or a related violation of the Sexual Violence Policy will be taken into account when sanctions are determined, and the severity of sanctions may be greater as a result. Sanctions may be used independently or in combination for any single violation and may be varied and depending on the nature of the Respondent’s relationship with the University may be administered under more than one process.
129. Sanctions may include, but are not limited to:
a) written reprimand;
b) inclusion of the decision, or summary of the decision as appropriate to comply with confidentiality requirements, in a specified file (e.g. Tenure & Promotion Dossier) of the Respondent, for a specified period of time;
c) the exclusion of the Respondent from, or oversight during, one or more designated University activities or duties;
d) a No Contact Order, which may include restrictions on: registration for specific classes, other academic /non-academic activities, or attendance at specific meetings or events; direct or indirect contact (including but not limited to in person, by phone, email, text, social media, through a third party etc.) with a specific individual or group of individuals;
e) a Persona Non Grata (PNG) declaration, which is undertaken when an individual is denied the privilege of entering designated portion(s) of the University's buildings or grounds. If individuals issued a PNG are found or seen in the area they are denied, they will be subject to a charge by Security Services under the Trespass to Property Act;
f) for Student Respondents, all sanctions in the Code of Student Rights and Responsibilities for findings of Discrimination and/or Harassment, including but are not limited to: behavioural contract/bond, suspension, expulsion; and for Residence students, residence probation, room transfer, denial of readmission, eviction;
g) for staff or faculty, Suspension or Recommendation for Suspension, as applicable, suspension involves relieving the Respondent of their University duties and denying them access to University facilities and services for a stated period of time and may be with or without pay and/or benefits. A recommendation for suspension of a faculty Respondent shall be dealt with in accordance with Section V of the Tenure and Promotion Policy and the common law where applicable; and
h) for staff or faculty, Dismissal or Recommendation for Removal, as applicable. A recommendation for removal of a faculty Respondent shall be dealt with in accordance with Section VI of the Tenure and Promotion Policy and the common law where applicable.
REMEDIES
130. Remedies may include but are not limited to: a) mandated counselling;
b) training or coaching;
c) Restoration Processes / Workplace Restoration Processes.
             Effective January 1, 2020
Page 22 of 30

Discrimination & Harassment Policy
Appendix A: Definitions
 APPENDIX A: DEFINITIONS
All definitions in this Policy include, but are not limited to, the definitions articulated in the Ontario Human Rights Code and described in the Occupational Health and Safety Act.
Accommodations under this Policy are adjustments to individuals’ academic, workplace, or residence arrangements made to support them and/ or enhance their safety (e.g. a change in assignment deadlines or tutorial group, a change in supervisory arrangements, a change in residence location).
Advisor: A person of the individual’s choice who acts in an advisory role during the complaint and investigation process (e.g. friend, family member, union representative, legal counsel), but is not a witness or potential witness in the matter. The Advisor may be present during Investigation interviews but may not participate as a representative. The Advisor may assist the individual at a Hearing before a Tribunal of the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence.
Agent: Anyone hired by the University or working on behalf of the University such as an external investigator or a physician or other health care professional.
Balance of Probabilities is the test to be met to show, by the weight of the evidence presented, that all of the facts necessary to make a determination that a violation of the Policy has occurred, have a greater likelihood of being true than not.
Community Members include, but are not limited to: students (graduate, undergraduate, and continuing education), staff, faculty, medical residents, volunteers, visitors (including visiting professors), and institutional administrators and officials representing McMaster University.
Complainant: The individual who files a Complaint alleging a violation of the Policy for the University’s response. Complaint: A Complaint is made when an individual notifies an Intake Coordinator of an allegation under the
Policy or files an incident report with their Supervisor and seeks the University’s response.
Confidentiality: Refers to the obligation of an individual or organization to safeguard entrusted information. The practice of confidentiality includes obligations to protect information from unauthorized access, use, disclosure, modification, loss or theft.
Creed: includes but is not necessarily limited to religious beliefs and practices. Creed may also include non- religious belief systems that, like religion, substantially influence a person’s identity, worldview and way of life. The following characteristics are relevant when considering if a belief system is a creed under the Human Rights Code. A creed: is sincerely, freely and deeply held; is integrally linked to a person’s identity, self-definition and fulfilment; is a particular and comprehensive, overarching system of belief that governs one’s conduct and practices; addresses ultimate questions of human existence, including ideas about life, purpose, death, and the existence or non-existence of a Creator and/or a higher or different order of existence; has some “nexus” or connection to an organization or community that professes a shared system of belief.
Disability: Any degree of physical disability, infirmity, malformation or disfigurement that is caused by bodily injury, birth defect or illness and, without limiting the generality of the foregoing, includes diabetes mellitus, epilepsy, a brain injury, any degree of paralysis, amputation, lack of physical co-ordination, blindness or visual impediment, deafness or hearing impediment, muteness or speech impediment, or physical reliance on a guide dog or other animal or on a wheelchair or other remedial appliance or device; a condition of mental impairment or a developmental disability; a learning disability, or a dysfunction in one or more of the processes involved in
Effective January 1, 2020 Page 23 of 30
   
Discrimination & Harassment Policy Appendix A: Definitions
 understanding or using symbols or spoken language; and a mental health disorder/illness; or an injury or disability for which benefits were claimed or received under the insurance plan established under the Workplace Safety and Insurance Act.
Discrimination means an unjust or prejudicial form of unequal treatment, whether imposing extra burdens or denying benefits, based on any of the grounds articulated in the Human Rights Code. It may be intentional or unintentional. It may involve direct actions that are discriminatory on their face, or it may involve rules, practices or procedures that appear neutral, but disadvantage certain groups of people (systemic discrimination). Discrimination may take obvious forms, or it may happen in very subtle ways. Even if there are many factors affecting a decision or action, if Discrimination is one factor, then that is a violation of this Policy.1
Dismissal: Dismissal/termination proceedings for staff Respondents shall be dealt with in accordance with the established policies and procedures and by the terms of existing contracts of employment or collective agreements and the common law where applicable.
Dispute Resolution: Engaging in discussions, as appropriate, to assist a Community Member in resolving a dispute or concern, or addressing a situation, in situations where a Report has not been made.
DHSV Tribunal: A Tribunal of the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence. Employee: Where applicable, employee is used to refer to staff (see below) and faculty (see below).
Ethnic Origin: Statistics Canada states that “ethnic origin” refers to the cultural origins of a person’s ancestors. In the Human Rights Code, the ground of ethnic origin overlaps with a more commonly used term, “ethnicity,” which refers to a shared cultural heritage or nationality. Ethnic groups might be distinguished on the basis of cultural traits such as language or shared customs around family, food, dance and music. People who share an ethnic origin, ethnicity or ancestry may or may not share the same racial identity.
Event (Authorized): Authorized events are University scheduled or University approved activities, occurring on or off University premises, e.g. public lectures, performances, placements (co-op or clinical), athletic events, work or study-related conferences/training sessions, etc. These events can include work or study-related travel. Events that are approved under the Policy on Students Groups (Recognition, Risk Assessment and Event Planning) are also authorized events.
Event (Non-authorized): Non-authorized events are events that are not scheduled or approved by the University and may occur on or off University premises e.g. group trips that have not been approved under the Policy on Students Groups (Recognition, Risk Assessment and Event Planning), drinking games in residence, house parties, etc.
Expulsion applies to student Respondents and is the loss of all academic privileges at the University for an indefinite period.
Faculty are defined as academic teaching staff, clinical faculty, and senior academic librarians who are members of the “teaching staff”. Teaching staff as defined in the McMaster University Act means the employees of the University or of a college affiliated with the University who hold the academic rank of professor, associate professor, assistant professor or lecturer.
1 Modified Language from “A policy primer: Guide to developing human rights policies and procedures (1996; revised December 2013) © Queen's Printer for Ontario, 2013. Reproduced with permission.
Effective January 1, 2020 Page 24 of 30
     
Discrimination & Harassment Policy Appendix A: Definitions
 Frivolous, Vexatious Complaints: A Complaint may be considered frivolous if it does not have any serious purpose or value; is of little or no weight, worth, or importance. A Complaint may be considered vexatious if instituted without sufficient grounds and only to cause annoyance.
Harassment means engagement in a course of vexatious comment or conduct that is known or ought reasonably to be known to be unwelcome. "Vexatious" comment or conduct is comment or conduct made without reasonable cause or excuse. Harassment includes Sexual and/or Gender-Based Harassment and Workplace Sexual Harassment.
Incident Report: An incident report is a report completed by a Community Member and signed by their Supervisor when an incident/injury occurs in their working environment while they are engaged in University- related activities.
Interim Measures: Steps that are taken in order to safeguard the environments of all individuals. Interim Measures shall not be construed as evidence of either guilt or a finding of violation of the Policy, or as an affirmation of innocence or finding that no violation of the Policy has occurred.
No Contact Order: Includes restrictions on: registration for specific classes, other academic or non-academic activities, or attendance at specific meetings or events; direct or indirect contact (including but not limited to in person, by phone, email, text, social media, through a third party etc.) with a specific individual or group of individuals.
Persona Non Grata (PNG): An official declaration that an individual is denied the privilege of entering designated portion(s) of the University's buildings or grounds. If individuals issued a PNG are found or seen in the area they are denied, they will be subject to a charge by Security Services under the Trespass to Property Act.
Poisoned Environment means an environment where harassing and/or discriminatory conduct , on the basis of a person’s sexuality, gender identity or gender expression, is found to be sufficiently severe, intimidating, hostile, offensive, and/or pervasive to cause significant and unreasonable interference to a person’s study or work environment. A Poisoned Environment can interfere with and/or undermine work or academic performance and can cause emotional and psychological stress for some employees or students not experienced by other employees or students. As such, it results in unequal terms and conditions of employment or study and prevents or impairs full and equal enjoyment of employment or educational services, benefits, or opportunities. Although a person may not be the target of the conduct, a person may feel the effects of certain harassing or discriminatory conduct at their place of work or study.
Recommendation for Removal: A recommendation for removal of a faculty Respondent will be dealt with in accordance with Section VI of the Tenure and Promotion Policy and the common law where applicable.
Respondent: Those about whom allegations have been made in a Complaint process.
Restoration Processes: Processes focusing on restoring the losses suffered by Complainants, holding Respondents accountable for the harm they have caused, and building peace within communities. Restoration Processes are premised on the voluntary and cooperative participation of all parties in the resolution process. This process, which may not be appropriate or viable in all cases, can be facilitated by an Intake Office.
Senior Administration: For the purposes of this Policy, Senior Administration refers to the President, Provost and Vice-President (Academic), and Vice-President (Administration).
 Effective January 1, 2020 Page 25 of 30

Discrimination & Harassment Policy Appendix A: Definitions
 Sexual Harassment2 means engaging in a course of vexatious comment or conduct against an individual because of sex, sexual orientation, gender identity or gender expression, where the course of comment or conduct is known or ought reasonably to be known to be unwelcome, or making a sexual solicitation or advance to an individual where the person making the solicitation or advance is in a position to confer, grant or deny a benefit or advancement to the individual and the person knows or ought reasonably to know that the solicitation or advance is unwelcome.
Staff: Employees of the University including, but not limited to: The Management Group (TMG), unionized employees, temporary employees, casual employees, non-teaching staff3, Sessional Faculty, Post-doctoral Fellows, and Teaching Assistants.
Student: A student is any individual recorded by the University Registrar as enrolled in an educational course of study recognised by the Senate and for whom the University maintains education records.
Supervisor: there are various types of supervisors within the University Community, which include the following:
• Academic Supervisor who oversees the academic work of a student, the most common example being a
faculty member overseeing a graduate student’s academic work;
• Academic Administrator is any faculty or staff member acting in their capacity as supervisor/administrator within a Faculty, Academic Department, etc., which includes, but is not limited to, Department Chairs, Deans, or other supervisors who oversee the work of a Community Member (e.g. a faculty member overseeing a Post-Doctoral fellow / technician / undergraduate or graduate student performing research in the faculty member’s laboratory).
• Workplace Supervisor is “a person who has charge of a workplace or authority over a Worker” (Occupational Health and Safety Act). Supervisors are responsible for knowing the Duties of Supervisors under the Act.
Support: The provision of resources appropriate to the individual and the circumstances. This may include access to the Student Wellness Centre, Employee Family Assistance Program, and/or McMaster Students Union (MSU). Support resources do not include the provision of legal counsel.
Support Person: A person of the individual’s choice who acts in a supportive role but is not an active participant in the process (e.g. friend, Elder, parent, religious advisor). The Support Person may be present during Investigation interviews but may not participate as a representative.
Suspension involves relieving a faculty or staff Respondent of their University duties and denying them access to University facilities and services for a stated period of time, which may be with or without pay and/or benefits. A recommendation for suspension of a faculty member will be dealt with in accordance with Section V of the Tenure and Promotion Policy and the common law where applicable. Suspensions of staff members will be dealt with in accordance with established policies and procedures and by the terms of existing contracts of employment or collective agreements and the common law where applicable. For a student Respondent, suspension is the loss of all academic privileges at the University for a specified period of time and/or until imposed conditions are met. The student is eligible to return after this time but may be required to fulfill specified non-academic conditions upon return.
2 Source: Government of Ontario, Ontario Human Rights Code 2019
3 "non-teaching staff" means the employees of the University and of a college affiliated with the University who are not members of the teaching staff –The McMaster University Act, 1976
Effective January 1, 2020 Page 26 of 30
    
Discrimination & Harassment Policy Appendix A: Definitions
 Systemic Discrimination: Policies, practices and institutional procedures which, deliberately or not, have the effect of creating or perpetuating disadvantage and discrimination against identifiable groups on grounds prohibited by the Human Rights Code.
Tenure and Promotion Policy: The McMaster University Revised Policy and Regulations with Respect to Academic Appointment, Tenure and Promotion.
Voluntary Resolution: Steps taken (e.g. arrangement of academic, work or living environment / conditions) to resolve or remedy a Complaint, with which both the Complainant and Respondent have agreed.
Workplace Harassment4 means engaging in a course of vexatious comment or conduct against a worker in a workplace that is known or ought reasonably to be known to be unwelcome; or workplace sexual harassment.
Workplace Restoration is the establishment or re-establishment of harmonious working relationships between individuals and within a team, group or unit.
Workplace Sexual Harassment 5 means engaging in a course of vexatious comment or conduct against a worker in a workplace because of sex, sexual orientation, gender identity or gender expression, where the course of comment or conduct is known or ought reasonably to be known to be unwelcome; or
making a sexual solicitation or advance where the person making the solicitation or advance is in a position to confer, grant or deny a benefit or advancement to the worker and the person knows or ought reasonably to know that the solicitation or advance is unwelcome.
Workplace Violence6 means: the exercise of physical force by a person against a worker, in a workplace, that causes or could cause physical injury to the worker; an attempt to exercise physical force against a worker, in a workplace, that could cause physical injury to the worker; a statement or behaviour that it is reasonable for a worker to interpret as a threat to exercise physical force against the worker, in a workplace, that could cause physical injury to the worker.
Worker: The definition of a Worker includes: a person who performs work or supplies services for monetary compensation; and a person who performs work or supplies services for no monetary compensation under a program approved by a college of applied arts and technology, university or other post-secondary institution. Unpaid students, learners and trainees who are workers under the Occupational Health and Safety Act have the same duties and rights as paid workers. Placement employers have the same duties to protect the health and safety of unpaid students, learners or trainees who are workers under the Occupational Health and Safety Act as they do to protect their paid workers. The definition of “worker” does not include a volunteer who works for no monetary payment of any kind.
  4 Occupational Health and Safety Act
5 Government of Canada Restoring The Workplace Following A Harassment Complaint: A Manager's Guide 6 Occupational Health and Safety Act
Effective January 1, 2020 Page 27 of 30
 
Discrimination & Harassment Policy
Appendix B: Resources
 APPENDIX B: RESOURCES
Community Members who make a Complaint, or who are the subject of an allegation, are encouraged to contact any of the Intake Offices to ensure that they are in receipt of relevant information and services.
Support for the University Community
 Human Rights & Dispute Resolution Program, Equity and Inclusion Office  Faculty of Health Sciences Professionalism Office
 Security Services
 Chaplaincy Centre
Additional Support for Students
 Student Wellness Centre (personal counselling and medical services)
 Student Support & Case Management (support and guidance about the Code of Student Rights and
Responsibilities)
 Indigenous Student Services (community support and resources for Indigenous students)
 Women and Gender Equity Network, McMaster Student Union (peer support and resources)
 Graduate Students Association Health & Dental Plans (health benefits include access to psychological counselling in the community)
Additional Support for Staff and Faculty
 Union or Association
 Employee & Labour Relations
 Employee and Family Assistance Program (access to professional counsellors, legal guidance and other supportive services available to staff and faculty)
Support in the Broader Community
 Good2Talk (24/7 phone support for students offered by professional counsellors)
 Sexual Assault/Domestic Violence Care Centre
 Hamilton Police Services – Victim Services Branch
 John Howard Society or Elizabeth Fry Society (for individuals in conflict with the law)
Guidance about a Policy and/or Procedures
 Equity and Inclusion Office
 Employee & Labour Relations
 Student Support & Case Management  University Secretariat
Independent Resource
 Ombuds Office provides an independent, impartial, and confidential process through which students may pursue a just, fair and equitable resolution of a University related concern.
                            Effective January 1, 2020 Page 28 of 30

Discrimination & Harassment Policy
Appendix C: Jurisdiction
 APPENDIX C: JURISDICTION
1. Complaints may be made, or Investigations initiated about any alleged violation of this Policy involving any Community Member, including members of recognized groups, teams and clubs. The Policy may extend to incidents that occur off campus where there is a clear nexus to the working and/or learning environment at the University and recognizes that social media conduct may give rise to a violation of the Policy.
2. Nothing in this Policy is meant to supersede the terms and conditions of any collective agreement, or any other contractual agreement, entered into by the University and its employee groups. In the event that the provisions of this Policy contradict any such collective or contractual agreement, the collective or contractual agreement governs, to the extent of the contradiction.
3. To the extent that this Policy affects the terms and conditions of employment of faculty of the University, it may be subject to discussion and/or approval in accordance with the University policy entitled, The Joint Administration/Faculty Association Committee to Consider University Financial Matters and to Discuss and Negotiate Matters Related to Terms and Conditions of Employment of Faculty, revised by the Board of Governors on October 20, 1988 (the 'Joint Administration/Faculty Association' policy).
4. Should a Complainant, with respect to the subject matter of a Complaint dealt with under this Policy and/or the Sexual Violence Policy, seek redress under the Ontario Human Rights Code, the Criminal Code, the Occupational Health and Safety Act, the provisions of an applicable collective agreement, or through civil litigation, or any other forum external to the University, the appropriate Decision-Maker, in consultation with the Director (HRDR), and/or relevant Intake Office Director, will determine whether proceedings under this Policy will be initiated.
5. If proceedings under this Policy and/or the Sexual Violence Policy have already been initiated, the appropriate Decision-Maker, in consultation with the Director (HRDR) and/or relevant Intake Office Director, will determine in the circumstances whether or not the proceedings under this Policy will:
a) be permanently discontinued;
b) be disallowed; or
c) be suspended until proceedings in the external or other forum are concluded, although Interim Measures
may be put in place to safeguard the environments of the parties involved.
6. If a jurisdictional issue arises between the University and an affiliate, off-site entity or other third party, a senior officer of the affiliate/third party, and the University Provost or Dean and Vice-President (Health Sciences) or relevant Decision-Maker in conjunction with the University Vice-President (Administration), will attempt a resolution, which may include a joint investigation or an agreement to share the findings and/or other relevant outcomes with the other party. In the absence of any agreement to the contrary, the University will proceed with the investigation according to University policy and procedures.
7. This Policy is not intended to supersede or interfere with the criminal justice system; all persons have the right to pursue legal avenues.
8. Respondents in a Complaint procedure must be Community Members. If a person alleged to have engaged in Discrimination and/or Harassment is not currently a Community Member, the University has no jurisdiction to pursue or adjudicate the incident. However, the University reserves the right to take whatever steps it considers appropriate to safeguard the University Community.
9. As part of the University’s commitment to a Discrimination and Harassment free working, studying and living environment, all external agencies, third-party service providers, and independent contractors who do business on the University and are considered agents of the University will be informed of the existence of this Policy and of the University’s expectation that these external entities shall govern themselves accordingly while doing business with the University. Information to this effect will be included in all contracts.
     Effective January 1, 2020 Page 29 of 30

Discrimination & Harassment Policy Appendix D: Related Policies and Legislation APPENDIX D: RELATED POLICIES AND LEGISLATION
This Policy is to be read in conjunction with the following policies, statements, and collective agreements. Any question of the application of this Policy or related policies shall be determined by the Provost and Vice President (Academic) or the Vice President (Administration) as appropriate, and in conjunction with the administrator of the other policy or policies. The University reserves the right to amend or add to the University’s policies and statements from time to time (this is not a comprehensive list):
• Academic Accommodation of Students with Disabilities
• Academic Freedom, Statement (SPS E1)
• Accessibility – University Policy on
• Code of Conduct for Faculty and Procedures for Taking Disciplinary Action
• Code of Student Rights and Responsibilities
• Complaint Resolution Procedure for TMG
• Conflict of Interest Guidelines- Undergraduate Studies and Graduate Studies
• Employee & Labour Relations – Collective Agreements
• Faculty General Grievance Procedure
• Freedom of Information and Protection of Privacy Act
• Hearing Procedures for the Board-Senate Hearing Panel for Discrimination, Harassment and Sexual Violence
• Ministry of Training, Colleges and Universities Act
• Ontario Human Rights Code
• Occupational Health and Safety Act
• Personal Health Information Protection Act
• Professional Behavior Code for Graduate Learners, Health Sciences
• Professional Behavior Code for Undergraduate Learners, Health Sciences
• Senate Resolutions re Group Conflict
• Senate Mediation Procedures
• Sexual Violence Response Protocol
• Sexual Violence Policy
• Statement on Building an Inclusive Community with a Shared Purpose
• Inclusive Communications, Policy Statement and Guidelines on
• Students Groups (Recognition, Risk Assessment and Event Planning), Policy on
• Tenure and Promotion Policy (McMaster University Revised Policy and Regulations with Respect to Academic appointment, Tenure and Promotion)
• Trespass to Property Act
• Violence in the Workplace, Policy on
• Workplace Accommodation, Policy on
• Workplace & Environmental Health and Safety Policy
`;

export const sexualPolicy = `
Sexual Violence Policy
SECTION I: INTRODUCTION
1. All members of the University Community (“Community Members” see clause 5 below) have a right to study, work, and live in an environment that is free of Sexual Violence.
2. The purpose of this Policy is to:
a) articulate McMaster University's commitment to Sexual Violence prevention and response;
b) identify services and resources related to Sexual Violence that are available to all members of the McMaster University Community (“University Community”); and
c) explain the complaint and reporting options, supports, and accommodations that are available to all members of the University Community who experience Sexual Violence.
SCOPE
3. Sexual Violence1
4. This Policy prohibits all forms of Sexual Violence:
a) acts of Sexual Assault, which fall under the broad definition of Sexual Violence, are considered a violation of this Policy and its procedures below shall apply; and
b) acts of Sexual Harassment, which fall under the broad definition of Sexual Violence, may be considered violations of the Discrimination & Harassment Policy and its procedures may apply.
5. The Policy applies to:
a) all Members of the University Community (“Community Members”) include: students (graduate, undergraduate, and continuing education), staff, faculty, medical residents, volunteers, visitors (including visiting professors), and institutional administrators and officials representing McMaster University; and
b) all University-related activities, which are activities (authorized and non-authorized) where there is a clear nexus to the working or learning environment at the University (on and off University premises).
6. When allegations of Sexual Harassment are to be processed under the Discrimination & Harassment Policy, there may be circumstances where the allegations in a Complaint necessitate following the procedures under both this Policy and the Discrimination & Harassment Policy.
7. Where a Complaint is filed that involves behaviour prohibited by this Policy, as well as behaviour more appropriately dealt with under the Discrimination & Harassment Policy, the Complaint may be processed under the Discrimination & Harassment Policy, without compromising the Complainant’s right to access the specialized supports available through the Sexual Violence Prevention and Response Office. However, any proceedings related to the Complaint will determine if there has been a violation of the Discrimination &
1 Ministry of Training, Colleges and Universities Act, R.S.O. 1990, c. M.19
Effective January 1, 2020 Page 1 of 31
 means any sexual act or act targeting a person's sexuality, gender identity or gender
expression, whether the act is physical or psychological in nature, that is committed, threatened or
attempted against a person without the person's Consent, and includes Sexual Assault, Sexual Harassment,
stalking, indecent exposure, voyeurism and sexual exploitation.
       
Sexual Violence Policy Section I: Introduction
 Harassment Policy, in addition to any findings related to this Policy. The decision regarding which policy or policies are most appropriate will be made by the University.
8. Unless otherwise specified in this Policy, the Policy and its provisions apply where the University has the jurisdiction to pursue, adjudicate, or take steps to safeguard the University community.
MCMASTER’S COMMITMENT
9. Notwithstanding the limits of confidentiality, described below, the University recognizes that enabling confidential disclosures of experiences of Sexual Violence enhances individual and community safety. The University is committed to creating an environment in which Community Members feel able to disclose experiences of Sexual Violence and access support, accommodations and information on complaint and reporting options under the Sexual Violence Response Protocol.
10. The University recognizes that making a Disclosure, filing a Complaint, or being the focus of allegations of Sexual Violence may be difficult. The University is committed to ensuring that all individuals making disclosures or who are parties to a complaint, be they Complainants or Respondents, will be treated with dignity and respect, will be guaranteed due process and procedural fairness, will be afforded privacy and confidentiality within its reasonable limits, and will have access to appropriate support and assistance throughout.
11. When a University complaint process is initiated, the University is committed to providing an intake, investigation, and adjudication process that is trauma-informed, timely, and follows the principles of procedural fairness.
12. The University is committed to addressing Sexual Violence in a manner that is informed by current knowledge, scholarship and best practices in understanding how Sexual Violence intersects with other forms of violence and social inequities.
13. The University recognizes that the experience of Sexual Violence can be traumatic, having negative immediate and/or longer-term effects on an individual’s physical, mental, emotional, spiritual, and social health and wellbeing. The University is committed to providing appropriate trauma-informed support, accommodations, resources and referrals.
14. The University recognizes that socially marginalized individuals (on the basis of factors such as race, disability, Indigeneity, sexual orientation, gender identity and gender expression, religion, spirituality, age, citizenship and socio-economic status) experience disproportionately higher incidences of sexual and other forms of violence. The University is committed to ensuring culturally respectful and relevant supports and services that are attuned to systemic social inequities. The University recognizes that individuals from diverse communities who face systemic barriers and discrimination may be reluctant to disclose Sexual Violence to institutional authorities. The University is committed to examining and eliminating individual bias and institutional barriers in the organization and delivery of its services and supports.
POLICY REVIEW
15. The Policy will be reviewed annually for compliance with the Occupational Health & Safety Act. The Policy will be reviewed every three years in accordance with the Sexual Violence and Harassment Plan Act in a process inclusive of input from students, key University constituencies, women's organizations and other community partners with expertise in Sexual Violence.
      Effective January 1, 2020 Page 2 of 31

Sexual Violence Policy Section I: Introduction
 16. Student participation in the three-yearly policy review process will be coordinated by the Equity and Inclusion Office in collaboration with the McMaster Student Union, and the McMaster Graduate Student Association, and will include a diverse cross-section of campus partners with experience and expertise related to Sexual Violence prevention and response.
TERMS AND DEFINITIONS
17. A full glossary of terms and definitions may be found in Appendix A.
18. For the purpose of interpreting this document:
a) words in the singular may include the plural and words in the plural may include the singular
b) Directors, members of the Administration, and Decision-Makers in this Policy may, where appropriate, delegate their authority;
c) AVP Equity and Inclusion means the Associate Vice-President, Equity and Inclusion;
d) Chief Human Resources Officer means the Assistant Vice-President & Chief Human Resources
Officer;
e) Dean of Students means the Associate Vice-President (Students and Learning) and Dean of Students;
f) Director (ELR) means the Executive Director, Employee & Labour Relations;
g) Director (HRDR) means the Director, Human Rights & Dispute Resolution Program;
h) Director (SVPRO) means the Director, Sexual Violence Prevention and Response Office;
i) Director (SSCM) means the Director, Student Support & Case Management Office;
j) Hearing Procedures means the Hearing Procedures for the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence;
k) Provost means the Provost and Vice-President (Academic);
l) Tenure and Promotion Policy means the McMaster University Revised Policy and Regulations with
Respect to Academic Appointment, Tenure and Promotion; and
m) SecurityServicesmeansMcMasterUniversitySecurityandParkingServices.
   Effective January 1, 2020 Page 3 of 31

Sexual Violence Policy OPTIONS
Section II: Options and Supports
 SECTION II: OPTIONS AND SUPPORTS
19. Community Members who believe there has been a violation of the Policy have a number of options available to them: Disclosure, Reporting (under the Policy and includes filing a Complaint, and/or Voluntary Resolution), making a Criminal Report, or Other External Options.
20. Prior to pursuing one of the options below, Community Members should read Section III: Confidentiality. It is important to be aware that, depending on the circumstances and nature of the incident disclosed, the University may be obliged to:
a) conduct a triage of violence risk;
b) initiate a University-led Investigation of the incident regardless of whether or not the individual making the disclosure chooses to participate in the process; and/or
c) notify Hamilton Police Services of the allegation and name of the individual who is the subject of the allegation and/or contact other relevant agencies to fulfill legal obligations.
21. Individuals are encouraged to consult with the Director (SVPRO), who will provide holistic support for disclosures, assistance with requests for accommodation, and advice on options, at any point in time, regardless of how the individual chooses to proceed.
22. While encouraged to contact the Director (SVPRO) for disclosure support, complaint intake, and reporting options, Community Members who experience Sexual Violence may choose to contact any one of the Intake Offices to make a Complaint pursuant to the Sexual Violence Policy.
23. Disclosing an experience of Sexual Violence is a separate decision from making a report. Each decision will result in different levels of University involvement and action.
DISCLOSURE
24. A Disclosure is made when an individual informs a Community Member about an experience of Sexual Violence because they wish to access support, accommodations and/or information about their options, under the Sexual Violence Response Protocol.
REPORTING
25. A Report occurs when an individual determines that they wish to pursue an official Complaint through one or more of the following avenues: a Complaint to the University under this Policy, Voluntary Resolution under this Policy, a Criminal Report through the justice system, or other reporting options external to this Policy. Reporting options are not mutually exclusive.
26. Individuals who file a Report may ultimately be required to attend/participate in a hearing, either internal to the University, or external through arbitration, or criminal court, etc.
        Effective January 1, 2020 Page 4 of 31

Sexual Violence Policy Section II: Options and Supports Complaint
27. A Complaint is made when an individual submits an Incident Report to their Supervisor, or a written statement of Complaint to the Director (SVPRO) or an Intake Office making an allegation of Sexual Violence because they wish to initiate a formal University process, which may require an Investigation into the allegations and finding of facts.
Voluntary Resolution
28. In certain circumstances, a Complainant and Respondent may be interested in attempting a resolution of a Complaint at any time before the completion of an Investigation.
29. The following conditions must be present before considering if Voluntary Resolution is a viable option:
a) the University is able to meet its responsibilities pursuant to the Occupational Health & Safety Act; and
b) the Complainant and the Respondent both agree to:
(i) attempt to reach a resolution in good faith;
(ii) the methods to be used to seek resolution; and
(iii) the terms of what would constitute resolution.
30. A meeting between the Complainant and the Respondent will not be a requirement for Voluntary Resolution.
31. A Voluntary Resolution may be facilitated by an Intake Office, and the methods may include fact-finding discussions, clarification of the issues, facilitated conversations, mediation, coaching, voluntary no contact agreements, reconciliation, restoration processes, workplace restoration processes.
CRIMINAL REPORT
32. A Criminal Report is made when an individual files a report of Sexual Violence with a police service or with Security Services. Filing a Criminal Report with Security Services will result in a report to Hamilton Police Service.
OTHER EXTERNAL OPTIONS
33. Individuals may exercise other University options external to this Policy (e.g. the grievance provisions of applicable collective agreements) or other options external to the University (e.g. through civil litigation or Ontario Human Rights Code provisions).
           Effective January 1, 2020 Page 5 of 31

Sexual Violence Policy Section II: Options and Supports OPTIONS CHART
Central Sexual Violence Complaint Intake Office
Sexual Violence Prevention and Response Office, Equity and Inclusion Office (All Community Members) Additional Complaint Intake Offices
Human Rights & Dispute Resolution Program, Equity and Inclusion Office (All Community Members) Student Support & Case Management Office (SSCM), Student Affairs (Students)
Employee and Labour Relations (ELR), Human Resources Services (Faculty and Staff members) Faculty of Health Sciences (FHS) Professionalism Office (FHS Community Members)
DISCLOSURE
Informing someone in the University community about an experience of Sexual Violence because they wish to access support, accommodations and/or information about their options.
          CRIMINAL REPORT
When an individual files a report of Sexual Assault with a police service or with Security Services. Filing a report with Security Services will result in a report to Hamilton Police Services.
OTHER EXTERNAL OPTIONS
Options external to the University (e.g. civil litigation or Ontario Human Rights Code provisions) or other options external to this Policy (e.g. grievance provisions of applicable collective agreements)
COMPLAINT
A Complaint can be initiated through completion of an Incident Report submitted to a Supervisor, or through submitting a written Complaint with the Sexual Violence Prevention and Response Office or through one of the Intake Offices (listed above) making an allegation of Sexual Violence because they wish to initiate a University process, which may require an investigation and finding of facts.
VOLUNTARY
RESOLUTION
Attempting a resolution of a Complaint at any time before the completion of an Investigation.
       Effective January 1, 2020
Page 6 of 31

Sexual Violence Policy CONFIDENTIALITY (LIMITATIONS)
Section III: Confidentiality
 SECTION III: CONFIDENTIALITY
34. The University recognizes the importance of confidentiality both for individuals coming forward to Disclose or Report an experience of Sexual Violence and for individuals who are the subject of a Complaint, and will take steps to protect the confidentiality of both parties to the extent permitted by its legal obligations outlined below.
35. The University and its employees and agents will protect personal information and handle records in accordance with the Freedom of Information and Protection of Privacy Act and the Personal Health Information Protection Act, where applicable in the circumstances, with the provisions of applicable collective agreements and, in the case of health care providers, in keeping with any professional obligations.
36. When making a Disclosure or Report to any University office, individuals shall receive clear and transparent information about the level of, and limits to, confidentiality that apply.
37. The University recognizes that confidentiality is a crucial consideration in creating an environment in which individuals feel able to Disclose incidents of Sexual Violence and to access Support, Accommodations, and information. The University will share identifying information only in circumstances where it is necessary in order to administer this Policy, to address safety concerns, or to satisfy a legal reporting requirement. In such circumstances, the minimum amount of information needed to allow such concerns to be addressed, or to meet such requirements, will be disclosed. Such circumstances include those where:
a) an individual is at risk of harm to self;
b) an individual is at risk of harming others;
c) there are reasonable grounds to be concerned about risk of future violence or the safety of the University and/or broader community;
d) disclosure is required by law, for instance, suspected abuse of someone under the age of 16, reports of intimate partner/domestic violence, or to comply with legislation, such as the Occupational Health and Safety Act the Workplace Safety and Insurance Act, or with human rights legislation; and/or
e) to comply with the reporting requirements of regulatory bodies and/or professional licensing bodies.
38. Where there are reasonable grounds to be concerned about risk of future violence or the safety of the broader community or the public, or where the University is otherwise obligated to do so, the University may report the incident to Hamilton Police Services. In these situations:
a) the relevant Decision-Maker will be responsible for making the decision to disclose information to Hamilton Police Services;
b) the name of the Respondent, if known, will be shared; and
c) the name of the Complainant will not be shared without their consent, unless doing so would address a reporting obligation or mitigate a safety risk.
     Effective January 1, 2020 Page 7 of 31

Sexual Violence Policy Section III: Confidentiality
 39. Some offices and Community Members have additional limitations to confidentiality because of their particular reporting requirements or professional obligations. For example:
a) all regulated health professionals are obligated to report suspected sexual abuse of a patient by a regulated health professional to that professional’s governing body if this information is acquired during the course of their practice; and
b) Special Constables in Security Services are required to investigate reports of abuse of someone under the age of 16 and reports of intimate partner/domestic violence and to lay charges in all cases when there are reasonable grounds to believe a criminal offence has been committed, regardless of whether the target of the violence wishes to have further involvement with the legal process.
40. As part of the University’s responsibility to maintain an environment free from Sexual Violence, information may be shared on a need-to-know basis.
41. Procedural limits to confidentiality may also occur if the University is subject to legal proceedings that, in the opinion of the Provost or the Vice-President (Administration), require the disclosure of information.
42. The importance of preserving the confidentiality of Complaints and any related proceedings will be explained to all parties as a necessary measure to protect the integrity of the proceedings.
 Effective January 1, 2020 Page 8 of 31

Sexual Violence Policy Section IV: Procedural Guidelines SECTION IV: PROCEDURAL GUIDELINES
ADVISOR / SUPPORT PERSON
43. An Individual who is a party to a Complaint may be accompanied by an Advisor, a Support Person or legal counsel at any stage of any of the procedures outlined in this Policy. Any costs of accompaniment or representation are to be borne by the individual.
TIME LIMITATIONS FOR BRINGING FORWARD A COMPLAINT
44. There are no time limitations on bringing forward a Complaint. However, individuals are encouraged to report a Complaint at the earliest opportunity, as the longer the time lapse between the incident and the Complaint, the more difficult it becomes to investigate effectively. Once a Complaint is received, it will be dealt with as expeditiously as possible.
REPRISAL
45. The University prohibits reprisal or threats of reprisal against any person who, sincerely and in good faith, makes use of this Policy or participates in any process held under its jurisdiction. Any individual who is concerned that they are the subject of reprisals or threats should report their concerns to an Intake Office. Where appropriate, sanctions under the relevant policy (including this Policy, Discrimination & Harassment Policy, and/or the Code of Student Rights and Responsibilities) legislation or contract, may be applied against the individual(s) responsible for the reprisal.
INTERIM MEASURES AND ONGOING SUPPORT OF ALL PARTIES
46. At any stage in proceedings under this Policy it may be necessary to take Interim Measures in order to safeguard the environment of Community Members who are involved or may be affected. Interim Measures shall not be construed as evidence of either guilt or a finding of violation of this Policy, or as an affirmation of innocence/finding of non-violation of this Policy.
47. The authority to approve Interim Measures will rest with the relevant Decision-Maker in line with the Respondent’s reporting structure.
48. Interim Measures will be reviewed on an ongoing basis by the Director of the appropriate Intake Office throughout the process to ensure the measures remain necessary and appropriate in the circumstances. Interim Measures are temporary and do not extend beyond the final resolution of a Complaint.
49. Interim Measures may include, but are not limited to, the rearrangement of academic/employment responsibilities or oversight, an administrative leave of absence, the rearrangement of residence location (where possible), adjustments in University activities (e.g. attendance at guest lectures, social events), issuance of a no contact order, or implementation of a persona non grata declaration.
50. In the event an Employee is directed to take an administrative leave as an Interim Measure, the conditions of the administrative leave shall accord with the terms of any applicable collective agreement. In the absence of an applicable collective agreement (e.g. where the employee is faculty or The Management Group (TMG)), the leave shall be without loss of pay or benefits. It is understood that an administrative leave as an Interim Measure is non-disciplinary and is designed to separate a person from a situation or another
           Effective January 1, 2020 Page 9 of 31

Sexual Violence Policy Section IV: Procedural Guidelines
 person until the matter has been resolved. During such period, the person can continue to access relevant University Support Services.
51. Should an Investigation extend beyond six months, there will be a full review by the Response Team in consultation with the Decision-Maker to assess progress, to consider fairness to all parties, thoroughness, timeliness, and confidentiality, and to consider any necessary next steps.
DATA GATHERING & RECORD KEEPING
52. The Director (SVPRO) is responsible for: maintaining and reporting data relating to Sexual Violence consultations and disclosures as well as prevention education and response training initiatives and programs.
53. The Equity and Inclusion Office is responsible for collecting and reporting annual anonymized, aggregate data on Consultations, Disclosures, Complaints, Investigations, and all Outcomes and Sanctions, to the Senate and the Board of Governors.
54. Data for the annual report is collected and maintained by the Equity and Inclusion Office and includes data collected from the Sexual Violence Prevention and Response Office, the Human Rights and Dispute Resolution Program, Employee & Labour Relations, the Student Support & Case Management Office, the Faculty of Health Sciences Professionalism Office, and Security Services. The purpose of the annual report is to inform education and training initiatives.
55. In developing the annual report, the utmost care will be taken to ensure that individuals’ identities remain confidential and that data gathering does not discourage individuals who wish to disclose from coming forward.
56. All notes, materials, Investigation reports, and decisions, pertaining to Complaints will be kept by the relevant Intake Office for seven years. These records may be retained longer, subject to the discretion of the appropriate Director.
    Effective January 1, 2020 Page 10 of 31

Sexual Violence Policy Section V: Roles and Responsibilities SECTION V: ROLES AND RESPONSIBILITIES
SENIOR ADMINISTRATION
57. The Senior Administration has overarching responsibility for maintaining a University environment in which Sexual Violence is unacceptable, for providing the resources required to support such an environment, and for ensuring the timely development and review of relevant policies through Senate and Board of Governors procedures.
58. In addition, the Senior Administration is responsible for enabling Community Members to function with the highest standards of integrity, accountability, and responsibility. Activities may include disseminating information about the University’s expectations and providing education to all Community Members on issues related to Sexual Violence.
ASSOCIATE VICE-PRESIDENT, EQUITY AND INCLUSION
59. The AVP Equity and Inclusion oversees the Equity and Inclusion Office, which houses the Sexual Violence Prevention and Response Program and the Human Rights and Dispute Resolution Program, both of which play roles in campus sexual violence prevention and response.
60. The AVP Equity and Inclusion is accountable for leading a coordinated campus sexual violence prevention and response effort in collaboration with campus partners, including convening a working group, representative of McMaster’s diverse student, faculty and staff populations, to advise on the effectiveness of campus sexual violence prevention and response efforts.
DIRECTOR, SEXUAL VIOLENCE PREVENTION AND RESPONSE OFFICE
61. The Director (SVPRO), is responsible for establishing the Office as a central University resource for any Community Member who has experienced any form of Sexual Violence, including sexual assault, sexual harassment, and intimate partner violence, or any Community Member seeking information or consultation on issues related to trauma-informed response and support or prevention education and response training.
Inclusive, Trauma-Informed Response and Support
62. Community Members who Disclose an experience of Sexual Violence to a member of the Sexual Violence Prevention and Response Office, can expect that the Office will:
a) provide trauma-informed response and support;
b) consider safety measures that may be necessary;
c) make a referral for medical services as needed;
d) actively and empathically listen to individual needs and concerns without judgment;
e) share reporting options available;
f) clarify commitments to Confidentiality and its Limits;
g) explain the difference between Disclosure and Reporting;
h) make a referral to police if the individual chooses that option;
i) conduct a Complaint intake if the individual chooses that option;
j) assist the individual to navigate any relevant University systems and procedures;
    Effective January 1, 2020
Page 11 of 31

Sexual Violence Policy Section V: Roles and Responsibilities
 k) facilitate workplace, academic, and/or residence accommodations;
l) consider differing cultural needs and offer/refer to culturally relevant supports;
m) provideinformationaboutandreferraltocampusandcommunityservices;
n) liaise with relevant partners to ensure coordinated response and support; and
o) facilitate ongoing assessment, planning and case management.
63. The Director (SVPRO) is responsible for providing guidance to Community Members who consult on Disclosures they receive, providing information on how to support the individual and facilitate a referral, and assessing whether the limits of confidentiality apply.
Prevention Education and Response Training
64. The Director (SVPRO) is responsible for overseeing a prevention education and training response program, including:
a) promoting the Health & Safety Training Program’s Violence & Harassment Prevention training that is coordinated by Environmental & Occupational Health Support Services;
b) educational initiatives for the campus community that are attuned to the broader social context in which Sexual Violence occurs and includes topics such as: addressing sexual violence myths and misconceptions, promoting healthy masculinity, creating a culture of consent; and
c) training initiatives for frontline campus community and student-facing service providers, and for those with particular responsibilities related to this Policy, that integrate an intersectional anti-oppressive trauma-informed analysis of Sexual Violence. Training will include skill-building related to receiving Disclosures and providing appropriate support and referral to University and external resources for community members.
65. The University Secretary, in consultation with the Director (SVPRO) will ensure that the members of the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence receive appropriate education and training on Sexual Violence .
INTAKE OFFICES
66. While encouraged to contact the Director (SVPRO) for disclosure support, complaint intake, and reporting options, Community Members who experience Sexual Violence may alternatively choose to file an incident report with their Supervisor (in the case of staff) or make a Complaint to one of the following Intake Offices:
a) Human Rights & Dispute Resolution Program (HRDR), Equity and Inclusion Office (All Community Members)
b) Student Support & Case Management Office (SSCM), Student Affairs (Students)
c) Employee and Labour Relations (ELR), Human Resources Services (Faculty and Staff members)
d) Faculty of Health Sciences (FHS) Professionalism Office (FHS Community Members)
67. Intake Coordinators are responsible for ensuring the Complainant fully understands the procedures of the Policy and what may result from the decision to file a Complaint, and for consulting with the Director (SVPRO) to ensure a trauma-informed and intersectional approach.
        Effective January 1, 2020 Page 12 of 31

Sexual Violence Policy Section V: Roles and Responsibilities
 68. The statement of Complaint will be reviewed by the respective Intake Office Director, in consultation with the Director (HRDR), to determine the applicability of this Policy, the Discrimination & Harassment Policy, and/or other University policies.
69. The Director of the relevant Intake Office will review any Interim Measures on an ongoing basis throughout the process to ensure they remain necessary and appropriate in the circumstances.
DIRECTOR, HUMAN RIGHTS & DISPUTE RESOLUTION
70. The Director (HRDR) is responsible for assessing every Complaint received and making a determination as to the applicability of the Sexual Violence Policy, the Discrimination & Harassment Policy, or other University policies, in consultation with the Director (SVPRO) and with the respective Director(s) of the relevant Intake Offices(s). The Director (HRDR) is responsible for activating the Response Team, as required.
71. The Director (HRDR) is responsible for working in close partnership with individuals and offices involved in administering this Policy, including but not limited to: the Response Team, Investigators, Intake Offices, Decision-Makers, Senior Administrators, the University Secretariat, and University Counsel, to ensure the effective administration of this Policy and the Discrimination & Harassment Policy.
72. The Director (HRDR) will, in collaboration with the Director (SVPRO) and other relevant Intake Office Directors, consider Interim Measures as they relate to the parties involved in the matter and recommend them to the relevant Decision-Maker; recommend and/or facilitate any further safety planning and accommodations; and consider other University responses that may be necessary.
RESPONSE TEAM
73. The Response Team is activated by the Director (HRDR), where a case potentially presents community risk and/or requires consultation with multiple partners for a coordinated response.
74. The Response Team will be chaired by the Director (HRDR) and will include the Director (SVPRO), as a consultant, and, as appropriate in the circumstances, the Directors of other relevant campus partners.
75. As necessary the Director (HRDR) may draw upon representatives of other key services and/or departments (e.g. Director of Housing and Conference Services, Director of the Student Wellness Centre, etc.), disclosing identities only on a need-to-know basis in order to appropriately respond to the matter.
76. When the allegations include the potential for an ongoing/further risk of violence, the Director (HRDR) may, on behalf of the Response Team, consult with the Director of Security Services, disclosing identities on a need-to know basis.
INVESTIGATORS
77. All Investigators, whether internal or external to the University, will have training and expertise in the area of Sexual Violence and in using an intersectional, anti-oppressive, trauma-informed approach to investigation processes. Investigators will follow the mandate and scope of the Investigation as determined by the University.
      Effective January 1, 2020 Page 13 of 31

Sexual Violence Policy Section V: Roles and Responsibilities DECISION-MAKERS FOR INTAKE AND INVESTIGATIONS
78. The Decision-Makers are, as applicable, the:
a) Assistant Vice President & Chief Human Resources Officer for staff Respondents;
b) Associate Vice-President (Students and Learning) & Dean of Students for student Respondents;
c) Provost and Vice-President (Academic) for faculty Respondents; and
d) Executive Vice-Dean & Associate Vice-President (Academic) for faculty Respondents in the Faculty of Health Sciences.
79. More than one Decision-Maker may be involved in cases where a Respondent has more than one type of relationship with the University (such as a student who also holds a staff appointment).
80. When the Respondent is a Community Member but is not currently a student, staff, or faculty member, the Investigation report will be reviewed by the Decision-Maker related to the Respondent’s area of activity at the University.
81. Decision-Makers are responsible for reviewing and responding to Investigation Reports (see Investigation Procedures), and authorizing appropriate Interim Measures.
82. When the line of authority is unclear, the Provost or the Vice-President (Administration), as appropriate, will determine the appropriate individual in the line of authority.
83. Should there be a conflict of interest with a Decision-Maker, the appropriate Vice-President shall assume the responsibilities of the Decision-Maker. Similarly, if that Vice-President is in a conflict then another Vice- President or the President shall act.
84. Decision-Makers are responsible for determining whether Hamilton Police Services need to be notified and for authorizing that notification, as specified in clauses 38 - 39.
SECURITY SERVICES SPECIAL CONSTABLES
85. All Special Constables will receive training on intersectional, anti-oppressive, and trauma-informed response to Disclosures and Reports of Sexual Violence.
86. Security Services will respond to Community Member Disclosures and Reports, as follows:
a) if the Community Member elects only to make a Disclosure or a Complaint under this Policy, Security Services will record the matter in their internal reports, refer the person to the Director (SVPRO) and will then take no further action (subject to clause 39);
b) if the Community Member elects to make a Criminal Report, Security Services will report the incident to Hamilton Police Services, liaise with the person and police, and refer the individual to the Director (SVPRO) for ongoing support, accommodations that may be required, and for assessing whether the limits of confidentiality apply and a response may be required by the University.
87. Security Services will investigate all reports of Sexual Assault that:
a) originate from a call received by a Special Constable to attend the scene of a reported Sexual Assault;
     Effective January 1, 2020 Page 14 of 31

Sexual Violence Policy Section V: Roles and Responsibilities
 b) result from a Complainant electing to make a Criminal Report of Sexual Assault to a Special Constable; and/or
c) arise from a Special Constable observing, disrupting or arresting an individual in the act of committing a Sexual Assault.
SUPERVISORS
88.
Within the University Community it is recognized that there are various types of supervisors:
Academic Supervisors, Academic Administrators, and Workplace Supervisors. All such supervisors are responsible for:
a) modeling acceptable standards of behavior;
b) supporting any employee or student who, in good faith, reports a potential violation of the Policy;
c) contacting one of the Intake Offices for guidance and advice to address the matter as appropriate in the circumstances, and cooperating with Intake Offices during Investigations, and/or in the implementation of Interim Measures, and/or sanctions; and
d) completing all required training and ensuring that the people they are supervising are trained appropriately on the Policy and RMM 300 Health and Safety Training Program.
    EMPLOYEES
89. Employees are required to complete initial and periodic refresher training in Violence and Harassment Prevention, in accordance with the Health & Safety Training Program.
90. Employees have additional legal obligations when they become aware of incidents of Workplace Harassment and Workplace Violence as follows:
a) in accordance with the Occupational Health and Safety Act, all employees of the University must report any incident of Workplace Harassment and/or Workplace Violence, which includes Sexual Violence, to their Supervisor or to an Intake Office. Any immediate or urgent incidents should also be reported to Security Services.
b) Workplace Supervisors must take every reasonable precaution to protect the safety of an employee. Supervisors are expected to follow the Sexual Violence Response Protocol, and to consult with either the Director (SVPRO) or Employee and Labour Relations (ELR) office when they receive a Disclosure, receive an incident report of Sexual Violence, or otherwise become aware of an incident of Sexual Violence in the workplace. Any immediate or urgent incidents should be reported to Security Services.
COMMUNITY MEMBERS
91. All Community Members are responsible for contributing to an environment that is free of Sexual Violence, and for participating in relevant education and training programs.
92. All Community Members are expected to be familiar with the Sexual Violence Response Protocol, and to act in accordance with the guidelines provided for supporting an individual who makes a Disclosure.
          Effective January 1, 2020 Page 15 of 31

Sexual Violence Policy
INTAKE AND INITIATION OF COMPLAINTS
Section VI: Investigations
 SECTION VI: INVESTIGATIONS
93. If an individual wishes to file a Complaint of Sexual Violence for the University to address, they are encouraged to contact the Director (SVPRO) in the central Sexual Violence Prevention and Response Office for disclosure support, complaint intake, and reporting options; however, individuals may alternatively choose to file an Incident Report with their Supervisor or contact an Intake Coordinator in any one of the Intake Offices (refer to page 6).
94. Any Community Member who is the subject of an allegation under the Policy will be assisted by the Director (SVPRO) or another Intake Office Director who will ensure that they receive support and guidance and are in receipt of relevant information, services and supports relating to the Policy.
95. The Director (SVPRO) and all Intake Coordinators are responsible for:
a) ensuring that Complainants are aware of the options available to them in seeking a response;
b) assisting Complainants in understanding what may be involved in, and what may result from, each of the options; and
c) assisting a Complainant who wishes to move forward with completing a Complaint Intake Form, which includes a description of: what happened; who was involved in the incident; when and where the incident occurred; who (if anyone) saw or heard the incident, or saw or heard something of relevance prior to or after the alleged incident(s) of Sexual Violence;
d) individuals who contact an Intake Office and wish to file a Criminal Report will be assisted with contacting Security Services in order to file the report.
96. All Complaint Intake Forms are sent to the Director (HRDR), who will review and assess the Complaint, in consultation with the Director (SVPRO) and relevant Intake Office Director(s) on an immediate and priority basis in order to, as appropriate:
a) confirm that it fits within the scope of the Policy;
b) consider requirements pursuant to the Occupational Health and Safety Act;
c) consider whether the parties are interested in voluntary resolution, and whether it is feasible/appropriate in the circumstances;
d) determine if an Investigation is required, and, if so, set parameters accordingly, in consultation with the appropriate Decision-Maker (including, for example, which University office will be involved; internal or external investigator; timelines, mandate and scope for the Investigation);
e) convene, at their discretion, the Response Team, to provide consultation;
f) consider and coordinate appropriate Accommodations and/or Interim Measures as they relate to all parties
involved in the matter; and
g) as necessary, draw upon representatives of relevant services or departments in order to appropriately respond to the matter.
97. At any time during proceedings under this Policy, the Response Team, when convened, may determine it is necessary to disclose identities on a need-to know basis in order to administer the Policy.
       Effective January 1, 2020 Page 16 of 31

Sexual Violence Policy Section VI: Investigations Decision to Not Investigate
98. In some circumstances a decision may be made to not investigate. The decision will be communicated in writing, with reasons, to the Complainant by the relevant Decision-Maker. The Complainant will be informed of their right to make a written request for review of the decision to the Vice-President to whom the Decision- Maker reports.
UNIVERSITY INITIATED INVESTIGATION
99. The University may become aware of situations where a University-initiated Investigation may be warranted, including, but not limited to circumstances where:
a) allegations are made about the conduct of a Community Member by an individual who is not, or is no longer, a Community Member;
b) one or more individuals disclose experiences of Sexual Violence involving one individual or multiple individuals within a group/organizational environment;
c) the University has a duty to investigate pursuant to the Occupational Health and Safety Act;
d) the power differential in the alleged incident indicates the potential for a pattern of repeated Sexual
Violence; and/or
e) situations reveal broader issues to be addressed, including concerns for a Poisoned Environment.
100. The Director (HRDR), in collaboration with the appropriate Intake Office Director(s), will consult with the appropriate Decision-Maker(s) to determine whether an Investigation is warranted, on the basis of both the circumstances and nature of the allegations.
101. Individuals have the right not to participate as a Complainant in any University-Initiated Investigation that may occur.
INVESTIGATION PROCEDURES
102. Respondents have the right to know the case against them, and to produce any relevant documentation, evidence, or other information, and identify witnesses to the Investigator in response to any allegations.
103. The Investigator will impartially collect evidence and interview those witnesses they deem relevant in relation to the Complaint. The Investigator may request that the appropriate authority at the University adjust the scope and the manner in which the Investigation will be conducted in order to ensure a thorough and fair investigation process.
104. All Community Members are expected to meet with the Investigator if requested to do so and to participate in good faith.
105. Complainants and Respondents have the option of being accompanied by a Support Person or Advisor.
106. All those who meet with an Investigator are required to keep confidential the Investigation and any information shared, to ensure the integrity of the proceedings. Failure to do so could be considered a breach of privacy and could be subject to a sanction under the relevant University policy.
107. An individual who was not previously identified as a Respondent but who, during the course of an Investigation, is identified as a potential Respondent (by the Investigator and with the approval of the University) will be notified and given an opportunity to meet with the Investigator and to respond to any allegations.
   Effective January 1, 2020 Page 17 of 31

Sexual Violence Policy
Section VI: Investigations
  COMPLAINT
Written Complaint with the Sexual Violence Prevention and Response Office, through one of the Intake Offices or incident report filed with a Supervisor, making an allegation of Sexual Violence because they wish to initiate a University process, which may require an investigation and finding of facts.
DIRECTOR, HUMAN RIGHTS & DISPUTE RESOLUTION (HRDR)
The Director (HRDR) will review and assess the Complaint, in consultation with the Director (SVPRO) and relevant Intake Office Director(s). Director (HRDR) may convene, at their discretion, the Response Team, to provide consultation.
           DECISION TO NOT INVESTIGATE
APPEAL
Complainant may make a written appeal to the appropriate VP to review the decision.
STUDENT RESPONDENT
INVESTIGATION & ADJUDICATION
DECISION TO INVESTIGATE
VOLUNTARY
RESOLUTION
Attempting a resolution of a Complaint at any time before the completion of an Investigation.
STAFF RESPONDENT
INVESTIGATION & ADJUDICATION
        Effective January 1, 2020
Page 18 of 31
FACULTY RESPONDENT
INVESTIGATION & ADJUDICATION

Sexual Violence Policy Section VII: Adjudication and Decisions SECTION VII: ADJUDICATION AND DECISIONS
ADJUDICATION
108. Decision-Makers shall decide, on a balance of probabilities, whether the alleged Violation of the Policy has occurred.
109. Where a Respondent has more than one type of relationship with the University (such as a student who also holds a staff appointment) the relevant Decision-Makers may decide to adjudicate the matter jointly and any sanctions and remedies may be administered under one or both of the processes relevant to the Respondent’s status.
STUDENT RESPONDENT
110. The Investigation Report will be provided to the Director (SCCM) or Dean of Students as appropriate, to consider and decide upon the findings and recommendations contained in the report and adjudicate the outcome.
111. Sanctions and remedies will be processed in accordance with the procedures in the Code of Student Rights and Responsibilities ("the Code").
112. In matters where the sanctions do not include suspension, expulsion, or withdrawal (voluntary or involuntary), the Respondent may appeal the outcome to the Dean of Students. When the Decision-Maker is the Dean of Students, the appeal will be to the Provost.
113. In matters where the sanctions include a suspension, expulsion, or withdrawal (voluntary or involuntary), the Respondent may appeal the decision made by the Dean of Students to the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence. (see Hearing Procedures).
          STUDENT RESPONDENT INVESTIGATION AND ADJUDICATION
under the Code of Student Rights and Responsibilities
      FINDING OF NO VIOLATION
Sanctions
Do Not Include Suspension, Expulsion, or Withdrawal
APPEAL
to the Dean of Students
FINDING OF VIOLATION
Sanctions
Includes Suspension, Expulsion, or Withdrawal
APPEAL
Hearing Before a DHSV Tribunal
           Effective January 1, 2020
Page 19 of 31

Sexual Violence Policy Section VII: Adjudication and Decisions FACULTY RESPONDENT
114. The Investigation Report will be provided to the Decision-Maker (the Provost or the Executive Vice-Dean & Associate Vice-President (Academic) as appropriate) to consider the findings and recommendations contained in the report.
115. When considering the findings and recommendations, the Decision-Maker may consult with relevant offices (e.g. the Equity and Inclusion Office, Employee & Labour Relations, etc.) to ensure that outcomes are consistently applied, and are appropriate to relevant legislation, professional standards and regulations, and/or licensing bodies.
116. If the Decision-Maker makes a finding of violation of the Policy, the Decision-Maker will recommend the appropriate sanctions and/or remedies.
117. If the Respondent accepts the findings and the sanctions and/or remedies recommended by the Decision- Maker, the sanctions and/or remedies will be implemented, and the matter will be closed.
Referral to Hearing
118. If the Respondent does not accept the recommendations, or the Decision-Maker believes that suspension
from the University is the appropriate sanction, the matter will be referred to a DHSV Tribunal for a hearing.
119. If it is determined by the Decision-Maker that Removal Proceedings should be initiated, the matter will be
referred directly to the Procedures for Removal under the Tenure and Promotion Policy. FACULTY RESPONDENT INVESTIGATION & ADJUDICATION
       Decision-Maker
      FINDING OF NO VIOLATION
FINDING OF VIOLATION AND DETERMINATION OF SANCTIONS/REMEDIES
          Referral Directly to a
REMOVAL HEARING
under the Tenure and Promotion Policy
Recommendation of
SUSPENSION
Referral to Hearing
RESPONDENT DOES NOT ACCEPT finding, sanctions/remedies. Referral to Hearing
HEARING
RESPONDENT ACCEPTS finding and sanctions/remedies
   before a Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence
Effective January 1, 2020 Page 20 of 31

Sexual Violence Policy Section VII: Adjudication and Decisions STAFF RESPONDENT
120. The Investigation Report will be provided to the Chief Human Resources Officer to consider the findings and recommendations contained in the report.
121. If the Chief Human Resources Officer makes a finding of violation of the Policy, the matter will be referred to the Director (ELR) to support the Workplace Supervisor in the processes to determine appropriate remedies and/or sanctions to ensure that outcomes are consistently applied, and are appropriate to relevant legislation, professional standards and regulations, collective agreements and/or licensing bodies.
122. In the case of a staff member who is a member of a union, the right to appeal the remedies and/or sanctions is within the grievance and arbitration processes of the collective agreement, as may be applicable.
123. In the case of a staff member who is not a member of a union (e.g., members of The Management Group, interim employees), and except in the case of termination, the staff member may submit a written appeal of the remedies and/or sanctions imposed by the Workplace Supervisor to the Chief Human Resources Officer.
124. In the case where the Respondent’s reporting line is through to the Chief Human Resources Officer, the appeal will be made to the Vice-President (Administration).
STAFF RESPONDENT INVESTIGATION & ADJUDICATION
Chief Human Resources Officer
FINDING OF NO FINDING OF VIOLATION VIOLATION
DETERMINATION OF SANCTIONS/REMEDIES
Governed by the collective agreement where applicable, and in accordance with labour and employment laws.
                   NON-UNION
(e.g., TMG, interim employees), and except in the case of termination, the staff member may submit a written appeal of the sanctions and/or remedies to the Chief Human Resources Officer.
UNION
The right to appeal a disciplinary decision is within the grievance and arbitration processes of the applicable collective agreement.
Effective January 1, 2020
Page 21 of 31

Sexual Violence Policy Section VII: Adjudication and Decisions COMMUNITY MEMBER RESPONDENT
125. When the Respondent is a Community Member but is not currently a student, staff, or faculty member, the relevant Decision-Maker (related to the Respondent’s area of activity at the University) will consider the findings and recommendations contained in the report.
126. If the Decision-Maker makes a finding of violation of the Policy, the Decision-Maker will decide on the appropriate sanctions/remedies.
NOTIFICATION OF OUTCOME
Respondent
127. Respondents will receive a written decision from the relevant Decision-Maker, that will include:
a) the decision with respect to a Finding or No Finding of Violation of the Policy;
b) reasons for the decision;
c) a summary outlining the findings;
d) if the outcome is no finding of violation of the Policy the matter will be closed;
e) if the outcome is a finding of violation of the Policy, the Respondent will be informed of the process by which sanction(s) and/or remedies will be recommended or ordered (as per the relevant adjudication process related to the Respondent); and
f) where relevant, confirmation of any Interim Measures that will remain in place until sanctions are imposed.
Complainant
128. If the matter has been referred to a Hearing the Complainant will be informed of the referral.
129. Within the constraints of relevant legislation, the Complainant will be informed of the findings and reasons that are directly related to their complaint.
130. In all cases, information about any sanctions/remedies that have direct relevance to the Complainant will be provided to them.
Regulatory / Professional Licensing Bodies
131. Where required by a regulatory / professional licensing body, the relevant findings will be communicated to that professional licensing body.
Affected parties
132. Other affected parties will be informed about the findings and/or any sanctions/remedies that have a direct impact on them, within the constraints of relevant legislation.
SYSTEMIC AND PREVENTIVE INTERVENTIONS
133. Investigations may reveal broader systemic issues to be addressed as a future preventative measure, regardless of whether or not there has been a finding of Sexual Violence. In such instances, appropriate intervention measures may be recommended by Decision-Makers and /or the AVP Equity and Inclusion.
           Effective January 1, 2020 Page 22 of 31

Sexual Violence Policy Section VIII: Sanctions and Remedies SECTION VIII: SANCTIONS AND REMEDIES
SANCTIONS
134. Sanctions shall be proportional to the severity of the offence, considering any aggravating, mitigating and/or contextual factors. Previous findings of a violation of this Policy or a related violation of the Discrimination & Harassment Policy will be taken into account when sanctions are determined, and the severity of sanctions may be greater as a result. Sanctions may be used independently or in combination for any single violation and may be varied and depending on the nature of the Respondent’s relationship with the University may be administered under more than one process.
135. Sanctions may include, but are not limited to:
a) written reprimand;
b) inclusion of the decision, or summary of the decision as appropriate to comply with confidentiality requirements, in a specified file (e.g. Tenure & Promotion Dossier) of the Respondent, for a specified period of time;
c) the exclusion of the Respondent from, or oversight during, one or more designated University activities or duties;
d) a No Contact Order, which may include restrictions on: registration for specific classes, other academic/non-academic activities, attendance at specific meetings or events; direct or indirect contact (including but not limited to in person, by phone, email, text, social media, through a third party etc.) with a specific individual or group of individuals;
e) a Persona Non Grata (PNG) declaration, which is undertaken when an individual is denied the privilege of entering designated portion(s) of the University's buildings or grounds. If individuals issued a PNG are found or seen in the area they are denied, they may be subject to a charge by Security Services under the Trespass to Property Act;
f) for Student Respondents, all sanctions in the Code of Student Rights and Responsibilities for findings of Sexual Violence, including but are not limited to: behavioural contract/bond, suspension, expulsion; and for Residence students, residence probation, room transfer, denial of readmission, eviction;
g) for staff or faculty, Suspension or Recommendation for Suspension, as applicable, suspension involves relieving the Respondent of their University duties and denying them access to University facilities and services for a stated period of time and may be with or without pay and/or benefits. A recommendation for suspension of a faculty Respondent shall be dealt with in accordance with Section V of the Tenure and Promotion Policy and the common law where applicable; and/or
h) for staff or faculty, Dismissal or Recommendation for Removal, as applicable. A recommendation for removal of a faculty Respondent shall be dealt with in accordance with Section VI of the Tenure and Promotion Policy and the common law where applicable.
REMEDIES
136. Remedies may include but are not limited to: a) mandated counselling;
b) training or coaching; and/or
c) Restoration Processes / Workplace Restoration Processes.
           Effective January 1, 2020
Page 23 of 31

Sexual Violence Policy
Appendix A: Definitions
 APPENDIX A: DEFINITIONS
All definitions in this Policy include, but are not limited to, the definitions articulated in the Ontario Human Rights Code and described in the Occupational Health and Safety Act.
Accommodations under this Policy are adjustments to individuals’ academic, workplace, or residence arrangements made to support them and/ or enhance their safety (e.g. a change in assignment deadlines or tutorial group, a change in supervisory arrangements, a change in residence location).
Advisor: A person of the individual’s choice who acts in an advisory role during the complaint and investigation process (e.g. friend, family member, union representative, legal counsel), but is not a witness or potential witness in the matter. The Advisor may be present during Investigation interviews but may not participate as a representative. The Advisor may assist the individual at a Hearing before a Tribunal of the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence.
Agent: Anyone hired by the University or working on behalf of the University such as an external investigator or a physician or other health care professional.
Balance of Probabilities is the test to be met to show, by the weight of the evidence presented, that all of the facts necessary to make a determination that a violation of the Policy has occurred, have a greater likelihood of being true than not.
Community Members include, but are not limited to: students (graduate, undergraduate, and continuing education), staff, faculty, medical residents, volunteers, visitors (including visiting professors), and institutional administrators and officials representing McMaster University.
Complainant: The individual who files a Complaint alleging a violation of the Policy for the University’s response. Complaint: A Complaint is made when an individual notifies an Intake Coordinator of an allegation under the
Policy or files an incident report with their Supervisor and seeks the University’s response.
Confidentiality: Refers to the obligation of an individual or organization to safeguard entrusted information. The practice of confidentiality includes obligations to protect information from unauthorized access, use, disclosure, modification, loss or theft. Confidentiality differs from anonymity in that the identity of the person making the Disclosure is known to the person receiving the Disclosure.
Consent2 in the context of sexual activity, is the voluntary agreement of an individual to engage in the sexual activity in question. The law also says that there is NO CONSENT where:
• the agreement is expressed by the words or conduct of a person other than the individual;
• the individual is incapable of consenting to the activity;
• the person induces the individual to engage in the activity by abusing a position of trust, power or authority;
• the individual expresses, by words or conduct, a lack of agreement to engage in the activity;
• the individual, having consented to engage in sexual activity, expresses, by words or conduct, a lack of agreement to continue to engage in the activity;
• the individual may be bodily harmed or is threatened with bodily harm; or
2 Source: Criminal Code of Canada
Effective January 1, 2020 Page 24 of 31
     
Sexual Violence Policy Appendix A: Definitions
 • the individual is under the age of consent.
Criminal Report: Occurs when a person reports an experience of Sexual Violence to the police or to McMaster
Security Services. Filing a report with Security Services will result in a report to Hamilton Police Service.
Disclosure: When an individual informs someone in the University community about an experience of Sexual Violence because they wish to access support, accommodations and/or information about their options.
Dismissal: Dismissal/termination proceedings for staff Respondents shall be dealt with in accordance with the established policies and procedures and by the terms of existing contracts of employment or collective agreements and the common law where applicable.
DHSV Tribunal: A Tribunal of the Board-Senate Hearing Panel for Discrimination, Harassment, and Sexual Violence.
Employee: Where applicable, employee is used to refer to staff (see below) and faculty (see below).
Event (Authorized): Authorized events are University scheduled or University approved activities, occurring on or off University premises, e.g. public lectures, performances, placements (co-op or clinical), athletic events, work or study-related conferences/training sessions, etc. These events can include work or study-related travel. Events that are approved under the Policy on Students Groups (Recognition, Risk Assessment and Event Planning) are also authorized events.
Event (Non-authorized):Non-authorized events are events that are not scheduled or approved by the University and may occur on or off University premises e.g. group trips that have not been approved under the Policy on Students Groups (Recognition, Risk Assessment and Event Planning) , drinking games in residence, house parties, etc.
Expulsion applies to student Respondents and is the loss of all academic privileges at the University for an indefinite period.
Faculty are defined as academic teaching staff, clinical faculty, and senior academic librarians who are members of the “teaching staff”. Teaching staff as defined in the McMaster University Act means the employees of the University or of a college affiliated with the University who hold the academic rank of professor, associate professor, assistant professor or lecturer.
Incident Report: An incident report is a report completed by a Community Member and signed by their Supervisor when an incident/injury occurs in their working environment while they are engaged in University- related activities.
Interim Measures: Steps that are taken in order to safeguard the environments of individuals disclosing Sexual Violence and of individuals whose conduct is being questioned. Interim measures shall not be construed as evidence of either guilt or a finding of Sexual Violence, or as an affirmation of innocence or finding that no Sexual Violence occurred.
No Contact Order: Includes restrictions on: registration for specific classes, other academic or non-academic activities, or attendance at specific meetings or events; direct or indirect contact (including but not limited to in person, by phone, email, text, social media, through a third party etc.) with a specific individual or group of individuals.
     Effective January 1, 2020 Page 25 of 31

Sexual Violence Policy Appendix A: Definitions
Persona Non Grata (PNG): An official declaration that an individual is denied the privilege of entering designated portion(s) of the University's buildings or grounds. If individuals issued a PNG are found or seen in the area they are denied, they will be subject to a charge by Security Services under the Trespass to Property Act.
Poisoned Environment means an environment where harassing and/or discriminatory conduct, on the basis of a person’s sexuality, gender identity or gender expression, is found to be sufficiently severe, intimidating, hostile, offensive, and/or pervasive to cause significant and unreasonable interference to a person’s study or work environment. A Poisoned Environment can interfere with and/or undermine work or academic performance and can cause emotional and psychological stress for some employees or students not experienced by other employees or students. As such, it results in unequal terms and conditions of employment or study and prevents or impairs full and equal enjoyment of employment or educational services, benefits, or opportunities. Although a person may not be the target of the conduct, a person may feel the effects of certain harassing or discriminatory conduct at their place of work or study.
Recommendation for Removal: A recommendation for removal of a faculty Respondent will be dealt with in accordance with Section VI of the Tenure and Promotion Policy and the common law where applicable.
Respondent: Those about whom allegations have been made in a Complaint process.
Restoration Processes: Processes focusing on restoring the losses suffered by Complainants, holding Respondents accountable for the harm they have caused, and building peace within communities. Restoration Processes are premised on the voluntary and cooperative participation of all parties in the resolution process. This process, which may not be appropriate or viable in all cases, can be facilitated by an Intake Office.
Senior Administration: For the purposes of this Policy, Senior Administration refers to the President, Provost and Vice-President (Academic), and Vice-President (Administration).
Sexual Assault 3 is an assault committed in circumstances of a sexual nature such that the sexual integrity of an individual is violated, and it includes, but is not limited to, any unwanted, non-consensual, sexual activity, such as unwanted kissing, fondling, sexual grabbing, and/or intercourse/rape.
Sexual Harassment4 means engaging in a course of vexatious comment or conduct against an individual because of sex, sexual orientation, gender identity or gender expression, where the course of comment or conduct is known or ought reasonably to be known to be unwelcome, or making a sexual solicitation or advance to an individual where the person making the solicitation or advance is in a position to confer, grant or deny a benefit or advancement to the individual and the person knows or ought reasonably to know that the solicitation or advance is unwelcome.
Sexual Violence5
3 Source: Criminal Code of Canada
4 Source: Government of Ontario, Human Rights Code, 2019
5 Source: Ministry of Training, Colleges and Universities Act, R.S.O. 1990, c. M.19
Effective January 1, 2020
 means any sexual act or act targeting a person's sexuality, gender identity or gender
 expression, whether the act is physical or psychological in nature, that is committed, threatened or attempted
 against a person without the person's consent, and includes sexual assault, sexual harassment, stalking,
 indecent exposure, voyeurism and sexual exploitation.
    Page 26 of 31

Sexual Violence Policy Appendix A: Definitions
Staff: Employees of the University including, but not limited to: The Management Group (TMG), unionized employees, temporary employees, casual employees, non-teaching staff6, Sessional Faculty, Post-doctoral Fellows, and Teaching Assistants.
Student: A student is any individual recorded by the University Registrar as enrolled in an educational course of study recognised by the Senate and for whom the University maintains education records.
Supervisor: there are various types of supervisors within the University Community, which include the following:
• Academic Supervisor who oversees the academic work of a student, the most common example being a faculty member overseeing a graduate student’s academic work;
• Academic Administrator is any faculty or staff member acting in their capacity as supervisor/administrator within a Faculty, Academic Department, etc., which includes, but is not limited to, Department Chairs, Deans, or other supervisors who oversee the work of a Community Member (e.g. a faculty member overseeing a Post-Doctoral fellow / technician / undergraduate or graduate student performing research in the faculty member’s laboratory).
• Workplace Supervisor is “a person who has charge of a workplace or authority over a Worker” (Occupational Health and Safety Act). Supervisors are responsible for knowing the Duties of Supervisors under the Act.
Support: The provision of resources appropriate to the individual and the circumstances. This may include access to the Student Wellness Centre, Employee Family Assistance Program, and/or McMaster Students Union (MSU). Support resources do not include the provision of legal counsel.
Support Person: A person of the individual’s choice who acts in a supportive role but is not an active participant in the process (e.g. friend, Elder, parent, religious advisor). The Support Person may be present during Investigation interviews but may not participate as a representative.
Suspension involves relieving a faculty or staff Respondent of their University duties and denying them access to University facilities and services for a stated period of time, which may be with or without pay and/or benefits. A recommendation for suspension of a faculty member will be dealt with in accordance with Section V of the Tenure and Promotion policy and the common law where applicable. Suspensions of staff members will be dealt with in accordance with established policies and procedures and by the terms of existing contracts of employment or collective agreements and the common law where applicable. For a student Respondent, suspension is the loss of all academic privileges at the University for a specified period of time and/or until imposed conditions are met. The student is eligible to return after this time but may be required to fulfill specified non-academic conditions upon return.
Tenure and Promotion Policy: The McMaster University Revised Policy and Regulations with Respect to Academic Appointment, Tenure and Promotion.
Voluntary Resolution: Steps taken (e.g. arrangement of academic, work or living environment / conditions) to resolve or remedy a Complaint, with which both the Complainant and Respondent have agreed.
6 "non-teaching staff" means the employees of the University and of a college affiliated with the University who are not members of the teaching staff –The McMaster University Act, 1976
Effective January 1, 2020 Page 27 of 31
    
Sexual Violence Policy Appendix A: Definitions Workplace Harassment7 means engaging in a course of vexatious comment or conduct against a worker in a
workplace that is known or ought reasonably to be known to be unwelcome; or workplace sexual harassment.
Workplace Restoration is the establishment or re-establishment of harmonious working relationships between individuals and within a team, group or unit.
Workplace Sexual Harassment 8 means engaging in a course of vexatious comment or conduct against a worker in a workplace because of sex, sexual orientation, gender identity or gender expression, where the course of comment or conduct is known or ought reasonably to be known to be unwelcome; or
making a sexual solicitation or advance where the person making the solicitation or advance is in a position to confer, grant or deny a benefit or advancement to the worker and the person knows or ought reasonably to know that the solicitation or advance is unwelcome.
Workplace Violence9 means: the exercise of physical force by a person against a worker, in a workplace, that causes or could cause physical injury to the worker; an attempt to exercise physical force against a worker, in a workplace, that could cause physical injury to the worker; a statement or behaviour that it is reasonable for a worker to interpret as a threat to exercise physical force against the worker, in a workplace, that could cause physical injury to the worker.
Worker: a person who performs work or supplies services for monetary compensation; and a person who performs work or supplies services for no monetary compensation under a program approved by a college of applied arts and technology, university or other post-secondary institution. Unpaid students, learners and trainees who are workers under the Occupational Health and Safety Act have the same duties and rights as paid workers. Placement employers have the same duties to protect the health and safety of unpaid students, learners or trainees who are workers under the Occupational Health and Safety Act as they do to protect their paid workers. The definition of “worker” does not include a volunteer who works for no monetary payment of any kind.
  7 Occupational Health and Safety Act
8 Government of Canada Restoring The Workplace Following A Harassment Complaint: A Manager's Guide 9 Occupational Health and Safety Act
Effective January 1, 2020 Page 28 of 31
 
Sexual Violence Policy
Appendix B: Resources
 APPENDIX B: RESOURCES
The Sexual Violence Response Protocol is an information resource for all Community Members making or receiving Disclosures of Sexual Violence. Additional resources include, but are not limited to:
Support for the University Community
 Sexual Violence Prevention and Response Office, Equity and Inclusion Office  Human Rights & Dispute Resolution Program, Equity and Inclusion Office
 Faculty of Health Sciences Professionalism Office
 Security Services
 Chaplaincy Centre Additional Support for Students
 Student Wellness Centre (personal counselling and medical services)
 Student Support & Case Management (support and guidance about the Code of Student Rights and
Responsibilities)
 Indigenous Student Services (community support and resources for Indigenous students)
 Women and Gender Equity Network, McMaster Student Union (peer support and resources)
 Graduate Students Association Health & Dental Plans (health benefits include access to psychological counselling in the community)
Additional Support for Staff and Faculty
 Union or Association
 Employee & Labour Relations
 Employee Health Services
 Employee and Family Assistance Program (access to professional counsellors, legal guidance and
other supportive services available to staff and faculty)
Support in the Broader Community
 Good2Talk (24/7 phone support for students offered by professional counsellors)
 Sexual Assault Centre Hamilton & Area (SACHA) (24/7 phone support, counselling, accompaniment)  Sexual Assault/Domestic Violence Care Centre
 Hamilton Police Services – Victim Services Branch
 John Howard Society or Elizabeth Fry Society (for individuals in conflict with the law)
Guidance about a Policy and/or Procedures
 Equity and Inclusion Office
 Employee & Labour Relations
 Student Support & Case Management  University Secretariat
Independent Resource
 Ombuds Office provides an independent, impartial, and confidential process through which students may pursue a just, fair and equitable resolution of a University related concern.
                               Effective January 1, 2020 Page 29 of 31

1. 2. 3.
4.
5.
6.
7. 8.
9.
APPENDIX C: JURISDICTION
Complaints may be made, or Investigations initiated about any alleged violation of this Policy involving any Community Member, including members of recognized groups, teams and clubs. The Policy may extend to incidents that occur off campus where there is a clear nexus to the working and/or learning environment at the University and recognizes that social media conduct may give rise to a violation of the Policy.
Nothing in this Policy is meant to supersede the terms and conditions of any collective agreement, or any other contractual agreement, entered into by the University and its employee groups. In the event that the provisions of this Policy contradict any such collective or contractual agreement, the collective or contractual agreement governs, to the extent of the contradiction.
To the extent that this Policy affects the terms and conditions of employment of faculty of the University, it may be subject to discussion and/or approval in accordance with the University policy entitled, The Joint Administration/Faculty Association Committee to Consider University Financial Matters and to Discuss and Negotiate Matters Related to Terms and Conditions of Employment of Faculty, revised by the Board of Governors on October 20, 1988 (the 'Joint Administration/Faculty Association' policy).
Should a Complainant, with respect to the subject matter of a Complaint dealt with under this Policy and/or the Discrimination & Harassment Policy, seek redress under the Ontario Human Rights Code, the Criminal Code, the Occupational Health and Safety Act, the provisions of an applicable collective agreement, or through civil litigation, or any other forum external to the University, the appropriate Decision-Maker, in consultation with the Director (HRDR), and/or relevant Intake Office Director, will determine whether proceedings under this Policy will be initiated.
If proceedings under this Policy and/or the Discrimination & Harassment Policy have already been initiated, the appropriate Decision-Maker, in consultation with the Director (HRDR), and/or relevant Intake Office Director, will determine in the circumstances whether or not the proceedings under this Policy will:
a) be permanently discontinued;
b) be disallowed; or
c) be suspended until proceedings in the external or other forum are concluded, although Interim Measures may be put in place to safeguard the environments of the parties involved.
If a jurisdictional issue arises between the University and an affiliate, off-site entity or other third party, a senior officer of the affiliate/third party, and the University Provost or Dean and Vice-President (Health Sciences) or relevant Decision-Maker in conjunction with the University Vice-President (Administration), will attempt a resolution, which may include a joint Investigation or an agreement to share the findings and/or other relevant outcomes with the other party. In the absence of any agreement to the contrary, the University will proceed with the Investigation according to University policy and procedures.
This Policy is not intended to supersede or interfere with the criminal justice system; all persons have the right to pursue legal avenues.
Respondents in a Complaint procedure must be Community Members. If a person alleged to have engaged in Sexual Violence is not currently a Community Member, the University has no jurisdiction to pursue or adjudicate the incident. However, the University reserves the right to take whatever steps it considers appropriate to safeguard the University Community.
As part of the University’s commitment to a Discrimination and Harassment free working, studying and living environment, all external agencies, third-party service providers, and independent contractors who do business on the University and are considered agents of the University will be informed of the existence of this Policy and of the University’s expectation that these external entities shall govern themselves accordingly while doing business with the University. Information to this effect will be included in all contracts.
Sexual Violence Policy
Appendix C: Jurisdiction
       Effective January 1, 2020 Page 30 of 31

Sexual Violence Policy Appendix D: Related Policies and Legislation APPENDIX D: RELATED POLICIES AND LEGISLATION
This Policy is to be read in conjunction with the following policies, statements, and collective agreements. Any question of the application of this Policy or related policies shall be determined by the Provost and Vice President (Academic) or the Vice President (Administration) as appropriate, and in conjunction with the administrator of the other policy or policies. The University reserves the right to amend or add to the University’s policies and statements from time to time (this is not a comprehensive list):
• Academic Accommodation of Students with Disabilities
• Academic Freedom, Statement (SPS E1)
• Accessibility – University Policy on
• Code of Conduct for Faculty and Procedures for Taking Disciplinary Action
• Code of Student Rights and Responsibilities
• Complaint Resolution Procedure for TMG
• Conflict of Interest Guidelines- Undergraduate Studies and Graduate Studies
• Discrimination & Harassment Policy
• Employee & Labour Relations – Collective Agreements
• Faculty General Grievance Procedure
• Freedom of Information and Protection of Privacy Act
• Hearing Procedures for the Board-Senate Hearing Panel for Discrimination, Harassment and Sexual Violence
• Ministry of Training, Colleges and Universities Act
• Ontario Human Rights Code
• Occupational Health and Safety Act
• Personal Health Information Protection Act
• Professional Behavior Code for Graduate Learners, Health Sciences
• Professional Behavior Code for Undergraduate Learners, Health Sciences
• Senate Resolutions re Group Conflict
• Senate Mediation Procedures
• Sexual Violence Response Protocol
• Statement on Building an Inclusive Community with a Shared Purpose
• Inclusive Communications, Policy Statement and Guidelines on
• Students Groups (Recognition, Risk Assessment and Event Planning), Policy on
• Tenure and Promotion Policy (McMaster University Revised Policy and Regulations with Respect to Academic appointment, Tenure and Promotion)
• Trespass to Property Act
• Violence in the Workplace, Policy on
• Workplace Accommodation, Policy on
• Workplace & Environmental Health and Safety Policy
                                Effective January 1, 2020
Page 31 of 31
`;
