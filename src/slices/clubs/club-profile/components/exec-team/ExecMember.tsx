/* eslint-disable @typescript-eslint/no-empty-function */
import {
  contactForOptions,
  TExecMember,
} from '@slices/clubs/club-profile/types/clubProfile';
import React, { useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import { MdDragIndicator } from 'react-icons/md';

import { cn } from '@/lib/utils';

import SelectField from './SelectField';
import TextField from './TextField';

type ExecMemberProps = {
  member: TExecMember;
  president?: boolean;
  updateMemberList: (member: TExecMember) => void;
  deleteMember?: () => void;
  onDragStart?: () => void;
  onDragEnter?: () => void;
  handleSort?: () => void;
};
const ExecMember = ({
  member,
  president,
  updateMemberList,
  deleteMember = () => {},
  onDragStart = () => {},
  onDragEnter = () => {},
  handleSort = () => {},
}: ExecMemberProps) => {
  const itemDivRef = useRef<HTMLDivElement>(null);
  const updateMember = (field: string, value: string) => {
    updateMemberList({ ...member, [field]: value });
  };
  return (
    <div
      className='w-full flex flex-row border-medium items-center rounded-lg border-gray-400'
      ref={itemDivRef}
      onDragEnter={() => onDragEnter()}
      onDragOver={(e) => e.preventDefault()}
    >
      <div
        className={cn([president && 'invisible', 'cursor-move mx-3'])}
        draggable
        onDragStart={(e) => {
          onDragStart();
          if (itemDivRef.current) {
            e.dataTransfer.setDragImage(itemDivRef.current, 0, 0);
          }
        }}
        onDragEnd={handleSort}
      >
        <MdDragIndicator size={30} />
      </div>
      <div className='w-full min-h-20 flex flex-row flex-wrap gap-2 items-center'>
        <div>
          <TextField
            title='First Name'
            value={member.firstName}
            onChange={(value) => {
              updateMember('firstName', value);
            }}
          />
          <TextField
            title='Last Name'
            value={member.lastName}
            onChange={(value) => {
              updateMember('lastName', value);
            }}
          />
        </div>
        <div>
          <TextField
            title='Program'
            value={member.program}
            onChange={(value) => {
              updateMember('program', value);
            }}
          />
          <TextField
            title='Year'
            value={member.year}
            onChange={(value) => {
              updateMember('year', value);
            }}
          />
        </div>
        <div>
          <SelectField
            title='Contact For'
            value={member.contactFor}
            options={contactForOptions}
            onChange={(value) => {
              updateMember('contactFor', value);
            }}
          />
          <TextField
            title='Email'
            value={member.email}
            required
            onChange={(value) => {
              updateMember('email', value);
            }}
          />
        </div>
        <TextField
          title='Role'
          value={member.role}
          constant={president}
          onChange={(value) => {
            updateMember('role', value);
          }}
        />
      </div>
      <button
        className={cn(['mr-10', president && 'invisible'])}
        onClick={deleteMember}
      >
        <FaTrash size={25} />
      </button>
    </div>
  );
};

export default ExecMember;
