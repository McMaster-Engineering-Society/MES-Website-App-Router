'use client';

/**
 * This file contains a context and provider that allows access to variables related to the current user.
 * If the user is not signed in, values from the context will be null.
 * The context contains all user information such as their email address.
 */

import { TProfile } from '@slices/auth/types';
import { getUserEmail } from '@slices/auth/utils';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useFetchProfileByEmailHook } from '@/slices/auth/hooks/profileHooks';

type TSessionContext = {
  profile?: TProfile;
  isAdmin: boolean;
  profileIsLoaded: boolean;
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
  const [profileHookStatus, setProfileHookStatus] = useState<
    'unknown' | 'disabled' | 'fetching'
  >('unknown'); // NOTE: Tried using useRef, something about useState making it rerender is needed for it to work though.

  useEffect(() => {
    const fetchUserEmail = async () => {
      setProfileHookStatus('unknown'); // Sets to unknown so if someone signs out, the status is reverted back.
      const fetchedEmail = await getUserEmail();
      setProfileHookStatus(fetchedEmail ? 'fetching' : 'disabled');
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
        profileIsLoaded: isFetched || profileHookStatus === 'disabled', // Consider it loaded if it is fetched or if it is disabled.
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
