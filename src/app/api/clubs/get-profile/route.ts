import { NextRequest, NextResponse } from 'next/server';

import { getProfileByClubId } from '@/lib/db/clubProfileDb';
import { TApiResponse, TMessageResponse } from '@/lib/types';

import { TClubProfile } from '@/types/clubProfile';

export async function GET(req: NextRequest) {
  const clubId = req.headers.get('club-id');

  if (!clubId) {
    return NextResponse.json<TMessageResponse>({
      message: 'Club ID is required in headers',
    });
  }

  const clubProfile = await getProfileByClubId(clubId);

  if (!clubProfile) {
    return NextResponse.json<TMessageResponse>({
      message: 'Club profile not found',
    });
  }

  return NextResponse.json<TApiResponse<TClubProfile>>({
    data: clubProfile,
  });
}
