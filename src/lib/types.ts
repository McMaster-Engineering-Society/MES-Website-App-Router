import { ObjectId } from 'mongodb'

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
  groupCategory: string,
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
  repeat: boolean | undefined,
  repeatInfo: string,
  execMeeting: boolean | undefined,
  thirdAgreement: boolean,
  virtual: boolean | undefined,
  movie: boolean | undefined,
  danger: boolean | undefined,
  activityDesc: string,
  nameOfFirstAidIndividual: string,
  nameOfEmergencyIndividual: string,
  fourthAgreement: boolean,
  fifthAgreement: boolean,
  involveHazard: boolean | undefined,
  equipmentDesc: string,
  certificateSent: boolean,
  sixthAgreement: boolean,
  food: boolean | undefined,
  alcohol: boolean | undefined,
  place: boolean | undefined,
  seventhAgreement: boolean,
  campus: boolean | undefined,
  eighthAgreement: boolean | undefined,
  travel: boolean | undefined,
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