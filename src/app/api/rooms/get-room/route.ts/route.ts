import { WithId } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { getRoomService } from '@/slices/hatch/admin/services/roomServices';
import { THatchRoom } from '@/slices/hatch/booking-page/types';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const room = searchParams.get('room');

  if (!room) {
    return NextResponse.json<TMessageResponse>({
      message: 'Invalid query params, missing query param <room> ',
    });
  }

  const roomResult = await getRoomService(room);

  if (!roomResult)
    return NextResponse.json<TMessageResponse>({
      message: 'Room not found',
    });

  return NextResponse.json<TApiResponse<WithId<THatchRoom>>>({
    data: roomResult,
  });
}
