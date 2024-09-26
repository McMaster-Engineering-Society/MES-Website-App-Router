import { Block } from '@blocknote/core';
import React from 'react';

interface DocumentPreviewProps {
  blocks: Block[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractTextContent = (content: any): string => {
  if (Array.isArray(content)) {
    return content.map((item) => extractTextContent(item)).join(' ');
  } else if (typeof content === 'object' && content !== null) {
    return extractTextContent(content.text || content.children || '');
  }
  return typeof content === 'string' ? content : '';
};

const extractPreview = (blocks: Block[]): string => {
  let previewText = '';

  if (!Array.isArray(blocks)) {
    return 'No preview available';
  }

  for (const block of blocks) {
    if (block.type === 'paragraph' || block.type.startsWith('heading')) {
      previewText += extractTextContent(block.content) + ' ';
    }

    if (previewText.length > 200) {
      previewText = previewText.slice(0, 200) + '...';
      break;
    }
  }

  return previewText.trim();
};

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ blocks }) => {
  const previewText = extractPreview(blocks);

  return (
    <div className='document-preview text-sm text-gray-700'>{previewText}</div>
  );
};

export default DocumentPreview;
