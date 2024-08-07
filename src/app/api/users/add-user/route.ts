import { NextResponse } from 'next/server';

import { createUserService } from '@/lib/services/userServices';
import { TApiResponse, TUser } from '@/lib/types';

import { TMessageResponse } from '@/app/api/types';

export async function POST(req: Request) {
  const user = await req.json();

  if (!user) {
    return NextResponse.json<TMessageResponse>(
      { message: 'User information is required' },
      { status: 400 },
    );
  }

  try {
    const newUser = await createUserService(user);
    if (!newUser) {
      return NextResponse.json<TMessageResponse>(
        { message: 'User not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TUser>>(
      { data: newUser, message: 'Successfully created user' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to create user' },
      { status: 500 },
    );
  }
}
