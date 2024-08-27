export type ClubProfile = {
  id: string;
  name: string;
  email: string;
  description: string;
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
