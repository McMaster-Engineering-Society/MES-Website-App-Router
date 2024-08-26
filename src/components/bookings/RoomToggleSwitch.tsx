import { Switch } from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';

import {
  AdminBookingIndicatorColours,
  UserBookingIndicatorColours,
} from '@/constant/hatch-bookings/booking-indicator-data';

type RoomToggleSwitchProps = {
  roomVisibilities: Record<string, boolean>;
  setRoomVisibilities: Dispatch<SetStateAction<Record<string, boolean>>>;
  isAdmin: boolean;
  room: string;
};

const RoomToggleSwitch = ({
  roomVisibilities,
  setRoomVisibilities,
  isAdmin,
  room,
}: RoomToggleSwitchProps) => {
  return (
    <Switch
      defaultSelected
      size='sm'
      color='secondary'
      className='pl-8'
      onChange={(e) => {
        setRoomVisibilities({
          ...roomVisibilities,
          [room]: e.target.checked,
        });
      }}
    >
      <div className='flex justify-center items-center gap-2'>
        <p>{room}</p>
        <div
          className={`w-2 h-2 rounded-full ${(isAdmin ? AdminBookingIndicatorColours[room] : UserBookingIndicatorColours[room]) || 'bg-gray-500/70'}`}
        />
      </div>
    </Switch>
  );
};

export default RoomToggleSwitch;
