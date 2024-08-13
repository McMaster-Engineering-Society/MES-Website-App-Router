import { useQuery } from '@tanstack/react-query';

import { fetchAllDocuments } from '@/app/clubs-portal/api/fetchAllDocuments';

export const useFetchAllDocuments = () => {
  return useQuery({
    queryKey: ['allClubsDocuments'],
    queryFn: async () => {
      return await fetchAllDocuments();
    },
  });
};
