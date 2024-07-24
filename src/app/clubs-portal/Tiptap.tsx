'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  getHierarchicalIndexes,
  TableOfContentData,
  TableOfContents,
} from '@tiptap-pro/extension-table-of-contents';
import React, { useState } from 'react';

import './styles.css';

import { ToC } from './ToC';
const MemorizedToC = React.memo(ToC);

export const Tiptap = () => {
  const [items, setItems] = useState<TableOfContentData>([]);

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

  return (
    <div className='col-group'>
      <div className='main'>
        <EditorContent editor={editor} />
      </div>
      <div className='sidebar'>
        <div className='sidebar-options'>
          <div className='label-large'>Table of contents</div>
          <div className='table-of-contents'>
            <MemorizedToC editor={editor} items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};
