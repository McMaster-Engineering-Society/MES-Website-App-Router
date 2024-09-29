import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

import { cn } from '@/lib/utils';

import { TExecMemberWithId } from './ExecTeamPanel';
import TextField from './TextField';

type ExecMemberProps = {
  index: number;
  member: TExecMemberWithId;
  updateMemberList: (member: TExecMemberWithId, deleteMember?: boolean) => void;
  president?: boolean;
  onDragStart: (index: number) => void;
  onDragEnter: (index: number) => void;
  handleSort: () => void;
};
const ExecMember = ({
  index,
  member,
  updateMemberList,
  president,
  onDragStart,
  onDragEnter,
  handleSort,
}: ExecMemberProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
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
      className='w-full border-medium rounded-lg border-gray-400'
      draggable
      onDragStart={() => onDragStart(index)}
      onDragEnter={() => onDragEnter(index)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
    >
      <div
        className='w-full h-20 flex flex-row gap-2 items-center'
        onClick={() => {
          if (!isOpen) setIsOpen(true);
        }}
      >
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </button>
        <TextField
          title='First Name'
          value={updatedMember.firstName}
          editable={isEditing}
          onChange={(value) => {
            updateMember('firstName', value);
          }}
        />
        <TextField
          title='Last Name'
          value={updatedMember.lastName}
          editable={isEditing}
          onChange={(value) => {
            updateMember('lastName', value);
          }}
        />
        <TextField
          title='Role'
          value={updatedMember.role}
          editable={isEditing && !president}
          onChange={(value) => {
            updateMember('role', value);
          }}
        />
        <TextField
          title='Contact For'
          value={updatedMember.contactFor}
          editable={isEditing}
          onChange={(value) => {
            updateMember('contactFor', value);
          }}
        />
        <button
          onClick={() => {
            setIsEditing((prev) => !prev);
            setIsOpen(true);
          }}
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        {!president && (
          <button
            onClick={() => {
              updateMemberList(updatedMember, true);
            }}
          >
            Delete
          </button>
        )}
      </div>
      <div
        className={cn([
          'w-full flex flex-col overflow-hidden mx-6',
          isOpen ? 'mb-4' : 'h-0',
        ])}
      >
        <TextField
          title='Email'
          value={updatedMember.email}
          editable={isEditing}
          onChange={(value) => {
            updateMember('email', value);
          }}
        />
        <TextField
          title='Program'
          value={updatedMember.program}
          editable={isEditing}
          onChange={(value) => {
            updateMember('program', value);
          }}
        />
        <TextField
          title='Year'
          value={updatedMember.year}
          editable={isEditing}
          onChange={(value) => {
            updateMember('year', value);
          }}
        />
      </div>
    </div>
  );
};

export default ExecMember;
