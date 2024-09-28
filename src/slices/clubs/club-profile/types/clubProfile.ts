import { ObjectId } from 'mongodb';

export type TClubProfile = {
  _id: string | ObjectId;
  clubId: string;
  name: string;
  email: string;
  description?: string;
  profilePicture?: string;
  socials: Record<SocialMedia, string>;
};

export const socialMediaOptions = [
  'website',
  'instagram',
  'facebook',
  'linkedin',
  'twitter',
  'youtube',
  'linktree',
  'github',
  'tiktok',
  'discord',
  'mailingList',
] as const;
export type SocialMedia = (typeof socialMediaOptions)[number];

export type TExecMember = {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  program: string;
  year: string;
  contactFor: TContactFor;
};

export const contactForOptions = [
  '',
  'General Inquiries',
  'Finances',
  'Admin',
  'Event Details',
  'Member Details',
] as const;

export type TContactFor = (typeof contactForOptions)[number];
