import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TDocument } from '@/lib/types';

import { fetchSaveDocument } from '@/app/clubs-portal/api/fetchSaveDocument';

export const useSaveDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (document: TDocument) => {
      return fetchSaveDocument(document);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allClubsDocuments'] });
    },
    onError: () => {
      // eslint-disable-next-line no-console
      console.error('Something went wrong with the savings hook.');
    },
  });
};
