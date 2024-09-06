import { useQuery } from '@tanstack/react-query';

import { fetchUserByEmail } from '@/lib/api/userApi';
import { TUser } from '@/lib/types';

export const useFetchUserbyEmailHook = (email: string | null) => {
  return useQuery<TUser, Error>({
    queryKey: ['user', email],
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    queryFn: () => fetchUserByEmail(email!),
    enabled: !!email, // Only run the query if email is truthy
  });
};
