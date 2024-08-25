import * as React from 'react';

type PageWrapperProps = {
  children: React.ReactNode;
};

// Page section component that helps apply basic styling to forms.
const PageWrapper = React.forwardRef<HTMLLabelElement, PageWrapperProps>(
  ({ children }) => {
    return (
      <div className='flex flex-col'>
        <div id='text-body' className='flex flex-col gap-x-4 gap-y-4'>
          {children}
        </div>
      </div>
    );
  },
);
export default PageWrapper;
