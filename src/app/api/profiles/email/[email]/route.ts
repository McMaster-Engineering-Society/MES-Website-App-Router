import { NextResponse } from 'next/server';

import { getProfileByEmailAndCreateIfNullService } from '@/lib/services/profileServices';
import { TProfile } from '@/lib/types';

import { TApiResponse, TMessageResponse } from '@/app/api/types';

type getEmailParams = {
  email: string;
};

export async function GET(req: Request, context: { params: getEmailParams }) {
  const profileEmail = context.params.email;

  if (!profileEmail) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Profile email is required' },
      { status: 400 },
    );
  }

  try {
    const profile = await getProfileByEmailAndCreateIfNullService(profileEmail);
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
