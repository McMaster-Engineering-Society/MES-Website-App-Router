'use server';
import { signOut } from 'auth';

// Function to sign someone out and redirect them back to the sign-in page.
export default async function signOutComponent() {
  await signOut({ redirectTo: '/auth/sign-in' });
}
