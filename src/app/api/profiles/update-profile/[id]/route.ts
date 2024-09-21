import { updateProfileByIdService } from '@slices/auth/services/profileServices';
import { TProfile } from '@slices/auth/types';
import { NextResponse } from 'next/server';

import { TApiResponse } from '@/app/api/types';
import { TMessageResponse } from '@/app/api/types';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const profileId: string = params.id;
  const profile: TProfile = await req.json();

  if (!profileId) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Profile id is required' },
      { status: 400 },
    );
  }

  if (!profile) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Profile information is required' },
      { status: 400 },
    );
  }

  try {
    const newProfile = await updateProfileByIdService(profileId, profile);
    if (!newProfile) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Profile not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TProfile>>(
      { data: newProfile, message: 'Successfully updated profile' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to update profile' },
      { status: 500 },
    );
  }
}
