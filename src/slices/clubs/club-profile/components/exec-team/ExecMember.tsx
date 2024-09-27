import React, { useState } from 'react';

import { TExecMemberWithId } from './ExecTeamPanel';
import TextField from './TextField';

type ExecMemberProps = {
  member: TExecMemberWithId;
  updateMemberList: (member: TExecMemberWithId, deleteMember?: boolean) => void;
  president?: boolean;
};
const ExecMember = ({
  member,
  updateMemberList,
  president,
}: ExecMemberProps) => {
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
    <tr>
      <td>
        <TextField
          value={updatedMember.firstName}
          editable={isEditing}
          onChange={(value) => {
            updateMember('firstName', value);
          }}
        />
      </td>
      <td>
        <TextField
          value={updatedMember.lastName}
          editable={isEditing}
          onChange={(value) => {
            updateMember('lastName', value);
          }}
        />
      </td>
      <td>
        <TextField
          value={updatedMember.role}
          editable={isEditing && !president}
          onChange={(value) => {
            updateMember('role', value);
          }}
        />
      </td>
      <td className='break-words'>
        <TextField
          value={updatedMember.email}
          editable={isEditing}
          onChange={(value) => {
            updateMember('email', value);
          }}
        />
      </td>
      <td>
        <TextField
          value={updatedMember.program}
          editable={isEditing}
          onChange={(value) => {
            updateMember('program', value);
          }}
        />
      </td>
      <td>
        <TextField
          value={updatedMember.year}
          editable={isEditing}
          onChange={(value) => {
            updateMember('year', value);
          }}
        />
      </td>
      <td>
        <TextField
          value={updatedMember.contactFor}
          editable={isEditing}
          onChange={(value) => {
            updateMember('contactFor', value);
          }}
        />
      </td>
      <td>
        <button onClick={() => setIsEditing((prev) => !prev)}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </td>
      <td>
        {!president && (
          <button
            onClick={() => {
              updateMemberList(updatedMember, true);
            }}
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default ExecMember;
