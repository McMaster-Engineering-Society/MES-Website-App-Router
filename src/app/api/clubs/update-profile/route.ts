import { NextRequest, NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { updateProfileByClubIdService } from '@/slices/clubs/club-profile/services/clubProfileServices';
import { TClubProfile } from '@/slices/clubs/club-profile/types/clubProfile';

export async function PATCH(req: NextRequest) {
  const profileUpdates: Partial<TClubProfile> = await req.json();
  if (!profileUpdates.clubId) {
    return NextResponse.json<TMessageResponse>({
      message: 'Club ID is required in request body',
    });
  }
  const clubId = profileUpdates.clubId;
  const result = await updateProfileByClubIdService(clubId, profileUpdates);

  if (!result) {
    return NextResponse.json<TMessageResponse>({
      message: 'Failed to update profile',
    });
  }

  return NextResponse.json<TApiResponse<TClubProfile>>({
    data: result,
  });
}
