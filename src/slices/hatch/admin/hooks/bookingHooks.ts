import { TBooking } from '@slices/hatch/booking-page/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { WithId } from 'mongodb';

import { TBatchBookingResponse } from '@/app/api/types';
import {
  fetchBatchAddBooking,
  fetchBatchDeleteBooking,
} from '@/slices/hatch/admin/apiCalls/bookingApiCalls';
import { fetchAllBookings } from '@/slices/hatch/booking-page/apiCalls/bookingApiCalls';
import { formatDateForKey } from '@/slices/hatch/booking-page/utils';

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

export const useBatchAddRoomBookingHook = () => {
  const queryClient = useQueryClient();

  return useMutation<TBatchBookingResponse, Error, TBooking[]>({
    mutationFn: fetchBatchAddBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roomAvailabilities'] });
      queryClient.invalidateQueries({ queryKey: ['allBookings'] });
    },
  });
};

export const useBatchDeleteRoomBookingHook = () => {
  const queryClient = useQueryClient();

  return useMutation<(WithId<TBooking> | null)[], Error, string[]>({
    mutationFn: fetchBatchDeleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roomAvailabilities'] });
      queryClient.invalidateQueries({ queryKey: ['allBookings'] });
    },
  });
};
