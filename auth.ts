import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';

import clientPromise from '@/lib/db';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
  adapter: MongoDBAdapter(clientPromise),
});
