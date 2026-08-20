import { createContext, useContext, useMemo, useSyncExternalStore } from 'react';
import { loadUser, saveUser, subscribeUser } from '../lib/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const user = useSyncExternalStore(subscribeUser, loadUser, () => null);

  const value = useMemo(() => ({
    user,
    isLister: user?.role === 'landlord' || user?.role === 'agent',
    signIn(nextUser) {
      saveUser(nextUser);
    },
    signOut() {
      saveUser(null);
    }
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
