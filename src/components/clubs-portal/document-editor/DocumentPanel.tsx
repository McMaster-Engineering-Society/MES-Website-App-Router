import {
  ArrowBigRightDash,
  FileDown,
  FileUp,
  ListCollapse,
  Save,
} from 'lucide-react';
import React from 'react';

import './document-styles/index.css';
import './document-styles/styles.css';

import Button from '@/components/buttons/Button';

type DocumentPanelProps = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSave?: () => Promise<void>;
  handleUpload?: () => Promise<void>;
  handleDownload?: () => Promise<void>;
  handleProceed?: () => Promise<void>;
};

export const DocumentPanel = ({
  setIsSidebarOpen,
  handleSave,
  handleUpload,
  handleDownload,
  handleProceed,
}: DocumentPanelProps) => {
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
          {handleDownload && (
            <Button
              variant='ghost'
              onClick={() => {
                handleDownload();
              }}
            >
              <FileDown />
            </Button>
          )}
          {handleUpload && (
            <Button
              variant='ghost'
              onClick={() => {
                handleUpload();
              }}
            >
              <FileUp />
            </Button>
          )}
          {handleSave && (
            <Button variant='ghost' onClick={() => handleSave()}>
              <Save />
            </Button>
          )}
          {handleProceed && (
            <Button variant='ghost' onClick={() => handleProceed()}>
              <ArrowBigRightDash />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
