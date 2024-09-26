import { useState } from 'react';

import Button from '@/components/buttons/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/modal/Modal';

type DocumentSaveModalProps = {
  trigger: React.ReactNode;
  handleSave: (title: string) => Promise<void>;
};

export const DocumentSaveModal = ({
  trigger,
  handleSave,
}: DocumentSaveModalProps) => {
  // State to store the document title
  const [documentTitle, setDocumentTitle] = useState('');

  // Function to update the state as the user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentTitle(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save Document</DialogTitle>
          <DialogDescription>
            Please enter the document title you want to save.
          </DialogDescription>
          <div>
            <label
              htmlFor='documentTitle'
              className='block text-sm font-medium text-gray-700'
            >
              Document Title
            </label>
            <input
              type='text'
              id='documentTitle'
              name='documentTitle'
              className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              placeholder='Enter document title'
              value={documentTitle} // Set input value to state
              onChange={handleInputChange} // Update state when input changes
            />
          </div>
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button onClick={() => handleSave(documentTitle)}>
                Confirm Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
