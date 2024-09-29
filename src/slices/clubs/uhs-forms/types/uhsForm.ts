import { ObjectId } from 'mongodb';

export type TUHSForm = {
  _id: string | ObjectId;

  formStatus: 'pending' | 'approved' | 'rejected';
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

//the types for all the data
export type TUHSFormData = {
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

type TAlcoholEventData = {
  campus: boolean | undefined;
  eighthAgreement: boolean | undefined;
};

export type AlcoholEventProps = TAlcoholEventData & {
  updateFields: (fields: Partial<TAlcoholEventData>) => void;
};

type TBestData = {
  danger: boolean | undefined;
};

export type BestProps = TBestData & {
  updateFields: (fields: Partial<TBestData>) => void;
};

type TDangerData = {
  activityDesc: string;
  nameOfFirstAidIndividual: string;
  nameOfEmergencyIndividual: string;
  fourthAgreement: boolean;
};

export type DangerProps = TDangerData & {
  updateFields: (fields: Partial<TDangerData>) => void;
};

type TEventData = {
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

export type EventProps = TEventData & {
  updateFields: (fields: Partial<TEventData>) => void;
};

type TFoodAlcoholData = {
  food: boolean | undefined;
  alcohol: boolean | undefined;
  place: boolean | undefined;
  seventhAgreement: boolean;
};

export type FoodAlcoholProps = TFoodAlcoholData & {
  updateFields: (fields: Partial<TFoodAlcoholData>) => void;
};

type THazardEventsData = {
  equipmentDesc: string;
  certificateSent: boolean;
  sixthAgreement: boolean;
};

export type HazardEventsProps = THazardEventsData & {
  updateFields: (fields: Partial<THazardEventsData>) => void;
};

type TIntroData = {
  email: string;
};

export type IntroProps = TIntroData & {
  updateFields: (fields: Partial<TIntroData>) => void;
};

type TPolicyData = {
  informationSecurityPolicy: boolean;
  studentRightsPolicy: boolean;
  discriminationHarassmentPolicy: boolean;
  sexualViolencePolicy: boolean;
  comments: string;
  finalAgreement: boolean;
};

export type PolicyProps = TPolicyData & {
  updateFields: (fields: Partial<TPolicyData>) => void;
};

type TSafetyHazardsData = {
  fifthAgreement: boolean;
  involveHazard: boolean | undefined;
};

export type SafetyHazardsProps = TSafetyHazardsData & {
  updateFields: (fields: Partial<TSafetyHazardsData>) => void;
};

type TTravelData = {
  travel: boolean | undefined;
};

export type TravelProps = TTravelData & {
  updateFields: (fields: Partial<TTravelData>) => void;
};

type TTravelEventsData = {
  busName: string;
  busMonitor: string;
  safetyPlan: string;
  ninthAgreement: boolean;
  tenthAgreement: boolean;
};

export type TravelEventsProps = TTravelEventsData & {
  updateFields: (fields: Partial<TTravelEventsData>) => void;
};

type TUnderstandingData = {
  firstAgreement: boolean;
  secondAgreement: boolean;
  groupCategory: string;
  groupName: string;
};

export type UnderstandingProps = TUnderstandingData & {
  updateFields: (fields: Partial<TUnderstandingData>) => void;
};
