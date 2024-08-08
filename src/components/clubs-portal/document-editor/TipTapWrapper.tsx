'use client';

import { Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
// import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import Image from '@tiptap/extension-image';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Export } from '@tiptap-pro/extension-export';
import {
  getHierarchicalIndexes,
  TableOfContentData,
  TableOfContents,
} from '@tiptap-pro/extension-table-of-contents';
import React, { useEffect,useMemo, useState } from 'react';

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import './document-styles/index.css';
import './document-styles/styles.css';

import Button from '@/components/buttons/Button';
import { DocumentPanel } from '@/components/clubs-portal/document-editor/DocumentPanel';

import { DocumentTableOfContents } from './DocumentTableOfContents';
const MemorizedDocumentTableOfContents = React.memo(DocumentTableOfContents);

async function saveToStorage(jsonBlocks: Block[]) {
  // Save contents to local storage. You might want to debounce this or replace
  // with a call to your API / database.
  localStorage.setItem("editorContent", JSON.stringify(jsonBlocks));
}

async function loadFromStorage() {
  // Gets the previously stored editor contents.
  const storageString = localStorage.getItem("editorContent");
  return storageString
    ? (JSON.parse(storageString) as PartialBlock[])
    : undefined;
}

export const TipTapWrapper = () => {
  const [items, setItems] = useState<TableOfContentData>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined | "loading"
  >("loading");

  // Loads the previously stored editor contents.
  useEffect(() => {
    loadFromStorage().then((content) => {
      setInitialContent(content);
    });
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      // TableOfContents.configure({
      //   getIndex: getHierarchicalIndexes,
      //   onUpdate(content) {
      //     setItems(content);
      //   },
      // }),
      Export,
    ],
    editable: true,
    immediatelyRender: false,
    // content: `
    //   <h1>Heading 1</h1>
    //   <p>This is a paragraph.</p>
    //   <ul>
    //     <li>List item 1</li>
    //     <li>List item 2</li>
    //   </ul>
    //   <blockquote>Blockquote</blockquote>
    //   <h1> Images </h1>
    //   <img src="/images/default-picture.jpeg" style="width: 20px; height: 200px;"/>
    // `,
  });

  // const editor2 = useCreateBlockNote({

  //   _tiptapOptions: {
  //     extensions: [TableOfContents.configure({
  //       getIndex: getHierarchicalIndexes,
  //       onUpdate(content) {
  //         setItems(content);
  //       }, //Currently TableOfContents connected to both TipTap and BlockNote
  //       //since I get an error for changing to editor2 since not the same type as useEditor from TipTap
  //     }),
  //       Export,
  //     ],
  //   },

  // });

  // We use useMemo + createBlockNoteEditor instead of useCreateBlockNote so we
  // can delay the creation of the editor until the initial content is loaded.
  const editor3 = useMemo(() => {
    if (initialContent === "loading") {
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
        Export,
      ],
    };

    return BlockNoteEditor.create({ initialContent, ...options });
  }, [initialContent]);

  // Render a loading state if editor3 is still being created
  if (initialContent === "loading" || !editor3) {
    return "Loading content...";
  }

  if (!editor) {
    return null;
  }

  return (
    <div className='flex flex-col'>
      <Button
        onClick={() => {
          alert(JSON.stringify(editor.getJSON()));
        }}
      >
        Export to Markdown
      </Button>
      <DocumentPanel setIsSidebarOpen={setIsSidebarOpen} />
      <div className='flex h-screen bg-white'>
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
          {/* <EditorContent editor={editor} /> */}
          <BlockNoteView
            editor={editor3}
            editable={false}
            onChange={() => {
              saveToStorage(editor3.document);
            }} />
        </div>
      </div>
    </div>
  );
};
