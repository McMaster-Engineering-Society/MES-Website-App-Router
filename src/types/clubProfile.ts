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
