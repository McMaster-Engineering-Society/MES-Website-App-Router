'use client';

import { useRouter } from 'next/navigation';

import { useFetchAllDocuments } from '@/app/clubs-portal/hooks/useFetchAllDocuments';

export default function DocumentDashboard() {
  const { data: documents, isLoading, error } = useFetchAllDocuments();
  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!documents) return <div>No documents found</div>;

  // Check if documents is an array
  if (!Array.isArray(documents)) {
    return <div>Error: Unexpected data format</div>;
  }

  const handleDocumentClick = (docId: string | undefined) => {
    if (docId === undefined) return;
    router.push(`/clubs-portal/document/?docId=${docId}`);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Documents Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {documents.map((doc) => (
          <div
            key={doc._id}
            onClick={() => handleDocumentClick(doc._id)}
            className='border p-4 rounded-lg cursor-pointer hover:bg-gray-100'
          >
            <h2 className='text-xl font-semibold'>{doc.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
