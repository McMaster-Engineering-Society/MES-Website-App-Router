'use client';

import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
// import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from '@blocknote/mantine';
import {
  getHierarchicalIndexes,
  TableOfContentData,
  TableOfContents,
} from '@tiptap-pro/extension-table-of-contents';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

import { TDocument } from '@/lib/types';

import { DocumentPanel } from '@/components/clubs-portal/document-editor/DocumentPanel';

import { useFetchAllDocuments } from '@/app/clubs-portal/hooks/useFetchAllDocuments';
import { useSaveDocument } from '@/app/clubs-portal/hooks/useSaveDocument';

async function saveToLocalStorage(jsonBlocks: Block[]) {
  localStorage.setItem('editorContent', JSON.stringify(jsonBlocks));
}

async function loadFromStorage() {
  const storageString = localStorage.getItem('editorContent');
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}

export const TipTapWrapper = ({ docId }: { docId: string }) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [items, setItems] = useState<TableOfContentData>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | 'loading'
  >('loading');
  const { data: documents } = useFetchAllDocuments();
  const router = useRouter();

  useEffect(() => {
    if (documents && documents.length > 0) {
      const firstDocument = documents.find((doc) => doc._id === docId);
      if (firstDocument && firstDocument.content) {
        setInitialContent(firstDocument.content as PartialBlock[]);
      }
    } else {
      loadFromStorage().then((content) => {
        setInitialContent(content);
      });
    }
  }, [documents, docId]);

  const saveDocument = useSaveDocument();

  // We use useMemo + createBlockNoteEditor instead of useCreateBlockNote so we
  // can delay the creation of the editor until the initial content is loaded.
  const editor = useMemo(() => {
    if (initialContent === 'loading') {
      return undefined;
    }

    const options = {
      extensions: [
        TableOfContents.configure({
          getIndex: getHierarchicalIndexes,
          onUpdate(content) {
            setItems(content);
          },
        }),
      ],
    };

    return BlockNoteEditor.create({ initialContent, ...options });
  }, [initialContent]);

  // Render a loading state if editor is still being created
  if (initialContent === 'loading' || !editor) {
    return 'Loading content...';
  }

  if (!editor) {
    return null;
  }

  const handleSave = async () => {
    if (!editor) {
      return;
    }

    const document: TDocument = {
      title: 'temp',
      content: editor.document,
      // content: "test"
    };

    await saveDocument.mutateAsync(document);
  };

  const handleProceed = () => {
    if (!editor) {
      return;
    }

    const documentContent = editor.document;

    // Save the document content to localStorage or pass it via query params
    localStorage.setItem('documentContent', JSON.stringify(documentContent));

    // Navigate to the new page
    router.push('/clubs-portal/document-sharer');
  };

  return (
    <div className='flex flex-col'>
      <DocumentPanel
        setIsSidebarOpen={setIsSidebarOpen}
        handleSave={handleSave}
        handleDownload={handleSave}
        handleProceed={handleProceed}
        handleUpload={handleSave}
      />

      <div className='flex  h-screen'>
        {isSidebarOpen && (
          <div className='border-r border-gray-300 w-1/5 sticky top-0 h-full px-8 pt-8'>
            <div className='flex flex-col items-start h-full gap-4 sticky top-4'>
              <h3>Table of Contents</h3>
              <div className='flex flex-col text-sm gap-1 overflow-auto no-underline'>
                {/* <MemorizedDocumentTableOfContents
                  editor={editor}
                  items={items}
                /> */}
              </div>
            </div>
          </div>
        )}
        <div className='flex flex-col w-full h-full overflow-auto'>
          {/* <EditorContent editor={editor} /> */}
          <BlockNoteView
            editor={editor}
            editable={true}
            onChange={() => {
              saveToLocalStorage(editor.document);
            }}
          />
        </div>
      </div>
    </div>
  );
};
