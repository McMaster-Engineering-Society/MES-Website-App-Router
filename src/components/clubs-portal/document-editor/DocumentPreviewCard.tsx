import { Block } from '@blocknote/core';
import React from 'react';

import { TDocument } from '@/lib/types';

import DocumentPreview from '@/components/clubs-portal/document-editor/DocumentPreview';

const DocumentPreviewCard: React.FC<{ document: TDocument }> = ({
  document,
}) => {
  const blocks: Block[] = document.content as Block[];

  return (
    <div className='border p-4 rounded shadow'>
      <DocumentPreview blocks={blocks} />
    </div>
  );
};

export default DocumentPreviewCard;
