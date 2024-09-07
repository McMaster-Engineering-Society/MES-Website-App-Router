export const deleteDocument = async (docId: string): Promise<void> => {
  console.log(`Deleting document with ID: ${docId}`); // Debugging
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/documents/${docId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to delete document: ${res.statusText}`);
  }

  return;
};
