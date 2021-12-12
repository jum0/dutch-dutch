import { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { PATH, SESSION_STORAGE_KEY } from '../constants';
import { getSessionStorage } from '../utils';

interface RequireStorageKeyProps {
  children: ReactElement;
  storageKey: typeof SESSION_STORAGE_KEY[keyof typeof SESSION_STORAGE_KEY];
  redirectTo: typeof PATH[keyof typeof PATH];
}

const RequireStorageKey = ({ children, storageKey, redirectTo }: RequireStorageKeyProps) =>
  getSessionStorage(storageKey) ? children : <Navigate to={redirectTo} />;

export default RequireStorageKey;
