'use server';
import { signOut } from 'auth';

export default async function signOutComponent() {
  await signOut({ redirectTo: '/auth/sign-in' });
}