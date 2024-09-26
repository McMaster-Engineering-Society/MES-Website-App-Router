'use client';

import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { BlockNoteView } from '@blocknote/mantine';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

// import './document-styles/index.css';
// import './document-styles/styles.css';
import { TDocument } from '@/lib/types';

import { DocumentPanel } from '@/components/clubs-portal/document-editor/DocumentPanel';
import TableOfContents from '@/components/clubs-portal/document-editor/TableOfContentsPlugin';

import { useFetchAllDocuments } from '@/app/clubs-portal/hooks/useFetchAllDocuments';
import { useSaveDocument } from '@/app/clubs-portal/hooks/useSaveDocument';

async function saveToStorage(jsonBlocks: Block[]) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.setItem('editorContent', JSON.stringify(jsonBlocks));
}

async function loadFromStorage() {
  const storageString = localStorage.getItem('editorContent');
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}

export const TipTapWrapper = ({ docId }: { docId: string }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | 'loading'
  >('loading');
  const { data: documents } = useFetchAllDocuments();
  const router = useRouter();
  const [blocks, setBlocks] = useState<Block[]>([]);

  async function uploadFile(file: File) {
    const body = new FormData();
    body.append('file', file);

    const ret = await fetch('https://tmpfiles.org/api/v1/upload', {
      method: 'POST',
      body: body,
    });
    return (await ret.json()).data.url.replace(
      'tmpfiles.org/',
      'tmpfiles.org/dl/',
    );
  }

  useEffect(() => {
    if (documents && documents.length > 0) {
      const firstDocument = documents.find(
        (doc: TDocument) => doc._id === docId,
      );
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

    const editorInstance = BlockNoteEditor.create({
      initialContent,
      uploadFile,
    });

    // Set blocks to display the initial ToC
    setBlocks(editorInstance.document);

    return editorInstance;
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

    const firstDocument = documents.find((doc: TDocument) => doc._id === docId);

    const document: TDocument = {
      _id: firstDocument._id,
      title: firstDocument.title,
      content: editor.document,
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
                <TableOfContents blocks={blocks} />
              </div>
            </div>
          </div>
        )}
        <div className='flex flex-col w-full h-full overflow-auto'>
          <BlockNoteView
            editor={editor}
            editable={true}
            onChange={() => {
              saveToStorage(editor.document);
              setBlocks(editor.document);
            }}
          />
        </div>
      </div>
    </div>
  );
};
