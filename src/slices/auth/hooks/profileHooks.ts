import { fetchProfileByEmail } from '@slices/auth/apiCalls/profileApiCalls';
import { TProfile } from '@slices/auth/types';
import { useQuery } from '@tanstack/react-query';

export const useFetchProfileByEmailHook = (email: string | null) => {
  return useQuery<TProfile, Error>({
    queryKey: ['profile', email],
    queryFn: () => fetchProfileByEmail(email),
    enabled: !!email, // Only run the query if email is truthy
    retry: false, // Don't want to retry if there is an error, just return a non-existent profile. Default behaviour will have useQuery returned undefined if an error is thrown.
  });
};
