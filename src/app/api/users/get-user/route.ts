import { NextResponse } from 'next/server';

import { getUserByIdService } from '@/lib/services/userServices';

import { TApiResponse, TMessageResponse, TUser } from '@/app/api/types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json<TMessageResponse>(
      { message: 'User ID is required' },
      { status: 400 },
    );
  }

  try {
    const user = await getUserByIdService(userId);
    if (!user) {
      return NextResponse.json<TMessageResponse>(
        { message: 'User not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TUser>>({ data: user });
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to retrieve user' },
      { status: 500 },
    );
  }
}
