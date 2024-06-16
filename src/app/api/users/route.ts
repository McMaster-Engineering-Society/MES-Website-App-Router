import { NextResponse } from 'next/server';

import { getAllUsersService } from '@/app/lib/services/users/getAllUsersService';

export async function GET() {
  const allUsersList = await getAllUsersService();

  if (!allUsersList)
    return NextResponse.json({ message: 'list of all users not found' });
  return NextResponse.json(allUsersList);
}
