import { TBooking } from '@slices/hatch/booking-page/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { WithId } from 'mongodb';

import { TBatchBookingResponse } from '@/app/api/types';
import {
  fetchBatchAddBooking,
  fetchBatchDeleteBooking,
} from '@/slices/hatch/admin/apiCalls/bookingApiCalls';

export const useBatchAddRoomBookingHook = () => {
  const queryClient = useQueryClient();

  return useMutation<TBatchBookingResponse, Error, TBooking[]>({
    mutationFn: fetchBatchAddBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roomAvailabilities'] });
      queryClient.invalidateQueries({ queryKey: ['userBookings'] });
    },
  });
};

export const useBatchDeleteRoomBookingHook = () => {
  const queryClient = useQueryClient();

  return useMutation<(WithId<TBooking> | null)[], Error, string[]>({
    mutationFn: fetchBatchDeleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['roomAvailabilities'] });
      queryClient.invalidateQueries({ queryKey: ['userBookings'] });
    },
  });
};
