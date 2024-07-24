import { TextSelection } from '@tiptap/pm/state';
import { Editor } from '@tiptap/react';
import {
  TableOfContentData,
  TableOfContentDataItem,
} from '@tiptap-pro/extension-table-of-contents';
import React from 'react';

import { cn } from '@/lib/utils';

export const ToCItem = ({
  item,
  onItemClick,
}: {
  item: TableOfContentDataItem;
  onItemClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => void;
}) => {
  const levelClasses = cn({
    'pl-4 text-base': item.level === 1,
    'pl-8 text-sm': item.level === 2,
    'pl-12 text-xs': item.level === 3,
  });

  return (
    <div className={levelClasses}>
      <a
        href={`#${item.id}`}
        onClick={(e) => onItemClick(e, item.id)}
        data-item-index={item.itemIndex}
      >
        {item.textContent}
      </a>
    </div>
  );
};

export const ToCEmptyState = () => {
  return (
    <div className='empty-state'>
      <p>Start editing your document to see the outline.</p>
    </div>
  );
};

type ToCProps = {
  items: TableOfContentData;
  editor: Editor | null;
};

export const DocumentTableOfContents = ({ items = [], editor }: ToCProps) => {
  if (items.length === 0) {
    return <ToCEmptyState />;
  }

  const onItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();

    if (editor) {
      const element = editor.view.dom.querySelector(`[data-toc-id="${id}"`);
      if (element === null) {
        return;
      }
      const pos = editor.view.posAtDOM(element, 0);

      // set focus
      const tr = editor.view.state.tr;

      tr.setSelection(new TextSelection(tr.doc.resolve(pos)));

      editor.view.dispatch(tr);

      editor.view.focus();

      if (history.pushState) {
        // eslint-disable-line
        history.pushState(null, '', `#${id}`); // eslint-disable-line
      }

      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {items.map((item) => (
        <ToCItem onItemClick={onItemClick} key={item.id} item={item} />
      ))}
    </>
  );
};
