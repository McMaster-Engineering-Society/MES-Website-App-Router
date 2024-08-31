import { UpdateResult } from 'mongodb';
import { NextResponse } from 'next/server';

import { updateRoomService } from '@/lib/services/roomServices';
import {
  TApiResponse,
  TMessageResponse,
  TRoomEnableRequest,
} from '@/lib/types';

import { THatchRoom } from '@/constant/hatch-bookings/rooms-data';

export async function POST(req: Request) {
  const request: TRoomEnableRequest = await req.json();
  const room = request.room;
  const enabled = request.enabled;
  if (!request) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Enabled property is required' },
      { status: 400 },
    );
  }

  try {
    const updateResult = await updateRoomService(room, { enabled: enabled });
    if (!updateResult) {
      return NextResponse.json<TMessageResponse>(
        {
          message:
            'Set room enabled status failed (check that the room name is correct)',
        },
        { status: 404 },
      );
    }

    return NextResponse.json<TApiResponse<UpdateResult<THatchRoom>>>(
      { data: updateResult, message: 'Set room enabled status succeeded' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to update room' },
      { status: 500 },
    );
  }
}
