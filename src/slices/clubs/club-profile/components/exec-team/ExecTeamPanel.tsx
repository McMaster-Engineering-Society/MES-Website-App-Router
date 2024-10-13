import React, { useRef, useState } from 'react';

import Button from '@/components/buttons/Button';

import ExecMember from './ExecMember';

import { TExecMember } from '@/types/clubProfile';

type TExecMemberWithId = TExecMember & { id: number };

let nextId = 0;

const ExecTeamPanel = () => {
  const clubId = '1';
  const [execMembers, setExecMembers] = useState<TExecMemberWithId[]>(
    getExecMembers(clubId),
  );
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

  const updateMemberList = (
    member: TExecMember,
    index: number,
    delMember = false,
  ) => {
    delMember ? deleteMember(member, index) : updateMember(member, index);
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

  const updateMember = (updatedMember: TExecMember, i: number) => {
    setExecMembers((prevMembers) => {
      const updatedMembers = prevMembers.map((member, index) => {
        if (index === i) {
          return { ...updatedMember, id: nextId++ };
        }
        return member;
      });
      return updatedMembers;
    });
  };

  const deleteMember = (member: TExecMember, i: number) => {
    setExecMembers((prevMembers) => {
      const updatedMembers = prevMembers.filter((_, index) => index !== i);
      return updatedMembers;
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    if (!(submitter instanceof HTMLButtonElement)) return;

    if (submitter.name === 'add-member') {
      createMember();
      return;
    }
    if (submitter.name === 'save-member') {
      // save changes
    }
  };

  return (
    <form className='w-full h-full flex flex-col relative' onSubmit={onSubmit}>
      <div className='w-full flex flex-row justify-end pr-2 gap-3 mt-2 sticky top-0 z-10'>
        <Button name='save' disabled type='button'>
          Save
        </Button>
        <Button name='add-member' type='submit'>
          Add Member
        </Button>
      </div>
      <div className='flex flex-col gap-2 basis-full w-full overflow-scroll pt-2 pr-2'>
        <ExecMember
          president
          member={president}
          updateMemberList={(member: TExecMember, delMember = false) =>
            updateMemberList(member, 0, delMember)
          }
          onDragStart={() => handleDragStart(0)}
          onDragEnter={() => handleDragEnter(0)}
          handleSort={handleSort}
        />
        {execMembers.map((member, index) => {
          if (member.role !== 'President') {
            return (
              <ExecMember
                key={member.email}
                member={member}
                updateMemberList={(member: TExecMember, delMember = false) => {
                  updateMemberList(member, index, delMember);
                }}
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                handleSort={handleSort}
              />
            );
          }
        })}
      </div>
    </form>
  );
};

export default ExecTeamPanel;

function getExecMembers(_clubId: string) {
  const members = sampleMembers();
  const sortedMembers = setPresidentFirst(members);
  const membersWithId = sortedMembers.map((member) => {
    return { ...member, id: nextId++ };
  });
  return membersWithId;
}

function setPresidentFirst(members: TExecMember[]) {
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
