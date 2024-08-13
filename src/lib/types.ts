import { ObjectId } from 'mongodb';

// unused original example for endpoints, databases and services
export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type TMessageResponse = {
  message: string;
};

export type TApiResponse<T> = {
  data: T | null;
  message?: string;
};

export type UHSForm = {
  _id: string | ObjectId;

  formStatus: 'pending' | 'approved' | 'rejected';


  email: string,
  firstAgreement: boolean,
  secondAgreement: boolean,
  groupMES: boolean,
  groupDepartment: boolean,
  groupCommittee: boolean,
  groupName: string,
  eventName: string,
  eventDesc: string,
  organizerName: string,
  organizerNumber: string,
  organizerEmail: string,
  location: string,
  numberOfParticipants: string,
  emergencyName: string,
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string,
  repeatYes: boolean,
  repeatNo: boolean,
  repeatInfo: string,
  execMeetingYes: boolean,
  execMeetingNo: boolean,
  thirdAgreement: boolean,
  virtualYes: boolean,
  virtualNo: boolean,
  movieYes: boolean,
  movieNo: boolean,
  dangerYes: boolean,
  dangerNo: boolean,
  activityDesc: string,
  nameOfFirstAidIndividual: string,
  nameOfEmergencyIndividual: string,
  fourthAgreement: boolean,
  fifthAgreement: boolean,
  involveHazardYes: boolean,
  involveHazardNo: boolean,
  equipmentDesc: string,
  certificateSent: boolean,
  sixthAgreement: boolean,
  foodYes: boolean,
  foodNo: boolean,
  alcoholYes: boolean,
  alcoholNo: boolean,
  placeYes: boolean,
  placeNo: boolean,
  seventhAgreement: boolean,
  campusYes: boolean,
  campusNo: boolean,
  eighthAgreementYes: boolean,
  eighthAgreementNo: boolean,
  travelYes: boolean,
  travelNo: boolean,
  busName: string,
  busMonitor: string,
  safetyPlan: string,
  ninthAgreement: boolean,
  tenthAgreement: boolean,
  informationSecurityPolicy: boolean,
  studentRightsPolicy: boolean,
  discriminationHarassmentPolicy: boolean,
  sexualViolencePolicy: boolean,
  comments: string,
  finalAgreement: boolean
};
