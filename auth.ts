import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { isMacEmail } from '@slices/auth/utils';
import NextAuth from 'next-auth';
import NodeMailer from 'next-auth/providers/nodemailer';
import { createTransport } from 'nodemailer';

import clientPromise from '@/lib/db';
import {
  generateLoginEmailHtml,
  generateLoginEmailText,
} from '@/lib/emailHelper';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    NodeMailer({
      server: {
        host: process.env.SMTP_SERVER,
        port: parseInt(process.env.SMTP_PORT as string),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      from: process.env.EMAIL_FROM,
      normalizeIdentifier(identifier: string): string {
        // Throw an error if not Mac email. This is an extra safety check because the form should already do that.
        if (!isMacEmail(identifier)) {
          // throws error which will redirect the user to the error page in default behaviour.
          throw new Error('Must use a McMaster email address to sign in.');
        }

        // Default behaviour for this function
        // eslint-disable-next-line prefer-const
        let [local, domain] = identifier.toLowerCase().trim().split('@');
        domain = domain.split(',')[0];
        return `${local}@${domain}`;
      },
      async sendVerificationRequest({ identifier, url, provider: { server } }) {
        const transport = createTransport(server);
        const result = await transport.sendMail({
          to: identifier,
          from: 'Hatch Booking System',
          subject: `Verify your hatch login`,
          text: generateLoginEmailText({ url }),
          html: generateLoginEmailHtml({ url }),
        });
        const failed = result.rejected.concat(result.pending).filter(Boolean);
        if (failed.length) {
          throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`);
        }
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: '/auth/sign-in',
    verifyRequest: '/auth/success',
    error: '/auth/error',
  },
});
