import React from 'react';

type CustomPaginationProps = {
  page: number;
  setPage: (newPage: number) => void;
  totalPages: number;
};

export const BookingTimeslotPagination: React.FC<CustomPaginationProps> = ({
  page,
  setPage,
  totalPages,
}) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className='w-full flex justify-center my-4'>
      <div className='w-full flex items-center justify-between'>
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          style={{ cursor: page === 1 ? 'not-allowed' : 'pointer' }}
          className='px-4 py-2 border rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50'
        >
          Previous
        </button>
        <span className='px-4 py-2 border rounded bg-gray-200'>
          Page {page}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          style={{ cursor: page === totalPages ? 'not-allowed' : 'pointer' }}
          className='px-4 py-2 border rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
};
