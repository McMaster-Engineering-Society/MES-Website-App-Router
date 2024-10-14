/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { MdDragIndicator } from 'react-icons/md';

import { cn } from '@/lib/utils';

import SelectField from '@/components/clubs-portal/administration/exec-team/SelectField';

import TextField from './TextField';

import { contactForOptions, TExecMember } from '@/types/clubProfile';

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
  const [updatedMember, setUpdatedMember] = useState(member);
  const updateMember = (field: string, value: string) => {
    setUpdatedMember({
      ...updatedMember,
      [field]: value,
    });
    updateMemberList(updatedMember);
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
            value={updatedMember.firstName}
            onChange={(value) => {
              updateMember('firstName', value);
            }}
          />
          <TextField
            title='Last Name'
            value={updatedMember.lastName}
            onChange={(value) => {
              updateMember('lastName', value);
            }}
          />
        </div>
        <div>
          <TextField
            title='Program'
            value={updatedMember.program}
            onChange={(value) => {
              updateMember('program', value);
            }}
          />
          <TextField
            title='Year'
            value={updatedMember.year}
            onChange={(value) => {
              updateMember('year', value);
            }}
          />
        </div>
        <div>
          <SelectField
            title='Contact For'
            value={updatedMember.contactFor}
            options={contactForOptions}
            onChange={(value) => {
              updateMember('contactFor', value);
            }}
          />
          <TextField
            title='Email'
            value={updatedMember.email}
            required
            onChange={(value) => {
              updateMember('email', value);
            }}
          />
        </div>
        <TextField
          title='Role'
          value={updatedMember.role}
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
