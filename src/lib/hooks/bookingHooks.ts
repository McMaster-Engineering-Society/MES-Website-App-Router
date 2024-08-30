import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { fetchAddBooking, fetchUserBookings } from '@/lib/api/bookingApi';
import { fetchAvailabilities } from '@/lib/api/bookingApi';
import { TBooking } from '@/lib/types';

import { RoomAvailabilities } from '@/components/bookings/TimePicker';

export const useAddRoomBookingHook = () => {
  const queryClient = useQueryClient();

  return useMutation<TBooking, Error, TBooking>({
    mutationFn: fetchAddBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roomAvailabilities'] });
      queryClient.invalidateQueries({ queryKey: ['userBookings'] });
    },
  });
};

export const useFetchAvailabilitiesHook = (
  pickerStartDate: Date,
  pickerEndDate: Date,
) => {
  return useQuery<RoomAvailabilities, Error>({
    queryKey: [
      'roomAvailabilities',
      pickerStartDate.toISOString(),
      pickerEndDate.toISOString(),
    ],
    queryFn: () => fetchAvailabilities(pickerStartDate, pickerEndDate),
  });
};

export const useFetchUserBookingsHook = (userId: string) => {
  return useQuery<TBooking[], Error>({
    queryKey: ['userBookings'],
    queryFn: () => fetchUserBookings(userId),
  });
};
