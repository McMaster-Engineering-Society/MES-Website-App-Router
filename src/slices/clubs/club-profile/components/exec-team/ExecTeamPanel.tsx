import React, { useState } from 'react';

import ExecMember from './ExecMember';

import { TExecMember } from '@/types/clubProfile';

let nextId = 0;

export type TExecMemberWithId = TExecMember & { id: number };

const ExecTeamPanel = () => {
  const clubId = '1';
  const [execMembers, setExecMembers] = useState(getExecMembers(clubId));
  const president = getPresident(execMembers);
  const updateMemberList = (member: TExecMemberWithId, delMember = false) => {
    delMember ? deleteMember(member) : updateMember(member);
  };

  const createMember = () => {
    const newMember: TExecMemberWithId = {
      firstName: '',
      lastName: '',
      role: '',
      email: '',
      program: '',
      year: '',
      contactFor: '',
      id: nextId++,
    };
    setExecMembers((prevMembers) => {
      const updatedMembers = [...prevMembers, newMember];
      return updatedMembers;
    });
  };

  const updateMember = (updatedMember: TExecMemberWithId) => {
    setExecMembers((prevMembers) => {
      const updatedMembers = prevMembers.map((member) => {
        if (member.id === updatedMember.id) {
          return updatedMember;
        }
        return member;
      });
      return updatedMembers;
    });
  };

  const deleteMember = (member: TExecMemberWithId) => {
    setExecMembers((prevMembers) => {
      const updatedMembers = prevMembers.filter((m) => m.id !== member.id);
      return updatedMembers;
    });
  };

  return (
    <div className='relative h-full overflow-scroll'>
      <table className='table-fixed w-full border-separate border-spacing-x-10 mt-5'>
        <thead>
          <tr>
            <th className='text-left'>First Name</th>
            <th className='text-left'>Last Name</th>
            <th className='text-left'>Role</th>
            <th className='text-left'>Email</th>
            <th className='text-left'>Program</th>
            <th className='text-left w-1/12'>Year</th>
            <th className='text-left'>Contact For</th>
          </tr>
        </thead>
        <tbody>
          <ExecMember
            president
            member={president}
            updateMemberList={updateMemberList}
          />
          {execMembers.map((member) => {
            if (member.role !== 'President') {
              return (
                <ExecMember
                  key={member.id}
                  member={member}
                  updateMemberList={updateMemberList}
                />
              );
            }
          })}
        </tbody>
      </table>
      <button className='absolute right-0 top-0' onClick={createMember}>
        Add Member
      </button>
    </div>
  );
};

export default ExecTeamPanel;

function getExecMembers(_clubId: string) {
  const member1: TExecMember = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'President',
    email: 'johndoe@mcmaster.ca',
    program: 'Software Engineering',
    year: '3',
    contactFor: 'General Inquiries',
  };
  const member2: TExecMember = {
    firstName: 'Jane',
    lastName: 'Doe',
    role: 'Vice President',
    email: 'janedoe@mcmaster.ca',
    program: 'Electrical Engineering',
    year: '4',
    contactFor: 'Finances',
  };
  const member3: TExecMember = {
    firstName: 'Alice',
    lastName: 'Doe',
    role: 'Vice President',
    email: 'ad@mcmaster.ca',
    program: 'Computer Science',
    year: '2',
    contactFor: 'Event Details',
  };
  const member4: TExecMember = {
    firstName: 'Bob',
    lastName: 'Doe',
    role: 'Vice President',
    email: 'bob@mcmaster.ca',
    program: 'Mechanical Engineering',
    year: '3',
    contactFor: 'Member Details',
  };
  const members = [];
  for (const member of [member1, member2, member3, member4]) {
    const memberWithId = { ...member } as TExecMemberWithId;
    memberWithId.id = nextId++;
    members.push(memberWithId);
  }
  return members;
}

function getPresident(members: TExecMemberWithId[]) {
  let president = members.find((member) => member.role === 'President');
  if (!president) {
    president = {
      firstName: '',
      lastName: '',
      role: 'President',
      email: '',
      program: '',
      year: '',
      contactFor: '',
      id: nextId++,
    };
  }
  return president;
}
