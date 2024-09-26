import {
  ArrowBigRightDash,
  FileDown,
  FileUp,
  ListCollapse,
  Save,
} from 'lucide-react';
import React from 'react';

import Button from '@/components/buttons/Button';
import { DocumentSaveModal } from '@/components/clubs-portal/document-editor/DocumentSaveModal';

type DocumentPanelProps = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSave?: (title: string) => Promise<void>;
  handleUpload?: () => Promise<void>;
  handleDownload?: () => Promise<void>;
  handleProceed?: () => void;
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
            <DocumentSaveModal
              trigger={
                <Button variant='ghost'>
                  <Save />
                </Button>
              }
              handleSave={handleSave}
            />
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
