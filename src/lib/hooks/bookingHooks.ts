import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { fetchAddBooking } from '@/lib/api/bookingApi';
import { fetchAvailabilities } from '@/lib/api/bookingApi';
import { TBooking } from '@/lib/types';

import { RoomAvailabilities } from '@/components/bookings/TimePicker';

export const useAddRoomBookingHook = () => {
  const queryClient = useQueryClient();

  return useMutation<TBooking, Error, TBooking>({
    mutationFn: fetchAddBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roomAvailabilities'] });
    },
  });
};

export const useFetchAvailabilitiesHook = (
  pickerStartDate: Date,
  pickerEndDate: Date,
) => {
  return useQuery<RoomAvailabilities, Error>({
    queryKey: ['roomAvailabilities'],
    queryFn: () => fetchAvailabilities(pickerStartDate, pickerEndDate),
  });
};
