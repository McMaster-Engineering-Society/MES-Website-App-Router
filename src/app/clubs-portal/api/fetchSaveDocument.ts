import { TDocument } from "@/lib/types";

export const fetchSaveDocument = async (newDocument: TDocument) => {
  console.log("API", JSON.stringify(newDocument))
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/documents`, 
    {
      method:"POST", 
      headers:{"Content-Type":"application/json"}, 
      body:JSON.stringify(newDocument)
    });

  return await res.json()
}