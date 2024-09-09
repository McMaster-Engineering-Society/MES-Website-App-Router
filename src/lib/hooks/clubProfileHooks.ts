import { useMutation, useQuery } from '@tanstack/react-query';

import {
  fetchClubProfile,
  updateClubProfile,
} from '@/lib/fetchers/clubProfileFetchers';

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
