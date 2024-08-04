import React from 'react';
import { FaBan } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa6';
import { FaArrowsRotate } from 'react-icons/fa6';
import { IconType } from 'react-icons/lib';

import { cn } from '@/lib/utils';

import { Booking } from '@/types/booking';

type StatusBadgeStyle = {
  className: string;
  text: string;
  icon: IconType;
};

const StatusBadgeTypes: Record<Booking['status'], StatusBadgeStyle> = {
  approved: {
    className: 'bg-[#CBE7C7] text-[#678363]',
    text: 'Approved',
    icon: FaCheck,
  },
  rejected: {
    className: 'bg-red-200 text-red-700',
    text: 'Rejected',
    icon: FaBan,
  },
  pending: {
    className: 'bg-blue-200 text-blue-800',
    text: 'Pending',
    icon: FaArrowsRotate,
  },
};

type StatusBadgeProps = {
  status: Booking['status'];
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const style = StatusBadgeTypes[status];
  const iconSize = 16;
  return (
    <div
      className={cn([
        'flex min-w-32 h-10 rounded-xl items-center px-3',
        style.className,
      ])}
    >
      <span className='mx-auto'>{style.text}</span>
      <style.icon className='ml-auto' size={iconSize} />
    </div>
  );
};

export default StatusBadge;
