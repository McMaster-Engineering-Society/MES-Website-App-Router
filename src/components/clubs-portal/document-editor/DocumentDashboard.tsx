'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import './document-styles/styles.css';

import DocumentPreviewCard from '@/components/clubs-portal/document-editor/DocumentPreviewCard';

import { useDeleteDocument } from '@/app/clubs-portal/hooks/useDeleteDocument';
import { useFetchAllDocuments } from '@/app/clubs-portal/hooks/useFetchAllDocuments';

export default function DocumentDashboard() {
  const { data: documents, isLoading, error } = useFetchAllDocuments();
  const deleteDocument = useDeleteDocument();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{
    [key: string]: { top: number; left: number };
  }>({});

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

  const handleDeleteDocument = async (docId: string | undefined) => {
    if (docId) {
      // eslint-disable-next-line no-console
      console.log('DOC ID: ' + docId);
      deleteDocument.mutate(docId);
    } else {
      // eslint-disable-next-line no-console
      console.error('Document ID is undefined');
    }
  };

  const toggleDropdown = (
    docId: string | undefined,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (docId === undefined) return;
    const { top, left } = (event.target as HTMLElement).getBoundingClientRect();
    setDropdownPosition({ [docId]: { top: top - 10, left } });
    setDropdownOpen(dropdownOpen === docId ? null : docId);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Documents Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {documents.map((doc) => (
          <div
            key={doc._id}
            onClick={() => handleDocumentClick(doc._id)}
            className='rounded-border'
          >
            <DocumentPreviewCard document={doc} />
            <h2 className='text-xl font-bold mt-2'>{doc.title}</h2>
            <div className='flex justify-end mt-2'>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  toggleDropdown(doc._id, event);
                }}
                className='text-gray-700 px-2 py-1 rounded hover:bg-gray-200'
              >
                ☰
              </button>
              {dropdownOpen === doc._id && (
                <div
                  className='absolute bg-white border-2 border-gray-300 rounded shadow-lg z-10'
                  style={{
                    top: dropdownPosition[doc._id]?.top ?? 0,
                    left: dropdownPosition[doc._id]?.left ?? 0,
                    transform: 'translateY(-100%)',
                  }}
                >
                  <button
                    //onClick={() => handleModifyDocument(doc._id)}
                    className='block text-base px-4 py-2 text-left w-full hover:bg-gray-300'
                  >
                    Status
                  </button>
                  <button
                    //onClick={() => handleModifyDocument(doc._id)}
                    className='block text-base px-4 py-2 text-left w-full hover:bg-gray-300'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteDocument(doc._id)}
                    className='block text-base px-4 py-2 text-left w-full hover:bg-red-400 hover:text-white'
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
