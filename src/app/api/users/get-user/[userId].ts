import { NextApiRequest, NextApiResponse } from 'next';

import { TMessageResponse, TUser } from '@/app/api/types';
import { getAllUsersService } from '@/app/lib/services/users/getAllUsersService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TUser | TMessageResponse>,
) {
  // const userId = req.query.userId;

  if (req.method !== 'GET')
    return res
      .status(405)
      .json({ message: 'method got allowed, must be POST' });

  const allUsersList = await getAllUsersService();

  if (!allUsersList)
    return res.status(500).json({ message: 'list of all users not found' });
  return res.status(200).json({ message: 'placeholder' });
}
