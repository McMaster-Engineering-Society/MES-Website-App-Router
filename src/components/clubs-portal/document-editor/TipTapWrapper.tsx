'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  getHierarchicalIndexes,
  TableOfContentData,
  TableOfContents,
} from '@tiptap-pro/extension-table-of-contents';
import React, { useState } from 'react';

import './document-styles/index.css';
import './document-styles/styles.css';

import { TDocument } from '@/lib/types';

import { DocumentPanel } from '@/components/clubs-portal/document-editor/DocumentPanel';

import { useSaveDocument } from '@/app/clubs-portal/hooks/useSaveDocument';

import { DocumentTableOfContents } from './DocumentTableOfContents';
const MemorizedDocumentTableOfContents = React.memo(DocumentTableOfContents);

export const TipTapWrapper = () => {
  const [items, setItems] = useState<TableOfContentData>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const saveDocument = useSaveDocument();

  const editor = useEditor({
    extensions: [
      StarterKit,
      TableOfContents.configure({
        getIndex: getHierarchicalIndexes,
        onUpdate(content) {
          setItems(content);
        },
      }),
    ],
    editable: true,
    content: '<p>Hello World! 🌎️</p>',
  });

  if (!editor) {
    return null;
  }

  const handleSave = async () => {
    if (!editor) {
      return;
    }

    const document: TDocument = {
      title: 'temp',
      content: editor.getJSON(),
      // content: "test"
    };

    await saveDocument.mutateAsync(document);
  };

  return (
    <div className='flex flex-col'>
      <DocumentPanel
        setIsSidebarOpen={setIsSidebarOpen}
        handleSave={handleSave}
        handleDownload={handleSave}
        handleProceed={handleSave}
        handleUpload={handleSave}
      />

      <div className='flex  h-screen'>
        {isSidebarOpen && (
          <div className='border-r border-gray-300 w-1/5 sticky top-0 h-full px-8 pt-8'>
            <div className='flex flex-col items-start h-full gap-4 sticky top-4'>
              <h3>Table of Contents</h3>
              <div className='flex flex-col text-sm gap-1 overflow-auto no-underline'>
                <MemorizedDocumentTableOfContents
                  editor={editor}
                  items={items}
                />
              </div>
            </div>
          </div>
        )}
        <div className='flex flex-col w-full h-full overflow-auto'>
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
};
