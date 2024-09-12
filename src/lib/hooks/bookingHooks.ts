import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { startOfDay } from 'date-fns';

import {
  fetchAddBooking,
  fetchAllBookings,
  fetchAvailabilities,
  fetchDeleteBooking,
  fetchUserBookings,
} from '@/lib/api/bookingApi';
import { TBooking } from '@/lib/types';

import { RoomAvailabilities } from '@/components/bookings/TimePicker';

const formatDateForKey = (date: Date) =>
  startOfDay(date).toISOString().split('T')[0];

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
    },
  });
};

export const useFetchAllBookingsHook = (
  startDate: Date,
  endDate: Date,
  enabled: boolean,
) => {
  return useQuery<TBooking[], Error>({
    queryKey: [
      'allBookings',
      formatDateForKey(startDate),
      formatDateForKey(endDate),
    ],
    queryFn: () => fetchAllBookings(startDate, endDate),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: enabled,
  });
};
