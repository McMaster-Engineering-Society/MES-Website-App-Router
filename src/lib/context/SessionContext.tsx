'use client';

/**
 * This file contains a context and provider that allows access to variables related to the current user.
 * If the user is not signed in, values from the context will be null.
 * The context contains all user information such as their email address.
 */

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getUserEmail } from '@/lib/auth/emailSignInHelper';
import { useFetchProfileByEmailHook } from '@/lib/hooks/profileHooks';
import { TProfile } from '@/lib/types';

type TSessionContext = {
  profile?: TProfile;
  isAdmin: boolean;
};

export const SessionContext = createContext<TSessionContext | undefined>(
  undefined,
);

type Props = {
  children: ReactNode;
};

export const SessionProvider = ({ children }: Props) => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const fetchedEmail = await getUserEmail();
      setEmail(fetchedEmail);
    };

    fetchUserEmail();
  }, []);

  const { data: profile } = useFetchProfileByEmailHook(email);

  const roles = profile?.roles;
  const isAdmin =
    roles !== undefined && roles.includes('hatch-admin') ? true : false;

  return (
    <SessionContext.Provider value={{ profile: profile, isAdmin: isAdmin }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSessionContext must be used within a SessionProvider');
  }
  return context;
};
