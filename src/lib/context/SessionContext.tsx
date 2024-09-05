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

type TSessionContext = {
  userEmail: string | null;
};

export const SessionContext = createContext<TSessionContext | undefined>(
  undefined,
);

type Props = {
  children: ReactNode;
};

export const SessionProvider = ({ children }: Props) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await getUserEmail();
      setUserEmail(email);
    };

    fetchUserEmail();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        userEmail,
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
