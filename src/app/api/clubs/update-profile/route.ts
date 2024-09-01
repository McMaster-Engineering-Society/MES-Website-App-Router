import { NextRequest, NextResponse } from 'next/server';

import { updateProfileByClubId } from '@/lib/db/clubProfileDb';
import { TApiResponse, TMessageResponse } from '@/lib/types';

import { TClubProfile } from '@/types/clubProfile';

export async function POST(req: NextRequest) {
  const clubId = req.headers.get('club-id');

  if (!clubId) {
    return NextResponse.json<TMessageResponse>({
      message: 'Club ID is required in headers',
    });
  }

  const updatedProfile: TClubProfile = await req.json();

  const result = await updateProfileByClubId(clubId, updatedProfile);

  if (!result) {
    return NextResponse.json<TMessageResponse>({
      message: 'Failed to update profile',
    });
  }

  return NextResponse.json<TApiResponse<TClubProfile>>({
    data: result,
  });
}
