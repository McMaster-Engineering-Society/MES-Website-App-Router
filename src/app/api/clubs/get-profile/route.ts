import { NextRequest, NextResponse } from 'next/server';

import { TApiResponse, TMessageResponse } from '@/app/api/types';
import { getProfileByClubIdService } from '@/slices/clubs/club-profile/services/clubProfileServices';
import { TClubProfile } from '@/slices/clubs/club-profile/types/clubProfile';

export async function GET(req: NextRequest) {
  const clubId = req.headers.get('club-id');

  if (!clubId) {
    return NextResponse.json<TMessageResponse>({
      message: 'Club ID is required in headers',
    });
  }

  const clubProfile = await getProfileByClubIdService(clubId);

  if (!clubProfile) {
    return NextResponse.json<TMessageResponse>({
      message: 'Club profile not found',
    });
  }

  return NextResponse.json<TApiResponse<TClubProfile>>({
    data: clubProfile,
  });
}
