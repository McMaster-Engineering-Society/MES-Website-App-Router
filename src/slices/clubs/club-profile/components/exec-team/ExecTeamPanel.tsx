import React, { useRef, useState } from 'react';

import Button from '@/components/buttons/Button';

import ExecMember from './ExecMember';

import { TExecMember } from '@/types/clubProfile';

type TExecTeam = {
  president: TExecMember;
  execMembers: TExecMember[];
};

const ExecTeamPanel = () => {
  const clubId = '1';
  const execTeam = getExecTeam(clubId);
  const [president, setPresident] = useState<TExecMember>(execTeam.president);
  const [execMembers, setExecMembers] = useState<TExecMember[]>(
    execTeam.execMembers,
  );
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

  const createMember = () => {
    const newMember: TExecMember = {
      firstName: '',
      lastName: '',
      role: '',
      email: '',
      program: '',
      year: '',
      contactFor: '',
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
          return { ...updatedMember };
        }
        return member;
      });
      return updatedMembers;
    });
  };

  const deleteMember = (i: number) => {
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
          updateMemberList={(member: TExecMember) => setPresident(member)}
        />
        {execMembers.map((member, index) => {
          return (
            <ExecMember
              key={member.email}
              member={member}
              updateMemberList={(member: TExecMember) => {
                updateMember(member, index);
              }}
              deleteMember={() => deleteMember(index)}
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              handleSort={handleSort}
            />
          );
        })}
      </div>
    </form>
  );
};

export default ExecTeamPanel;

function getExecTeam(_clubId: string) {
  const president = samplePresident();
  const execMembers = sampleMembers();
  return { president, execMembers } as TExecTeam;
}

function samplePresident() {
  const member1: TExecMember = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'President',
    email: 'johndoe@mcmaster.ca',
    program: 'Software Engineering',
    year: '3',
    contactFor: 'General Inquiries',
  };
  return member1;
}

function sampleMembers() {
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
  return [member2, member3, member4] as TExecMember[];
}
