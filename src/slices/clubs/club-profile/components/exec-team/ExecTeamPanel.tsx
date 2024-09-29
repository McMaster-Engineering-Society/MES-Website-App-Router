import React, { useRef, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import ExecMember from './ExecMember';

import { TExecMember } from '@/types/clubProfile';

let nextId = 0;

export type TExecMemberWithId = TExecMember & { id: number };

const ExecTeamPanel = () => {
  const clubId = '1';
  const [execMembers, setExecMembers] = useState(getExecMembers(clubId));
  const president = execMembers[0];

  const dragPerson = useRef<number>(0);
  const draggedOverPerson = useRef<number>(0);

  const handleDragStart = (index: number) => {
    dragPerson.current = index;
  };
  const handleDragEnter = (index: number) => {
    draggedOverPerson.current = index;
  };

  const handleSort = () => {
    const dragPersonIndex = dragPerson.current;
    const draggedOverPersonIndex = draggedOverPerson.current;
    const newMembers = [...execMembers];
    newMembers.splice(dragPersonIndex, 1);
    newMembers.splice(draggedOverPersonIndex, 0, execMembers[dragPersonIndex]);
    setExecMembers(newMembers);
  };

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
    <div className='w-full h-full relative'>
      <div className='flex flex-col gap-2 h-full w-full overflow-scroll pt-2'>
        <ExecMember
          index={0}
          president
          member={president}
          updateMemberList={updateMemberList}
          onDragStart={handleDragStart}
          onDragEnter={handleDragEnter}
          handleSort={handleSort}
        />
        {execMembers.map((member, index) => {
          if (member.role !== 'President') {
            return (
              <ExecMember
                index={index}
                key={member.id}
                member={member}
                updateMemberList={updateMemberList}
                onDragStart={handleDragStart}
                onDragEnter={handleDragEnter}
                handleSort={handleSort}
              />
            );
          }
        })}
      </div>
      <button className='absolute right-2 top-3' onClick={createMember}>
        <FaPlusCircle size={30} color='red' />
      </button>
    </div>
  );
};

export default ExecTeamPanel;

function getExecMembers(_clubId: string) {
  const members = sampleMembers();
  const membersWithId = [];
  for (const member of members) {
    const memberWithId = { ...member } as TExecMemberWithId;
    memberWithId.id = nextId++;
    membersWithId.push(memberWithId);
  }
  const sortedMembers = setPresidentFirst(membersWithId);
  return sortedMembers;
}

function setPresidentFirst(members: TExecMemberWithId[]) {
  const membersCopy = [...members];
  membersCopy.forEach((member, index) => {
    if (member.role === 'President') {
      const temp = members[0];
      members[0] = member;
      members[index] = temp;
    }
  });
  return membersCopy;
}

function sampleMembers() {
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
  return [member1, member2, member3, member4];
}
