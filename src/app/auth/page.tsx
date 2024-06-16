'use client';
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
      to: 'macinfra4@gmail.com',
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
        </section>
      </main>
    </PageLayout>
  );
}
