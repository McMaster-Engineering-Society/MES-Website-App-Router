'use client';
// TODO: delete page. just for testing auth.
import { SignIn } from '@/components/auth/sign-in';
import { SignOut } from '@/components/auth/sign-out';
import Button from '@/components/buttons/Button';
import PageLayout from '@/components/layout/PageLayout';
import PageHeading from '@/components/PageHeading';

// Example function to send an email
async function sendEmail() {
  await fetch('/api/mail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Currently this is overriden in the route.ts file
      // to: <Enter your email here>
      subject: 'Test Email',
      text: 'This is a test email sent from Next.js using Nodemailer.',
    }),
  });
}

export default function AuthPage() {
  return (
    <PageLayout>
      <main className='layout'>
        <section>
          <PageHeading
            preTitle='Get ready for'
            title='Authentication!'
            variant='green'
          />
          <Button onClick={sendEmail}>Send mail</Button>
          <SignIn />
          <SignOut />
        </section>
      </main>
    </PageLayout>
  );
}
