import { Switch } from '@nextui-org/react';

import { useTimePickerContext } from '@/lib/context/TimePickerContext';

type RoomToggleSwitchProps = {
  room: string;
};

const RoomToggleSwitch = ({ room }: RoomToggleSwitchProps) => {
  const { roomVisibilities, setRoomVisibilities } = useTimePickerContext();

  return (
    <Switch
      defaultSelected
      size='sm'
      color='secondary'
      className='pl-2'
      onChange={(e) => {
        setRoomVisibilities({
          ...roomVisibilities,
          [room]: e.target.checked,
        });
      }}
    />
  );
};

export default RoomToggleSwitch;
