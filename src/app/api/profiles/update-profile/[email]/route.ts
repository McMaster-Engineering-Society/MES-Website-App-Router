import { updateProfileByIdService } from '@slices/auth/services/profileServices';
import { TProfile } from '@slices/auth/types';
import { NextResponse } from 'next/server';

import { TApiResponse } from '@/app/api/types';
import { TMessageResponse } from '@/app/api/types';

export async function PATCH(
  req: Request,
  { params }: { params: { email: string } },
) {
  const profileEmail: string = params.email;
  const profile: TProfile = await req.json();

  if (!profileEmail) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Profile email is required' },
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
    const newProfile = await updateProfileByIdService(profileEmail, profile);
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
