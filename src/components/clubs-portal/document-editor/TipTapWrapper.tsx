'use client';

import { Block, BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { BlockNoteView } from '@blocknote/mantine';
import { useEffect, useMemo, useState } from 'react';

import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import './document-styles/index.css';
import './document-styles/styles.css';

import { DocumentPanel } from '@/components/clubs-portal/document-editor/DocumentPanel';
import TableOfContents from '@/components/clubs-portal/document-editor/TableOfContentsPlugin';

async function saveToStorage(jsonBlocks: Block[]) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.setItem('editorContent', JSON.stringify(jsonBlocks));
}

async function loadFromStorage() {
  // Gets the previously stored editor contents.
  const storageString = localStorage.getItem('editorContent');
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}

export const TipTapWrapper = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | 'loading'
  >('loading');
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

  // Loads the previously stored editor contents.
  useEffect(() => {
    loadFromStorage().then((content) => {
      setInitialContent(content);
    });
  }, []);

  // We use useMemo + createBlockNoteEditor instead of useCreateBlockNote so we
  // can delay the creation of the editor until the initial content is loaded.
  const editor3 = useMemo(() => {
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

  // Render a loading state if editor3 is still being created
  if (initialContent === 'loading' || !editor3) {
    return 'Loading content...';
  }

  return (
    <div className='flex flex-col'>
      <div className='sticky'>
        <DocumentPanel setIsSidebarOpen={setIsSidebarOpen} />
      </div>
      <div className='flex bg-white'>
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
            editor={editor3}
            editable={true}
            onChange={() => {
              saveToStorage(editor3.document);
              setBlocks(editor3.document);
            }}
          />
        </div>
      </div>
    </div>
  );
};
