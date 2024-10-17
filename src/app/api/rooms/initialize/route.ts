import { InsertManyResult } from 'mongodb';
import { NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { initializeRoomsService } from '@/slices/hatch/admin/services/roomServices';
import { THatchRoom } from '@/slices/hatch/booking-page/types';

/**
 * This route resets the rooms to their initial state.
 * @returns
 */
export async function POST() {
  try {
    const result = await initializeRoomsService();
    if (!result) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Initialize rooms failed' },
        { status: 404 },
      );
    }

    return NextResponse.json<TApiResponse<InsertManyResult<THatchRoom>>>(
      { data: result, message: 'Initialize rooms succeeded' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to initialize room' },
      { status: 500 },
    );
  }
}
