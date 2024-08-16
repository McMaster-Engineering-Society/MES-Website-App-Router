import { NextResponse } from 'next/server';

import {
  createProfileService,
  getAllProfilesService,
} from '@/lib/services/profileServices';
import { TProfile } from '@/lib/types';

import { TApiResponse, TMessageResponse } from '@/app/api/types';

export async function GET() {
  const allProfilesList = await getAllProfilesService();

  if (!allProfilesList)
    return NextResponse.json<TMessageResponse>({
      message: 'list of all profiles not found',
    });
  return NextResponse.json<TApiResponse<TProfile[]>>({ data: allProfilesList });
}

export async function POST(req: Request) {
  const user = await req.json();

  if (!user) {
    return NextResponse.json<TMessageResponse>(
      { message: 'Profile information is required' },
      { status: 400 },
    );
  }

  try {
    const newUser = await createProfileService(user);
    if (!newUser) {
      return NextResponse.json<TMessageResponse>(
        { message: 'Profile not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TProfile>>(
      { data: newUser, message: 'Successfully created profile' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to create profile' },
      { status: 500 },
    );
  }
}
