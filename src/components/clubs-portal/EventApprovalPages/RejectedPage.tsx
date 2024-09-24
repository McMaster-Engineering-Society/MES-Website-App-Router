import { TextFieldProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React, { useState } from 'react';

import FormEvent from '@/components/clubs-portal/FormEvent';

import { filterTextFieldProps } from '@/constant/uhs-form/UHSPageData';

import { Form, sampleForms } from '@/types/form';

const RejectedPage = () => {
  const [filterName, setFilterName] = useState('');
  const [sort, setSort] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [uhsForm, setUHSForm] = useState(true);
  const [roomBooking, setRoomBooking] = useState(true);
  const forms = getForms();

  function reset() {
    setFilterName('');
    setSort('');
    setStartDate('');
    setEndDate('');
    setUHSForm(true);
    setRoomBooking(true);
  }

  // Filter forms based on filterName, booked date, and tags
  const filteredForms = forms.filter((form) => {
    const matchesName = form.name
      .toLowerCase()
      .includes(filterName.toLowerCase());
    const formDate = new Date(form.year, form.month - 1, form.day);
    const matchesStartDate = startDate ? formDate >= new Date(startDate) : true;
    const matchesEndDate = endDate ? formDate <= new Date(endDate) : true;
    const matchesTag =
      (uhsForm && form.type === 'UHS Form') ||
      (roomBooking && form.type === 'Room Booking');
    return matchesName && matchesStartDate && matchesEndDate && matchesTag;
  });

  // Sort forms based on the selected sort criteria
  const sortedForms = [...filteredForms].sort((a, b) => {
    if (sort === 'date') {
      const dateA = new Date(a.year, a.month - 1, a.day);
      const dateB = new Date(b.year, b.month - 1, b.day);
      return dateA.getTime() - dateB.getTime();
    } else if (sort === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className='h-full w-full flex flex-row '>
      {/* filter */}
      <div className='flex flex-col w-[25rem] px-[2.5rem] mt-5'>
        <div className='flex flex-row w-[20rem] justify-between'>
          <div className='text-[#4b4b4b] text-2xl font-medium p-2'>Filter</div>
          <div
            className='text-[#a6192e] text-2xl font-medium p-2 cursor-pointer'
            onClick={reset}
          >
            Reset
          </div>
        </div>

        <div className='h-fit w-[20rem] p-[5%] border-1 text-[#777777] text-base font-medium border-[#97999b] rounded-lg place-content-center'>
          <div className='text-[#777777] text-base font-medium'>
            Filter By Name
          </div>
          <input
            className='mt-1 mb-4 w-full w-min-4 opacity-50 bg-[#fcfcfc] rounded-[10px] border-2 border-[#97999b] focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
            type='search'
            placeholder='Filter...'
            name='filterName'
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />

          <div className='text-[#777777] text-base font-medium'>Sort By</div>
          <select
            className='mt-1 mb-4 w-full w-min-4 opacity-50 bg-[#fcfcfc] text-[#777777] text-base font-medium rounded-[10px] border-2 border-[#97999b] focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
            name='sort'
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value=''>Sort...</option>
            <option value='date'>Date</option>
            <option value='name'>Name</option>
          </select>

          <div className='text-[#777777] text-base font-medium'>
            Filter By Booked Date
          </div>
          <div className='mt-1 text-[#777777] text-sm px-1'>From</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className='mb-1 w-full w-min-4 opacity-50 bg-[#fcfcfc] rounded-[10px] border-2 border-[#97999b] focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
              name='startDate'
              value={dayjs(startDate)}
              onChange={(date) =>
                setStartDate(dayjs(date).format('YYYY-MM-DD'))
              }
              slotProps={{
                textField: { sx: filterTextFieldProps } as TextFieldProps,
                layout: {
                  sx: {
                    backgroundColor: '#fcfcfc', // Background color of the calendar itself
                  },
                },
              }}
            />
          </LocalizationProvider>
          <div className='mt-1 text-[#777777] text-sm px-1'>To</div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className='mb-4 w-full w-min-4 opacity-50 bg-[#fcfcfc] rounded-[10px] border-2 border-[#97999b] focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
              name='startDate'
              value={dayjs(endDate)}
              onChange={(date) => setEndDate(dayjs(date).format('YYYY-MM-DD'))}
              slotProps={{
                textField: { sx: filterTextFieldProps } as TextFieldProps,
                layout: {
                  sx: {
                    backgroundColor: '#fcfcfc', // Background color of the calendar itself
                  },
                },
              }}
            />
          </LocalizationProvider>

          <div className='text-[#777777] text-base font-medium'>Tag</div>
          <div className='flex flex-row mt-1 h-fit justify-items-start content-center'>
            <input
              className='w-[1.25rem] h-[1.25rem] w-min-4 opacity-50 bg-[#fcfcfc] rounded-[7px] border-2 border-[#97999b] focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
              type='checkbox'
              name='roomBooking'
              checked={roomBooking}
              onChange={(e) => setRoomBooking(e.target.checked)}
            />
            <div className='text-[#777777] text-sm px-1'>Room Booking</div>
          </div>

          <div className='flex flex-row mt-1 mb-4 h-fit justify-items-start content-center'>
            <input
              className='w-[1.25rem] h-[1.25rem] w-min-4 opacity-50 bg-[#fcfcfc] rounded-[7px] border-2 border-[#97999b] focus:border-[#a8b3c9] focus:outline-none focus:ring-0'
              type='checkbox'
              name='uhsForm'
              checked={uhsForm}
              onChange={(e) => setUHSForm(e.target.checked)}
            />
            <div className='text-[#777777] text-sm px-1'>UHS Form</div>
          </div>
        </div>
      </div>

      {/* list of forms */}
      <div className='flex flex-col w-[95%] px-[2.5%]'>
        <div className='flex flex-row items-center justify-between pr-4 p-1 py-2 border-b-3 font-medium border-[#C1C1C1] mb-3 gap-7 text-center'>
          <span className='basis-full font-medium'>Form Type</span>
          <span className='basis-full'>Form Name</span>
          <span className='basis-1/4'>Location</span>
          <span className='basis-full'>Date and Time</span>
          <span className='basis-1/4'></span>
        </div>
        <div>
          {sortedForms.map((form) => (
            <FormEvent key={form.id} form={form} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RejectedPage;

function getForms(): Form[] {
  return sampleForms;
}
