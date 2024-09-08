import { NextResponse } from 'next/server';

import { getUserByEmailService } from '@/lib/services/userServices';

import { TApiResponse, TMessageResponse, TUserDb } from '@/app/api/types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json<TMessageResponse>(
      { message: 'User email is required' },
      { status: 400 },
    );
  }

  try {
    const user = await getUserByEmailService(email);
    if (!user) {
      return NextResponse.json<TMessageResponse>(
        { message: 'User not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TUserDb>>({ data: user });
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to retrieve user using their email' },
      { status: 500 },
    );
  }
}
