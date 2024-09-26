import { TBooking } from '@slices/hatch/booking-page/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchAddBooking,
  fetchAvailabilities,
  fetchDeleteBooking,
  fetchUserBookings,
} from '@/slices/hatch/booking-page/apiCalls/bookingApiCalls';
import { RoomAvailabilities } from '@/slices/hatch/booking-page/components/TimePicker';
import { formatDateForKey } from '@/slices/hatch/booking-page/utils';

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
      formatDateForKey(pickerStartDate),
      formatDateForKey(pickerEndDate),
    ],
    queryFn: () => fetchAvailabilities(pickerStartDate, pickerEndDate),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export const useFetchUserBookingsHook = (userEmail: string) => {
  return useQuery<TBooking[], Error>({
    queryKey: ['userBookings'],
    queryFn: () => fetchUserBookings(userEmail),
    enabled: !!userEmail,
  });
};

export const useDeleteBookingHook = () => {
  const queryClient = useQueryClient();

  return useMutation<TBooking, Error, string>({
    mutationFn: fetchDeleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userBookings'] });
      queryClient.invalidateQueries({ queryKey: ['roomAvailabilities'] });
    },
  });
};