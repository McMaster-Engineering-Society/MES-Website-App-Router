import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import NodeMailer from 'next-auth/providers/nodemailer';

import clientPromise from '@/lib/db';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    NodeMailer({
      server: {
        host: process.env.SMTP_SERVER,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
});
