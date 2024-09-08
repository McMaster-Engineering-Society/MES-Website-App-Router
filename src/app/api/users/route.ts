import { NextResponse } from 'next/server';

import { getAllUsersService } from '@/lib/services/userServices';

import { TApiResponse, TMessageResponse, TUserDb } from '@/app/api/types';

export async function GET() {
  const allUsersList = await getAllUsersService();

  if (!allUsersList)
    return NextResponse.json<TMessageResponse>({
      message: 'list of all users not found',
    });
  return NextResponse.json<TApiResponse<TUserDb[]>>({ data: allUsersList });
}
