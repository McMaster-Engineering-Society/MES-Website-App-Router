import { TDocument } from "@/lib/types";

export const fetchAllDocuments = async (): Promise<TDocument[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/documents`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const documents = await res.json();

  return documents;
};
