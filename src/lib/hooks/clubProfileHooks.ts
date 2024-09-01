import { useQuery } from '@tanstack/react-query';

import { TClubProfile } from '@/types/clubProfile';

export const useFetchClubProfile = (clubId: string) => {
  return useQuery<TClubProfile, Error>({
    queryKey: ['clubProfile', clubId],
    queryFn: async () => fetchClubProfile(clubId),
  });
};

async function fetchClubProfile(clubId: string): Promise<TClubProfile> {
  const response = await fetch('/api/clubs/get-profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Club-ID': clubId,
    },
  });

  const result = await response.json();

  return result.data;
}
