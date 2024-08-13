'use client';

import { Block } from '@blocknote/core';
import { useEffect, useState } from 'react';

const ParseHeadingsPage = () => {
  const [headings, setHeadings] = useState<string[]>([]);

  useEffect(() => {
    // Retrieve the document content from localStorage
    const documentContent = localStorage.getItem('documentContent');
    if (documentContent) {
      const blocks = JSON.parse(documentContent) as Block[];

      // Parse the headings from the document content
      const headingBlocks = blocks.filter((block) => block.type === 'heading');
      const headingTexts = headingBlocks.map(
        (block) =>
          block.content
            .map((c) => {
              if ('text' in c) {
                return c.text;
              }
              return ''; // Return an empty string for non-text elements
            })
            .join(''), // Combine all text parts in a single heading
      );

      setHeadings(headingTexts);
    }
  }, []);

  return (
    <div>
      <h1>Parsed Headings</h1>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>{heading}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParseHeadingsPage;
