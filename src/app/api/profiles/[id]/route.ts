import { NextResponse } from 'next/server';

import {
  deleteProfileByIdService,
  getProfileByIdService,
} from '@/lib/services/profileServices';
import { TProfile } from '@/lib/types';

import { TApiResponse, TMessageResponse } from '@/app/api/types';

type getIdParams = {
  id: string;
};

export async function GET(req: Request, context: { params: getIdParams }) {
  const profileId = context.params.id;

  if (!profileId) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Profile ID is required' },
      { status: 400 },
    );
  }

  try {
    const profile = await getProfileByIdService(profileId);
    if (!profile) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Profile not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TProfile>>({ data: profile });
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to retrieve profile' },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request, context: { params: getIdParams }) {
  const profileId = context.params.id;

  if (!profileId) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Profile ID is required' },
      { status: 400 },
    );
  }

  try {
    const profile = await deleteProfileByIdService(profileId);
    if (!profile) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Profile not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TProfile>>({ data: profile });
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to delete profile' },
      { status: 500 },
    );
  }
}
