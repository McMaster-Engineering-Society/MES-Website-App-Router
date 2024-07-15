import { NextResponse } from 'next/server';

import { deleteUserByIdService } from '@/lib/services/userServices';
import { TApiResponse, TUser } from '@/lib/types';

import { TMessageResponse } from '@/app/api/types';

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json<TMessageResponse>(
      { message: 'User ID is required' },
      { status: 400 },
    );
  }

  try {
    const user = await deleteUserByIdService(userId);
    if (!user) {
      return NextResponse.json<TMessageResponse>(
        { message: 'User not found' },
        { status: 404 },
      );
    }
    return NextResponse.json<TApiResponse<TUser>>(
      { data: user, message: 'Successfully deleted user' },
      { status: 200 },
    );
  } catch (error) {
    /* eslint-disable no-console */
    console.error('API error:', error);
    return NextResponse.json<TMessageResponse>(
      { message: 'Failed to delete user' },
      { status: 500 },
    );
  }
}
