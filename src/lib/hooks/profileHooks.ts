import { useQuery } from '@tanstack/react-query';

import { fetchProfileByEmail } from '@/lib/api/userApi';
import { TProfile } from '@/lib/types';

export const useFetchProfileByEmailHook = (email: string | null) => {
  return useQuery<TProfile, Error>({
    queryKey: ['profile', email],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    queryFn: () => fetchProfileByEmail(email!),
    enabled: !!email, // Only run the query if email is truthy
  });
};
