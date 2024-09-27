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

export type SocialMedia =
  | 'website'
  | 'instagram'
  | 'facebook'
  | 'linkedin'
  | 'twitter'
  | 'youtube'
  | 'linktree'
  | 'github'
  | 'tiktok'
  | 'discord'
  | 'mailingList';

export type TExecMember = {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  program: string;
  year: string;
  contactFor: TContactFor;
};

export type TContactFor =
  | ''
  | 'General Inquiries'
  | 'Finances'
  | 'Admin'
  | 'Event Details'
  | 'Member Details';
