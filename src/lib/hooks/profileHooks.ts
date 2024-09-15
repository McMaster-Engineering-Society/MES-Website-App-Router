import { useQuery } from '@tanstack/react-query';

import { fetchProfileByEmail } from '@/lib/api/userApi';
import { TProfile } from '@/lib/types';

export const useFetchProfileByEmailHook = (email: string | null) => {
  return useQuery<TProfile, Error>({
    queryKey: ['profile', email],
    queryFn: () => fetchProfileByEmail(email),
    enabled: !!email, // Only run the query if email is truthy
    retry: false, // Don't want to retry if there is an error, just return a non-existent profile. Default behaviour will have useQuery returned undefined if an error is thrown.
  });
};
