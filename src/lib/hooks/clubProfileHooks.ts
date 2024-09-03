import { useMutation, useQuery } from '@tanstack/react-query';

import { TClubProfile } from '@/types/clubProfile';

export const useFetchClubProfile = (clubId: string) => {
  return useQuery<TClubProfile, Error>({
    queryKey: ['clubProfile'],
    queryFn: async () => fetchClubProfile(clubId),
  });
};

export const useUpdateClubProfile = () => {
  return useMutation<Partial<TClubProfile>, Error, Partial<TClubProfile>>({
    mutationFn: updateClubProfile,
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

async function updateClubProfile(
  profileUpdates: Partial<TClubProfile>,
): Promise<Partial<TClubProfile>> {
  const response = await fetch('/api/clubs/update-profile', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profileUpdates),
  });

  const result = await response.json();

  return result.data;
}
