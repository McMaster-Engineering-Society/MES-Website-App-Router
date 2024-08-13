import { useQuery } from "@tanstack/react-query";

import { fetchAllDocuments } from "@/app/clubs-portal/api/fetchAllDocuments";


export const useFetchAllDocuments = () => {
  return useQuery({
    queryKey: ["allEmailTemplates"],
    queryFn: async () => {
      return await fetchAllDocuments();
    },
  });
};
