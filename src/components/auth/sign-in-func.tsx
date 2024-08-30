'use server';
import { signIn } from 'auth';

// NOTE: DO NOT USE THIS. REDIRECTS TO `/auth/sign-in` SHOULD BE USED INSTEAD. KEEPING THIS TEMPORARILY IN CASE IT IS NEEDED IN THE NEAR FUTURE.

// Uses Authjs signin. Since it accepts no parameters, this is just used to send them to the sign-in page.
export default async function signInComponent() {
  await signIn();
}
