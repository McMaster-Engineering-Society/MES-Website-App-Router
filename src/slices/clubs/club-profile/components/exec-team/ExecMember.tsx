import React, { useRef, useState } from 'react';
import { FaEdit, FaSave, FaTrash } from 'react-icons/fa';
import { MdDragIndicator } from 'react-icons/md';

import { cn } from '@/lib/utils';

import SelectField from '@/components/clubs-portal/administration/exec-team/SelectField';

import { TExecMemberWithId } from './ExecTeamPanel';
import TextField from './TextField';

import { contactForOptions } from '@/types/clubProfile';

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
  const itemDivRef = useRef<HTMLDivElement>(null);
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
      className='w-full flex flex-row border-medium items-center rounded-lg border-gray-400'
      ref={itemDivRef}
      onDragEnter={() => onDragEnter(index)}
      onDragOver={(e) => e.preventDefault()}
    >
      <div
        className={cn([president && 'invisible', 'cursor-move mx-3'])}
        draggable
        onDragStart={(e) => {
          onDragStart(index);
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
        </div>
        <div>
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
        <div>
          <SelectField
            title='Contact For'
            value={updatedMember.contactFor}
            editable={isEditing}
            options={contactForOptions}
            onChange={(value) => {
              updateMember('contactFor', value);
            }}
          />
          <TextField
            title='Email'
            value={updatedMember.email}
            editable={isEditing}
            onChange={(value) => {
              updateMember('email', value);
            }}
          />
        </div>
        <TextField
          title='Role'
          value={updatedMember.role}
          editable={isEditing && !president}
          onChange={(value) => {
            updateMember('role', value);
          }}
        />
      </div>
      <div className='flex flex-row gap-4 mr-4'>
        <button
          onClick={() => {
            setIsEditing((prev) => !prev);
          }}
        >
          {isEditing ? <FaSave size={25} /> : <FaEdit size={25} />}
        </button>
        <button
          className={cn([president && 'invisible'])}
          onClick={() => {
            updateMemberList(updatedMember, true);
          }}
        >
          <FaTrash size={25} />
        </button>
      </div>
    </div>
  );
};

export default ExecMember;
