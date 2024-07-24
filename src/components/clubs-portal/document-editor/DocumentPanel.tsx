import { FileDown, FileUp, ListCollapse } from 'lucide-react';
import React from 'react';

import './document-styles/index.css';
import './document-styles/styles.css';

import Button from '@/components/buttons/Button';

type DocumentPanelProps = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DocumentPanel = ({ setIsSidebarOpen }: DocumentPanelProps) => {
  return (
    <div className='items-center flex flex-col'>
      <div className='w-2/3 my-8 border-1 rounded-md flex border-primary-700'>
        <Button
          variant='ghost'
          onClick={() =>
            setIsSidebarOpen((prev) => {
              return !prev;
            })
          }
        >
          <ListCollapse />
        </Button>
        <div className='w-fit ml-auto'>
          <Button
            variant='ghost'
            onClick={() =>
              setIsSidebarOpen((prev) => {
                return !prev;
              })
            }
          >
            <FileDown />
          </Button>
          <Button
            variant='ghost'
            onClick={() =>
              setIsSidebarOpen((prev) => {
                return !prev;
              })
            }
          >
            <FileUp />
          </Button>
        </div>
      </div>
    </div>
  );
};
