import { Block } from '@blocknote/core';
import React from 'react';

interface TocItem {
  text: string;
  level: number;
  id: string;
  children: TocItem[];
}

interface TocProps {
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

const extractHeadings = (blocks: Block[]): TocItem[] => {
  const tocItems: TocItem[] = [];
  const stack: TocItem[] = [];

  blocks.forEach((block) => {
    if (block.type.startsWith('heading') && block.id) {
      const headingLevel = (block.props as { level: number }).level;
      const text = extractTextContent(block.content);
      const tocItem: TocItem = {
        text,
        level: headingLevel,
        id: block.id,
        children: [],
      };

      if (headingLevel === 1) {
        tocItems.push(tocItem);
        stack.length = 0; // Clear the stack for a new top-level heading
        stack.push(tocItem); // Push the new h1 onto the stack
      } else {
        // Pop stack until finding the correct parent level
        while (
          stack.length > 0 &&
          stack[stack.length - 1].level >= headingLevel
        ) {
          stack.pop();
        }

        if (stack.length > 0) {
          stack[stack.length - 1].children.push(tocItem); // Add as a child to the closest parent
        } else {
          tocItems.push(tocItem);
        }

        stack.push(tocItem);
      }
    }
  });

  return tocItems;
};

const renderTocItems = (items: TocItem[]) => (
  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
    {items.map((item) => (
      <li key={item.id} className={`toc-item toc-item-level-${item.level}`}>
        <a
          href={`#${item.id}`}
          onClick={(e) => {
            e.preventDefault();

            const container = document.querySelector(
              `[data-id="${item.id}"]`,
            ) as HTMLElement | null;
            const element = container?.querySelector(
              '.bn-block-content h1, h2, h3, h4, h5, h6',
            );
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
            } else {
              return;
            }
          }}
        >
          {item.text}
        </a>
        {item.children.length > 0 && (
          <ul style={{ paddingLeft: 20 }}>{renderTocItems(item.children)}</ul>
        )}
      </li>
    ))}
  </ul>
);

const TableOfContents: React.FC<TocProps> = ({ blocks }) => {
  const tocItems = extractHeadings(blocks);

  return <div className='table-of-contents'>{renderTocItems(tocItems)}</div>;
};

export default TableOfContents;
