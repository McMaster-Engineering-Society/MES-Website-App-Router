'use server';
import { signIn } from 'auth';

export default async function signInComponent() {
  await signIn();
}
