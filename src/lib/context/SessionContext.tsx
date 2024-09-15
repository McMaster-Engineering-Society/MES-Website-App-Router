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
  isFetched: boolean;
};

export const SessionContext = createContext<TSessionContext | undefined>(
  undefined,
);

type Props = {
  children: ReactNode;
};

/**
 * NOTE: this provider must be wrapped with TanStackQueryProvider as it uses a hook that is dependent on it.
 * @param param0 all children who wish to use this provider.
 * @returns
 */
export const SessionProvider = ({ children }: Props) => {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const fetchedEmail = await getUserEmail();
      setEmail(fetchedEmail);
    };

    fetchUserEmail();
  }, []);

  const { data: profile, isFetched } = useFetchProfileByEmailHook(email);

  const roles = profile?.roles;
  const isAdmin =
    roles !== undefined && roles.includes('hatch-admin') ? true : false;

  return (
    <SessionContext.Provider
      value={{
        profile: profile,
        isAdmin: isAdmin,
        isFetched: isFetched,
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
