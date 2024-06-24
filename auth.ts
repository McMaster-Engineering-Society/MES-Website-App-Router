import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import NodeMailer from 'next-auth/providers/nodemailer';
import { createTransport } from 'nodemailer';

import clientPromise from '@/lib/db';
import { html, text } from '@/lib/emailHelper';

// Checks if the domain name is mcmaster
// eslint-disable-next-line unused-imports/no-unused-vars
function isMacEmail(email: string) {
  /**
   * Checks if the given email is from a mcmaster domain
   */
  const [_, domain] = email.toLowerCase().trim().split('@');
  return domain == 'mcmaster.ca';
}

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
      normalizeIdentifier(identifier: string): string {
        // TODO: temporarily disabled because Mac emails have outlook error where they can't verify the link (I'm guessing because it's local host?)
        // // Throw an error if not Mac email
        // if (!isMacEmail(identifier)) {
        //   // throws error which will redirect the user to the sign-in page with error=EmailSignin in the URL
        //   throw new Error('Must use a McMaster email address to sign in.');
        // }

        // Default behaviour for this function
        // eslint-disable-next-line prefer-const
        let [local, domain] = identifier.toLowerCase().trim().split('@');
        domain = domain.split(',')[0];
        return `${local}@${domain}`;
      },
      async sendVerificationRequest({
        identifier,
        url,
        provider: { server, from },
      }: {
        identifier: string;
        url: string;
        provider: { server: string; from: string };
      }) {
        const { host } = new URL(url);
        const transport = createTransport(server);
        const result = await transport.sendMail({
          to: identifier,
          from: from,
          subject: `Sign in to ${host}`,
          text: text({ url, host }),
          html: html({ url, host }),
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
