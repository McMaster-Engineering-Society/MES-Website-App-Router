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
import { useFetchUserbyEmailHook } from '@/lib/hooks/userHooks';
import { TUser } from '@/lib/types';

type TSessionContext = {
  user: TUser | null;
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

  const { data: user } = useFetchUserbyEmailHook(email);

  return (
    <SessionContext.Provider
      value={{
        user: user ?? null,
      }}
    >
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
