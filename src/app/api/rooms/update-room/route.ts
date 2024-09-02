import { UpdateResult } from 'mongodb';
import { NextResponse } from 'next/server';

import { updateRoomService } from '@/lib/services/roomServices';
import { TApiResponse, TMessageResponse } from '@/lib/types';

import { THatchRoom } from '@/constant/hatch-bookings/rooms-data';
type TRoomUpdateRequest = {
  room: string;
  update: {
    roomName?: string;
    capacity?: number;
    outlets?: number;
    resources?: { [resource: string]: boolean }; //value is true IF resource is available, false IF unavailable. Resources currently includes: TV, Whiteboard
    img?: string;
    enabled?: boolean;
  };
};
export async function POST(req: Request) {
  const request: TRoomUpdateRequest = await req.json();
  const room = request.room;
  const update = request.update;
  if (!update || !room) {
    return NextResponse.json<TMessageResponse>(
      {
        message:
          'Room and update property is required, chcek TRoomUpdateRequest for structuring request.',
      },
      { status: 400 },
    );
  }

  try {
    const updateResult = await updateRoomService(room, update);
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
