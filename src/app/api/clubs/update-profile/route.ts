import { NextRequest, NextResponse } from 'next/server';

import { updateProfileByClubId } from '@/lib/db/clubProfileDb';
import { TApiResponse, TMessageResponse } from '@/lib/types';

import { TClubProfile } from '@/types/clubProfile';

export async function PATCH(req: NextRequest) {
  const profileUpdates: Partial<TClubProfile> = await req.json();
  if (!profileUpdates.clubId) {
    return NextResponse.json<TMessageResponse>({
      message: 'Club ID is required in request body',
    });
  }
  const clubId = profileUpdates.clubId;
  const result = await updateProfileByClubId(clubId, profileUpdates);

  if (!result) {
    return NextResponse.json<TMessageResponse>({
      message: 'Failed to update profile',
    });
  }

  return NextResponse.json<TApiResponse<TClubProfile>>({
    data: result,
  });
}
