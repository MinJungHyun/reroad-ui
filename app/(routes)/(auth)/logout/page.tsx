'use client';

import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export default function Logout() {
  const { logout } = useAuth();
  useEffect(() => {
    if (logout) {
      logout();
      window.location.href = '/';
    }
  }, [logout]);
  return <>처리중...</>;
}

