import AnnouncementIcon from '@mui/icons-material/Announcement';
import TextsmsIcon from '@mui/icons-material/Textsms';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import { Form } from '@/types/form';

const style = {
  position: 'absolute',
  overflow: 'scroll',
  top: 'calc(0% + 50%)',
  left: 'calc(100% - 25%)',
  transform: 'translate(-50%, -50%)',
  height: '100%',
  width: '50%',
  bgcolor: 'background.paper',
  px: 8,
  py: 6,
};

const commentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: '10px',
};

type FormEventProps = {
  form: Form;
};
const FormEvent = ({ form }: FormEventProps) => {
  const date = new Date(form.year, form.month - 1, form.day);
  const time = form.startTime + ' - ' + form.endTime;

  const [open, setOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCommentOpen = (section: string) => {
    setActiveSection(section);
    setFilterName(comments[section] || '');
    setCommentOpen(true);
  };

  const handleSaveComment = () => {
    if (activeSection) {
      setComments({
        ...comments,
        [activeSection]: filterName,
      });
    }
    setFilterName('');
    handleCommentClose();
  };

  const handleCommentClose = () => setCommentOpen(false);

  const [comments, setComments] = useState<{ [key: string]: string }>({});
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [filterName, setFilterName] = useState('');

  const formatTime = (time24: string) => {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours % 12 || 12;
    return `${adjustedHours}:${minutes}${period}`;
  };

  const eventDate = new Date(form.year, form.month - 1, form.day);
  const options = { year: 'numeric', month: 'short', day: 'numeric' } as const;
  const formattedDate = eventDate.toLocaleDateString('en-US', options);
  const formattedStartTime = formatTime(form.startTime);
  const formattedEndTime = formatTime(form.endTime);
  const bookingTime = `${formattedDate} ${formattedStartTime}-${formattedEndTime}`;

  const hasComment = (section: string) => !!comments[section];
  const commentExists = () => {
    if (activeSection) {
      return Boolean(comments[activeSection]);
    }
    return false;
  };

  return (
    <div
      key={form.id}
      className='flex flex-row items-center justify-between pr-4 p-1 py-2 border-3 border-gray-200 rounded-lg mb-3 gap-7 text-center'
    >
      <span
        className={`basis-full font-medium ${
          form.type === 'UHS Form' ? 'text-[#607BB0]' : 'text-[#5F7C5B]'
        }`}
      >
        {form.type}
      </span>
      <span className='basis-full underline underline-offset-4'>
        {form.name}
      </span>
      <span className='basis-1/4'>{form.building + ' #' + form.room}</span>
      <span className='basis-full'>
        {date.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }) +
          ' @ ' +
          time}
      </span>
      <button
        onClick={handleOpen}
        className='basis-1/4 bg-[#A6192E] text-white font-medium rounded-lg p-1'
      >
        View Form
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        className='transition-all duration-300 ease-in-out'
      >
        <Box sx={style}>
          <Typography variant='h4' className='font-medium text-gray-700'>
            {form.type} – {form.clubName}
          </Typography>
          <Typography className='text-gray-500 mt-1 text-small font-light'>
            {form?.description}
          </Typography>
          <div className='flex flex-row mt-4'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Reportee:{' '}
            </Typography>
            <div className='flex flex-row justify-between w-full'>
              <Typography className='text-gray-500 text-medium font-light'>
                {form?.reportee}
              </Typography>
              {hasComment('General') ? (
                <AnnouncementIcon
                  className='text-red-900 font-light text-lg'
                  onClick={() => handleCommentOpen('General')}
                />
              ) : (
                <TextsmsIcon
                  className='text-gray-500 font-light text-lg'
                  onClick={() => handleCommentOpen('General')}
                />
              )}
            </div>
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Timeslot:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              {bookingTime}{' '}
            </Typography>
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Requested room:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              {form.building} {form.room}{' '}
            </Typography>
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              No. of people:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              {form.partySize}{' '}
            </Typography>
          </div>

          <Divider className='my-4' />
          <div className='flex flex-row justify-between w-full mb-2'>
            <Typography className='text-medium font-medium text-gray-500'>
              {' '}
              Subheader for Checks{' '}
            </Typography>
            {hasComment('Subheader 1') ? (
              <AnnouncementIcon
                className='text-red-900 font-light text-lg'
                onClick={() => handleCommentOpen('Subheader 1')}
              />
            ) : (
              <TextsmsIcon
                className='text-gray-500 font-light text-lg'
                onClick={() => handleCommentOpen('Subheader 1')}
              />
            )}
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Alcohol will be present:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              No {/* fill in with form deets */}{' '}
            </Typography>
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Safety requirements checked:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              No {/* fill in with form deets */}{' '}
            </Typography>
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Fire safety requirement validated:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              No {/* fill in with form deets */}{' '}
            </Typography>
          </div>
          <Divider className='my-4' />
          <div className='flex flex-row justify-between w-full mb-2'>
            <Typography className='text-medium font-medium text-gray-500'>
              {' '}
              Subheader for Checks{' '}
            </Typography>
            {hasComment('Subheader 2') ? (
              <AnnouncementIcon
                className='text-red-900 font-light text-lg'
                onClick={() => handleCommentOpen('Subheader 2')}
              />
            ) : (
              <TextsmsIcon
                className='text-gray-500 font-light text-lg'
                onClick={() => handleCommentOpen('Subheader 2')}
              />
            )}
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Alcohol will be present:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              No {/* fill in with form deets */}{' '}
            </Typography>
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Safety requirements checked:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              No {/* fill in with form deets */}{' '}
            </Typography>
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Fire safety requirement validated:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              No {/* fill in with form deets */}{' '}
            </Typography>
          </div>
          <Divider className='my-4' />
          <div className='flex flex-row justify-between w-full mb-2'>
            <Typography className='text-medium font-medium text-gray-500'>
              {' '}
              Subheader for Checks{' '}
            </Typography>
            {hasComment('Subheader 3') ? (
              <AnnouncementIcon
                className='text-red-900 font-light text-lg'
                onClick={() => handleCommentOpen('Subheader 3')}
              />
            ) : (
              <TextsmsIcon
                className='text-gray-500 font-light text-lg'
                onClick={() => handleCommentOpen('Subheader 3')}
              />
            )}
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Alcohol will be present:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              No {/* fill in with form deets */}{' '}
            </Typography>
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Safety requirements checked:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              No {/* fill in with form deets */}{' '}
            </Typography>
          </div>
          <div className='flex flex-row mt-1'>
            <Typography className='text-gray-600 text-medium mr-2'>
              {' '}
              Fire safety requirement validated:{' '}
            </Typography>
            <Typography className='text-gray-500 text-medium font-light'>
              {' '}
              No {/* fill in with form deets */}{' '}
            </Typography>
          </div>
          <Divider className='my-4' />
          <div className='text-medium font-medium text-gray-500'>
            Additional Comments
          </div>
          <Box className='h-40 w-[calc(100%-8rem)] mb-12'>
            <textarea
              className='resize-none absolute mt-2 mb-4 h-40 min-w-4 w-[calc(100%-8rem)] text-gray-700 opacity-50 bg-[#fcfcfc] rounded-[10px] border-1.5 border-gray-400 focus:border-gray-500 focus:outline-none focus:ring-0 font-light'
              placeholder='Add a comment...'
              name='filterName'
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
            />
          </Box>
          <div className='flex flex-row sticky h-12'>
            <button
              disabled={!commentExists()} // Disable button if no comment exists
              className={`w-[calc(80%-8rem)] mr-4 ${commentExists() ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-500'} text-md font-normal px-4 py-2 rounded-md hover:bg-gray-500 transition-colors duration-300`}
            >
              REJECT
            </button>
            <button className='w-[calc(80%-8rem)] bg-red-700 text-white text-md font-normal px-4 py-2 rounded-md hover:bg-red-800 transition-colors duration-300'>
              APPROVE
            </button>
          </div>
        </Box>
      </Modal>
      <Modal open={commentOpen} onClose={handleCommentClose}>
        <Box sx={commentStyle}>
          <Typography
            variant='h6'
            className='font-medium text-lg text-gray-600 mt-3'
          >
            {activeSection && comments[activeSection]
              ? 'Edit Comment'
              : 'Add a Comment'}{' '}
            – {activeSection?.charAt(0).toUpperCase() + activeSection?.slice(1)}
          </Typography>

          <textarea
            className='resize-none w-full h-40 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400'
            placeholder='Type your comment here...'
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
          <div className='flex justify-end mt-4'>
            <button
              onClick={handleCommentClose}
              className='mr-2 bg-gray-400 text-white px-4 py-2 rounded-md font-light text-sm'
            >
              Cancel
            </button>
            <button
              onClick={handleSaveComment}
              className='bg-[#A6192E] text-white px-4 py-2 rounded-md font-light text-sm'
            >
              {activeSection && comments[activeSection]
                ? 'Save Changes'
                : 'Add Comment'}
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

{
  /*
  {
    "id": 10,
    "name": "Presentation",
    "clubId": 1,
    "day": 7,
    "month": 1,
    "year": 2025,
    "startTime": "15:00",
    "endTime": "17:00",
    "building": "PGCLL",
    "room": "127",
    "type": "Room Booking",
    "status": "approved"
}
  */
}

export default FormEvent;
