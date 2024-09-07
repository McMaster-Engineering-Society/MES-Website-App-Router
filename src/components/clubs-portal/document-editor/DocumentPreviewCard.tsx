import React from 'react';
import DocumentPreview from '@/components/clubs-portal/document-editor/DocumentPreview';
import { Block } from '@blocknote/core';

import { TDocument } from '@/lib/types';

const DocumentPreviewCard: React.FC<{ document: TDocument }> = ({ document }) => {
  const blocks: Block[] = document.content as Block[];

  return (
    <div className='border p-4 rounded shadow'>
      <DocumentPreview blocks={blocks} />
    </div>
  );
};

export default DocumentPreviewCard;
