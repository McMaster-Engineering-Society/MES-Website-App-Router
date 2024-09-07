import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteDocument } from '@/app/clubs-portal/api/deleteDocument';

export const useDeleteDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (docId: string) => {
      await deleteDocument(docId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['allClubsDocuments'] // Ensuring the key matches the one used in useQuery
      });
    },
  });
};
