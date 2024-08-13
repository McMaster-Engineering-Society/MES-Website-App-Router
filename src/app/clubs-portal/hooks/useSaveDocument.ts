import { useMutation, useQueryClient } from "@tanstack/react-query";

import { TDocument } from "@/lib/types";

import { fetchSaveDocument } from "@/app/clubs-portal/api/fetchSaveDocument";

export const useSaveDocument
 = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (document: TDocument) => {
      return fetchSaveDocument(document);
    },
    onSuccess: () => {
      // eslint-disable-next-line no-console
      console.error("Something went right.");
      queryClient.invalidateQueries({ queryKey: ["allEmailTemplates"] });
    },
    onError: () => {
      // eslint-disable-next-line no-console
      console.error("Something went wrong.");
    },
  });
};
