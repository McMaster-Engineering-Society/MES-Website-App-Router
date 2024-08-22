import { ObjectId } from 'mongodb'

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

//the types for all the data
export type UHSFormData = {
  email: string;
  firstAgreement: boolean;
  secondAgreement: boolean;
  groupCategory: string;
  groupName: string;
  eventName: string;
  eventDesc: string;
  organizerName: string;
  organizerNumber: string;
  organizerEmail: string;
  location: string;
  numberOfParticipants: string;
  emergencyName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  repeat: boolean | undefined;
  repeatInfo: string;
  execMeeting: boolean | undefined;
  thirdAgreement: boolean;
  virtual: boolean | undefined;
  movie: boolean | undefined;
  danger: boolean | undefined;
  activityDesc: string;
  nameOfFirstAidIndividual: string;
  nameOfEmergencyIndividual: string;
  fourthAgreement: boolean;
  fifthAgreement: boolean;
  involveHazard: boolean | undefined;
  equipmentDesc: string;
  certificateSent: boolean;
  sixthAgreement: boolean;
  food: boolean | undefined;
  alcohol: boolean | undefined;
  place: boolean | undefined;
  seventhAgreement: boolean;
  campus: boolean | undefined;
  eighthAgreement: boolean | undefined;
  travel: boolean | undefined;
  busName: string;
  busMonitor: string;
  safetyPlan: string;
  ninthAgreement: boolean;
  tenthAgreement: boolean;
  informationSecurityPolicy: boolean;
  studentRightsPolicy: boolean;
  discriminationHarassmentPolicy: boolean;
  sexualViolencePolicy: boolean;
  comments: string;
  finalAgreement: boolean;
};

export type AlcoholEventData = {
  campus: boolean | undefined;
  eighthAgreement: boolean | undefined;
};

export type BestData = {
  danger: boolean | undefined;
};

export type DangerData = {
  activityDesc: string;
  nameOfFirstAidIndividual: string;
  nameOfEmergencyIndividual: string;
  fourthAgreement: boolean;
};

export type EventData = {
  eventName: string;
  eventDesc: string;
  organizerName: string;
  organizerNumber: string;
  organizerEmail: string;
  location: string;
  numberOfParticipants: string;
  emergencyName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  repeat: boolean | undefined;
  repeatInfo: string;
  execMeeting: boolean | undefined;
  thirdAgreement: boolean;
  virtual: boolean | undefined;
  movie: boolean | undefined;
};

export type FoodAlcoholData = {
  food: boolean | undefined;
  alcohol: boolean | undefined;
  place: boolean | undefined;
  seventhAgreement: boolean;
};

export type HazardEventsData = {
  equipmentDesc: string;
  certificateSent: boolean;
  sixthAgreement: boolean;
};

export type IntroData = {
  email: string;
};

export type PolicyData = {
  informationSecurityPolicy: boolean;
  studentRightsPolicy: boolean;
  discriminationHarassmentPolicy: boolean;
  sexualViolencePolicy: boolean;
  comments: string;
  finalAgreement: boolean;
};

export type SafetyHazardsData = {
  fifthAgreement: boolean;
  involveHazard: boolean | undefined;
};

export type TravelData = {
  travel: boolean | undefined;
};

export type TravelEventsData = {
  busName: string;
  busMonitor: string;
  safetyPlan: string;
  ninthAgreement: boolean;
  tenthAgreement: boolean;
};

export type UnderstandingData = {
  firstAgreement: boolean;
  secondAgreement: boolean;
  groupCategory: string;
  groupName: string;
};